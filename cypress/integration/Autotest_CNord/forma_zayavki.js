
describe('Проверка заказа демо-комплекта Nord Max', function () {

   it('Позитивный тест. Ввод валидных данных', function () {
   cy.visit('https://www.cnord.ru/');
   cy.get('.home-nord-gsm-air > h2 > .link-white').should('not.be.disabled');
   cy.get('.home-nord-gsm-air > h2 > .link-white').click();
   cy.get('._w-710 > .button').should('not.be.disabled');
   cy.get('._w-710 > .button').click();
   cy.get('.b24-web-form-popup-btn-8').click();
   cy.get('.b24-form-header-title');

   cy.get('.b24-form-field-name > :nth-child(1) > :nth-child(1) > .b24-form-control-container > .b24-form-control').click();
   cy.get('.b24-form-field-name > :nth-child(1) > :nth-child(1) > .b24-form-control-container > .b24-form-control').type('Иван');

   cy.get('.b24-form-field-last-name > :nth-child(1) > :nth-child(1) > .b24-form-control-container > .b24-form-control').click();
   cy.get('.b24-form-field-last-name > :nth-child(1) > :nth-child(1) > .b24-form-control-container > .b24-form-control').type('Петров');

   cy.get('.b24-form-field-company-name > :nth-child(1) > :nth-child(1) > .b24-form-control-container > .b24-form-control').click();
   cy.get('.b24-form-field-company-name > :nth-child(1) > :nth-child(1) > .b24-form-control-container > .b24-form-control').type('Рога и копыта');

   cy.get('.b24-form-field-list > :nth-child(1) > :nth-child(1) > .b24-form-control-container > .b24-form-control').click();
   
   cy.get(':nth-child(3) > .b24-form-control-list-selector-item-title > span').click();

   cy.get('.b24-form-field-phone > :nth-child(1) > :nth-child(1) > .b24-form-control-container > .b24-form-control').click();
   cy.get('.b24-form-field-phone > :nth-child(1) > :nth-child(1) > .b24-form-control-container > .b24-form-control').type('89991112233');

   cy.get('.b24-form-field-email > :nth-child(1) > :nth-child(1) > .b24-form-control-container > .b24-form-control').click();
   cy.get('.b24-form-field-email > :nth-child(1) > :nth-child(1) > .b24-form-control-container > .b24-form-control').type('rtyeu@mail.ru');

   cy.get('form > .b24-form-btn-container > .b24-form-btn-block > .b24-form-btn').should('not.be.disabled');
   cy.get('form > .b24-form-btn-container > .b24-form-btn-block > .b24-form-btn').click();

   
   
        
    })

})
