import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Calendar from '../index'
import '../../style/index.css'

storiesOf('Calendar', module).add('default view', () => {
  return <div>
      <Calendar
      maxDate="09/26/2017"
      format="MMM, DD YYYY"
      date="09/26/2017"
      disabled={false}
      closeOnSelect={true}
    />
  </div>
})
