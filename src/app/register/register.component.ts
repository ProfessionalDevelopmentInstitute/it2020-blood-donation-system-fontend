import { Component, OnInit, ViewChild } from '@angular/core';
import { DonorService } from '../service/donor.service';
import {FormGroup, NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../service/api.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('myForm')
  myForm: NgForm;
  constructor(public router: Router, public donorService: DonorService, private apiService: ApiService) {
  }

  ngOnInit(): void {
  }

  summit(): void {
    const donor: Donor = {
      id: 0,
      name: this.myForm.value.name,
      gender: this.myForm.value.gender,
      bloodType: this.myForm.value.bloodType,
      dateOfBirth: this.myForm.value.dateOfBirth,
      address: this.myForm.value.address,
      mainPhone: this.myForm.value.mainPhone,
      homePhone: this.myForm.value.homePhone,
      registerDate: this.myForm.value.registerDate,
      lastDonationDate: this.myForm.value.lastDonationDate
    };
    console.log(donor);
    this.donorService.createDonor(donor).subscribe(
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
interface Donor{
  id: number;
  name: string;
  gender: string;
  bloodType: string;
  dateOfBirth: Date;
  address: string;
  mainPhone: string;
  homePhone: string;
  registerDate: Date;
  lastDonationDate?: Date;
}

