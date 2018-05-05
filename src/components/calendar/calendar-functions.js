import moment from 'moment'

function fetchData (date, noOfMonths) {
	const dateStart = moment(date, 'MM/DD/YYYY')
	const dateEnd = moment(dateStart).add(noOfMonths, 'month');
	const dateValues = {}
	while (dateEnd > dateStart) {
		const year = parseInt(dateStart.format('YYYY'))
		const month = dateStart.format('MM')
		const monthIndex = parseInt(month) - 1
		const noOfDays = dateStart.daysInMonth()
		const footer = ''
		const isDisabled = true
		if(!dateValues[year]) dateValues[year] = {}
		if(!dateValues[year][monthIndex]) dateValues[year][monthIndex] = {}

		for(let dayOfMonth = 1; dayOfMonth <= noOfDays; dayOfMonth++){
			dateValues[year][monthIndex][dayOfMonth] = {
				isDisabled,
				dayOfMonth,
				monthIndex,
				year,
				footer
			}
		}
		dateStart.add(1, 'month')
	}
	return dateValues;
}

export const utils = {
  fetchData
}
