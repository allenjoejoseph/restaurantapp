import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  allItems:any=[]
  cartTotal:number=0


  constructor(private api : ApiService){

  }
  ngOnInit(): void {
    this.api.getCart().subscribe(
      (result:any)=>{
        this.allItems = result
        this.getCartTotal()
        this.api.cartcount()
      },
      (result:any)=>{
        console.log(result.error);
      }
    )
  }

  //get total
  getCartTotal(){
    let total =0
    this.allItems.forEach((item:any) => {
      total+=item.grandTotal
      this.cartTotal=total

    });



  }

  removeitem(id:any){
    this.api.removeCartItem(id).subscribe(
      (result:any)=>{
        this.allItems = result
      },
      (result:any)=>{
        alert(result.error)
      }
    )
  }
}
