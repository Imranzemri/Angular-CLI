import { Component,ElementRef,ViewChild  } from '@angular/core';
import { CargoShipmentComponent } from '../cargo-shipment/cargo-shipment.component';
import { ApiService } from '../api.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {

  constructor(private apiService: ApiService,private _service:NotificationsService){
    this.qrCodeContainer = new ElementRef(null);

  }
  @ViewChild('qrCodeContainer', { static: true }) qrCodeContainer: ElementRef;

  ngAfterViewInit(){
    this._service.success(
      'Success',
      'Email Sent Successfully',
      {
        position: ['top', 'right'],
          timeOut: 2000,
          showProgressBar: true,
          pauseOnHover: false,
          clickToClose: false,
          maxLength: 10
      }
  )
}
  get qrCodes(){
    return this.apiService.qrs;
  }
  printQRCode(qrCodeURL: string) {
    const qrCodeWindow = window.open('', '', 'width=600,height=400');    
    if (qrCodeWindow) {
      qrCodeWindow.document.write(`<img src="${qrCodeURL}" alt="QR Code" />`);
     qrCodeWindow.document.close();
      qrCodeWindow.print();
     // qrCodeWindow.close();
    } else {
      console.error("Failed to open a new window for printing.");
      // You can display an error message or take other actions as needed.
    }
  }
  }
