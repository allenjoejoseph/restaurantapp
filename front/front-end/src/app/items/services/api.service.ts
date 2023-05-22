import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {
    this.cartcount()
  }

  //to hold search term
  search = new BehaviorSubject('')
  //to hold cart count
  count = new BehaviorSubject(0)

  BASEURL = 'http://localhost:3000'

  getallproducts(){
    return this.http.get(`${this.BASEURL}/items/all-items`)
  }

  viewallproducts(id:any){
    return this.http.get(`${this.BASEURL}/items/view-items/${id}`)
  }

  addtocart(item:any){
    const body = {
      id:item.id,
      name:item.name,
      images:item.images,
      price:item.price,
      quantity:item.quantity
    }
    return this.http.post(`${this.BASEURL}/cart/add-item`,body)
  }

  getCart(){
    return this.http.get(`${this.BASEURL}/cart/all-items`)
  }

  cartcount(){
    this.getCart().subscribe(
      (result:any)=>{
        this.count.next(result.length)
      }
    )
  }

  removeCartItem(id:any){
    return this.http.delete(`${this.BASEURL}/cart/remove-item/${id}`)
  }

 
  register(email:any, password:any){

    const body = {
      email,
      password
    }

    // api call to server for register
    return this.http.post(`${this.BASEURL}/register`,body)

  }

  //login
  login(email:any, password:any){
    const body = {
      email,
      password
    }

    return this.http.post(`${this.BASEURL}/login`,body)
  }
}
