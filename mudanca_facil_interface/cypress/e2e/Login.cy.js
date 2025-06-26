describe('Usuario Loga na sua conta', () => {
  it('deve conseguir fazer login com email e senha validos', () => {
    cy.visit('http://localhost:5173/login')
    cy.get('#email').type('string')
    cy.get('#senha').type('string')
    cy.get('.custom-button').click()
  })
})