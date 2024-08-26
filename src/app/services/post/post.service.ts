import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Post{
  userId: number;
  id: number;
  title: string;
  body: string;
}


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';
  post?: string;

  constructor(private http: HttpClient) { }

  changePost(post: string): void{
    this.post = post;
  }

  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }

  createPost(post: Post): Observable<Post> {
    const headers = new HttpHeaders({
      'Content-Type': ' application/json',
    });
    return this.http.post<Post>(this.url, post, {headers});
  }

  updatePost(post: Post): Observable<Post> {
    const headers = new HttpHeaders({
      'Content-Type': ' application/json',
    });
    return this.http.put<Post>(`${this.url}/${post.id}`, post, {headers});
  }

  deletePost(post: Post): Observable<Post>{
    return this.http.delete<Post>(`${this.url}/${post.id}`)
  }

}
