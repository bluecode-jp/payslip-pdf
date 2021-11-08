const addCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
const removeNonNumeric = num => num.toString().replace(/[^0-9]/g, '')
const removeCommas = num => num.toString().replace(/,/g, '')

module.exports = { addCommas, removeNonNumeric, removeCommas }
