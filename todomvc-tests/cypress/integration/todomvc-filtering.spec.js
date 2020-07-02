/// <reference types="cypress" />

import {
    navigate,
    addTodo,
    completeTodo,
    filterActiveTodos,
    validateNumberOfTodos,
    filterCompletedTodos,
    showAllTodos
} from "../page-objects/todo-page";

describe('filtering', () => {
    beforeEach(() => {
        navigate()
        addTodo('Clean room')
        addTodo('Learn JavaScript')
        addTodo('Use Cypress')

        completeTodo(1)
    })

    it('should filter "Active" todos', () => {
        filterActiveTodos()
        validateNumberOfTodos(2)
    })

    it('should filter "Completed" todos', () => {
        filterCompletedTodos()
        validateNumberOfTodos(1)
    })

    it('should filter "All" todos', () => {
        showAllTodos()
        validateNumberOfTodos(3)
    })
})