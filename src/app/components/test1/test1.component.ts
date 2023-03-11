import {Component} from '@angular/core'

interface IUser {
  name: string
  age: number
}

@Component({
  selector: 'project-one-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss'],
})
export class Test1Component {
  appTitle = 'Project number One'
  text = 'start value'
  isAppLoading = true

  changeTitleHandler() {
    this.appTitle = 'First project'
  }
  changeTextHandler(event: Event) {
    this.text = (event.currentTarget as HTMLInputElement).value
  }

  constructor() {}

  user: IUser = {
    name: 'Vadym',
    age: 26,
  }
}
