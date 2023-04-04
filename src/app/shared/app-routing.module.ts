import {PageNotFoundComponent} from '../components/page-not-found/page-not-found.component'
import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {HomeComponent} from '../home/components/home/home.component'
import {LoginComponent} from '../auth/components/login/login.component'
import {ProfileComponent} from '../profile/components/profile/profile.component'
import {TodosComponent} from '../todos/components/todos/todos.component'
import {UsersComponent} from '../users/components/users/users.component'
import {AuthGuard} from '../core/guards/auth.guard'

const routes: Routes = [
  // {path: '404', component: PageNotFoundComponent},
  // {path: '**', redirectTo: '/404'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingRoutingModule {}
