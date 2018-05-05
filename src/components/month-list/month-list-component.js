import React from 'react'
import { func, object } from 'prop-types'
import MonthComponent from '../month/month-component'
import './month-list.css'

const MonthListComponent = ({ data, onDateSelected }) => {
  const years = Object.keys(data).reduce((_years, yearKey) => {
    const yearData = data[yearKey]

    const months = Object.keys(yearData).reduce((_months, monthKey) => {
      const monthData = yearData[monthKey]

      return [
        ..._months,
        <MonthComponent
          data={monthData}
          key={`${yearKey}${monthKey}`}
          labelFormat='MMMM'
          monthIndex={parseInt(monthKey, 10)}
          onDateSelected={onDateSelected}
          year={parseInt(yearKey, 10)}
        />
      ]
    }, [])
    return [
      ..._years,
      ...months
    ]
  }, [])

  return (
    <div id='msg-calendar__month-list'>
      { years }
    </div>
  )
}

MonthListComponent.propTypes = {
  data: object,
  onDateSelected: func
}

export default MonthListComponent
