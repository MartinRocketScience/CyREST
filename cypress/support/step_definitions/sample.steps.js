import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import SamplePage from '../page_objects/samplePage';

const ctx = new SamplePage();

Then('the response body should contain the title {string}', (title) => {
  ctx.checkResponseBodyTitle(title);
});
