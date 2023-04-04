import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {NavigationsComponent} from './components/navigations/navigations.component'
import {RouterModule} from '@angular/router'

@NgModule({
  declarations: [NavigationsComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavigationsComponent],
})
export class SharedModule {}
