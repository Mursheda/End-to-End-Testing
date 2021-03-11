describe('Password Test', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/index.html')
	})

	it('should click on the signing button ', () => {
		cy.get('#signin_button').click()
	})

	it('should click on forgotten password', () => {
		cy.get('.offset3 > a').click() //combining classes with another different selectors
	})

	it('should fill email form', () => {
		cy.get('#user_email').type('test.email@gmail.com')
	})

	it('should submit the form', () => {
		cy.contains('Send Password').click()
	})
})
