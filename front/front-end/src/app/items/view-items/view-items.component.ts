import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent {
  productId:string =''
  items:any = {}

  constructor(private viewActivatedRoute:ActivatedRoute, private api:ApiService){

  }

  ngOnInit(): void {
    this.viewActivatedRoute.params.subscribe(
      (result:any)=>{
      console.log(result)
      this.productId = result.id
      }
    )

    this.api.viewallproducts(this.productId).subscribe(
      (result:any)=>{
        console.log(result);
        this.items = result
      },
      (result:any)=>{
        alert(result.error);
      }
    )
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
