const log = require('debug')('api:routes-Todo')

import { Router } from 'express'
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from '../../controllers/Todo/TodoController'

log('Building TODO routes')

const router: Router = Router()

router.get('/all-todos', getTodos)

router.post('/add-todo', addTodo)

router.put('/edit-todo/:id', updateTodo)

router.delete('/delete-todo/:id', deleteTodo)

export { router }
