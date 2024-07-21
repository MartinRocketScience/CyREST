class SampleModel{
    checkResponseBodyTitle(title) {
        cy.get('@apiRequest').its('body').should('have.property', 'title', title);
    }
}
  
export default SampleModel;
