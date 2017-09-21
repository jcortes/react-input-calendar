import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Calendar from '../index'
import '../../style/index.css'

storiesOf('Calendar', module).add('default view', () => {
  return <Calendar format="MMM, D YYYY" date="01/01/2016" />
})
