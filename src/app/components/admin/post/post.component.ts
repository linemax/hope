import {Component, OnInit} from '@angular/core';
import {BaseService} from "../../../services/base.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient, HttpParams, HttpResponse} from "@angular/common/http";
import * as http from "http";
import {Post, PostResponse} from "../../../structures/Post";
import {MatDialog} from "@angular/material/dialog";
import {AddPostComponent} from "../add-post/add-post.component";
import {PageEvent} from "@angular/material/paginator";
import {EditPostComponent} from "../edit-post/edit-post.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postResponse: PostResponse | undefined | null

  constructor(private base: BaseService, private snack: MatSnackBar, private http: HttpClient, private  dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getPosts(this.base.base_uri_api+'posts', new HttpParams())
  }

  getPosts(url: string, httpParams: HttpParams) {
    this.http.get<any>(url, {withCredentials: true, observe: 'response'}).subscribe({
      next: (response: HttpResponse<PostResponse>) => {
        if(response.ok){
          this.postResponse= response.body
        }
      }
    })
  }

  openDialog() {
    this.dialog.open(AddPostComponent, {
      width: '100%',
      maxWidth: '600px'
    })
  }

  paginate($event: PageEvent) {
    if (this.postResponse)
      this.getPosts(this.postResponse.path, new HttpParams().append('page', $event.pageIndex + 1))
  }


  delete(post: Post) {
    this.http.delete<any>(this.base.base_uri_api + 'posts/' + post.id, {
      withCredentials: true,
      observe: "response"
    }).subscribe({
      next: (response: HttpResponse<any>) => {
        if (response.ok) {
          this.getPosts(this.base.base_uri_api + 'posts', new HttpParams())
        }
        this.snack.open('Post deleted', '', {duration: 5000})
      }
    })
  }


  edit(post: Post) {
    this.dialog.open(EditPostComponent, {
      width: '100%',
      maxWidth: '600px',
      data: post
    })
  }

}
