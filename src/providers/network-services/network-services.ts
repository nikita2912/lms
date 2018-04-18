import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators'; 

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-API-KEY': 'lms@2018',
    'Response-Type': 'text'
  })
};
@Injectable()
export class NetworkServicesProvider {
  url=" http://lms.shreewebs.com";

  constructor(public httpC: HttpClient) {
  }
/*  getResponse(qry, lat, lon, firstNm, lastNm, flag): Promise<any> {
    return new Promise((resolve, reject) => {

    })
  }*/

  login(data){
   // console.log('data inside provider login is'+ JSON.stringify(data) + JSON.stringify(httpOptions));
    return this.httpC.post(this.url+'/users/login', JSON.stringify(data), httpOptions).pipe(
      catchError(this.handleError));
  }

  signUp(data){
    //console.log('data inside provider signup is'+ JSON.stringify(data));
    return this.httpC.post(this.url+'/users/registration', JSON.stringify(data), httpOptions).pipe(
      catchError(this.handleError));
  }
//To get the menus
  getMenus(data){
    console.log('Url Called >>'+this.url+'/menus/get_menus_with_ads'+'UserId Passed>>'+data.user_id)
    return this.httpC.post(this.url+'/menus/get_menus_with_ads', JSON.stringify(data), httpOptions).pipe(
      catchError(this.handleError));
  }

  //To get Menu Data
  getData(data){
    console.log('Url Called >>'+this.url+'/menus/getdata_with_ads');
    console.log('Params Passed>>'+JSON.stringify(data));
    return this.httpC.post(this.url+'/menus/getdata_with_ads', JSON.stringify(data), httpOptions).pipe(
      catchError(this.handleError));

  }
/*
  postSignupService(fName, lName,email,phone,uname,pass): Promise<any> {

    let body
    body={
        firstname:fName,
        lastname:lName,
        mobile:email,
        email:phone,
        username:uname,
        password:pass
    }
    //console.log(body)
    return new Promise((resolve, reject) => {
      this.httpPost(this.url, body)
        .then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
    })
  }*/


  /******************************************************************************** */

/*  httpPost(URL, body, header): Promise<any> {
    return new Promise((resolve, reject) => {
      console.log(body)
      console.log(URL)
      this.http.post(URL, body,header).map(data => data.json()).subscribe(data => {
        resolve(data)
      }, error => {
        reject(error)
      })
    })
  }*/

/*  httpGet(URL, header): Promise<any> {
    return new Promise((resolve, reject) => {
      //TEST
      //URL="./assets/test.json"
      this.http.get(URL).map(data => data.json()).subscribe(data => {
        resolve(data)
      }, error => {
        reject(error)
      })
    })
  }
*/
  private handleError (error: Response | any) {
    let errMsg: string;
  if (error instanceof Response) {
    const err = error || '';
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  console.error(errMsg);
  return Observable.throw(errMsg);
}

}

