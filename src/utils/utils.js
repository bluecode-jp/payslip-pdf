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

// 新しいdownloadBlob関数

const downloadBlob = (blob, filename = Date.now()) => {
  const newBlob = new Blob([blob], {
    type: 'application/octet-stream',
  }) // MIME Type octet-streamに変更 (iOSのSafariダウンロードできるため)
  var reader = new FileReader() // iOSのChrome/EdgeダウンロードできるためFileReaderでBlobを読む
  reader.onloadend = () => {
    // window.location.href = reader.result
    const link = document.createElement('a') // HTMLの<a>を作って
    link.style.display = 'none' // サイトに見せないため、display = none
    link.href = reader.result // クライアント(ブラウザ) のメモリに保存された blobに アクセス可能なURLを生成
    link.download = filename + '.pdf' // iOSのChrome/Edge downloadのAttributeは使えないので、ダウンロードしたファイルは".pdf"はなくなります
    document.body.appendChild(link) // DOMに追加します
    link.click() // リンクをクリック
    link.parentNode.removeChild(link) //DOMで削除します
  }
  reader.readAsDataURL(newBlob)
}

// 前のdownloadBlob関数

// const downloadBlob = (blob, filename = Date.now()) => {
//   const newBlob = new Blob([blob], {
//     type: 'application/octet-stream',
//   }) // MIME Type octet-streamに変更
//   const link = document.createElement('a') // HTMLの<a>を作って
//   link.style.display = 'none' // サイトに見せないため、display = none
//   link.href = URL.createObjectURL(newBlob) // クライアント(ブラウザ) のメモリに保存された blobに アクセス可能なURLを生成
//   link.download = filename + '.pdf'

//   document.body.appendChild(link) // DOMに追加します
//   link.click() // URLのリンクをクリック

//   setTimeout(() => {
//     URL.revokeObjectURL(link.href) // URL.revokeObjectURL を使ってメモリ開放
//     link.parentNode.removeChild(link) //DOMで削除します
//   }, 0)
// }

module.exports = {
  addCommas,
  removeNonNumeric,
  removeCommas,
  dateInYYYYMMDD,
  downloadBlob,
}
