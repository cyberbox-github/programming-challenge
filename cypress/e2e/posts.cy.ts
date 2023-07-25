import { DATA_TEST_POST_CARD_ID } from '../../src/constants'
import posts from '../../db/post.json'

describe('SSG test: Posts page', () => {
  it('should visit', () => {
    cy.visit('/')
  })

  it('should render by SSG for the Posts page', async () => {
    cy.visit('/')
    cy.get(`[data-testid=${DATA_TEST_POST_CARD_ID}]`).each((item, index) => {
      cy.wrap(item).should('contain.text', posts[index].content)
    })
  })
})
