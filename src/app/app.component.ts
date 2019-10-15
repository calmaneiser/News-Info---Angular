import { Component, OnInit } from "@angular/core";
import { NewsApiService } from "./services/news-api.service";

@Component({
  selector: "cio-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  mArticles: Array<any>;
  mSources: Array<any>;
  constructor(private newsapi: NewsApiService) {}

  ngOnInit() {
    this.initArticles();
    this.initSources();
  }

  initArticles() {
    this.newsapi
      .initArticles()
      .subscribe(data => (this.mArticles = data["articles"]));

    this.newsapi
      .initArticles()
      .subscribe(data => console.log(data["articles"]));
  }

  initSources() {
    this.newsapi
      .initSources()
      .subscribe(data => (this.mSources = data["sources"]));

    this.newsapi.initSources().subscribe(data => {
      console.log(data["sources"]);
    });
  }

  searchArticles(source) {
    this.newsapi
      .getArticlesByID(source)
      .subscribe(data => (this.mArticles = data["articles"]));
  }

  getRandomLikesNumber(i) {
    return Math.floor(Math.random() * 1000 + i);
  }
}
