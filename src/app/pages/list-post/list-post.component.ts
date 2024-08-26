import { Component } from '@angular/core';
import { PostService, Post } from '../../services/post/post.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-list-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-post.component.html',
  styleUrl: './list-post.component.css'
})
export class ListPostComponent {

  post :  Post[] = [];

  constructor(public postService: PostService) {}

  ngOnInit(): void{
    this.postService.getPost().subscribe((post) => {
      this.post = post;
    });
  }

}
