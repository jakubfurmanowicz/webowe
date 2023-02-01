import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: Article[];

  constructor(private articlesService: ArticleService) 
  { 
    this.articles = articlesService.getArticles();
  }

  ngOnInit(): void {
  }

}
