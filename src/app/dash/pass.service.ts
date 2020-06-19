import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassService {
  
  private data = {};  
  
  setOption(option:any, value:any) {  
    debugger;  
    this.data[option] = value;  
  }  
  
  getOption() {  
    return this.data;  
  }  

  constructor() { }
}
