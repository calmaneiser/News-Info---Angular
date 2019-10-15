import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class NewsApiService {
  my_key: string = "b3c0e01196fb42c094e482830c3d9d53";
  api_key = `&apiKey=${this.my_key}`;
  api_sources_link = "https://newsapi.org/v2/sources?language=en";
  api_articles_link = "https://newsapi.org/v2/top-headlines?sources=techcrunch";
  api_articles_by_id_link = "https://newsapi.org/v2/top-headlines?sources=";

  constructor(private http: HttpClient) {}

  initSources() {
    return this.http.get(this.api_sources_link + this.api_key);
  }

  initArticles() {
    return this.http.get(this.api_articles_link + this.api_key);
  }

  getArticlesByID(source: String) {
    return this.http.get(this.api_articles_by_id_link + source + this.api_key);
  }
}
