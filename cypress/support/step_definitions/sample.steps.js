import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import SampleModel from '../json_model/sampleModel';

const ctx = new SampleModel();

Then('the response body should contain the title {string}', (title) => {
  ctx.checkResponseBodyTitle(title);
});
