describe('My first test', function() {
	it('Vists the page', function() {
		cy.visit('/')
		cy.get('#test').contains('cypress').should('be.visible')
	})
})