import {TodosService} from './../../services/todos.service'
import {Component, OnInit, OnDestroy} from '@angular/core'
import {Todo} from 'src/app/services/todos.service'
import {HttpErrorResponse} from '@angular/common/http'
import {Observable, Subscription} from 'rxjs'

@Component({
  selector: 'project-one-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos$!: Observable<Todo[]>
  error = ''

  // subscription: Subscription = new Subscription()

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todos$ = this.todosService.todos$
    this.getTodos()
  }

  getTodos() {
    this.todosService.getTodos()
  }

  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = 'anglular' + randomNumber
    this.todosService.createTodo(title)
  }

  deleteTodo() {
    const todoId = '0ce86325-3578-4b92-937d-9ff603ec77bc'
    this.todosService.deleteTodo(todoId)
  }
}
