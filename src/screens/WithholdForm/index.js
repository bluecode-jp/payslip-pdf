import './WithholdForm.css'
import { jsPDF } from 'jspdf'
import { useState } from 'react'
import FormsGrid from './Forms/FormsGrid'
import {
  generateTable1,
  generateTable2,
  generateTable3,
  generateTable4,
} from './Forms/generateFormsPDF'

import 'jspdf-autotable'
import '../../assets/fonts/Koruri-Regular-normal'
import '../../assets/fonts/Koruri-Bold-bold'
import '../../assets/fonts/Koruri-Semibold-bold'
import '../../assets/fonts/MSMINCHO-normal'

function WithholdForm() {
  const [formValues, setFormValues] = useState({
    header: {
      date: { year: null, month: null },
      company: null,
      organization: null,
      employeeNumber: null,
      name: null,
      transferAccount: null,
    },
    employmentStatus: {
      workDays: 0,
      holidays: { days: 0, hours: 0 },
    },
    personalSituation: {
      qualification: null,
      contractClassification: null,
    },
    toBePaid: {
      baseSalary: 0,
      qualificationSalary: 0,
      roleSalary: 0,
      evaluationSalary: 0,
      total: 0,
    },
    toBeDeducted: {
      healthInsurance: 0,
      longTermCare: 0,
      pension: 0,
      employmentInsurance: 0,
      total: 0,
    },
    breakdown: {
      dormitoryFee: 0,
      companyHousingExpenses: 0,
    },
    commute: {
      monthlyFee: 0,
      monthlyTaxableFee: 0,
    },
    oshirase: '',
  })
  const onExport = async () => {
    const doc = new jsPDF()
    generateTable1(doc, { width: 80, top: 10, left: 5 })
    generateTable2(doc, { width: 80, top: 20, left: 5 })
    generateTable3(doc, { width: 120, top: 10, left: 85 })
    generateTable4(doc, { width: 120, top: 20, left: 85 })
    // --------------------------------------
    const url = `/payslip-pdf?pdfurl=${doc.output('bloburl')}`
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
      <FormsGrid {...{ formValues, setFormValues }} />
      <button onClick={onExport}>export</button>
    </div>
  )
}

export default WithholdForm
