import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {postList} from './posts/posts.component';

@Injectable({
  providedIn: 'root'
})

export class PostsServiceService {

  a: any;

  constructor(private http: HttpClient) { }

  getPosts(): Observable<postList[]>{
      return this.http.get<postList[]>('https://young-springs-91235.herokuapp.com/posts');
    }
  
  getSinglePost(postId): Observable<postList[]> {
      this.a = this.http.get<postList[]>('https://young-springs-91235.herokuapp.com/post?postId='+postId);
      console.log(this.a.datePublished); 
      return this.a; 
  }
}