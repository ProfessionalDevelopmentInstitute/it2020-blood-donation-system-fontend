import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../service/api.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {DonorService} from '../service/donor.service';
import {DonorRecord} from '../model/donorReord.model';

@Component({
  selector: 'app-searchblood',
  templateUrl: './searchblood.component.html',
  styleUrls: ['./searchblood.component.css']
})
export class SearchbloodComponent implements OnInit {
  @ViewChild('myForm')
  myForm: NgForm;
   donor: Donor[];

  constructor(public router: Router, public donorService: DonorService, private apiService: ApiService) {
  }

  ngOnInit(): void {}
  summit(): void {
    const donor: Donor = {
      id: 0,
      bloodType: this.myForm.value.bloodType
    };
    this.donorService.findByBloodTypeAndAvailableDate(this.donor).subscribe(
      value => {
        console.log(value);
        this.donor = value.result;
      }
    );
  }
}
interface Donor{
  id: number;
  name?: string;
  gender?: string;
  bloodType?: string;
  dateOfBirth?: Date;
  address?: string;
  mainPhone?: string;
  homePhone?: string;
  registerDate?: Date;
  lastDonationDate?: Date;
}

