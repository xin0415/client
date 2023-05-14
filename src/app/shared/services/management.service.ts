import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Temp } from "../models/temp";
import { Response } from "../models/response";

@Injectable({
    providedIn:'root'
})

export class ManagementService{
    constructor(private httpClient:HttpClient){
    }
    getSupervisors():Observable<string[]>{
        return this.httpClient.get<string[]>('http://localhost:8080/api/supervisors');
    }
    addSubmit(temp:Temp):Observable<Response>{
        return this.httpClient.post<Response>(
            'http://localhost:8080/api/submit',
            temp
        )
    }
}