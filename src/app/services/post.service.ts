import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { Post } from '../models/post';
import { post } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  postList :AngularFireList<any>;
  selectPost : Post = new Post();

  constructor(private firebase:AngularFireDatabase, private form:Form) { }

getAllPost(){
  this.postList = this.firebase.list('post')
}

  createPost(newPost:Post){
    this.postList.push(
      {   
        nameUser:newPost.nameUser,
        date:newPost.date,
        image:newPost.image,
        countLikes:newPost.countLikes,
        countComment:newPost.countComment
      }
    )
}

updatePost(upPost:Post){
  this.postList.update(upPost.id,
    {   
      nameUser:upPost.nameUser,
      date:upPost.date,
      image:upPost.image,
      countLikes:upPost.countLikes,
      countComment:upPost.countComment
    }
  )
}


deletePost($key:string){
  this.postList.remove($key)
}

}
