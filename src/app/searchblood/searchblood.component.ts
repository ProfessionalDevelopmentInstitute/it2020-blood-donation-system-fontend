import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DonorService} from '../service/donor.service';
import {Donor} from '../model/donor.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-searchblood',
  templateUrl: './searchblood.component.html',
  styleUrls: ['./searchblood.component.css']
})
export class SearchbloodComponent implements OnInit {
  donor: Donor[];
  closeResult: string;
  searchForm: FormGroup;
  do: any;
constructor(public donorService: DonorService, private modalService: NgbModal) {
  this.searchForm = new FormGroup({
    bloodType: new FormControl('')
  });
  }
  searchN(): void{
    const bloodType = this.searchForm.value.bloodType;
    console.log(bloodType);
    this.donorService.findByBloodTypeAndAvailableDate(bloodType).subscribe(
      value => {
        this.donor = value;
        console.log(value);
      }
    );
  }
  ngOnInit(): void {
  }
}


