import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Hello from '../src/components/HelloWorld'

import React from 'react'

import { describe, it } from '@jest/globals'



describe('Hello', () => {
    it('renders a heading', () => {
        const component = render(<Hello />)
    
        expect(component.container).toHaveTextContent('Hello')
        expect(component.container).toHaveTextContent('World')
    })
})

