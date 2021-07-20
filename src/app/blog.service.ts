import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from './models/Blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.apiUrl);
  }
 
  getBlog(id: number): Observable<Blog> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Blog>(url);
  }
}
