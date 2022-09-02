import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  constructor(private productService : ProductsService, private router :Router) { }

  ngOnInit(): void {
  }

  createProduct() :void{
    this.productService.ShowSnackBar("Produto Criado")
  }

  cancel() : void {
    this.router.navigate(['/products'])
  }
  

}
