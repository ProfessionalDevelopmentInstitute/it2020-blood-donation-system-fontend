import { Component, OnInit } from '@angular/core';
import {ApiService} from '../service/api.service';
import {DonorRecord} from '../model/donorReord.model';
import {DonorRecordService} from '../service/donor-record.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DonorService} from '../service/donor.service';
import {Donor} from '../model/donor.model';

@Component({
  selector: 'app-viewdetail',
  templateUrl: './viewdetail.component.html',
  styleUrls: ['./viewdetail.component.css']
})
export class ViewdetailComponent implements OnInit {
  private id: any;
  donor: Donor[];
  constructor(public donorService: DonorService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.route.params.subscribe(
        param => {
          const idparam = 'id';
          this.id = param[idparam];
          const donor: Donor = null;
          console.log(donor);
          console.log(this.id);
          this.donorService.getDonorById(this.id).subscribe(
            value => this.donor = value.result,
            error => console.log(error),
            () => console.log('Finished Request Procress')
          );
        }
      );
  }

}
