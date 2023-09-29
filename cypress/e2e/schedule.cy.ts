// cypress/integration/form.spec.js

describe('should send form with valid data', () => {
  beforeEach(() => {
    cy.visit('/schedule')
  })

  it('should fill the form and submit', () => {
    cy.get('#name').type('Patrick')
    cy.get('#lastname').type('Longo')

    cy.get('#region').select('kanto')
    cy.get('#city').select('Canalave City')

    cy.contains('Adicionar novo pokémon ao time... +').click()
    cy.get('select[name^="pokemons"]').select('bulbasaur')

    cy.get('#date').select(new Date().toLocaleDateString())
    cy.get('#time').select('10:00:00')

    cy.contains('Concluir Agendamento').click()

    cy.contains('Fazer Novo Agendamento').should('exist')
  })
})
