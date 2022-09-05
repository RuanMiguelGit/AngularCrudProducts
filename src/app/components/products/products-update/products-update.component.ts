import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-update',
  templateUrl: './products-update.component.html',
  styleUrls: ['./products-update.component.css']
})
export class ProductsUpdateComponent implements OnInit {
  product!: Product; 
  
  constructor(private productService: ProductsService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    const id : any = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }

  updateProduct() : void {
    this.productService.update(this.product).subscribe(()=> {
      this.productService.ShowSnackBar('Produto Atualizado com sucesso')
      this.router.navigate(['/products'])
    })

  }

  cancel() :void {
     this.router.navigate(['/products'])
  }

}
