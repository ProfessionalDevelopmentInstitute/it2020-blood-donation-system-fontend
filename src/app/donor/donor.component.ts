import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Donor} from '../model/donor.model';
import {DonorService} from '../service/donor.service';



declare var $: any;

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})
export class DonorComponent implements OnInit {
  resData: Donor[];
  idToDelete: number;
  idToUpdate: number;

  donors: Donor[];
  res: any;
  updateResult: any;
  result: Donor[];


  /*updateForm: FormGroup;

  constructor(public donorService: DonorService, private modalService: NgbModal) {
    this.updateForm = new FormGroup({
      name: new FormControl('', Validators.required),
      gender: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', Validators.required),
      bloodType: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      mainPhone: new FormControl('', Validators.required),
      homePhone: new FormControl('', Validators.required),
      registerDate: new FormControl('', Validators.required),
      lastDonationDate: new FormControl('', Validators.required)
    });
  }*/
  constructor(public donorService: DonorService){}
  ngOnInit(): void {
    this.donorService.getDonor().subscribe(
      value => {
        console.log(value.result);
      }
    );
  }
  // tslint:disable-next-line:typedef
  /*DeleteDonor(){
    // @ts-ignore
    this.donorService.deleteDonor(this.idToDelete).subscribe(
        value => {
          console.log(value);
          // tslint:disable-next-line:no-shadowed-variable
          // @ts-ignore
          // tslint:disable-next-line:no-shadowed-variable
          this.donorService.getDonor().subscribe(value => {
            this.donors = value.result;
            console.log(value.message);
          });
        },
        error => console.log(error));
    console.log(this.idToDelete);
  }*/

  /*UpdateDonor(): void {
        const upd: Donor = {
      id: this.idToUpdate,
      name: this.updateForm.value.name,
      bloodType: this.updateForm.value.bloodType,
      gender: this.updateForm.value.gender,
      dateOfBirth: this.updateForm.value.dateOfBirth,
      address: this.updateForm.value.address,
      mainPhone: this.updateForm.value.mainPhone,
      homePhone: this.updateForm.value.homePhone,
      registerDate: this.updateForm.value.registerDate,
      lastDonationDate: this.updateForm.value.lastDonationDate
    };
    this.res = upd;
    console.log(this.idToUpdate);
    this.updateResult = upd;
    // @ts-ignore
    this.donorService.updateDonor(this.updateResult).subscribe(
      value => {
        value = this.updateResult;
        console.log(value);
      },
      error => {console.log(error); }
    );
  }*/
}
