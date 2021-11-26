import '../../assets/fonts/Koruri-Regular-normal'
import '../../assets/fonts/Koruri-Bold-bold'
import '../../assets/fonts/Koruri-Semibold-bold'
import '../../assets/fonts/MSMINCHO-normal'
import './PayslipForm.css'
import 'jspdf-autotable'

import { jsPDF } from 'jspdf'
import FormsGrid from '../../components/FormsGrid'
import { useState } from 'react'

// ____________________ Text 設定 ____________________

const PAYSLIP_TEXT_TOP = 10 // [XX年XX月度   給料明細] 上から何ミリ
const PAYSLIP_TEXT_LEFT = 10 // [XX年XX月度   給料明細] 左から何ミリ

const COMPANY_TEXT_TOP = 18 // [XX株式会社] 上から何ミリ
const COMPANY_TEXT_LEFT = PAYSLIP_TEXT_LEFT // [XX株式会社] 左から何ミリ

const ORGANIZATION_TEXT_TOP = 24 // [所属] 上から何ミリ
const ORGANIZATION_TEXT_LEFT = PAYSLIP_TEXT_LEFT // [所属] 左から何ミリ

const EMPLOYEE_NUM_TEXT_TOP = 30 // [従業員番号] 上から何ミリ
const EMPLOYEE_NUM_TEXT_LEFT = PAYSLIP_TEXT_LEFT // [従業員番号] 左から何ミリ

const NAME_TEXT_TOP = 30 // [氏名   XX   様] 上から何ミリ
const NAME_TEXT_LEFT = 65 // [氏名   XX   様] 左から何ミリ

const TRANSFER_ACC_TEXT_TOP = 36 // [振込口座] 上から何ミリ
const TRANSFER_ACC_TEXT_LEFT = PAYSLIP_TEXT_LEFT // [振込口座] 左から何ミリ

// ____________________________________________________

// ____________________ Rectangle 設定 ____________________

const RECTANGLE_TOP = 5
const RECTANGLE_LEFT = 100
const RECTANGLE_WIDTH = 100
const RECTANGLE_HEIGHT = 33

// ____________________________________________________

// ____________________ Table 設定 ____________________

const TABLE_HEADER_TEXT_COLOR = '#ffffff'
const TABLE_10_HEADER_TEXT_COLOR = '#000000'
const TABLE_CONTENT_TEXT_COLOR = '#000000'

/**
 *
 Table1 -> 雇用状況
 Table2 -> 支給項目
 Table3 -> 控除項目
 Table4 -> 本人状況
 Table5 -> 支給合計
 Table6 -> 控除合計
 Table7 -> 差引支給額
 Table8 -> 支給 / 控除内訳欄(日給月給)・ 時間給情報(時間給
 Table9 -> 通勤費補助情報非課税額
 Table10 -> お知らせ

  __________________________________________________________________________________________
  |           Table1            |           Table2            |           Table3            |
  |_____________________________|_____________________________|_____________________________|
  |           Table4            |            Table5           |            Table6           |
  |                             |                             |_____________________________|
  |                             |                             |            Table7           |
  |_____________________________|_____________________________|_____________________________|
  |                             Table8                        |            Table9           |
  |___________________________________________________________|_____________________________|
  |                                       Table10                                           |
  |_________________________________________________________________________________________|

 */

const ONE_TWO_THREE_TOP = 42 // [Table1, Table2, Table3] 上から何ミリ
const ONE_TWO_THREE_LEFT = 10 // [Table1, Table2, Table3] 左から何ミリ
const ONE_TWO_THREE_WIDTH = 62 // [Table1, Table2, Table3] 幅何ミリ

const FOUR_TOP = 105 // [Table4] 上から何ミリ
const FOUR_LEFT = ONE_TWO_THREE_LEFT // [Table4] 左から何ミリ
const FOUR_WIDTH = ONE_TWO_THREE_WIDTH // [Table4] 幅何ミリ

const FIVE_SIX_TOP = 150 // [Table5, Table6] 上から何ミリ
const FIVE_SIX_LEFT = FOUR_LEFT + FOUR_WIDTH + 2 // [Table5, Table6] 左から何ミリ
const FIVE_SIX_WIDTH = ONE_TWO_THREE_WIDTH // [Table5, Table6] 幅何ミリ

