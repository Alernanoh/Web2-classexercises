import { Component } from '@angular/core';
import { PostService, Post } from '../../services/post/post.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-list-post',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './list-post.component.html',
  styleUrl: './list-post.component.css'
})
export class ListPostComponent {
  post :  Post[] = [];

  form: FormGroup;

  constructor(public postService: PostService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      userId: ["", Validators.required],
      title: ["", Validators.required],
      body: ["", [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void{
    this.postService.getPost().subscribe((post) => {
      this.post = post;
    });
  }

  createPost(): void{
    const post = this.form.value;
    if(this.form.valid){
      this.postService.createPost(post).subscribe((post)=> {
        //this.post.push(post);
        this.post.unshift(post);
        this.form.reset();
      });
    }
  }

}
