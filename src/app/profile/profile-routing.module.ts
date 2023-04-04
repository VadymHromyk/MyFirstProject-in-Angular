import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {AuthGuard} from '../core/guards/auth.guard'
import {ProfileComponent} from './components/profile/profile.component'

const routes: Routes = [
  {path: 'profile/:userId', component: ProfileComponent, canActivate: [AuthGuard]},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