const SEVEN_TOP = 155 // [Table7] 上から何ミリ
const SEVEN_LEFT = FIVE_SIX_LEFT + FIVE_SIX_WIDTH + 2 // [Table7] 左から何ミリ
const SEVEN_WIDTH = ONE_TWO_THREE_WIDTH // [Table7] 幅何ミリ

const EIGHT_NINE_TOP = 170 // [Table8, Table9] 上から何ミリ
const EIGHT_NINE_LEFT = ONE_TWO_THREE_LEFT // [Table8, Table9] 左から何ミリ
const EIGHT_WIDTH = ONE_TWO_THREE_WIDTH * 2 + 2 // [Table8] 幅何ミリ
const NINE_WIDTH = ONE_TWO_THREE_WIDTH // [Table9] 幅何ミリ

const TEN_TOP = 235 // [Table10] 上から何ミリ
const TEN_HEIGHT = 54.5 // [Table10] 高さ何ミリ
const TEN_RIGHT_LEFT_MARGIN = ONE_TWO_THREE_LEFT // [Table10] 左右余白何ミリ

// ____________________________________________________

// ____________________ 破線設定 ____________________

const addDashedLine = (doc, data) => {
  /**

   data = {
     cell,
     row,
     column,
     section, // 'head'|'body'|'foot'
   }

   もっと詳しく情報: https://github.com/simonbengtsson/jsPDF-AutoTable

   */
  if (data.section == 'body' && data.row.index != 0) {
    doc.setDrawColor(0, 0, 0) // 色を変更
    doc.setLineWidth(0.2) // 線の太さ
    doc.setLineDashPattern([0.2, 0.8], 0) //破線破線のパターン. doc.setLineDashPattern([長さ何ミリ, ドットとドットの幅何ミリ], スタートの位置から何ミリ)
    // もっと詳しく情報: https://artskydj.github.io/jsPDF/docs/jsPDF.html#setLineDashPattern

    doc.line(
      data.cell.x,
      data.cell.y,
      data.cell.x + data.column.width,
      data.cell.y,
    ) // doc.line(スタートの位置左から何ミリ, スタートの位置上から何ミリ, エンドの位置左から何ミリ, エンドの位置上から何ミリ)
    // もっと詳しく情報: https://artskydj.github.io/jsPDF/docs/jsPDF.html#line

    doc.setLineDashPattern([1, 0], 0) // 破線破線のパターンをリセット (普通のラインに戻す)
  }
}

