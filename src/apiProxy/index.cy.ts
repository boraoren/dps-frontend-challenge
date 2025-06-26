/// <reference types="cypress" />

describe('Get users from backend', () => {
	it('should load users on the frontend', () => {
		cy.visit('http://localhost:51111173'); // or wherever your UI runs

		cy.intercept('POST', '**/users').as('getUsers');

		cy.wait('@getUsers').then((interception) => {
			expect(interception.response?.statusCode).to.eq(200);
		});

		cy.contains('Bora'); // assuming "Bora" is rendered
	});
});
