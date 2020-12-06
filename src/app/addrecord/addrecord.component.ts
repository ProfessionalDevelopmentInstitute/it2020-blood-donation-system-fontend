import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../service/api.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {DonorRecordService} from '../service/donor-record.service';

@Component({
  selector: 'app-addrecord',
  templateUrl: './addrecord.component.html',
  styleUrls: ['./addrecord.component.css']
})
export class AddrecordComponent implements OnInit {
  @ViewChild('myForm')
  myForm: NgForm;
  message: string;

  constructor(public router: Router, public donorRecordService: DonorRecordService, private apiService: ApiService) {
  }
  ngOnInit(): void {

  }
  summit(): void {
    const donorRecord: DonorRecord = {
      id: 0,
      donorId: this.myForm.value.donorId,
      donationDate: this.myForm.value.donationDate
    };
    console.log(donorRecord);
    this.donorRecordService.createDonorRecord(donorRecord).subscribe(
      value => {
        console.log(value);
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('Sucessful...');
      }
    );
    this.router.navigate(['alldonor']);
  }
}
interface DonorRecord{
  id: number;
  donorId: number;
  donationDate: Date;
}
