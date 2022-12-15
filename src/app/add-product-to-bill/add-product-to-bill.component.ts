import { Component } from '@angular/core';
import {BillingComponent} from '../billing/billing.component'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgbTypeaheadWindow } from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window';
interface Product {
        productName: string,
        productDescription: string,
        productCompany: string,
        productPrice: number,
        productQuantity: number,
        productBatchNo: string,
        productExpiryDate: string,
        productUrl: string
}

@Component({
  selector: 'app-add-product-to-bill',
  templateUrl: './add-product-to-bill.component.html',
  styleUrls: ['./add-product-to-bill.component.css']
})
export class AddProductToBillComponent {

  
  
  productList: any = [];
  searchText: string = "";
  url = "http://localhost:8080/user/getAllProducts";
  constructor( private http: HttpClient ) { }

  Token: string = `Bearer ${localStorage.getItem("token")}`
  ngOnInit(): void {
    this.getUser();
  }
  async getUser(){
    let headers = new HttpHeaders({
      'Authorization': this.Token,
      'Content-Type': 'application/json'
    });
    this.http.get(this.url, {headers:headers}).subscribe((res)=>this.productList = res)
    console.log(this.productList)
  }

  product1 :Product[]=this.productList
  filteredCars: Product[] = [];

  addProdToBill(){
    console.log()
  }

  applyFilter(filterValue: string) {
    // filterValue = filterValue.trim(); // Remove whitespace
    // // La ligne ci-dessous permet de reinitialiser le tableau
    // this.product1 = this.filteredCars;
    // this.product1 = this.product1.filter((product:Product ) =>
    // product.productName.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1);


  }  
  


}
