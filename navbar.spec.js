describe('Navbar Test', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/index.html')
	})

	it('should navigate to Online banking', () => {
		cy.contains('Online Banking').click()
		cy.url().should('include', 'online-banking.html')
		cy.get('h1').should('be.visible')
		cy.wait(2000)
	})

	it('should navigate to Feedback', () => {
		cy.contains('Feedback').click()
		cy.url().should('include', 'feedback.html')
		cy.wait(2000)
	})

	it('should navigate to HOME PAGE', () => {
		cy.contains('Zero Bank').click()
		cy.url().should('include', 'index.html')
		cy.wait(2000)
	})
})
