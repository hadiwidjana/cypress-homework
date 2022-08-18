import ExamplePage from "../page/ExamplePage.js";



describe('User Input Quote Test', () => {
    //stores quotes
    var arrayQuotes=["You Can do it!!!"]
    //stores colors
    var arrayColors=["white","White","Yellow",'Cyan']

    it('verify list of option', () => {
        cy.visit('https://b899-13-67-75-93.ngrok.io/')

        const examplePage = new ExamplePage()
        let i = 0;
        
        let temp = ""
        while(i<3){
            temp = "This is quote no "+ (i+1)
            arrayQuotes.push(temp)
            
            examplePage.inputQuote(temp);

            examplePage.selectColor(i);

            examplePage.clickButton();

            i++;
        }

        cy.get('p[name="quoteText"]').then($listQuotes => {
            for (let i=0; i <arrayQuotes.length; i++){
                expect($listQuotes.eq(i)).to.contain(arrayQuotes[i])
            }
        })

        

        

    })

    it('verify table' , () => {
        // cy.visit('https://b899-13-67-75-93.ngrok.io/')
        cy.get('#tableView').click()
        cy.get('#buttonShowTable').trigger('mouseover')

        //verify table header
        cy.get('thead > tr > :nth-child(1)').contains('Quotes')
        cy.get('thead > tr > :nth-child(2)').contains('Color')

        //verify quotes column
        cy.get('td[name=tableColumnQuote]').then($listColumn1 => {
            for (let j=0; j <arrayQuotes.length; j++){
                expect($listColumn1.eq(j)).to.contain(arrayQuotes[j])
            }
        })

        //verify color column
        cy.get('td[name=tableColumnColor]').then($listColumn2 => {
            for (let k=0; k <arrayColors.length; k++){
                expect($listColumn2.eq(k)).to.contain(arrayColors[k])
            }
        })



       

    })

 })
