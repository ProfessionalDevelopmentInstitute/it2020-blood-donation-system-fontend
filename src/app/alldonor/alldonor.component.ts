import {Component, OnInit, ViewChild} from '@angular/core';
import {Donor} from '../model/donor.model';
import {DonorService} from '../service/donor.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../service/api.service';
import {DonorRecord} from '../model/donorReord.model';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alldonor',
  templateUrl: './alldonor.component.html',
  styleUrls: ['./alldonor.component.css']
})
export class AlldonorComponent implements OnInit {
  donor: Donor[];
  closeResult: string;
  private idToDelete: number;

  constructor(public donorService: DonorService, private modalService: NgbModal) { }
  ngOnInit(): void {
        this.donorService.getDonor().subscribe(
      value => this.donor = value.result,
      error => console.log(error),
      () => console.log('Finished Request Procress')
    );
  }
  // tslint:disable-next-line:typedef
  DeleteDonor(){
    this.donorService.deleteDonorById(this.idToDelete)
      .subscribe(
        value => {
          console.log(value);
          this.donorService.getDonor().subscribe(
            // tslint:disable-next-line:no-shadowed-variable
            value => {
            this.donor = value.result;
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
