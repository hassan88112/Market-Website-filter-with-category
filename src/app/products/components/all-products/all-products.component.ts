import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {CartsService} from "../../../carts/services/carts.service";

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent  implements  OnInit{

  products :any []=[];
  Categories :any []=[];
 // loading:Boolean =false;


  constructor(private service :ProductsService ) {

  }
  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts(){
   // this.loading =true;
    this.service.getAllProducts().subscribe((res:any) =>{   //  subscribe >> observable .. to link front to back
      this.products=res;
    //  this.loading = false;
    } ,error => {
      alert("Error 404");
     // this.loading = false;
    });
  }
  getCategories(){
     // this.loading =true;
    return this.service.getAllCategories().subscribe((res:any) => {
      console.log(res);
      //  this.loading = false;
      this.Categories=res;
    });
  }

  filterCategory(event :any) {
   // this.loading= true;
    let value=event.target.value;
    console.log(value);
    (value == 'all') ? this.getProducts() : this.getProductsCategory(value);
    /**
     *  if (value === 'all'){
     *       this.getProducts();
     *     }else {
     *       this.getProductsCategory(value);
     *     }
     * */


  }
    getProductsCategory(keyword :string){
     // this.loading=true;
    return this.service.getProductByCategory(keyword).subscribe((res:any) => {
      // this.loading=false;
      console.log(res);
      this.products=res;

    });
  }

}
