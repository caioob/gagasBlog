import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsServiceService } from '../posts-service.service'
​

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  id: Number;
  post: any;
  private postDummy: any;
  private paramTrigger: any

  constructor(private route: ActivatedRoute, private data: PostsServiceService) { }

  ngOnInit(): void {
    this.paramTrigger = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.postDummy = this.data.getSinglePost(this.id).subscribe(data =>this.post = data);
    });
  }

  ngOnDestroy(){
    this.postDummy.unsubscribe();
  }
}
