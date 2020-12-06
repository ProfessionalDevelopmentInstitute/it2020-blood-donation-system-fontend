import { Component, OnInit } from '@angular/core';
import {DonorService} from '../service/donor.service';
import {ApiService} from '../service/api.service';
import {DonorRecordService} from '../service/donor-record.service';
import {Donor} from '../model/donor.model';
import {DonorRecord} from '../model/donorReord.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  donorRecord: DonorRecord[];
  private id: number;
  closeResult: string;
  private idToDelete: number;
  private modalService: any;

  constructor(public donorRecordService: DonorRecordService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
        const idparam = 'id';
        this.id = param[idparam];
        let donorRecord: DonorRecord = null;
        console.log(donorRecord);
        console.log(this.id);
        this.donorRecordService.getDonorRecordById(this.id).subscribe(
          value => {
            console.log(value);
            donorRecord = value.result;
          }
        );
      }
    );
  }
  // tslint:disable-next-line:typedef
  DeleteDonorRecord(){
    this.donorRecordService.deleteDonorRecordById(this.idToDelete).subscribe(
        value => {
          console.log(value);
          this.donorRecordService.getDonorRecord()
            // tslint:disable-next-line:no-shadowed-variable
            .subscribe(value => {
            this.donorRecord = value.result;
            console.log(value.message);
          });
        },
        error => console.log(error));
    console.log(this.idToDelete);
  }
  // tslint:disable-next-line:typedef
  onDelete(close, id: number) {
    this.idToDelete = id;
    this.modalService.open(close, {ariaLabelledBy: 'deleteModal'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
