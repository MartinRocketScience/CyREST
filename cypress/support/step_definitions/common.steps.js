import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import CommonMethods from '../helpers/commonMethods';

const ctx = new CommonMethods();

/**
 * Sends a GET request to the specified endpoint without authentication.
 * @param {string} endpoint - The URL endpoint to send the GET request to.
 */
When('I send a GET request to {string}', (endpoint) => {
    ctx.sendGetRequest(endpoint);
});

/**
 * Sends an authenticated GET request to the specified endpoint.
 * @param {string} endpoint - The URL endpoint to send the authenticated GET request to.
 */
When('I send a AUTH GET request to {string}', (endpoint) => {
    ctx.sendGetRequestAuth(endpoint);
});

/**
 * Sends a POST request to the specified endpoint with the provided JSON body without authentication.
 * @param {string} endpoint - The URL endpoint to send the POST request to.
 * @param {string} body - The JSON string to be parsed into an object and used as the request body.
 */
When('I send a POST request to {string} with body:', (endpoint, body) => {
    ctx.sendPostRequest(endpoint, JSON.parse(body));
});

/**
 * Sends an authenticated POST request to the specified endpoint with the provided JSON body.
 * @param {string} endpoint - The URL endpoint to send the authenticated POST request to.
 * @param {string} body - The JSON string to be parsed into an object and used as the request body.
 */
When('I send a AUTH POST request to {string} with body:', (endpoint, body) => {
    ctx.sendPostRequestAuth(endpoint, JSON.parse(body));
});

/**
 * Sends a PUT request to the specified endpoint with the provided JSON body without authentication.
 * @param {string} endpoint - The URL endpoint to send the PUT request to.
 * @param {string} body - The JSON string to be parsed into an object and used as the request body.
 */
When('I send a PUT request to {string} with body:', (endpoint, body) => {
    ctx.sendPutRequest(endpoint, JSON.parse(body));
});

/**
 * Sends an authenticated PUT request to the specified endpoint with the provided JSON body.
 * @param {string} endpoint - The URL endpoint to send the authenticated PUT request to.
 * @param {string} body - The JSON string to be parsed into an object and used as the request body.
 */
When('I send a AUTH PUT request to {string} with body:', (endpoint, body) => {
    ctx.sendPutRequestAuth(endpoint, JSON.parse(body));
});

/**
 * Sends a PATCH request to the specified endpoint with the provided JSON body without authentication.
 * @param {string} endpoint - The URL endpoint to send the PATCH request to.
 * @param {string} body - The JSON string to be parsed into an object and used as the request body.
 */
When('I send a PATCH request to {string} with body:', (endpoint, body) => {
    ctx.sendPatchRequest(endpoint, JSON.parse(body));
});

/**
 * Sends an authenticated PATCH request to the specified endpoint with the provided JSON body.
 * @param {string} endpoint - The URL endpoint to send the authenticated PATCH request to.
 * @param {string} body - The JSON string to be parsed into an object and used as the request body.
 */
When('I send a AUTH PATCH request to {string} with body:', (endpoint, body) => {
    ctx.sendPatchRequestAuth(endpoint, JSON.parse(body));
});

/**
 * Sends a DELETE request to the specified endpoint without authentication.
 * @param {string} endpoint - The URL endpoint to send the DELETE request to.
 */
When('I send a DELETE request to {string}', (endpoint) => {
    ctx.sendDeleteRequest(endpoint);
});

/**
 * Sends an authenticated DELETE request to the specified endpoint.
 * @param {string} endpoint - The URL endpoint to send the authenticated DELETE request to.
 */
When('I send a AUTH DELETE request to {string}', (endpoint) => {
    ctx.sendDeleteRequestAuth(endpoint);
});

/**
 * Checks if the response status code of the previously made request matches the expected status code.
 * @param {number} statusCode - The expected HTTP status code.
 */
Then('the response status should be {int}', (statusCode) => {
    ctx.checkResponseStatus(statusCode);
});
