import { Component, OnInit } from '@angular/core';
import {BaseService} from "../../../services/base.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient, HttpParams, HttpResponse} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {PageEvent} from "@angular/material/paginator";
import {Article, ArticleResponse} from "../../../structures/Article";
import {AddArticleComponent} from "../add-article/add-article.component";
import {EditArticleComponent} from "../edit-article/edit-article.component";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articleResponse: ArticleResponse | undefined | null

  constructor(private base: BaseService, private snack: MatSnackBar, private http: HttpClient, private  dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getArticles(this.base.base_uri_api+'articles', new HttpParams())
  }

  getArticles(url: string, httpParams: HttpParams) {
    this.http.get<any>(url, {withCredentials: true, observe: 'response'}).subscribe({
      next: (response: HttpResponse<ArticleResponse>) => {
        if(response.ok){
          this.articleResponse= response.body
        }
      }
    })
  }

  openDialog() {
    this.dialog.open(AddArticleComponent, {
      width: '100%',
      maxWidth: '600px'
    })
  }

  paginate($event: PageEvent) {
    if (this.articleResponse)
      this.getArticles(this.articleResponse.path, new HttpParams().append('page', $event.pageIndex + 1))
  }


  delete(article: Article) {
    this.http.delete<any>(this.base.base_uri_api + 'articles/' + article.id, {
      withCredentials: true,
      observe: "response"
    }).subscribe({
      next: (response: HttpResponse<any>) => {
        if (response.ok) {
          this.getArticles(this.base.base_uri_api + 'articles', new HttpParams())
        }
        this.snack.open('Article deleted', '', {duration: 5000})
      }
    })
  }


  edit(article: Article) {
    this.dialog.open(EditArticleComponent, {
      width: '100%',
      maxWidth: '600px',
      data: article
    })
  }

}
