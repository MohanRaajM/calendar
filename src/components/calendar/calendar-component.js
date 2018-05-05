import React, { Component } from 'react'
import { string as stringType } from 'prop-types'
import { listeners, utils } from './calendar-functions'
import MonthListComponent from '../month-list/month-list-component'
import './calendar.scss'

class Calendar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      data: {}
    }
  }

  componentWillMount () {
    const component = this
	const data = utils.fetchData('04/01/2018', 1)
    component.setState({data})
  }

  render () {
    const { data } = this.state
    return (
      <div id="msg-calendar">
        <MonthListComponent data={data} />
      </div>
    )
  }
}

export default Calendar
