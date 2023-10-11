import { Component,ElementRef,ViewChild  } from '@angular/core';
import { CargoShipmentComponent } from '../cargo-shipment/cargo-shipment.component';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {

  constructor(private apiService: ApiService){}

  get qrCodes(){
    return this.apiService.qrs;
  }




}
