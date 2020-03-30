/**
 *  Date Display 
 * @param String dateStr Elasticsearch datetime string. such as: 2019-07-05T00:29:45.042092
 * */
function dateDisplay(dateStr, complete=false) {
  console.log('date display:', dateStr)
  const now = new Date()
  const d = new Date(dateStr)
  
  if (now.getFullYear() === d.getFullYear() && now.getDate() == d.getDate() && now.getDate() === d.getDate()) {
    return todayDisplay(d)
  } else {
    return historyDisplay(d, complete)
  }
}

function todayDisplay(dateObj) {
  let hour = dateObj.getHours()
  let minute = dateObj.getMinutes()
  return numberDisplay(hour) + ':' + numberDisplay(minute)
}

function historyDisplay(dateObj, complete) {
  const monthDay =  numberDisplay((dateObj.getMonth() + 1)) + '/' + numberDisplay(dateObj.getDate())
  const yearMonthDay = dateObj.getFullYear().toString() + '/' + monthDay
  if (complete) {
    return yearMonthDay + ' ' + todayDisplay(dateObj)
  } else {
    const now = new Date()
    if (dateObj.getFullYear() === now.getFullYear()) {
      return monthDay
    } else {
      return yearMonthDay
    }
  }
  
}

function numberDisplay(num) {
 if (num < 10) {
   return '0' + num.toString()
 }else {
   return num.toString()
 }
}

export default {
  dateDisplay,
}