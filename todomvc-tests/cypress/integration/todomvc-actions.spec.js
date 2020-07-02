/// <reference types="cypress" />

import {
    navigate,
    addTodo,
    validateTodoText,
    completeTodo,
    validateTodoIsCompleted,
    removeCompletedTodos,
    validateTodoListIsEmpty
} from "../page-objects/todo-page";

describe('todo actions', () => {
    beforeEach(() => {
        navigate()
        addTodo('Clean room')
    })

    it('should add a new todo to the list', () => {
        validateTodoText(0, 'Clean room')
        validateTodoIsCompleted(0, false)
    })

    it('should mark a todo as completed', () => {
        completeTodo(0)
        validateTodoIsCompleted(0, true)
    })

    it('should clear completed todo', () => {
        completeTodo(0)
        removeCompletedTodos()
        validateTodoListIsEmpty()
    })
})