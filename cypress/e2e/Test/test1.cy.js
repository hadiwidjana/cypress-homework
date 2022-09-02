import ExamplePage from "../page/ExamplePage.js";



describe('User Input Quote Test', () => {
    //stores quotes
    var arrayQuotes=["You Can do it!!!"]
    //stores colors
    var arrayColors=["white","White","Yellow",'Cyan']

    it('[TC001] Verify list of option', () => {
        cy.visit('http://localhost:6061/')

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

    it('[TC002] Verify table' , () => {

        const examplePage = new ExamplePage()

        examplePage.getTable();

        //verify table header
        examplePage.verifyTable();

        //verify quotes column
        examplePage.verifyQuotesColumn(arrayQuotes);

        //verify color column
        examplePage.verifyColorColumn(arrayColors);

    })

 })
