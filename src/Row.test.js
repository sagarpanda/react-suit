import React from 'react';
//import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Row from './Row';

Enzyme.configure({ adapter: new Adapter() });

import {shallow} from 'enzyme';


test('<Row />', () => {
  //const component = renderer.create(<Row>Facebook</Row>);
  //let tree = component.toJSON();
  //expect(tree).toMatchSnapshot();

  const cm = shallow(<Row>Facebook</Row>);
  expect(cm.text()).toEqual('Facebook');
});
