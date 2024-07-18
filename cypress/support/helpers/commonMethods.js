class CommonMethods {
    constructor() {
        /**
         * Common authorization headers for all authenticated requests.
         */
        this.authHeaders = {
            'Authorization': `Bearer ${Cypress.env('BEARER_TOKEN')}`
        };
    }

    /**
     * Sends a GET request to the specified endpoint without authentication.
     * @param {string} endpoint - The URL endpoint to send the request to.
     */
    sendGetRequest(endpoint) {
        cy.request(endpoint).as('apiRequest');
    }

    /**
     * Sends a GET request to the specified endpoint with authentication.
     * @param {string} endpoint - The URL endpoint to send the request to.
     */
    sendGetRequestAuth(endpoint) {
        cy.request({
            method: 'GET',
            url: endpoint,
            headers: this.authHeaders
        }).as('apiRequest');
    }
    
    /**
     * Sends a POST request to the specified endpoint with the provided body without authentication.
     * @param {string} endpoint - The URL endpoint to send the request to.
     * @param {Object} body - The body of the request.
     */
    sendPostRequest(endpoint, body) {
        cy.request('POST', endpoint, body).as('apiRequest');
    }

    /**
     * Sends a POST request to the specified endpoint with the provided body and authentication.
     * @param {string} endpoint - The URL endpoint to send the request to.
     * @param {Object} body - The body of the request.
     */
    sendPostRequestAuth(endpoint, body) {
        cy.request({
            method: 'POST',
            url: endpoint,
            body: body,
            headers: this.authHeaders
        }).as('apiRequest');
    }

    /**
     * Sends a PUT request to the specified endpoint with the provided body without authentication.
     * @param {string} endpoint - The URL endpoint to send the request to.
     * @param {Object} body - The body of the request.
     */
    sendPutRequest(endpoint, body) {
        cy.request('PUT', endpoint, body).as('apiRequest');
    }

    /**
     * Sends a PUT request to the specified endpoint with the provided body and authentication.
     * @param {string} endpoint - The URL endpoint to send the request to.
     * @param {Object} body - The body of the request.
     */
    sendPutRequestAuth(endpoint, body) {
        cy.request({
            method: 'PUT',
            url: endpoint,
            body: body,
            headers: this.authHeaders
        }).as('apiRequest');
    }
    
    /**
     * Sends a PATCH request to the specified endpoint with the provided body without authentication.
     * @param {string} endpoint - The URL endpoint to send the request to.
     * @param {Object} body - The body of the request.
     */
    sendPatchRequest(endpoint, body) {
        cy.request('PATCH', endpoint, body).as('apiRequest');
    }

    /**
     * Sends a PATCH request to the specified endpoint with the provided body and authentication.
     * @param {string} endpoint - The URL endpoint to send the request to.
     * @param {Object} body - The body of the request.
     */
    sendPatchRequestAuth(endpoint, body) {
        cy.request({
            method: 'PATCH',
            url: endpoint,
            body: body,
            headers: this.authHeaders
        }).as('apiRequest');
    }
    
    /**
     * Sends a DELETE request to the specified endpoint without authentication.
     * @param {string} endpoint - The URL endpoint to send the request to.
     */
    sendDeleteRequest(endpoint) {
        cy.request('DELETE', endpoint).as('apiRequest');
    }

    /**
     * Sends a DELETE request to the specified endpoint with authentication.
     * @param {string} endpoint - The URL endpoint to send the request to.
     */
    sendDeleteRequestAuth(endpoint) {
        cy.request({
            method: 'DELETE',
            url: endpoint,
            headers: this.authHeaders
        }).as('apiRequest');
    }
    
    /**
     * Checks the HTTP status code of a previously made request.
     * @param {number} statusCode - The expected status code to validate.
     */
    checkResponseStatus(statusCode) {
        cy.get('@apiRequest').its('status').should('eq', statusCode);
    }
}

export default CommonMethods;
