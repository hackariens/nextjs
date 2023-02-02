describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://nextjs.traefik.me');
    cy.screenshot('first-page');
  })
})