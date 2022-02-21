import './WithholdForm.css'
import { jsPDF } from 'jspdf'
import { useState } from 'react'
import FormsGrid from './Forms/FormsGrid'

import 'jspdf-autotable'
import '../../assets/fonts/Koruri-Regular-normal'
import '../../assets/fonts/Koruri-Bold-bold'
import '../../assets/fonts/Koruri-Semibold-bold'
import '../../assets/fonts/MSMINCHO-normal'
import {
  generateForm1,
  generateForm10,
  generateForm11,
  generateForm12,
  generateForm2,
  generateForm3,
  generateForm4,
  generateForm5,
  generateForm6,
  generateForm7,
  generateForm8,
  generateForm9,
  generateHeader,
} from './Forms/FormGeneration'

function WithholdForm() {
  const [formValues, setFormValues] = useState({
    form1: {
      jyusho: '東京都中野区中野２ー３２ー２３アドレスヒルス１０３',
    },
    form2: {
      recipientNumber: '143-279-12-3242',
      jobTitle: 'ソフトエンジニア',
      name: 'Sergi Nogal',
      furigana: 'セルジ ノガル',
    },
    form3: {
      shubetsu: '給料',
      payment: { uchi: 1, sen: 1, yen: 1111 },
      amountAfter: { uchi: 2, sen: 2, yen: 2222 },
      totalDeduction: { uchi: 3, sen: 3, yen: 3333 },
      taxAmount: { uchi: 4, sen: 4, yen: 4444 },
    },
    form4: {
      deductableSpouse: {
        ari: '1',
        elegible: '2',
        roujin: '3',
        deduction: { sen: 4, yen: 5 },
      },
      dependents: {
        kids: { number: '6', elegible: '7' },
        roujin: { uchi: '8', number: '9', elegible: '10' },
        other: { number: '11', elegible: '12' },
      },
      under16: { number: '13' },
      disability: {
        tokubetsu: { uchi: '14', number: '15' },
        other: { number: '16' },
      },
      nonResidents: {
        number: '17',
      },
    },
    form5: {
      socialInsurance: { sen: 1, yen: 111 },
      lifeInsurance: { sen: 2, yen: 222 },
      earthquakeInsurance: { sen: 3, yen: 333 },
      specialDeduction: { sen: 4, yen: 444 },
    },
    form6: {
      summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    },
    form7: {
      newLifeInsurance: 111,
      oldLifeInsurance: 222,
      longTermCare: 333,
      individualAnnuity: 444,
      oldIndividualAnnuity: 555,
    },
    form8: {
      specialDeductions: 111,
      startOfResidence1: { day: '20', month: '05', year: '1993' },
      kubun1: 222,
      yearEndBalance1: 333,
      specialDeductibleAmount: 111,
      startOfResidence2: { day: '22', month: '05', year: '1993' },
      kubun2: 222,
      yearEndBalance2: 333,
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
  })
  const onExport = async () => {
    const doc = new jsPDF()
    generateHeader(doc, { top: 10, left: 61, fontSize: 15 }, 2)
    generateForm1(
      doc,
      { width: 100, height: 18.92, top: 15, left: 5 },
      formValues.form1,
    )
    generateForm2(doc, { width: 100, top: 15, left: 105 }, formValues.form2)
    generateForm3(doc, { width: 200, top: 33.92, left: 5 }, formValues.form3)
    generateForm4(doc, { width: 200, top: 44.92, left: 5 }, formValues.form4)
    generateForm5(doc, { width: 200, top: 68, left: 5 }, formValues.form5)
    generateForm6(doc, { width: 200, top: 79, left: 5 }, formValues.form6)
    generateForm7(doc, { width: 200, top: 89, left: 5 }, formValues.form7)
    generateForm8(doc, { width: 200, top: 95, left: 5 }, formValues.form7)
    generateForm9(doc, { width: 80, top: 111.2, left: 5 }, formValues.form9)
    generateForm10(doc, { width: 120, top: 111.2, left: 85 }, formValues.form10)
    generateForm11(doc, { width: 80, top: 121.2, left: 5 }, formValues.form11)
    generateForm12(doc, { width: 120, top: 121.2, left: 85 }, formValues.form12)

    // --------------------------------------
    window.open(doc.output('bloburl'), '_blank')

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
