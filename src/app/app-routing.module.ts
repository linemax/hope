import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostComponent} from "./components/admin/post/post.component";
import {DashboardComponent} from "./components/admin/dashboard/dashboard.component";
import * as path from "path";
import {IndexComponent} from "./components/ui/index/index.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', component: IndexComponent},
  {path: 'admin', component:DashboardComponent, children: [
      {path: '', component: PostComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
