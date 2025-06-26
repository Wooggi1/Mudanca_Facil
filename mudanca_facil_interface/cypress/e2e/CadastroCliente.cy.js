describe('cadastra conta cliente no sistema', () => {
  it('deve criar uma conta valida no site', () => {
    cy.visit('http://localhost:5173/cadastro')
    cy.get('#nome').type('test-name')
    cy.get('#email').type('teste@gmail.com')
    cy.get('#senha').type('12345')
    cy.get('.custom-button').click()
  })
})