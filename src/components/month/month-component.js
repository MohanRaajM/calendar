import React from 'react'
import { func, number, object, string } from 'prop-types'
import DayComponent from '../day/day-component'
import { padDays, addDayOfWeekLabels } from './month-functions'
import moment from 'moment'
import './month.scss'

const MonthComponent = ({ cssClassPrefix = 'msg', data, labelFormat, onDateSelected, monthIndex, year }) => {
  const CLASSNAME = `${cssClassPrefix}__calendar-month`
  const CLASSNAME_MONTH_LABEL = `${CLASSNAME}__label`
  const CLASSNAME_DAY_OF_WEEK_LABEL = `${CLASSNAME}__day-of-week-label`
  const firstDateOfMonth = new Date(year, monthIndex, 1)
  const lastDateOfMonth = new Date(year, monthIndex + 1, 0)
  const lastDayOfMonth = lastDateOfMonth.getDate()
  const padDaysLeft = firstDateOfMonth.getDay()
  const padDaysRight = 6 - lastDateOfMonth.getDay()
  const label = labelFormat
    ? moment(firstDateOfMonth).format(labelFormat)
    : ''

  let days = addDayOfWeekLabels([], CLASSNAME_DAY_OF_WEEK_LABEL)

  days = padDays(days, padDaysLeft, DayComponent)

  for (var d = 1; d <= lastDayOfMonth; d++) {
    const dayData = data[d] || { dayOfMonth: d }
    days.push(<DayComponent key={d} data={dayData} onDateSelected={onDateSelected} />)
  }

  days = padDays(days, padDaysRight, DayComponent)

  return (
    <div>
      <h2 className={CLASSNAME_MONTH_LABEL}>{label}</h2>
      <ul className={CLASSNAME}>{days}</ul>
    </div>
  )
}

MonthComponent.propTypes = {
  cssClassPrefix: string,
  data: object,
  labelFormat: string,
  onDateSelected: func,
  monthIndex: number.isRequired,
  year: number
}

export default MonthComponent
