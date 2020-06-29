import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovielistComponent } from './movielist/movielist.component';
import { AddmovieComponent } from './addmovie/addmovie.component';


const routes: Routes = [
    {path: '',component: MovielistComponent},
    {path: 'addmovie', component: AddmovieComponent},
    {path: 'movielist',component: MovielistComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
