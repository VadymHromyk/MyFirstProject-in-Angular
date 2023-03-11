import {ValueService} from './../../services/value.service'
import {Component} from '@angular/core'

@Component({
  selector: 'project-one-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss'],
})
export class Test2Component {
  valueLocal = 0
  constructor(private valService: ValueService) {}

  ngOnInit(): void {
    this.valService.value$.subscribe(value => (this.valueLocal = value))
    // this.valueLocal$ = this.valService.value$      without subscribe, but valueLocal$ = new Observable()
  }

  addValueHandler() {
    this.valService.addValue()
  }
  decValueHandler() {
    this.valService.decValue()
  }
}