// ____________________________________________________

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
    doc.setFont('MSMINCHO', 'normal')

    // ------------------- Date and Company -------------------

    // doc.text('SOME TEXT', 左から何ミリ、上から何ミリ)
    // TEXTを追加する。
    // 例えば:
    // doc.text('こんにちは'}`, 10, 50) -> 左から１０ミリ、上から５０ミリ「こんにちは」を書きます。
    // もっと詳しく情報: http://raw.githack.com/MrRio/jsPDF/master/docs/jsPDF.html#text

    doc.setFontSize(12)
    doc.text(
      `${formValues.header.date.year || '00'}年${
        formValues.header.date.month || '00'
      }月度   給料明細`,
      PAYSLIP_TEXT_LEFT,
      PAYSLIP_TEXT_TOP,
    )
    doc.setFontSize(10)
    doc.text(
      `${formValues.header.company || ''} 株式会社`,
      COMPANY_TEXT_LEFT,
      COMPANY_TEXT_TOP,
    )
    // ------------------- Header -------------------
    doc.setFontSize(8)
    doc.text(
      `所属   ${formValues.header.organization || ''}`,
      ORGANIZATION_TEXT_LEFT,
      ORGANIZATION_TEXT_TOP,
    )
    doc.text(
      `従業員番号   ${formValues.header.employeeNumber || ''}`,
      EMPLOYEE_NUM_TEXT_LEFT,
      EMPLOYEE_NUM_TEXT_TOP,
    )
    doc.text(
      `氏名   ${formValues.header.name || ''}   様`,
      NAME_TEXT_LEFT,
      NAME_TEXT_TOP,
    )
    doc.text(
      `振込口座   ${formValues.header.transferAccount || ''}`,
      TRANSFER_ACC_TEXT_LEFT,
      TRANSFER_ACC_TEXT_TOP,
    )

    // doc.rect(左から何ミリ、上から何ミリ, 幅何ミリ, 高さ何ミリ)
    // RECTANGLEを追加する。
    // 例えば:
    // doc.rect(10, 50, 100, 10) -> 左から１０ミリ、上から５０ミリ,  幅１００ミリと高さ１０ミリの長方形を描きます。
    // もっと詳しく情報: http://raw.githack.com/MrRio/jsPDF/master/docs/jsPDF.html#rect

    doc.rect(
      RECTANGLE_LEFT,
      RECTANGLE_TOP,
      RECTANGLE_WIDTH,
      RECTANGLE_HEIGHT,
      'S',
    )

    /**
     *
     doc.autoTable({
       head: [[コラムHeaders]],
       body: [[Row内容], [Row内容]],
       他のOptions
     })
     *
     */
    // TABLEを追加する。

    // もっと詳しく情報: https://github.com/simonbengtsson/jsPDF-AutoTable

    /**
     *
     doc.autoTable({
       head: [['Name', 'Email', 'Country']],
       body: [
         ['David', 'david@example.com', 'Sweden'],
         ['Castille', 'castille@example.com', 'Spain'],
       ],
       startY: 50,
       margin: { top: 15, left: 10, right: 10, bottom: 15 },
       tableWidth: 50,
     })

     はこのような感じのTableを描きます。

      __________________________________________________________________________________________
      |            Name             |            Email            |          Country            |
      |_____________________________|_____________________________|_____________________________|
      |           David             |     david@example.com       |            Sweden           |
      |_____________________________|_____________________________|_____________________________|
      |          Castille           |   castille@example.com      |            Spain            |
      |_____________________________|_____________________________|_____________________________|

      startY: 50 -> 上から５０ミリ
      margin: { top: 15, left: 10, right: 10, bottom: 15 } ->  上余白１５ミリ, 左余白１０ミリ, 右余白１０ミリ, 下余白１５ミリ
      tableWidth: 50 -> 幅５０ミリ
     *
     */

    // ------------------- Table 1 -------------------
    doc.autoTable({
      //   theme: 'grid',
      startY: ONE_TWO_THREE_TOP,
      tableWidth: ONE_TWO_THREE_WIDTH,
      margin: { left: ONE_TWO_THREE_LEFT },
      tableLineColor: 'black',
      tableLineWidth: 0.01,
      headStyles: {
        halign: 'center',
        valign: 'middle',
        // font: 'Koruri-Regular',
        font: 'MSMINCHO',
        fontStyle: 'normal',
        textColor: TABLE_HEADER_TEXT_COLOR,
        fillColor: 'black',
      },
      alternateRowStyles: { fillColor: '#e5f3fe' },
      styles: {
        valign: 'middle',
        // font: 'Koruri-Regular',
        font: 'MSMINCHO',
        fontStyle: 'normal',
        textColor: TABLE_CONTENT_TEXT_COLOR,
        cellPadding: 0.3,
        fontSize: 5,
      },
      columnStyles: {
        // 0: { fillColor: '#e5f3fe' },
        1: { halign: 'right', cellWidth: 20 },
      },
      willDrawCell: data => {
        addDashedLine(doc, data)
      },
      head: [
        [
          {
            content: '雇用状況               08/21 - 09/20',
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
      startY: ONE_TWO_THREE_TOP,
      tableWidth: ONE_TWO_THREE_WIDTH,
      margin: { left: ONE_TWO_THREE_LEFT + ONE_TWO_THREE_WIDTH + 2 },
      tableLineColor: 'black',
      tableLineWidth: 0.01,
      headStyles: {
        halign: 'center',
        valign: 'middle',
        // font: 'Koruri-Regular',
        font: 'MSMINCHO',
        fontStyle: 'normal',
        textColor: TABLE_HEADER_TEXT_COLOR,
        fillColor: 'black',
      },
      alternateRowStyles: { fillColor: '#e5f3fe' },
      styles: {
        valign: 'middle',
        // font: 'Koruri-Regular',
        font: 'MSMINCHO',
        fontStyle: 'normal',
        textColor: TABLE_CONTENT_TEXT_COLOR,
        cellPadding: 0.3,
        fontSize: 5,
      },
      columnStyles: {
        // 0: { fillColor: '#e5f3fe' },
        1: { halign: 'right', cellWidth: 20 },
      },
      willDrawCell: data => {
        addDashedLine(doc, data)
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
      startY: ONE_TWO_THREE_TOP,
      tableWidth: ONE_TWO_THREE_WIDTH,
      margin: { left: ONE_TWO_THREE_LEFT + ONE_TWO_THREE_WIDTH * 2 + 4 },
      tableLineColor: 'black',
      tableLineWidth: 0.01,
      headStyles: {
        halign: 'center',
        valign: 'middle',
        // font: 'Koruri-Regular',
        font: 'MSMINCHO',
        fontStyle: 'normal',
        textColor: TABLE_HEADER_TEXT_COLOR,
        fillColor: 'black',
      },
      alternateRowStyles: { fillColor: '#e5f3fe' },
      styles: {
        valign: 'middle',
        // font: 'Koruri-Regular',
        font: 'MSMINCHO',
        fontStyle: 'normal',
        textColor: TABLE_CONTENT_TEXT_COLOR,
        cellPadding: 0.3,
        fontSize: 5,
      },
      columnStyles: {
        // 0: { fillColor: '#e5f3fe' },
        1: { halign: 'right', cellWidth: 20 },
      },
      willDrawCell: data => {
        addDashedLine(doc, data)
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
      // theme: 'grid',
      startY: FOUR_TOP,
      tableWidth: FOUR_WIDTH,
      margin: { left: FOUR_LEFT },
      tableLineColor: 'black',
      tableLineWidth: 0.01,
      headStyles: {
        halign: 'center',
        valign: 'middle',
        // font: 'Koruri-Regular',
        font: 'MSMINCHO',
        fontStyle: 'normal',
        textColor: TABLE_HEADER_TEXT_COLOR,
        fillColor: 'black',
      },
      alternateRowStyles: { fillColor: '#e5f3fe' },
      styles: {
        valign: 'middle',
        // font: 'Koruri-Regular',
        font: 'MSMINCHO',
        fontStyle: 'normal',
        textColor: TABLE_CONTENT_TEXT_COLOR,
        cellPadding: 0.3,
        fontSize: 5,
      },
      columnStyles: {
        // 0: { fillColor: '#e5f3fe' },
        1: { halign: 'right', cellWidth: 20 },
      },
      willDrawCell: data => {
        addDashedLine(doc, data)
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
      startY: FIVE_SIX_TOP,
      tableWidth: FIVE_SIX_WIDTH,
      tableLineColor: 'black',
      tableLineWidth: 0.01,
      margin: { left: FIVE_SIX_LEFT },
      styles: {
        valign: 'middle',
        // font: 'Koruri-Semibold',
        // fontStyle: 'bold',
        font: 'MSMINCHO',
        fontStyle: 'normal',
        textColor: TABLE_CONTENT_TEXT_COLOR,
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
      body: [['支給合計', `${formValues.toBePaid.total.toLocaleString()}`]],
    })
    // ------------------- Table 6 (second row, to the right) -------------------
    doc.autoTable({
      theme: 'plain',
      showHead: 'never',
      startY: FIVE_SIX_TOP,
      tableWidth: FIVE_SIX_WIDTH,
      tableLineColor: 'black',
      tableLineWidth: 0.01,
      margin: { left: FIVE_SIX_LEFT + FIVE_SIX_WIDTH + 2 },
      styles: {
        valign: 'middle',
        // font: 'Koruri-Semibold',
        // fontStyle: 'bold',
        font: 'MSMINCHO',
        fontStyle: 'normal',
        textColor: TABLE_CONTENT_TEXT_COLOR,
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
        ['控除合計 ', `${formValues.toBeDeducted.total.toLocaleString()}`],
      ],
    })
    // ------------------- Table 7 (bottom of table 6) -------------------
    doc.autoTable({
      theme: 'plain',
      showHead: 'never',
      startY: SEVEN_TOP,
      tableWidth: SEVEN_WIDTH,
      tableLineColor: 'black',
      tableLineWidth: 0.01,
      margin: { left: SEVEN_LEFT },
      styles: {
        valign: 'middle',
        // font: 'Koruri-Semibold',
        // fontStyle: 'bold',
        font: 'MSMINCHO',
        fontStyle: 'normal',
        textColor: TABLE_CONTENT_TEXT_COLOR,
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
          `${(
            formValues.toBePaid.total - formValues.toBeDeducted.total
          ).toLocaleString()}`,
        ],
      ],
    })

    // ------------------- Table 8 (third row) -------------------
    doc.autoTable({
      //   theme: 'grid',
      startY: EIGHT_NINE_TOP,
      tableWidth: EIGHT_WIDTH,
      // tableWidth: 126,
      margin: { left: EIGHT_NINE_LEFT },
      tableLineColor: 'black',
      tableLineWidth: 0.01,
      headStyles: {
        halign: 'center',
        valign: 'middle',
        // font: 'Koruri-Regular',
        font: 'MSMINCHO',
        fontStyle: 'normal',
        textColor: TABLE_HEADER_TEXT_COLOR,
        fillColor: 'black',
      },
      alternateRowStyles: { fillColor: '#e5f3fe' },
      styles: {
        valign: 'middle',
        // font: 'Koruri-Regular',
        font: 'MSMINCHO',
        fontStyle: 'normal',
        textColor: TABLE_CONTENT_TEXT_COLOR,
        cellPadding: 0.3,
        fontSize: 5,
      },
      columnStyles: {
        // 0: { fillColor: '#e5f3fe' },
        1: { halign: 'right', cellWidth: 20 },
      },
      willDrawCell: data => {
        addDashedLine(doc, data)
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
        ['※寮費 / 社宅費', `${formValues.breakdown.dormitoryFee}`],
        ['社宅費 本人', `${formValues.breakdown.companyHousingExpenses}`],
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
      startY: EIGHT_NINE_TOP,
      tableWidth: NINE_WIDTH,
      margin: { left: EIGHT_NINE_LEFT + EIGHT_WIDTH + 2 },
      tableLineColor: 'black',
      tableLineWidth: 0.01,
      headStyles: {
        halign: 'center',
        valign: 'middle',
        // font: 'Koruri-Regular',
        font: 'MSMINCHO',
        fontStyle: 'normal',
        textColor: TABLE_HEADER_TEXT_COLOR,
        fillColor: 'black',
      },
      alternateRowStyles: { fillColor: '#e5f3fe' },
      styles: {
        valign: 'middle',
        // font: 'Koruri-Regular',
        font: 'MSMINCHO',
        fontStyle: 'normal',
        textColor: TABLE_CONTENT_TEXT_COLOR,
        cellPadding: 0.3,
        fontSize: 5,
      },
      columnStyles: {
        // 0: { fillColor: '#e5f3fe' },
        1: { halign: 'right', cellWidth: 20 },
      },
      willDrawCell: data => {
        addDashedLine(doc, data)
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
        ['今月度通勤費非課税額', `${formValues.commute.monthlyFee}`],
        ['今月度通勤費課税額', `${formValues.commute.monthlyTaxableFee}`],
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
      startY: TEN_TOP,
      margin: {
        bottom: 0,
        left: TEN_RIGHT_LEFT_MARGIN,
        right: TEN_RIGHT_LEFT_MARGIN,
      },
      tableLineColor: 'black',
      tableLineWidth: 0.01,
      headStyles: {
        halign: 'center',
        valign: 'middle',
        // font: 'Koruri-Regular',
        font: 'MSMINCHO',
        fontStyle: 'normal',
        textColor: TABLE_10_HEADER_TEXT_COLOR,
        fillColor: '#d2eafd',
      },
      styles: {
        valign: 'middle',
        // font: 'Koruri-Regular',
        font: 'MSMINCHO',
        fontStyle: 'normal',
        textColor: TABLE_CONTENT_TEXT_COLOR,
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
            content: `${formValues.oshirase}`,
            styles: { valign: 'top', minCellHeight: TEN_HEIGHT },
          },
        ],
      ],
    })

    // --------------------------------------

    // window.open(doc.output('bloburl'), '_blank')
    // history.push('/payslip-pdf', {
    //   pdfFile: doc.output('bloburl'),
    // })
    // history.push('/payslip-pdf?pdfurl=' + doc.output('bloburl'))
    // window.open('/payslip-pdf?pdfurl=' + doc.output('bloburl'))
    const url = `/payslip-pdf?pdfurl=${doc.output('bloburl')}&year=${
      formValues.header.date.year || '00'
    }&month=${formValues.header.date.month || '00'}`
    window.open(
      url,
      'window',
      'toolbar=0,location=0,scrollbars=1,statusbar=1,menubar=0,resizable=1,width=' +
        window.outerWidth +
        ',height=' +
        window.outerHeight +
        ',left=0,top=0',
    )
    // doc.output('dataurlnewwindow')
    // doc.save(Date.now() + '.pdf')
  }

  return (
    <div className={'payslip-form-wrapper'}>
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
      <button onClick={onExport}>PDF生成</button>
    </div>
  )
}

export default PayslipForm
