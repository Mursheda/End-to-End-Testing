describe('Feedback Test', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.contains('Feedback').click()
	})

	it('Should load feedback form', () => {
		cy.get('form').should('be.visible')
		// cy.url().should('include','feedback.html')
		// cy.wait(1000)
	})

	it('Should fill feedback form', () => {
		cy.get('#name').type('Mursheda', { delay: 50 })
		cy.get('#email').type('mursheda@gmail.com', { delay: 50 })
		cy.get('#subject').type('Important', { delay: 50 })
		cy.get('#comment').type('Send me all the documents as soon as possible.')
		cy.wait(1000)
	})
	it('Should submit feedback form', () => {
		//cy.contains('Send Message').click()
		cy.get('.btn-signin').click()
	})

	it('should display feedback message', () => {
		cy.get('#feedback-title').contains('Feedback')
	})
})
