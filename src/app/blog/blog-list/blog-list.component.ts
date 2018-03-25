import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../shared/services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  typesOfBlogs = ['Pesional Blogs', 'Business Blogs', 'Media Blogs', 'Niche Blogs', 'Reverse Blogs',];
  params = 'sdsd'

  constructor(private blogService:BlogService) { }

  ngOnInit() {
    
   this.blogService.getBlogs(this.params); 
  }

}
