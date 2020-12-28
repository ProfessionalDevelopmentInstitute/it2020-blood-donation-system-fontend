import {Component, OnInit} from '@angular/core';
import {DonorService} from '../service/donor.service';
import {FormControl, FormGroup} from '@angular/forms';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Donor} from '../model/donor.model';


@Component({
  selector: 'app-alldonor',
  templateUrl: './alldonor.component.html',
  styleUrls: ['./alldonor.component.css']
})
export class AlldonorComponent implements OnInit {
  donor: Donor[];
  closeResult: string;
  searchForm: FormGroup;
  do: any;

  constructor(public donorService: DonorService, private modalService: NgbModal) {
    this.searchForm = new FormGroup({
      name: new FormControl('')
    });
  }

  searchN(): void{
    const name = this.searchForm.value.name;
    console.log(name);
    this.donorService.searchDonor(name).subscribe(
      value => {
        this.donor = value;
        console.log(value);
      }
    );
  }
  ngOnInit(): void {
    this.donorService.getDonor().subscribe(
      value => {
        this.donor = value.result;
        console.log(value);
      },
      error => console.log(error),
      () => console.log('Finished')
    );
  }
}

