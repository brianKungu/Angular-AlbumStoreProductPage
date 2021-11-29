import { Injectable } from '@angular/core';
import { HttpClient , HttpResponse} from '@angular/common/http';
import { Http , Response} from '@angular/http';

import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _albumUrl = '../assets/album.json';
  constructor(private _http: HttpClient) { };
 getAlbum(id:number) {
  return this._http.get(this._albumUrl).map((response) => response.json());
  }
}
