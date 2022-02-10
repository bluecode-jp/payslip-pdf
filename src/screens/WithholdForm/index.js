import React from 'react'
import './WithholdForm.css'
import { jsPDF } from 'jspdf'

import 'jspdf-autotable'
import '../../assets/fonts/Koruri-Regular-normal'
import '../../assets/fonts/Koruri-Bold-bold'
import '../../assets/fonts/Koruri-Semibold-bold'
import '../../assets/fonts/MSMINCHO-normal'
import {
  generateTable1,
  generateTable2,
  generateTable3,
  generateTable4,
} from './tables'

function WithholdForm() {
  const onExport = async () => {
    const doc = new jsPDF()
    generateTable1(doc, { width: 80, top: 10, left: 5 })
    generateTable2(doc, { width: 80, top: 20, left: 5 })
    generateTable3(doc, { width: 120, top: 10, left: 85 })
    generateTable4(doc, { width: 120, top: 20, left: 85 })
    // --------------------------------------
    const url = `/payslip-pdf?pdfurl=${doc.output(
      'bloburl',
    )}&year=${'00'}&month=${'00'}`
    window.open(
      url,
      'window',
      'toolbar=0,location=0,scrollbars=1,statusbar=1,menubar=0,resizable=1,width=' +
        window.outerWidth +
        ',height=' +
        window.outerHeight +
        ',left=0,top=0',
    )
  }
  return (
    <div>
      <button onClick={onExport}>export</button>
    </div>
  )
}

export default WithholdForm
