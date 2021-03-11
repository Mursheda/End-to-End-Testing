describe('Payment Test', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.url().should('include', 'index.html')
		cy.get('#signin_button').click()

		cy.fixture('user').then(user => {
			const username = user.id
			const password = user.psw

			cy.login(username, password)
		})
	})

	it('should make payment', () => {
		cy.contains('Pay Bills').click()
		cy.contains('Pay Saved Payee').should('be.visible')
		cy.get('#sp_payee').select('Apple')
		cy.get('#sp_account').select('Checking')
		cy.get('#sp_amount').type('10000')
		cy.get('#sp_date').type('20-02-2021{enter}')
		cy.get('#sp_description').type('axa cabhc shbas')
		cy.get('#pay_saved_payees').click()
	})

	it('should show messages', () => {
		cy.get('#alert_content')
			.should('be.visible')
			.and('contain', 'The payment was successfully submitted.')
	})
})
