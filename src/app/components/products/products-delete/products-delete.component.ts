import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-delete',
  templateUrl: './products-delete.component.html',
  styleUrls: ['./products-delete.component.css']
})
export class ProductsDeleteComponent implements OnInit {

  product!: Product; 

  constructor(private productService: ProductsService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    const id : any = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }

  deleteProduct() {

    this.productService.delete(`${this.product.id}`).subscribe(()=> {
      this.productService.ShowSnackBar('Produto deletado Com sucesso')
      this.router.navigate(['/products'])
    })
  }

  cancel() :void {
    this.router.navigate(['/products'])
 }
}
