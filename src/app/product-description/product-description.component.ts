import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  albumInfo:string;
  constructor(private _productService,albumInfo) {
    this._productService = _productService;
    this.albumInfo= albumInfo;
   };

  ngOnInit(this._productService.getAlbum(1).subscribe(response =>this.albumInfo = response)): void {
  } 

}
