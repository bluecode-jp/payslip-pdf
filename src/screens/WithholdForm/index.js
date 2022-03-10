import './WithholdForm.css'
import axios from 'axios'
import { jsPDF } from 'jspdf'
import { useState } from 'react'
import FormsGrid from './FormsGrid'
import {
  generateHeader,
  generateForm1,
  generateForm2,
  generateForm3,
  generateForm4,
  generateForm5,
  generateForm6,
  generateForm7,
  generateForm8,
  generateForm9,
  generateForm10,
  generateForm11,
  generateForm12,
  generateForm13,
  generateForm14,
} from './Forms/FormGeneration'

import 'jspdf-autotable'
import '../../assets/fonts/Koruri-Regular-normal'
import '../../assets/fonts/Koruri-Bold-bold'
import '../../assets/fonts/Koruri-Semibold-bold'
import '../../assets/fonts/MSMINCHO-normal'

function WithholdForm() {
  const [formValues, setFormValues] = useState({
    header: { year: 0 },
    form1: {
      jyusho: '',
    },
    form2: {
      recipientNumber: '',
      jobTitle: '',
      name: '',
      furigana: '',
    },
    form3: {
      shubetsu: '',
      payment: { uchi: 0, sen: 0, yen: 0 },
      amountAfter: { uchi: 0, sen: 0, yen: 0 },
      totalDeduction: { uchi: 0, sen: 0, yen: 0 },
      taxAmount: { uchi: 0, sen: 0, yen: 0 },
    },
    form4: {
      deductableSpouse: {
        ari: '',
        elegible: '',
        roujin: '',
        deduction: { sen: 0, yen: 0 },
      },
      dependents: {
        kids: { number: 0, elegible: 0 },
        roujin: { uchi: 0, number: 0, elegible: 0 },
        other: { number: 0, elegible: 0 },
      },
      under16: { number: 0 },
      disability: {
        tokubetsu: { uchi: 0, number: 0 },
        other: { number: 0 },
      },
      nonResidents: {
        number: 0,
      },
    },
    form5: {
      socialInsurance: { sen: 0, yen: 0 },
      lifeInsurance: { sen: 0, yen: 0 },
      earthquakeInsurance: { sen: 0, yen: 0 },
      specialDeduction: { sen: 0, yen: 0 },
    },
    form6: {
      summary: '',
    },
    form7: {
      newLifeInsurance: 0,
      oldLifeInsurance: 0,
      longTermCare: 0,
      individualAnnuity: 0,
      oldIndividualAnnuity: 0,
    },
    form8: {
      specialDeductions: 0,
      startOfResidence1: { day: '', month: '', year: '' },
      kubun1: 0,
      yearEndBalance1: 0,
      specialDeductibleAmount: 0,
      startOfResidence2: { day: '', month: '', year: '' },
      kubun2: 0,
      yearEndBalance2: 0,
    },
    form9: {
      furigana: '',
      name: '',
      kubun: '',
    },
    form10: {
      totalIncome: 0,
      pension: 0,
      insurance: 0,
      basicDeduction: 0,
      adjustment: 0,
    },
    form11: {
      1: { furigana: '', name: '', kubun: '' },
      2: { furigana: '', name: '', kubun: '' },
      3: { furigana: '', name: '', kubun: '' },
      4: { furigana: '', name: '', kubun: '' },
    },
    form12: {
      1: { furigana: '', name: '', kubun: '' },
      2: { furigana: '', name: '', kubun: '' },
      3: { furigana: '', name: '', kubun: '' },
      4: { furigana: '', name: '', kubun: '' },
    },
    form13: {
      minor: '',
      foreigner: '',
      deathRetirement: '',
      disasterVictim: '',
      otsuran: '',
      disability: { special: '', other: '' },
      widow: '',
      singleParent: '',
      workingStudent: '',
      midOrRetirement: {
        searching: '',
        retired: '',
        year: '',
        month: '',
        day: '',
      },
      beneficiary: {
        number: '',
        year: '',
        month: '',
        day: '',
      },
    },
    form14: {
      jyusho: '',
      name: '',
      phone: '',
    },
  })
  const onExport = async () => {
    const doc = new jsPDF()
    generateHeader(
      doc,
      { top: 15, left: 61, fontSize: 15 },
      formValues.header.year,
    )
    generateForm1(
      doc,
      { width: 100, height: 18.92, top: 25, left: 5 },
      formValues.form1,
    )
    generateForm2(doc, { width: 100, top: 25, left: 105 }, formValues.form2)
    generateForm3(doc, { width: 200, top: 43.92, left: 5 }, formValues.form3)
    generateForm4(doc, { width: 200, top: 57.92, left: 5 }, formValues.form4)
    generateForm5(doc, { width: 200, top: 81, left: 5 }, formValues.form5)
    generateForm6(doc, { width: 200, top: 95, left: 5 }, formValues.form6)
    generateForm7(doc, { width: 200, top: 105, left: 5 }, formValues.form7)
    generateForm8(doc, { width: 200, top: 111, left: 5 }, formValues.form8)
    generateForm9(doc, { width: 80, top: 127.2, left: 5 }, formValues.form9)
    generateForm10(doc, { width: 120, top: 127.2, left: 85 }, formValues.form10)
    generateForm11(doc, { width: 80, top: 137.2, left: 5 }, formValues.form11)
    generateForm12(doc, { width: 120, top: 137.2, left: 85 }, formValues.form12)
    generateForm13(doc, { width: 200, top: 177.2, left: 5 }, formValues.form13)
    generateForm14(doc, { width: 200, top: 195.3, left: 5 }, formValues.form14)

    // --------------------------------------

    // --------------------------------------
    // AxiosでPOST APIを呼び出す
    // --------------------------------------

    const URL = 'http://localhost:3003/pdf/upload-file' // <-- APIのURL
    const blob = doc.output('blob')
    const data = new FormData()
    data.append('file', blob, `${Date.now().toString()}.pdf`)
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
    // --------------------------------------
    // AxiosでPromiseを使って、APIを呼び出す
    // --------------------------------------

    // axios
    //   .post(URL, data, config)
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err))

    // --------------------------------------
    // AxiosでAsync/Awaitを使って、APIを呼び出す
    // --------------------------------------

    try {
      const res = await axios.post(URL, data, config)
      console.log(res)
    } catch (err) {
      console.log(err)
    }

    // --------------------------------------
    // URLで開く
    // --------------------------------------

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
