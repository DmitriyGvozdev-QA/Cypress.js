
describe('Проверка формы логина', function () {

   it('Позитивный кейс: верный логин верный пароль', function () {
   cy.visit('https://login.qa.studio/');
   cy.get('#mail').type('german@dolnikov.ru');
   cy.get('#loginButton').should('be.disabled');
   cy.get('#pass').type('iLoveqastudio1');
   cy.get('#loginButton').should('not.be.disabled');
   cy.get('#loginButton').click();

   cy.contains('Авторизация прошла успешно');
   cy.get('#exitMessageButton > .exitIcon');
        
    })

})



describe('Проверка формы логина', function () {

   it('Негативный кейс: верный логин неверный пароль', function () {
   cy.reload();
   cy.get('#mail').type('german@dolnikov.ru');
   cy.get('#loginButton').should('be.disabled');
   cy.get('#pass').type('iLoveqastudio2');
   cy.get('#loginButton').should('not.be.disabled');
   cy.get('#loginButton').click();

   cy.contains('Такого логина или пароля нет');
   cy.get('#exitMessageButton > .exitIcon').click();
   cy.contains('Форма логина');
        
    })

})



describe('Проверка формы логина', function () {

   it('Негативный кейс: неверный логин верный пароль', function () {
   cy.reload();
   cy.get('#mail').type('german@dolnikov1.ru');
   cy.get('#loginButton').should('be.disabled');
   cy.get('#pass').type('iLoveqastudio1');
   cy.get('#loginButton').should('not.be.disabled');
   cy.get('#loginButton').click();

   cy.contains('Такого логина или пароля нет');
   cy.get('#exitMessageButton > .exitIcon').click();
   cy.contains('Форма логина');
    })

})



describe('Проверка формы логина', function () {

   it('Позитивный кейс: восстановление пароля', function () {
   cy.reload();
   cy.get('#forgotEmailButton').click();
   cy.get('#forgotForm > .header');
   cy.get('#exitMessageButton > .exitIcon');
   cy.get('#mailForgot').type('german@dolnikov.ru');
   cy.get('#restoreEmailButton').click();
   cy.contains('Успешно отправили пароль на e-mail');
   cy.get('#exitMessageButton > .exitIcon').click();
   cy.contains('Форма логина');         
  
        
    })

})







