import {NgModule} from '@angular/core'
import {PreloadAllModules, RouterModule, Routes} from '@angular/router'
import {HomeComponent} from '../home/components/home/home.component'
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'login',
    loadChildren: () => import('./../auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'todos',
    loadChildren: () => import('./../todos/todos.module').then(m => m.TodosModule),
  },
  {
    path: 'users',
    loadChildren: () => import('./../users/users.module').then(m => m.UsersModule),
  },
  {
    path: 'profile/:userId',
    loadChildren: () => import('./../profile/profile.module').then(m => m.ProfileModule),
  },
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingRoutingModule {}
