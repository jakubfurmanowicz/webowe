import { Injectable } from '@angular/core';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articles: Article[] =
  [
    {
      title: "Mecz koszykówki",
      date: "1 września",
      content: "Na stadionie miejskim",
      imageUrl: "assets/images/basketball.jpg"
    },
    {
      title: "Wypożycz książkę",
      date: "4 września",
      content: "Biblioteka miejska",
      imageUrl: "assets/images/book.jpg"
    },
    {
      title: "Mecz piłki nożnej",
      date: "6 września",
      content: "Na stadionie miejskim",
      imageUrl: "assets/images/football.jpg"
    },
    {
      title: "Wypożycz rower",
      date: "5 września",
      content: "MOSiR",
      imageUrl: "assets/images/bike.jpg"
    },
  ]

  constructor() { }

  getArticles()
  {
    return this.articles;
  }
}
