import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTableComponent} from './list-table/list-table.component'
import { ListChartComponent} from './list-chart/list-chart.component'
import { LoginComponent} from './login/login.component'
import { ListTableChartComponent} from './list-table-chart/list-table-chart.component'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'listTable', component: ListTableComponent },
  { path: 'listChart', component: ListChartComponent },
  { path: 'mychart', component: ListTableChartComponent },
  { path: '**', component:LoginComponent }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}  