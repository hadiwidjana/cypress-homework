class ExamplePage {
    inputQuote(quote){
        cy.get("#inputQuote")
            .type(quote);
    }

    selectColor(option){
        cy.get('#colorSelect')
            .select(option)
    }

    clickButton(){
        cy.get('#buttonAddQuote')
            .click()
    }

    getTable(){
        cy.get('#tableView').click()
        cy.get('#buttonShowTable').trigger('mouseover')
    }

    verifyTable(){
        cy.get('thead > tr > :nth-child(1)').contains('Quotes')
        cy.get('thead > tr > :nth-child(2)').contains('Color')
    }

    verifyQuotesColumn(quote){
        cy.get('td[name=tableColumnQuote]').then($listColumn1 => {
            for (let j=0; j <quote.length; j++){
                expect($listColumn1.eq(j)).to.contain(quote[j])
            }
        })
    }

    verifyColorColumn(color){
        cy.get('td[name=tableColumnColor]').then($listColumn2 => {
            for (let k=0; k <color.length; k++){
                expect($listColumn2.eq(k)).to.contain(color[k])
            }
        })
    }

}

export default ExamplePage;