import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../service/api.service';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DonorRecordService} from '../service/donor-record.service';
import {DonorService} from '../service/donor.service';
import {Donor} from '../model/donor.model';
import {DonorRecord, DonorRecordPojo} from '../model/donorReord.model';

@Component({
  selector: 'app-addrecord',
  templateUrl: './addrecord.component.html',
  styleUrls: ['./addrecord.component.css']
})
export class AddrecordComponent implements OnInit {
  myForm: FormGroup;
  id: number;

  // tslint:disable-next-line:max-line-length
  constructor(public router: Router, public donorRecordService: DonorRecordService, private apiService: ApiService, private route: ActivatedRoute) {
    this.myForm = new FormGroup({
      donorId: new FormControl(null),
      donationDate: new FormControl(null)
    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const donorRecord: DonorRecordPojo = {
      donorId: this.myForm.value.donorId,
      donationDate: this.myForm.value.donationDate,
    };
    this.donorRecordService.createDonorRecord(donorRecord).subscribe(
      value => {
        console.log(value);
      },
      error => {
        console.log(error);
      },
      () => {
        this.myForm.reset();
        this.router.navigate(['alldonor']);
      }
    );
  }
}

