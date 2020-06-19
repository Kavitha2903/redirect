import { Component, OnInit,Input } from '@angular/core';
import { PassService } from '../dash/pass.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
//title = 'am kavitha'
@Input()  
uname:string;
public data:any;  
   
  constructor(_dataService: PassService) {  

    debugger; 

    this.data = _dataService.getOption();  
    
  }  

  ngOnInit(): void {
  }

}
