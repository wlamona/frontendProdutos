import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private baseUrl = 'http://localhost:8001/produto';

  constructor(private http: HttpClient) { }

  getProduto(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createProduto(produto: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, produto);
  }

  updateProduto(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteProduto(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getProdutosList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
