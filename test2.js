describe('Make the message read', function() {
    
    it('Login', function() {
        cy.visit('https://159.89.29.216:8000/webmail/?_task=mail&_mbox=INBOX');
        cy.get('input[type="text"]').type('qa-test@arixess.com');
        cy.get('input[type="password"]').type('catch123');
        cy.get('input[type="submit"]').click();
        cy.wait(2000);
    });

    it('Work with message', function() {
        cy.get('#rcmrowMjM0 > .threads').click();
        cy.get('#markmessagemenulink').click();
        cy.get('#rcmbtn124 > .icon').click();
        cy.wait(5000);
    });

    it('Login', function() {
        cy.visit('https://159.89.29.216:8000/webmail/?_task=mail&_mbox=INBOX');
        cy.get('input[type="text"]').type('qa-test@arixess.com');
        cy.get('input[type="password"]').type('catch123');
        cy.get('input[type="submit"]').click();
        cy.wait(2000);
    });

    it('Work with message2', function() {
       cy.get('#statusicnrcmrowMjIz').should('have.class', 'msgicon unread');
    });




})
