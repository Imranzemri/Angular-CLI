import { Component, ElementRef, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ApiService } from '../api.service';
import { Shipment } from '../Models/shipment';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { QrcodeService } from '../qrcode.service';
import { Route, Router } from '@angular/router';
import { MessageService } from '../messsage.service';
@Component({
  selector: 'app-cargo-shipment',
  templateUrl: './cargo-shipment.component.html',
  styleUrls: ['./cargo-shipment.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate('300ms ease-in', style({ opacity: 1 }))]),
    ])
  ]
})
export class CargoShipmentComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;
  model: Shipment = new Shipment();
  form: FormGroup;
  uploadedImages: File[] = [];
  qrCodeData: string[] = [];
  errorMessage!: string;
  emptyFields: string[] = [];
  validationStatus = {
    clientName: true,
    shipmentNo: true,
    pieces: true,
    dimensions: true,
    weight: true,
    bayLocation: true,
    note: true,
    images: true,
    email: true,
  };
  imagesArray: string[] = [];
  constructor(private apiService: ApiService, private fb: FormBuilder, private qrCodeService: QrcodeService, private router: Router, private messageService: MessageService) {
    this.form = this.fb.group({
      file: [''],
    });
    this.model = new Shipment();
    this.model.Qnty = 0;
    this.imagesArray = [];
  }
  onSubmit() {
    if (this.validateFormFields()) {
      this.convertArrayToJson();
      this.apiService.postFormData(this.model).subscribe(
        (response: string[]) => {
          // Handle the successful response here
          console.log('Response:', response);
          this.generateQRCodeData(response);
          // Navigate to the SuccessComponent if the response message matches
          this.messageService.sendMessage('Email sent successfully');
          this.router.navigate(['/success']);
        },
        (error) => {
          // Handle the error here
          console.error('Error:', error);
        }
      
      );
      // complete: () => {
      //   // This block will be executed when the API call completes,
      //   // whether it's successful or not.
      // },
          
      //     } else {
      //       // Handle other responses or show an error message to the user
      //       console.error('Unexpected API response:', response);
      //     }
      //   },
      //   error: (error) => {
      //     console.error('Error saving data', error);
      //     // Handle the error, you can display an error message to the user here
      //   },
      //   complete: () => {
      //     // This block will be executed when the API call completes,
      //     // whether it's successful or not.
      //   },
      // });
    }
  }
  convertArrayToJson() {
    this.model.Imgs = JSON.stringify(this.imagesArray);
  }
  // Define a function to validate a specific field
  validateField(fieldName: string) {
    switch (fieldName) {
      case 'clientName':
        this.validationStatus.clientName = !!this.model.Name;
        break;
      case 'shipmentNo':
        this.validationStatus.shipmentNo = !!this.model.ShptNmbr;
        break;
      case 'pieces':
        this.validationStatus.pieces = !!this.model.Qnty;
        break;
      case 'dimensions':
        this.validationStatus.dimensions = !!this.model.Dmnsn;
        break;
      case 'weight':
        this.validationStatus.weight = !!this.model.Wght;
        break;
      case 'bayLocation':
        this.validationStatus.bayLocation = !!this.model.Locn;
        break;
      case 'note':
        this.validationStatus.note = !!this.model.Note;
        break;
      case 'images':
        this.validationStatus.images = Array.isArray(this.imagesArray) && this.imagesArray.length > 0;
        break;
      case 'email':
        this.validationStatus.email = !!this.model.Rpnt;
        break;
      default:
      // Handle other fields or unknown fields here
    }
  }
  // Define a function to validate all fields
  validateFormFields() {
    this.validateField('clientName');
    this.validateField('shipmentNo');
    this.validateField('pieces');
    this.validateField('dimensions');
    this.validateField('weight');
    this.validateField('bayLocation');
    this.validateField('note');
    this.validateField('images');
    this.validateField('recipients');
    // Check if any field failed validation
    return !Object.values(this.validationStatus).some((status) => !status);
  }
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.form.get('file')?.setValue(file);
      this.imagesArray.push(file.name);
    }
  }
  // onFileChange(event: any) {
  //   const file = event.target.files[0];
  //   if (file) {
  //     this.form.get('file')?.setValue(file);
  //     // Update the model's fileName property
  //     this.model.FileName = file.name;
  //   }
  // }
  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }
  // canSubmit(): boolean {
  //   return this.model.Images.length === this.model.Piece;
  // }
  async generateQRCodeData(response:string[]): Promise<void> {
   // const warehouseReceiptNo = 'WR1000'; // Replace with your logic to generate the receipt number
    if (this.model.Qnty !== null) {
      for (let i = 1; i <= this.model.Qnty; i++) {
        const qrCodeData = `Receipt Number: ${response[i-1]}\nClient: ${this.model.Name}\nShipment No: ${this.model.ShptNmbr}`;
        try {
          const qrCodeUrl = await this.qrCodeService.generateQRCode(qrCodeData);
          this.qrCodeData.push(qrCodeUrl);
        } catch (error) {
          console.error('Error generating QR code:', error);
        }
      }
      this.apiService.qrs = this.qrCodeData;
    }
  }
}
