import moment, { Moment } from 'moment'

export interface Holiday {
  date: Moment
  text: string
  shortDateStr: string
  isOverwork?: boolean
}

export interface TimeRange {
  startDate: Moment | Date
  endDate: Moment | Date
}

const formatDateStr = (date: string | Moment | Date) => (typeof date === 'string' && /^\d{13}$/.test(date) ? +date : date)

export const getDatesDifference = (ary1: Moment[] | string[], ary2: Moment[] | string[]): Moment[] => {
  if (!ary1 || !ary2) return []
  const _ary1 = ary1.map((date) => moment(formatDateStr(date)).endOf('day').format('x'))
  const _ary2 = ary2.map((date) => moment(formatDateStr(date)).endOf('day').format('x'))
  return _ary1.filter((date) => _ary2.indexOf(date) === -1).map((date) => moment(+date))
}

export const getHolidaysInRange = (timeRange: Array<Moment | Date | string>): Holiday[] => {
  if (!timeRange || !timeRange[0] || !timeRange[1]) return []

  let cur_date = null
  const [startDate, endDate] = timeRange
  const holidays = JSON.parse(localStorage.getItem('holidays') || '{}')
  const res = []

  let eDate = endDate

  if (typeof eDate !== 'object') eDate = moment(formatDateStr(eDate)).toDate()

  while (cur_date === null || (eDate && cur_date < eDate)) {
    if (!cur_date) {
      cur_date = moment(formatDateStr(startDate)).endOf('day').toDate()
    } else {
      cur_date = moment(formatDateStr(cur_date)).endOf('day').add(24, 'hour').toDate()
    }

    const weekday = moment(cur_date).weekday()
    const shortDateStr = moment(cur_date).format('MM-DD')
    const holiday = holidays[shortDateStr]
    const date = moment(cur_date)

    if (holiday) {
      res.push({ date, text: holiday.name, shortDateStr, isOverwork: holiday.name.indexOf('补班') !== -1 ? true : false })
    } else {
      if (weekday === 5) res.push({ date, text: '周六', shortDateStr })
      if (weekday === 6) res.push({ date, text: '周日', shortDateStr })
    }
  }

  // console.log('res:', res)
  // console.log('holidaysStr:', holidays)

  return res
}

export const getWorkingDays = (timeRange: string[]) => {
  const holidays = getHolidaysInRange(timeRange)

  if (timeRange && timeRange[0] && timeRange[1]) {
    return moment(formatDateStr(timeRange[1])).diff(formatDateStr(timeRange[0]), 'day') + 1 - holidays.length
  } else {
    return 0
  }
}
