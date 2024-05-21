describe('Teste da tela de pesquisa', () => {
  before(() => {

    cy.visit('/');

  })
  it('Redirecionar a minha tela para a tela de busca', () => {

    cy.get("[href='/Search']").click()

    cy.scrollTo("top")
  })

  it('Procurar por uma musica', () => {
    cy.get("[data-testid='campoBusca']")
  });
})

