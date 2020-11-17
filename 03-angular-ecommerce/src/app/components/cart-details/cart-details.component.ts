import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cartItems : CartItem[]=[];
  totalePrice : number=0;
  totaleQuantity:number=0;


  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.listCartDetails(); 
  }
  listCartDetails() {
    this.cartItems=this.cartService.cartItems;

    this.cartService.totalPrice.subscribe(
      data=>this.totalePrice=data
    );

    this.cartService.totalQuantity.subscribe(
      data=>this.totaleQuantity=data
    );
    this.cartService.computeCartTotals();
  }

  incremntQuantity(theCartItem : CartItem){
    this.cartService.addToCart(theCartItem);
  }

  decremntQuantity(theCartItem : CartItem){
    this.cartService.decrementQuantity(theCartItem);
  }
  remove(theCartItem : CartItem){
    this.cartService.remove(theCartItem);
  }
}
