describe('Send file', function() {
    
    it('Sending file', function() {
        cy.visit('https://dev.2sign.online/');
        cy.get('input[type="file"]').attachFile('filefortest.pdf');
        cy.get('input[type="checkbox"]').check();

        // cy.get('input[type="radio"]').check(3);

        cy.get(':nth-child(3) > .MuiButtonBase-root > .MuiIconButton-label > .jss181').click();
        cy.get('input[type="text"]').type('kseniyaqanov2021@qa.team');
        cy.get('button[type="button"]').click();
        cy.wait(3000);
        cy.contains('Отправить на подпись').click();

    });

    it('Sending file2', function() {
        cy.visit('https://dev.2sign.online/');
        cy.get('input[type="file"]').attachFile('filefortest.pdf');
       
        // cy.get('input[type="radio"]').check(3);
        
        cy.get(':nth-child(3) > .MuiButtonBase-root > .MuiIconButton-label > .jss181').click();
        cy.get('input[name="recipientName"]').type('User1');
        cy.get('input[name="recipientEmail"]').type('kseniyaqanov2021@qa.team');
        cy.get('input[name="senderName"]').type('User2');
        cy.get('input[name="senderEmail"]').type('kseniyaqanov2021@qa.team');
        cy.get('.MuiButton-containedSecondary > .MuiButton-label').click();
        cy.wait(3000);
        
        // cy.get(':nth-child(2) > .DraggableButton_btnWrap__1zzqX > .DraggableButton_b__tkLgb')
        // .drag('.DocumentWrapper_wrap__39sB2');
    });

    it('drop-n-drug', function() {
        const dataTransfer = new DataTransfer();

        cy.get(':nth-child(2) > .DraggableButton_btnWrap__1zzqX > .DraggableButton_b__tkLgb')
        .trigger('dragstart', {
             dataTransfer
        });

        cy.get('.DocumentWrapper_wrap__39sB2').trigger('drop', {
            dataTransfer
        });

        cy.get('.MuiButton-label').click();
        cy.get('.MuiButton-label').click();
        cy.get('h2').should('have.text', 'Ваш документ был успешно отправлен');
    })
});