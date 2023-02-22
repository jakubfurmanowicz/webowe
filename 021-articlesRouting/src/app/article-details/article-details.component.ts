import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  article?: Article;

  constructor(private route: ActivatedRoute, private service: ArticleService) 
  { 
    route.paramMap.subscribe((params: ParamMap) => {
      let id = Number(params.get('id'));
      this.service.getArticlesById(id).subscribe(data => this.article = data);
    });
  }

  ngOnInit(): void {
  }

}
