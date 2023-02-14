///<reference types="cypress"/>

context('Dev Finances Agilizei', () => {
    it.only('Cadastrar entradas', () => {

        cy.visit('https://dev-finances-smoky.vercel.app/')

        cy.get('#transaction .button')
            .should("be.visible") //ver visibilidade
            .click() //id + classe
        cy.get('#description')
            .clear() //Limpar imput
            .should("have.value", "")
            .type('Mesada') //id
            .should("have.value", "Mesada")
           
        cy.get('[name=amount]')
            .type(15) //atributos
            .should("have.value", "15")
        cy.get('[type=date]')
            .type('1999-12-31') //atributos
            .should("have.value","1999-12-31" )
            

        cy.get('button').contains('Salvar')
            .click() // tipo e valor

        cy.get('#data-table tbody tr').should('have.length', 1)  //dados cadastrados
});

        it('Editar Entradas', () => {
            cy.visit('https://dev-finances-smoky.vercel.app/')

        cy.get('#transaction .button')
            .should("be.visible") //ver visibilidade
            .click() //id + classe
        cy.get('#description')
            .clear() //Limpar imput
            .should("have.value", "")
            .type('Mesada') //id
            .should("have.value", "Mesada")
            .clear() //Limpar imput

        cy.get('[name=amount]')
            .type(0) //atributos
            .should("have.value", "")
        cy.get('[type=date]')
            .type('1999-12-31') //atributos
            .should("have.value","1999-12-31" )
            

        cy.get('button').contains('Salvar')
            .click() // tipo e valor

        cy.get('#data-table tbody tr').should('have.length', 0)  //dados cadastrados

        });
    
});