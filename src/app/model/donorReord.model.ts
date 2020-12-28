import {Donor} from './donor.model';

export class DonorRecord{
  id?: number;
  donationDate: Date;
  donor: Donor;
}

export class DonorRecordPojo{
  id?: number;
  donationDate: Date;
  donorId: string;
}
