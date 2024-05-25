describe('English announcement bar', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('.hb-announcement').as('announcements')
      .should('have.length', 2)
    cy.get('@announcements').eq(0)
      .should('contain', 'Plain Text')
    cy.get('@announcements').eq(1)
      .should('have.attr', 'href', 'https://hbstack.dev/')
      .should('contain', 'HB Framework')
  })
})

describe('Chinese announcement bar', () => {
  it('passes', () => {
    cy.visit('/zh-hans/')
    cy.get('.hb-announcement').as('announcements')
      .should('have.length', 2)
    cy.get('@announcements').eq(0)
      .should('contain', '纯文本')
    cy.get('@announcements').eq(1)
      .should('have.attr', 'href', 'https://hbstack.dev/')
      .should('contain', 'HB 框架')
  })
})

describe('French announcement bar', () => {
  it('passes', () => {
    cy.visit('/fr/')
    cy.get('.hb-announcement').should('have.length', 0)
  })
})
