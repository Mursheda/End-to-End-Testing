describe('Transfer funds testing', () => {
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

	it('should exchange currency', () => {
		cy.contains('Transfer Funds').click()
		cy.get('h2').should('contain', 'Transfer Money & Make Payments')
		cy.get('#tf_fromAccountId').select('Checking(Avail. balance = $ -500.2)')
		cy.get('#tf_toAccountId').select('Checking(Avail. balance = $ -500.2)')
		cy.get('#tf_amount').type('1500')
		cy.get('#tf_description').type('transfer done')
		cy.get('#btn_submit').click()
	})

	it('should verify the submission', () => {
		cy.url().should('include', 'transfer-funds-verify.html')
		cy.get('h2').should('contain', 'Transfer Money & Make Payments - Verify')
		cy.get('.btn-primary').click()
	})

	// it('should show successful message of submission', () => {
	// 	cy.url().should('include', 'transfer-funds-confirm.html')
	// 	cy.get('.alert-success')
	// 		.should('be.visible')
	// 		.and('contain', 'You successfully submitted your transaction.')
	// })
})
