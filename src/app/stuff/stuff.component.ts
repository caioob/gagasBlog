import { Component, OnInit } from '@angular/core';
import { PostsServiceService } from '../posts-service.service'
import { postList } from '../posts/posts.component'

@Component({
  selector: 'app-stuff',
  templateUrl: './stuff.component.html',
  styleUrls: ['./stuff.component.css']
})
export class StuffComponent implements OnInit {

  staticPost: postList;
  listOfPosts: Array<postList>;
  
  private liveListOfPosts: any;

  constructor(private data: PostsServiceService) { }

  ngOnInit(): void {
    this.liveListOfPosts = this.data.getPosts().subscribe(data => this.listOfPosts = data);
  }
  
  ngOnDestroy(){
    this.liveListOfPosts.unsubscribe();
  }

}
