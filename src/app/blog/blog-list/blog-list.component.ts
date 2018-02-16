import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  typesOfBlogs = ['Pesional Blogs', 'Business Blogs', 'Media Blogs', 'Niche Blogs', 'Reverse Blogs',];
  

  constructor() { }

  ngOnInit() {
  }

}
