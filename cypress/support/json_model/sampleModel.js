class SampleModel{
    /**
     * Checks if the API response body contains the specified title.
     * @param {string} title - The title to verify in the response body.
     */
    checkResponseBodyTitle(title) {
        cy.get('@apiRequest').its('body').should('have.property', 'title', title);
    }
}
  
export default SampleModel;
