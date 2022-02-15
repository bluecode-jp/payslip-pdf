import './WithholdForm.css'
// import { jsPDF } from 'jspdf'
import { useState } from 'react'
import FormsGrid from './Forms/FormsGrid'
// import {
//   generateTable1,
//   generateTable2,
//   generateTable3,
//   generateTable4,
// } from './Forms/generateFormsPDF'

import 'jspdf-autotable'
import '../../assets/fonts/Koruri-Regular-normal'
import '../../assets/fonts/Koruri-Bold-bold'
import '../../assets/fonts/Koruri-Semibold-bold'
import '../../assets/fonts/MSMINCHO-normal'

function WithholdForm() {
  const [formValues, setFormValues] = useState({
    form1: {
      furigana: '',
      name: '',
      kubun: null,
    },
    form2: {
      totalIncome: 0,
      pension: 0,
      insurance: 0,
      basicDeduction: 0,
      adjustment: 0,
    },
    form3: {
      1: { furigana: '', name: '', kubun: null },
      2: { furigana: '', name: '', kubun: null },
      3: { furigana: '', name: '', kubun: null },
      4: { furigana: '', name: '', kubun: null },
    },
    form4: {
      1: { furigana: '', name: '', kubun: null },
      2: { furigana: '', name: '', kubun: null },
      3: { furigana: '', name: '', kubun: null },
      4: { furigana: '', name: '', kubun: null },
    },
  })
  const onExport = async () => {
    console.log(formValues)
    // const doc = new jsPDF()
    // generateTable1(doc, { width: 80, top: 10, left: 5 })
    // generateTable2(doc, { width: 80, top: 20, left: 5 })
    // generateTable3(doc, { width: 120, top: 10, left: 85 })
    // generateTable4(doc, { width: 120, top: 20, left: 85 })
    // // --------------------------------------
    // const url = `/payslip-pdf?pdfurl=${doc.output('bloburl')}`
    // window.open(
    //   url,
    //   'window',
    //   'toolbar=0,location=0,scrollbars=1,statusbar=1,menubar=0,resizable=1,width=' +
    //     window.outerWidth +
    //     ',height=' +
    //     window.outerHeight +
    //     ',left=0,top=0',
    // )
  }
  return (
    <div className={'withhold-form-wrapper'}>
      <FormsGrid {...{ formValues, setFormValues }} />
      <button onClick={onExport}>export</button>
    </div>
  )
}

export default WithholdForm
