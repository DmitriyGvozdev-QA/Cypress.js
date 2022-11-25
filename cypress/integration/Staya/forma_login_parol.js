describe('Проверка формы логина и пароля', function () {

   it('Позитивный кейс: верный логин верный пароль', function () {
   cy.visit('https://staya.dog/');
   cy.get('.header-bottom__right--link').click();
   cy.get('.auth-form > form > [type="email"]').click();
   cy.get('.auth-form > form > [type="email"]').type('ds.gvozdev@gmail.com');

   cy.get('.auth-form > form > [type="password"]').click();
   cy.get('.auth-form > form > [type="password"]').type('YtabuYtabu12345');

   cy.get('.auth-form__submit').should('not.be.disabled');
   cy.get('.auth-form__submit').click();

   cy.contains('Мои заказы');
        
    })

})


describe('Проверка формы логина и пароля', function () {

   it('Негативный кейс: верный логин неверный пароль', function () {
   cy.get('button.profile__nav-link').click();
   cy.contains('Ты уверен, что хочешь выйти из аккаунта?');

   cy.get('.box__button_ok').click();
   
   cy.get('.header-bottom__right--link').click();
   cy.get('.auth-form > form > [type="email"]').click();
   cy.get('.auth-form > form > [type="email"]').type('ds.gvozdev@gmail.com');

   cy.get('.auth-form > form > [type="password"]').click();
   cy.get('.auth-form > form > [type="password"]').type('YtabuYtabu12346');

   cy.get('.auth-form__submit').should('not.be.disabled');
   cy.get('.auth-form__submit').click();
   
        
    })

})