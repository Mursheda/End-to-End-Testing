describe('Testing Currency Exchange', () => {
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

	it('Should exchange currency', () => {
		cy.contains('Pay Bills').click()
		cy.contains('Purchase Foreign Currency').click()
		cy.get('h2').should('contain', 'Purchase foreign currency cash')
		cy.get('#pc_currency').select('EUR')
		cy.get('#pc_amount').type('500')
		cy.get('#pc_inDollars_true').click()

		cy.get('#pc_calculate_costs').click()
		cy.get('#pc_conversion_amount')
			.should('be.visible')
			.and('contain', '360.70 euro (EUR) = 500.00 U.S. dollar (USD)')

		cy.get('#purchase_cash').click()
	})

	it('should show success message', () => {
		cy.get('#alert_content')
			.should('be.visible')
			.and('contain', 'Foreign currency cash was successfully purchased.')
	})
})
