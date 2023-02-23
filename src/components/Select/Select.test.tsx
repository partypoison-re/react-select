import React from 'react'
import { render } from '@testing-library/react'

import Select from './Select'

describe('Select', () => {
    test('Render the Select component', () => {
        render(<Select placeholder='Hello world!' />)
    })
})