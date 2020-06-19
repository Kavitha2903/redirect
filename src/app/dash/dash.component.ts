import { Component, OnInit } from '@angular/core';
import { PassService } from './pass.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})

export class DashComponent implements OnInit {
  username:string ='kavitha'
  public yourname: string;  

  constructor(_dataService: PassService) {  
      this.yourname = 'kavitha'; 
      _dataService.setOption('yourname', this.yourname);  
    
  }  



  ngOnInit(): void {
  }
  

}
