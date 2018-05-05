import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './day.scss'

class DayComponent extends Component {
  render () {
    const {
      additionalCssClassNames = '',
      cssClassPrefix = 'msg',
      data = {}
    } = this.props
    const CLASSNAME = `${cssClassPrefix}__calendar-day`
    const CLASSNAME_STATE_ENABLED = `${CLASSNAME}__enabled`
    const CLASSNAME_STATE_DISABLED = `${CLASSNAME}__disabled`

    const { dayOfMonth, footer } = data

    const stateClassName = cssClassPrefix + '__' + (data.isDisabled !== true
      ? CLASSNAME_STATE_ENABLED
      : CLASSNAME_STATE_DISABLED)

    const visibilityClassName = isNaN(dayOfMonth)
      ? `${CLASSNAME}__blank`
      : ''

    return (
      <li className={`${CLASSNAME} ${stateClassName} ${visibilityClassName} ${additionalCssClassNames}`} key={Math.random()} onClick={onClick.bind(this)}>
        <span className={`${CLASSNAME}__number`}>{ dayOfMonth || '' }</span>
        <span className={`${CLASSNAME}__footer`}>{ footer || '' }</span>
      </li>
    )
  }
}

DayComponent.propTypes = {
  additionalCssClassNames: PropTypes.string,
  cssClassPrefix: PropTypes.string,
  data: PropTypes.object,
  onDateSelected: PropTypes.func,
  type: PropTypes.string
}

function onClick () {
  if (this.props.data.date) this.props.onDateSelected(this.props.data.date)
}

export default DayComponent
