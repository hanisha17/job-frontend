import { Skills } from "./Skills";
import { Status } from "./status";

export class Recruiter{
	constructor(public companyName:String, public imageUrl:String, public salary:number,public jobTitle:String, public location:String,public experience:number , public dropdown:Array<Skills>, public id: number, public status: Status){}
	
}
