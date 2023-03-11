import {Adress} from './../parent.component'
import {Component, EventEmitter, Input, Output} from '@angular/core'

@Component({
  selector: 'project-one-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  name = 'Vasyl'
  math = '5'

  @Input() surnameProps?: string
  @Input() adress?: Adress

  @Output() sendGradeEvent = new EventEmitter<string>()

  sendGradeHandler() {
    this.sendGradeEvent.emit(this.math)
  }
}
