import { Component, OnInit } from '@angular/core';
import {ApiService} from '../service/api.service';
import {DonorRecord} from '../model/donorReord.model';
import {DonorRecordService} from '../service/donor-record.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DonorService} from '../service/donor.service';


@Component({
  selector: 'app-viewdetail',
  templateUrl: './viewdetail.component.html',
  styleUrls: ['./viewdetail.component.css']
})
export class ViewdetailComponent implements OnInit {
  private id: number;
  donor: Donor[];
  name: string;
  gender: string;
  bloodType: string;
  dateOfBirth: Date;
  address: string;
  mainPhone: string;
  homePhone: string;
  registerDate: Date;
  lastDonationDate?: Date;

  constructor(public donorService: DonorService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
        const idparam = 'id';
        this.id = param[idparam];
        console.log(this.id);
        this.donorService.getDonorById(this.id).subscribe(
          value => {
            this.name = value.result.name;
            this.gender = value.result.gender;
            this.bloodType = value.result.bloodType;
            this.dateOfBirth = value.result.dateOfBirth;
            this.address = value.result.address;
            this.mainPhone = value.result.mainPhone;
            this.homePhone = value.result.homePhone;
            this.registerDate = value.result.registerDate;
            this.lastDonationDate = value.result.lastDonationDate;
          }
        );
      }
    );
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
