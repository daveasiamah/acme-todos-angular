import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoItemComponent} from './todo-item/todo-item.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  {path:'home',component:AppComponent},
  {path:'todos',component:TodoListComponent},
  {path:'todo',component:TodoItemComponent},
  {path:'**',component:NotFoundComponent}
  // {path:'',redirectTo:'/home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
