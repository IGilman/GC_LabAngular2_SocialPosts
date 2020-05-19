import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  posts: Post[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  //when the form is submitted, we need to push the object to the array
  onSubmit(form: NgForm): void {
    console.log("onSubmit add new obj")
    let newPost: Post = {
      title: form.value.title,
      thought: form.value.thought
    }
    this.posts.push(newPost);
  };

  //when the delete button is clicked we neeed to delete the object
  onDelete(index: number): void {
    console.log(`splice ${index}`)
    this.posts.splice(index, 1);
  }

}
