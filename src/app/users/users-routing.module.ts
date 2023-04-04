import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {AuthGuard} from '../core/guards/auth.guard'
import {UsersComponent} from './components/users/users.component'

const routes: Routes = [{path: '', component: UsersComponent, canActivate: [AuthGuard]}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
