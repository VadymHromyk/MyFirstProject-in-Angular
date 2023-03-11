import {ErrorService} from './error.service'
import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {BehaviorSubject, catchError, map, Observable, throwError} from 'rxjs'
import {environment} from 'src/environments/environment'
import {HttpErrorResponse} from '@angular/common/http'
import {EMPTY} from 'rxjs'

export interface Todo {
  id: string
  addedDate: string
  order: number
  title: string
}
interface BaseResponse<T = {}> {
  data: T
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
}

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([])

  httpOptions = {
    withCredentials: true,
    headers: {
      'api-key': environment.apiKey,
    },
  }

  constructor(private http: HttpClient, private ErrorService: ErrorService) {}

  getTodos() {
    this.http
      .get<Todo[]>(`${environment.baseUrl}/todo-lists`, this.httpOptions)
      .pipe(catchError(this.errorHandler.bind(this)))
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }

  createTodo(title: string) {
    this.http
      .post<BaseResponse<{item: Todo}>>(
        `${environment.baseUrl}/todo-lists`,
        {title},
        this.httpOptions
      )
      .pipe(
        catchError(this.errorHandler.bind(this)),
        map(res => {
          const todo = res.data.item
          const allTodos = this.todos$.getValue()
          return [todo, ...allTodos]
        })
      )
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }

  deleteTodo(todoId: string) {
    this.http
      .delete<BaseResponse>(`${environment.baseUrl}/todo-lists/${todoId}`, this.httpOptions)
      .pipe(
        catchError(this.errorHandler.bind(this)),
        map(() => {
          return this.todos$.getValue().filter(tl => tl.id != todoId)
        })
      )
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }

  private errorHandler(err: HttpErrorResponse) {
    this.ErrorService.log(err.message, 'error')
    return EMPTY
  }
}
