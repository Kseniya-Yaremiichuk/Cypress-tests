describe('Login to mail', function() {
    
    it('Login', function() {
        cy.visit('https://159.89.29.216:8000/webmail/?_task=mail&_mbox=INBOX');
        cy.get('input[type="text"]').type('qa-test@arixess.com');
        cy.get('input[type="password"]').type('catch123');
        cy.get('input[type="submit"]').click();
        cy.wait(3000);
        cy.get('#rcmbtn107').click();
    })

    it('Send mail', function() {
        cy.get('#_to').type('kseniyaqanov2021@qa.team');
        cy.get('#compose-subject').type('Test task');
        cy.get('#composebody').type('Test');
        cy.get('#rcmcomposereceipt').click();
        cy.get('#cc-link').click();
        cy.get('#_cc').type('kseniyaqanov2021@qa.team');
        cy.get(':nth-child(5) > label > select').select('Черновики');
        cy.wait(1000);
        cy.get(':nth-child(5) > label > select').select('Отправленные');
        cy.get('#rcmbtn107').click();
        cy.get('.ui-button-icon-primary').click();
        cy.get('#rcmbtn107').click();
    });
})
