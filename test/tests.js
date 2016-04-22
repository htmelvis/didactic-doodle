/* globals describe it */

import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import sinon from 'sinon'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
/* shallow is fast just grab an obj and check if it is rendering correctly
 render will show you everything fully rendered
 mount will test all the way down through all components render */

import App from '../app/components/app.jsx'

describe('<App />', () => {
  it('Displays the welcome message', () => {
    const wrapper = render(<App/>)
    expect(wrapper.text()).to.contain('Welcome')
  })
})
