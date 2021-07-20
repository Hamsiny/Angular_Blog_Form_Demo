import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/blog.service';
import { Blog } from 'src/app/models/Blog';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent implements OnInit {
  blog: Blog;

  constructor(
    private blogService: BlogService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadBlog();
  }

  loadBlog() {
    this.blogService
      .getBlog(+this.activateRoute.snapshot.paramMap.get('id'))
      .subscribe((blog) => (this.blog = blog));
  }
}
