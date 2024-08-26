import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
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

}
