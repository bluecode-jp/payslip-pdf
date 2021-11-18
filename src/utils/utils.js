const addCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
const removeNonNumeric = num => num.toString().replace(/[^0-9]/g, '')
const removeCommas = num => num.toString().replace(/,/g, '')
const dateInYYYYMMDD = () => {
  function twoDigit(n) {
    return (n < 10 ? '0' : '') + n
  }

  let now = new Date()
  return (
    '' +
    now.getFullYear() +
    twoDigit(now.getMonth() + 1) +
    twoDigit(now.getDate())
  )
}

module.exports = { addCommas, removeNonNumeric, removeCommas, dateInYYYYMMDD }
