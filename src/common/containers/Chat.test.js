import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import { expect } from 'chai'
import { mount } from 'enzyme'

import { Chat } from './Chat'

describe('My Component', function () {
  it('finds the child', () => {
    const wrapper = mount(<Chat />)

    expect(wrapper.contains(<content className='chat' />)).to.equal(true)
  })
})
