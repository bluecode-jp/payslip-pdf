import '../../assets/fonts/Koruri-Regular-normal'
import '../../assets/fonts/Koruri-Bold-bold'
import '../../assets/fonts/Koruri-Semibold-bold'
import './PayslipForm.css'
import 'jspdf-autotable'

import { jsPDF } from 'jspdf'
import FormsGrid from '../../components/FormsGrid'
import { useState } from 'react'

const PayslipForm = () => {
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
      workDays: null,
      holidays: { days: null, hours: null },
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
  })

  const onExport = async () => {
    const doc = new jsPDF()
    doc.setFont('Koruri-Regular', 'normal')

    // ------------------- Date and Company -------------------
    doc.setFontSize(12)
    doc.text(
      `${formValues.header.date.year || '00'}年${
        formValues.header.date.month || '00'
      }月度   給料明細`,
      10,
      10,
    )
    doc.setFontSize(10)
    doc.text(`${formValues.header.company || ''} 株式会社`, 10, 18)
    // ------------------- Header -------------------
    doc.setFontSize(8)
    doc.text(`所属   ${formValues.header.organization || ''}`, 10, 24)
    doc.text(`従業員番号   ${formValues.header.employeeNumber || ''}`, 10, 30)
    doc.text(`氏名   ${formValues.header.name || ''}   様`, 65, 30)
    doc.text(`振込口座   ${formValues.header.transferAccount || ''}`, 10, 36)
    doc.rect(100, 5, 100, 33, 'S')
    // ------------------- Table 1 -------------------
    doc.autoTable({
      //   theme: 'grid',
      startY: 42,
      tableWidth: 62,
      margin: { left: 10, right: 10 },
      tableLineColor: 'black',
      tableLineWidth: 0.01,
      headStyles: {
        halign: 'center',
        valign: 'middle',
        font: 'Koruri-Regular',
        fontStyle: 'normal',
        fillColor: 'black',
      },
      alternateRowStyles: { fillColor: '#e5f3fe' },
      styles: {
        valign: 'middle',
        font: 'Koruri-Regular',
        fontStyle: 'normal',
        cellPadding: 0.3,
        fontSize: 5,
      },
      columnStyles: {
        // 0: { fillColor: '#e5f3fe' },
        1: { halign: 'right', cellWidth: 20 },
      },
      head: [
        [
          {
            content:
              '雇用状況                                                            08/21 - 09/20',
            colSpan: 2,
          },
        ],
      ],
      body: [
        ['出勤日数 (日)', `${formValues.employmentStatus.workDays || 0}`],
        ['計画休日（日）', `${formValues.employmentStatus.holidays.days || 0}`],
        [
          '計画休日（時）',
          `${formValues.employmentStatus.holidays.hours || 0}`,
        ],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
      ],
    })
    // ------------------- Table 2 (to the right) -------------------
    doc.autoTable({
      //   theme: 'grid',
      startY: 42,
      tableWidth: 62,
      margin: { left: 74, right: 10 },
      tableLineColor: 'black',
      tableLineWidth: 0.01,
      headStyles: {
        halign: 'center',
        valign: 'middle',
        font: 'Koruri-Regular',
        fontStyle: 'normal',
        fillColor: 'black',
      },
      alternateRowStyles: { fillColor: '#e5f3fe' },
      styles: {
        valign: 'middle',
        font: 'Koruri-Regular',
        fontStyle: 'normal',
        cellPadding: 0.3,
        fontSize: 5,
      },
      columnStyles: {
        // 0: { fillColor: '#e5f3fe' },
        1: { halign: 'right', cellWidth: 20 },
      },
      head: [
        [
          {
            content: '支給項目',
            colSpan: 2,
          },
        ],
      ],
      body: [
        ['基本給', `${formValues.toBePaid.baseSalary}`],
        ['資格給', `${formValues.toBePaid.qualificationSalary}`],
        ['役割給', `${formValues.toBePaid.roleSalary}`],
        ['評価給', `${formValues.toBePaid.evaluationSalary}`],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
      ],
    })

    // ------------------- Table 3 (to the right) -------------------
    doc.autoTable({
      //   theme: 'grid',
      startY: 42,
      tableWidth: 62,
      margin: { left: 138, right: 10 },
      tableLineColor: 'black',
      tableLineWidth: 0.01,
      headStyles: {
        halign: 'center',
        valign: 'middle',
        font: 'Koruri-Regular',
        fontStyle: 'normal',
        fillColor: 'black',
      },
      alternateRowStyles: { fillColor: '#e5f3fe' },
      styles: {
        valign: 'middle',
        font: 'Koruri-Regular',
        fontStyle: 'normal',
        cellPadding: 0.3,
        fontSize: 5,
      },
      columnStyles: {
        // 0: { fillColor: '#e5f3fe' },
        1: { halign: 'right', cellWidth: 20 },
      },
      head: [
        [
          {
            content: '控除項目',
            colSpan: 2,
          },
        ],
      ],
      body: [
        ['健康保険料', `${formValues.toBeDeducted.healthInsurance}`],
        ['介護保険料', `${formValues.toBeDeducted.longTermCare}`],
        ['厚生年金保険料', `${formValues.toBeDeducted.pension}`],
        ['雇用保険料', `${formValues.toBeDeducted.employmentInsurance}`],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
      ],
    })
    // ------------------- Table 4 (second row) -------------------
    doc.autoTable({
      //   theme: 'grid',
      startY: 105,
      tableWidth: 62,
      margin: { left: 10, right: 10 },
      tableLineColor: 'black',
      tableLineWidth: 0.01,
      headStyles: {
        halign: 'center',
        valign: 'middle',
        font: 'Koruri-Regular',
        fontStyle: 'normal',
        fillColor: 'black',
      },
      alternateRowStyles: { fillColor: '#e5f3fe' },
      styles: {
        valign: 'middle',
        font: 'Koruri-Regular',
        fontStyle: 'normal',
        cellPadding: 0.3,
        fontSize: 5,
      },
      columnStyles: {
        // 0: { fillColor: '#e5f3fe' },
        1: { halign: 'right', cellWidth: 20 },
      },
      head: [
        [
          {
            content: '本人状況',
            colSpan: 2,
          },
        ],
      ],
      body: [
        ['資格 / 等級', `${formValues.personalSituation.qualification || ''}`],
        [
          '契約区分',
          `${formValues.personalSituation.contractClassification || ''}`,
        ],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
      ],
    })

    // ------------------- Table 5 (second row, to the right) -------------------
    doc.autoTable({
      theme: 'plain',
      showHead: 'never',
      startY: 150,
      tableWidth: 62,
      tableLineColor: 'black',
      tableLineWidth: 0.01,
      margin: { left: 74, right: 10 },
      styles: {
        valign: 'middle',
        font: 'Koruri-Semibold',
        fontStyle: 'bold',
        cellPadding: 0.5,
        fontSize: 6,
      },
      columnStyles: {
        // 0: { fillColor: '#f5f5f5' },
        0: { fillColor: '#e5f3fe' },
        1: { halign: 'right', cellWidth: 20 },
      },
      head: [
        [
          {
            content: '',
            colSpan: 2,
          },
        ],
      ],
      body: [['支給合計', `${formValues.toBePaid.total}`]],
    })
    // ------------------- Table 6 (second row, to the right) -------------------
    doc.autoTable({
      theme: 'plain',
      showHead: 'never',
      startY: 150,
      tableWidth: 62,
      tableLineColor: 'black',
      tableLineWidth: 0.01,
      margin: { left: 138, right: 10 },
      styles: {
        valign: 'middle',
        font: 'Koruri-Semibold',
        fontStyle: 'bold',
        cellPadding: 0.5,
        fontSize: 6,
      },
      columnStyles: {
        // 0: { fillColor: '#f5f5f5' },
        0: { fillColor: '#e5f3fe' },
        1: { halign: 'right', cellWidth: 20 },
      },
      head: [
        [
          {
            content: '',
            colSpan: 2,
          },
        ],
      ],
      body: [['控除合計 ', `${formValues.toBeDeducted.total}`]],
    })
    // ------------------- Table 7 (bottom of table 6) -------------------
    doc.autoTable({
      theme: 'plain',
      showHead: 'never',
      startY: 155,
      tableWidth: 62,
      tableLineColor: 'black',
      tableLineWidth: 0.01,
      margin: { left: 138, right: 10 },
      styles: {
        valign: 'middle',
        font: 'Koruri-Semibold',
        fontStyle: 'bold',
        cellPadding: 0.5,
        fontSize: 6,
      },
      columnStyles: {
        // 0: { fillColor: '#f5f5f5' },
        0: { fillColor: '#e5f3fe' },
        1: { halign: 'right', cellWidth: 20 },
      },
      head: [
        [
          {
            content: '',
            colSpan: 2,
          },
        ],
      ],
      body: [
        [
          '差引支給額',
          `${formValues.toBePaid.total - formValues.toBeDeducted.total}`,
        ],
      ],
    })

    // ------------------- Table 8 (third row) -------------------
    doc.autoTable({
      //   theme: 'grid',
      startY: 170,
      tableWidth: 126,
      margin: { left: 10, right: 10 },
      tableLineColor: 'black',
      tableLineWidth: 0.01,
      headStyles: {
        halign: 'center',
        valign: 'middle',
        font: 'Koruri-Regular',
        fontStyle: 'normal',
        fillColor: 'black',
      },
      alternateRowStyles: { fillColor: '#e5f3fe' },
      styles: {
        valign: 'middle',
        font: 'Koruri-Regular',
        fontStyle: 'normal',
        cellPadding: 0.3,
        fontSize: 5,
      },
      columnStyles: {
        // 0: { fillColor: '#e5f3fe' },
        1: { halign: 'right', cellWidth: 20 },
      },
      head: [
        [
          {
            content: '支給 / 控除内訳欄（日給月給）・ 時間給情報（時間給）',
            colSpan: 2,
          },
        ],
      ],
      body: [
        ['寮費 / 社宅費', ''],
        ['社宅費 本人', ''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
      ],
    })

    // ------------------- Table 9 (To the right) -------------------
    doc.autoTable({
      //   theme: 'grid',
      startY: 170,
      tableWidth: 62,
      margin: { left: 138, right: 10 },
      tableLineColor: 'black',
      tableLineWidth: 0.01,
      headStyles: {
        halign: 'center',
        valign: 'middle',
        font: 'Koruri-Regular',
        fontStyle: 'normal',
        fillColor: 'black',
      },
      alternateRowStyles: { fillColor: '#e5f3fe' },
      styles: {
        valign: 'middle',
        font: 'Koruri-Regular',
        fontStyle: 'normal',
        cellPadding: 0.3,
        fontSize: 5,
      },
      columnStyles: {
        // 0: { fillColor: '#e5f3fe' },
        1: { halign: 'right', cellWidth: 20 },
      },
      head: [
        [
          {
            content: '通勤費補助情報非課税額',
            colSpan: 2,
          },
        ],
      ],
      body: [
        ['今月度通勤費非課税額', ''],
        ['今月度通勤費課税額', ''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
      ],
    })

    // ------------------- Table 10 (fourth row) -------------------
    doc.autoTable({
      theme: 'plain',
      startY: 235,
      margin: { left: 10, right: 10 },
      tableLineColor: 'black',
      tableLineWidth: 0.01,
      headStyles: {
        halign: 'center',
        valign: 'middle',
        font: 'Koruri-Regular',
        fontStyle: 'normal',
        fillColor: '#d2eafd',
      },
      styles: {
        valign: 'middle',
        font: 'Koruri-Regular',
        fontStyle: 'normal',
        cellPadding: 0.3,
        fontSize: 5,
      },
      columnStyles: {
        // 0: { fillColor: '#e5f3fe' },
        1: { halign: 'right', cellWidth: 20 },
      },
      head: [
        [
          {
            content: 'お知らせ',
            colSpan: 1,
          },
        ],
      ],
      body: [
        [
          {
            content: '',
            // Dynamic height of nested tables are not supported right now
            // so we need to define height of the parent cell
            styles: { minCellHeight: 45 },
          },
        ],
      ],
    })

    // --------------------------------------

    window.open(doc.output('bloburl'), '_blank')
    // doc.output('dataurlnewwindow')
    // doc.save(Date.now() + '.pdf')
  }

  return (
    <div className={'payslip-form-wrapper'}>
      <button onClick={onExport}>Export PDF</button>
      <div className={'header-wrapper'}>
        <h2>給料明細</h2>
        <div>
          <input
            type="number"
            style={{ width: '4rem' }}
            min={1993}
            placeholder="2021"
            onChange={e =>
              setFormValues(prevState => {
                const formValues = { ...prevState }
                formValues.header.date.year = e.target.value
                return formValues
              })
            }
          />
          <label>年</label>
          <input
            type="number"
            style={{ width: '3rem' }}
            min={1}
            max={12}
            placeholder="09"
            onChange={e =>
              setFormValues(prevState => {
                const formValues = { ...prevState }
                formValues.header.date.month = e.target.value
                return formValues
              })
            }
          />
          <label>月度</label>
        </div>
        <div>
          <input
            type="text"
            placeholder="ACME"
            onChange={e =>
              setFormValues(prevState => {
                const formValues = { ...prevState }
                formValues.header.company = e.target.value
                return formValues
              })
            }
          />
          <label>株式会社</label>
        </div>
        <div>
          <label>所属</label>
          <input
            type="text"
            placeholder="ACME"
            onChange={e =>
              setFormValues(prevState => {
                const formValues = { ...prevState }
                formValues.header.organization = e.target.value
                return formValues
              })
            }
          />
        </div>
        <div>
          <label>従業員番号</label>
          <input
            type="text"
            placeholder="02494681733942"
            onChange={e =>
              setFormValues(prevState => {
                const formValues = { ...prevState }
                formValues.header.employeeNumber = e.target.value
                return formValues
              })
            }
          />
          <label>氏名</label>
          <input
            type="text"
            placeholder="John Doe"
            onChange={e =>
              setFormValues(prevState => {
                const formValues = { ...prevState }
                formValues.header.name = e.target.value
                return formValues
              })
            }
          />
          <label>様</label>
        </div>
        <div>
          <label>振込口座</label>
          <input
            type="text"
            placeholder="02494681733942"
            onChange={e =>
              setFormValues(prevState => {
                const formValues = { ...prevState }
                formValues.header.transferAccount = e.target.value
                return formValues
              })
            }
          />
        </div>
      </div>
      <FormsGrid {...{ formValues, setFormValues }} />
    </div>
  )
}

export default PayslipForm
