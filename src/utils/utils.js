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

const downloadBlob = (blob, filename = Date.now()) => {
  const newBlob = new Blob([blob], {
    type: 'application/octet-stream',
  })

  const link = document.createElement('a')
  link.style.display = 'none'
  link.href = URL.createObjectURL(newBlob)
  link.download = filename + '.pdf'

  document.body.appendChild(link)
  link.click()

  setTimeout(() => {
    URL.revokeObjectURL(link.href)
    link.parentNode.removeChild(link)
  }, 0)
}

module.exports = {
  addCommas,
  removeNonNumeric,
  removeCommas,
  dateInYYYYMMDD,
  downloadBlob,
}
