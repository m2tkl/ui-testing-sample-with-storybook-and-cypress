
describe('Nuxt logo component ui test', () => {
  context('sample test', () => {
    it('should match prev screenshot', () => {
      const url = 'http://localhost:3003/?path=/story/nuxt-logo--default'
      cy.visit(url)

      cy.get('#storybook-preview-iframe', { timeout: 10000 })
        .should('be.visible')
        .matchImageSnapshot()
    })
  })
})
