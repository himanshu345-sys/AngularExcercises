import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessHTTPMsgService {

  constructor() { }

  public handleError(error: HttpErrorResponse | any){
    let errmsg:string;

    if(error.error instanceof ErrorEvent){
      errmsg = error.error.message;
    }
    else
    {
      errmsg = `${error.status} - ${error.statusText || ''} ${error.error}`;
    }
    return throwError(errmsg);
  }
}
