import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.css']
})
export class AllItemsComponent implements OnInit {
  allItems:any =[]
  searchTerm:any=''

  constructor(private api : ApiService){

  }
  ngOnInit(): void {
    this.api.getallproducts().subscribe(
      (result:any)=>{
      this.allItems = result
        
      }
    )

    this.api.search.subscribe((result:any)=>{
      this.searchTerm= result
    })
  }

  addtocart(items:any){

    Object.assign(items,{quantity:1})

    this.api.addtocart(items).subscribe(
      (result:any)=>{
        this.api.cartcount()
        alert(result)
      },
      (result:any)=>{
        alert(result.error)
      }
    )
  }
}
