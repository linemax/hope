import {NgDompurifySanitizer} from "@tinkoff/ng-dompurify";
import {TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER} from "@taiga-ui/core";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DashboardComponent} from './components/admin/dashboard/dashboard.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {EditPostComponent} from './components/admin/edit-post/edit-post.component';
import {AddPostComponent} from './components/admin/add-post/add-post.component';
import {PostComponent} from "./components/admin/post/post.component";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {HttpClientModule} from "@angular/common/http";
import {MatDialogModule} from "@angular/material/dialog";
import { IndexComponent } from './components/ui/index/index.component';
import { AddArticleComponent } from './components/admin/add-article/add-article.component';
import { ArticlesComponent } from './components/admin/articles/articles.component';
import { EditArticleComponent } from './components/admin/edit-article/edit-article.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    DashboardComponent,
    EditPostComponent,
    AddPostComponent,
    IndexComponent,
    AddArticleComponent,
    ArticlesComponent,
    EditArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
