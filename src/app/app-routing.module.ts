import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Components
import {DetailComponent} from "./views/detail/detail.component";
import {AllComponent} from "./views/all/all.component";

const routes: Routes = [
  {
    path: '',
    component: AllComponent,
    pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
