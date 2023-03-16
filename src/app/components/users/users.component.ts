import {Observable} from 'rxjs'
import {User, UsersService} from './../../services/users.service'
import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'project-one-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users$!: Observable<User[]>
  constructor(private usersService: UsersService) {}
  ngOnInit(): void {
    this.users$ = this.usersService.getUsers()
  }
}
