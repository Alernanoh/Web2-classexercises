import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';
  post?: string;

  constructor() { }

  changePost(post: string): void{
    this.post = post;
  }
}
