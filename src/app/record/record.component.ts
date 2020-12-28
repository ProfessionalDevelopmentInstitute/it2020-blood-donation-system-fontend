import { Component, OnInit } from '@angular/core';
import {DonorRecordService} from '../service/donor-record.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DonorService} from '../service/donor.service';
import {Donor} from '../model/donor.model';


@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  private id: number;
  donorRecord: any;
  donorId: number;
  donationDate: Date;
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
            this.id = value.result.id;
            this.donorRecord = value.result.donorRecords;
            console.log(value.result.donorRecords);
          }
        );
      }
    );
  }
}
// interface DonorRecord{
//   id: number;
//   donorId: number;
//   donationDate: Date;
// }

