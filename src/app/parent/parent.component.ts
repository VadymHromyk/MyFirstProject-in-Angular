import {Component} from '@angular/core'

export interface Adress {
  city: string
  street: string
  house: number
}
interface WeekGrade {
  id: number
  gradeItem: number
}
interface Lesson {
  id: number
  title: string
  weekGrades: WeekGrade[]
}
interface Fruit {
  id: string
  name: string
  price: number
}

@Component({
  selector: 'project-one-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  grades: string[] = ['1', '2']

  lessonExample: Lesson[] = [
    {
      id: 0,
      title: 'Math',
      weekGrades: [
        {
          id: 0,
          gradeItem: 4,
        },
        {
          id: 1,
          gradeItem: 2,
        },
        {
          id: 2,
          gradeItem: 5,
        },
      ],
    },
    {
      id: 1,
      title: 'Physic',
      weekGrades: [
        {
          id: 0,
          gradeItem: 4,
        },
        {
          id: 1,
          gradeItem: 2,
        },
        {
          id: 2,
          gradeItem: 5,
        },
      ],
    },
  ]

  fruits: Fruit[] = [
    {id: '1', name: 'apple', price: 10},
    {id: '2', name: 'orange', price: 20},
    {id: '3', name: 'watermelon', price: 30},
    {id: '4', name: 'banana', price: 5},
    {id: '5', name: 'pears', price: 12},
    {id: '6', name: 'raspberries', price: 18},
    {id: '7', name: 'avocados', price: 14},
    {id: '8', name: 'mangoes', price: 3},
    {id: '9', name: 'kiwifruit', price: 7},
  ]

  name = 'Vadym'
  surname = 'P@2a#s%t&e$l'
  adress: Adress = {
    city: 'Minsk',
    street: 'Platonova',
    house: 42,
  }

  isLoading = true

  constructor() {
    setTimeout(() => {
      this.isLoading = false
    }, 3000)
  }

  getGrade(value: string) {
    this.grades.push(value)
  }
}
