import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import CommonMethods from '../helpers/commonMethods';

const ctx = new CommonMethods();

When('I send a GET request to {string}', (endpoint) => {
    ctx.sendGetRequest(endpoint);
});

When('I send a AUTH GET request to {string}', (endpoint) => {
    ctx.sendGetRequestAuth(endpoint);
});

When('I send a POST request to {string} with body:', (endpoint, body) => {
    ctx.sendPostRequest(endpoint, JSON.parse(body));
});

When('I send a AUTH POST request to {string} with body:', (endpoint, body) => {
    ctx.sendPostRequestAuth(endpoint, JSON.parse(body));
});

When('I send a PUT request to {string} with body:', (endpoint, body) => {
    ctx.sendPutRequest(endpoint, JSON.parse(body));
});

When('I send a AUTH PUT request to {string} with body:', (endpoint, body) => {
    ctx.sendPutRequestAuth(endpoint, JSON.parse(body));
});

When('I send a PATCH request to {string} with body:', (endpoint, body) => {
    ctx.sendPatchRequest(endpoint, JSON.parse(body));
});

When('I send a AUTH PATCH request to {string} with body:', (endpoint, body) => {
    ctx.sendPatchRequestAuth(endpoint, JSON.parse(body));
});

When('I send a DELETE request to {string}', (endpoint) => {
    ctx.sendDeleteRequest(endpoint);
});

When('I send a AUTH DELETE request to {string}', (endpoint) => {
    ctx.sendDeleteRequestAuth(endpoint);
});

Then('the response status should be {int}', (statusCode) => {
    ctx.checkResponseStatus(statusCode);
});
