import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {ApiService} from '../service/api.service';
import {Donor} from '../model/donor.model';
import {DonorService} from '../service/donor.service';

@Component({
  selector: 'app-updatedonor',
  templateUrl: './updatedonor.component.html',
  styleUrls: ['./updatedonor.component.css']
})
export class UpdatedonorComponent implements OnInit {
  myForm: FormGroup;
  id: number;
  constructor(private apiService: ApiService, private router: Router, private donorService: DonorService, private route: ActivatedRoute) {
    this.myForm = new FormGroup({
      name: new FormControl(null),
      gender: new FormControl(null),
      bloodType: new FormControl(null),
      dateOfBirth: new FormControl(null),
      address: new FormControl(null),
      mainPhone: new FormControl(null),
      homePhone: new FormControl(null),
      registerDate: new FormControl(null),
      lastDonationDate: new FormControl(null)
    });
   }
  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
      const idparam = 'id';
      this.id = param[idparam] ;
      let donor: Donor = null;
      console.log(this.id);
      this.donorService.getDonorById(this.id).subscribe(
        value => {
          console.log(value);
          donor = value.result;
          this.myForm.reset(donor);
        }
      );
    }
  );
}
  onSubmit(): void {
    const donor: Donor = {
      id: this.id,
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
    this.donorService.updateDonor(donor).subscribe(
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
// interface Donor{
//   id: number;
//   name: string;
//   gender: string;
//   bloodType: string;
//   dateOfBirth: Date;
//   address: string;
//   mainPhone: string;
//   homePhone: string;
//   registerDate: Date;
//   lastDonationDate?: Date;
// }
