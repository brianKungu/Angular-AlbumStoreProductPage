import { Injectable } from '@angular/core';
import { HttpClient , HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _albumUrl = '../assets/album.json';
  constructor(private _http: HttpClient) { };
  function getAlbum(id:number) {
    return this._http.get('_albumUrl').function.map(HttpResponse).response.json();
  }
}
