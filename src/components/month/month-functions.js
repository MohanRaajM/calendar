import React from 'react'

export function padDays (calendar, numOfDaysToPad, padWith) {
  const _calendar = [...calendar]

  for (var d = 0; d < numOfDaysToPad; d++) {
    _calendar.push(<padWith key={Math.random()} />)
  }

  return _calendar
}

export function addDayOfWeekLabels (calendar, className) {
  const _calendar = [...calendar]
  const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']

  daysOfWeek.forEach(dayLabel => _calendar.push(<li className={className} key={dayLabel}>{dayLabel}</li>))

  return _calendar
}
