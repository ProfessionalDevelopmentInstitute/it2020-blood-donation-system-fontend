import {DonorRecord} from './donorReord.model';

export class Donor {
  public id: number;
  public name?: string;
  public gender?: string;
  public bloodType?: string;
  public dateOfBirth?: Date;
  public address?: string;
  public mainPhone?: string;
  public homePhone?: string;
  public registerDate?: Date;
  public lastDonationDate?: Date;
  donorRecords?: DonorRecord;
}
