import { combineEpics } from 'redux-observable';

import asyncComponent from '../../../../components/containers/AsyncComponent/AsyncComponent';
import { themeClientUrls } from '../../config/clientUrls';

import { fetchPatientTestResultsDetailEpic } from './ducks/fetch-patient-test-results-detail.duck';
import { fetchPatientTestResultsEpic } from './ducks/fetch-patient-test-results.duck';

import patientsTestResults from './ducks/fetch-patient-test-results.duck';
import testResultsDetail from './ducks/fetch-patient-test-results-detail.duck';

const epics = combineEpics(fetchPatientTestResultsDetailEpic, fetchPatientTestResultsEpic);
const TestResults = asyncComponent(() => import(/* webpackChunkName: "results" */ './Results').then(module => module.default));

const reducers = {
  patientsTestResults,
  testResultsDetail
};

const sidebarConfig = { key: 'results', pathToTransition: '/results', name: 'Results', isVisible: true };

const routers = [
  { key: 'testResults', component: TestResults, path: `${themeClientUrls.PATIENTS}/:userId/${themeClientUrls.RESULTS}` },
  { key: 'testResultsDetail', component: TestResults, path: `${themeClientUrls.PATIENTS}/:userId/${themeClientUrls.RESULTS}/:sourceId` },
];

export default {
  component: TestResults,
  epics, reducers, sidebarConfig, routers,
}

