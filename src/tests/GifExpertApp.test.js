import React from 'react'
import { shallow } from 'enzyme'
import GifExpertApp from './../components/GifExpertApp';
import './../setupTests'

describe('Testing the GifExpertApp component', () => {
    
    test('Checking the component is rendered correctly', () => {

        const wrapper = shallow(<GifExpertApp />);
        wrapper.find('#addCategory').simulate('click')
        expect(wrapper).toHaveLength(1)
    
    })

    test('handleAddCategory update the state of the categories with onClick event', () => {

        const wrapper = shallow(<GifExpertApp />);
        wrapper.find('#addCategory').simulate('click')
        expect(wrapper.find('#categories').text().includes('New category')).toBe(true)
    
    })

})