import { Component } from '@angular/core';
import { PostService } from '../../services/post/post.service';

@Component({
  selector: 'app-list-post',
  standalone: true,
  imports: [],
  templateUrl: './list-post.component.html',
  styleUrl: './list-post.component.css'
})
export class ListPostComponent {

  constructor(public postService: PostService) {}


}
