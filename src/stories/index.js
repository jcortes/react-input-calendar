import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Calendar from '../index'
import '../../style/index.css'

storiesOf('Calendar', module).add('default view', () => {
  return <Calendar maxDate="01/01/2016" 
    format="MMM, DD YYYY" date="01/01/2016" />
})
