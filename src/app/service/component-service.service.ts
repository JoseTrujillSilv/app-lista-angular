import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentServiceService {

  private text:string = '';

  getList(){
    return this.text;
  }

  setList(text:string){
    this.text=text;
  }

  constructor() {}
}
