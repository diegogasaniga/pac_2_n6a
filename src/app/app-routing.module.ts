import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConsignaComponent } from './consigna/consigna.component';
import { TodosComponent } from './todos/todos.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'todos/:id', component: DetalleComponent },
  { path: 'consigna', component: ConsignaComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
