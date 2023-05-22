import { Component, OnInit } from '@angular/core';
import { ApiService } from '../items/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
cartItems:number=0;

  constructor(private api:ApiService){

  }
  ngOnInit(): void {
    this.api.count.subscribe(
      (data:any)=>{
        console.log(data);
        this.cartItems=data
      }
    )
  }

  search(event:any){
    this.api.search.next(event.target.value)

  }
}
