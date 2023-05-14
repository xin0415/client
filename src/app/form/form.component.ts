import { Component, OnInit } from "@angular/core";
import { ManagementService } from "../shared/services/management.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
    selector:'app-form',
    templateUrl:'./form.component.html',
    styleUrls:['./form.component.scss']
})
export class FormComponent implements OnInit{
    tempForm!:FormGroup;
    supervisors!:string[];
    error:string=""
    constructor(private ms:ManagementService, private fb:FormBuilder){}
    ngOnInit(): void {
        this.ms.getSupervisors().subscribe(s=>{
            this.supervisors=s;
        })
        this.tempForm=this.fb.group({
            firstName:'',
            lastName:'',
            emailChecked:false,
            email:'',
            phoneChecked:false,
            phoneNumber:'',
            supervisor:''
        })
    }
    submit(){
        this.ms.addSubmit(this.tempForm.value).subscribe(res=>{
            if(res.status!=200){
                this.error=res.message
            }else{
                this.error=""
            }
        })
    }
}