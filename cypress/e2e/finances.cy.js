///<reference types="cypress"/>

context('Dev Finances Agilizei', () => {
    it.only('Cadastrar entradas', () => {

        cy.visit('https://dev-finances-smoky.vercel.app/')

        cy.get('#transaction .button').click() //id + classe
        cy.get('#description').type('Mesada') //id
        cy.get('[name=amount]').type(15) //atributos
        cy.get('[type=date]').type('1999-12-31') //atributos
        cy.get('button').contains('Salvar').click() // tipo e valor

        cy.get('#data-table tbody tr').should('have.length', 1)  //dados cadastrados
});
    
});