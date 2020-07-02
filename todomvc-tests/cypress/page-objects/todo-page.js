export function navigate() {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
}

export function addTodo(todoText) {
    cy.get('.new-todo').type(todoText + "{enter}")
}

export function completeTodo(todoIndex) {
    cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`).click()
}

export function removeCompletedTodos() {
    cy.contains('Clear').click()
}

export function filterActiveTodos() {
    cy.contains('Active').click()
}

export function filterCompletedTodos() {
    cy.contains('Completed').click()
}

export function showAllTodos() {
    cy.contains('All').click()
}

export function validateTodoText(todoIndex, expectedText) {
    cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`)
        .should('have.text', expectedText)
}

export function validateTodoIsCompleted(todoIndex, isCompleted) {
    cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`)
        .should(`${isCompleted ? '' : 'not.'}be.checked`)
    cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`)
        .should(`${isCompleted ? '' : 'not.'}have.css`, 'text-decoration-line', 'line-through')
}

export function validateTodoListIsEmpty() {
    cy.get('.todo-list').should('not.have.descendants', 'li')
}

export function validateNumberOfTodos(expectedNumberOfTodos) {
    cy.get('.todo-list li').should('have.length', expectedNumberOfTodos)
}