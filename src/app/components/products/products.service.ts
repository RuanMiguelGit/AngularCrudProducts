import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  {MatSnackBar} from '@angular/material/snack-bar'
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl ="http://localhost:3001/products"
  constructor(private snackBar :MatSnackBar, private http:HttpClient) { }

  ShowSnackBar(msg:string, isError :boolean = false) :void{
    this.snackBar.open(msg, 'X', {
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top",
      panelClass: isError ? 'msg-error' : 'msg-sucess'

    })
    console.log(msg)
  }

  createProduct(product: Product): Observable<Product> {
  return this.http.post<Product>(this.baseUrl, product).pipe(
    map(obj =>obj),
    catchError(e => this.handleError(e))

  )

  }

  handleError (e:any):Observable<any> {
    this.ShowSnackBar("Ocorreu um erro", true)
    return EMPTY
  }

  readProduct() : Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map(obj =>obj),
      catchError(e => this.handleError(e))
    )
  }

  readById(id:string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url).pipe(
      map(obj =>obj),
      catchError(e => this.handleError(e))
    )

  }

  update(product:Product) :Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`

    return this.http.put<Product>(url, product)
  }

  delete (id:string) :Observable<Product>  {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url).pipe(
      map(obj =>obj),
      catchError(e => this.handleError(e))
    )

  }
}
