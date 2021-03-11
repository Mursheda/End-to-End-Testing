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
		cy.contains('Account Activity').click()
		cy.contains('Find Transactions').click()
		cy.get('h2').should('contain', 'Find Transactions')
		cy.get('#aa_description').type('Mursheda')
		cy.get('#aa_fromDate').type('2021-03-03{enter}')
		cy.get('#aa_toDate').type('2021-03-10{enter}')
		cy.get('#aa_fromAmount').type('10000')

		cy.get('#aa_toAmount').type('40000')
		cy.get('#aa_type').select('DEPOSIT')
		cy.get('button[type = "submit"]').click()
	})

	it('should show messages', () => {
		cy.get('#filtered_transactions_for_account')
			.should('be.visible')
			.and('contain', 'No results.')
	})
})
