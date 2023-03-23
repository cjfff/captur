export const showTime = (time?: string | number) => {
  if (!time) return ''

  const date = new Date(time)
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const second = date.getSeconds()

  const fillZero = (number) => (number.toString().length >= 2 ? number : `0${number}`)

  const timeStr = `${year}/${fillZero(month)}/${fillZero(day)} ${fillZero(hours)}:${fillZero(minutes)}:${fillZero(second)}`

  return timeStr
}
