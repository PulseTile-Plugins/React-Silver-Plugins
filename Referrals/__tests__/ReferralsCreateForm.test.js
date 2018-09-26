import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import configureStore from 'redux-mock-store';

import ReferralsCreateForm from '../ReferralsCreate/ReferralsCreateForm';
import { valuesNames, valuesLabels } from '../forms.config';
import { getDDMMMYYYY } from '../../../../../utils/time-helpers.utils';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();
const store = mockStore({});
const DATE_TO_USE = new Date('2017');
const DATE_TO_USE_TIME = DATE_TO_USE.getTime();
global.Date = jest.fn(() => DATE_TO_USE);

const FORM_NAME = 'referralsCreateForm';
const DATE_FORMAT = 'DD-MMM-YYYY';

const testProps = {
  isSubmit: false,
};

const CONVERT_DATE = getDDMMMYYYY(DATE_TO_USE_TIME);

describe('Component <ReferralsCreateForm />', () => {
  it('should renders with props correctly', () => {
    const component = shallow(
      <ReferralsCreateForm
        store={store}
        isSubmit={testProps.isSubmit}
      />).dive().dive().dive();

    expect(component.find('Field')).toHaveLength(7);
    expect(component.find('form')).toHaveLength(1);
    expect(component.find('form').prop('name')).toEqual(FORM_NAME);

    expect(component.find('Field').at(0).props().name).toEqual(valuesNames.FROM);
    expect(component.find('Field').at(0).props().id).toEqual(valuesNames.FROM);
    expect(component.find('Field').at(0).props().label).toEqual(valuesLabels.FROM);
    expect(component.find('Field').at(0).props().props.isSubmit).toEqual(false);

    expect(component.find('Field').at(1).props().name).toEqual(valuesNames.TO);
    expect(component.find('Field').at(1).props().id).toEqual(valuesNames.TO);
    expect(component.find('Field').at(1).props().label).toEqual(valuesLabels.TO);
    expect(component.find('Field').at(1).props().props.isSubmit).toEqual(false);

    expect(component.find('Field').at(2).props().name).toEqual(valuesNames.DATE);
    expect(component.find('Field').at(2).props().id).toEqual(valuesNames.DATE);
    expect(component.find('Field').at(2).props().label).toEqual(valuesLabels.DATE);
    expect(component.find('Field').at(2).props().props.isSubmit).toEqual(false);
    expect(component.find('Field').at(2).props().props.format).toEqual(DATE_FORMAT);

    expect(component.find('Field').at(3).props().name).toEqual(valuesNames.REASON);
    expect(component.find('Field').at(3).props().id).toEqual(valuesNames.REASON);
    expect(component.find('Field').at(3).props().label).toEqual(valuesLabels.REASON);
    expect(component.find('Field').at(3).props().props.isSubmit).toEqual(false);

    expect(component.find('Field').at(4).props().name).toEqual(valuesNames.SUMMARY);
    expect(component.find('Field').at(4).props().id).toEqual(valuesNames.SUMMARY);
    expect(component.find('Field').at(4).props().label).toEqual(valuesLabels.SUMMARY);
    expect(component.find('Field').at(4).props().props.isSubmit).toEqual(false);

    expect(component.find('Field').at(5).props().name).toEqual(valuesNames.AUTHOR);
    expect(component.find('Field').at(5).props().id).toEqual(valuesNames.AUTHOR);
    expect(component.find('Field').at(5).props().label).toEqual(valuesLabels.AUTHOR);
    expect(component.find('Field').at(5).props().props.isSubmit).toEqual(false);
    expect(component.find('Field').at(5).props().props.disabled).toEqual(true);

    expect(component.find('Field').at(6).props().name).toEqual(valuesNames.DATE_CREATED);
    expect(component.find('Field').at(6).props().id).toEqual(valuesNames.DATE_CREATED);
    expect(component.find('Field').at(6).props().label).toEqual(valuesLabels.DATE_CREATED);
    expect(component.find('Field').at(6).props().props.isSubmit).toEqual(false);
    expect(component.find('Field').at(6).props().props.disabled).toEqual(true);
    expect(component.find('Field').at(6).props().props.value).toEqual(CONVERT_DATE);
    expect(component.find('Field').at(6).props().props.format).toEqual(DATE_FORMAT);

    expect(component).toMatchSnapshot();
  });

  it('should renders correctly when form is submitted', () => {
    const component = shallow(
      <ReferralsCreateForm
        store={store}
        isSubmit
      />).dive().dive().dive();
    expect(component.find('Field')).toHaveLength(7);
    expect(component.find('form')).toHaveLength(1);
    expect(component.find('form').prop('name')).toEqual(FORM_NAME);

    expect(component.find('Field').at(0).props().props.isSubmit).toEqual(true);
    expect(component.find('Field').at(1).props().props.isSubmit).toEqual(true);
    expect(component.find('Field').at(2).props().props.isSubmit).toEqual(true);
    expect(component.find('Field').at(3).props().props.isSubmit).toEqual(true);
    expect(component.find('Field').at(4).props().props.isSubmit).toEqual(true);
    expect(component.find('Field').at(5).props().props.isSubmit).toEqual(true);
    expect(component.find('Field').at(6).props().props.isSubmit).toEqual(true);

    expect(component).toMatchSnapshot();
  });
});

