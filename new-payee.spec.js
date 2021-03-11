describe('New Payee Test', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.url().should('include', 'index.html')
		cy.get('#signin_button').click()

		cy.fixture('user').then(user => {
			const username = user.id
			const password = user.psw

			cy.get('#user_login').type('username')
			cy.get('#user_password').type('password')
			cy.get('#user_remember_me').click()
			cy.contains('Sign in').click()
		})
	})

	it('should add new payee to the list', () => {
		cy.contains('Pay Bills').click()
		cy.contains('Add New Payee').click()
		cy.get('#np_new_payee_name').type('Khushal')
		cy.get('#np_new_payee_address').type('Germany')
		cy.get('#np_new_payee_account').type('123456')
		cy.get('#np_new_payee_details').type('Money money')
		cy.get('#add_new_payee').click()
	})

	it('should show success message', () => {
		cy.get('#alert_content')
			.should('be.visible')
			.and('contain', 'The new payee Khushal was successfully created.')
	})
})
