export const generateHeader = (doc, { top, left, fontSize = 12 }, year) => {
  doc.setFont('MSMINCHO', 'normal')
  doc.setFontSize(fontSize)
  doc.text(`令和 ${year || 0} 年分  給与所得の源泉徴収票`, left, top)
}

export const generateForm1 = (
  doc,
  { top, left, width, height = 10 },
  formValues,
) => {
  doc.setFont('MSMINCHO', 'normal')
  doc.autoTable({
    theme: 'grid',
    startY: top,
    tableWidth: width,
    margin: { left: left },
    tableLineColor: 'black',
    tableLineWidth: 0.01,
    styles: {
      valign: 'middle',
      font: 'MSMINCHO',
      fontStyle: 'normal',
      textColor: 'black',
      minCellHeight: height,
      cellPadding: 1,
      fontSize: 5,
    },
    columnStyles: {
      0: {
        halign: 'center',
        valign: 'middle',
        cellWidth: 10,
      },
      1: { halign: 'center', valign: 'middle', cellWidth: 5 },
      2: { halign: 'center', valign: 'middle' },
    },
    body: [['支払を受ける者', '住所又は居所', formValues.jyusho]],
  })
}

export const generateForm2 = (doc, { top, left, width }, formValues) => {
  doc.setFont('MSMINCHO', 'normal')
  doc.autoTable({
    theme: 'grid',
    startY: top,
    tableWidth: width,
    margin: { left: left },
    tableLineColor: 'black',
    tableLineWidth: 0.01,
    styles: {
      valign: 'middle',
      font: 'MSMINCHO',
      fontStyle: 'normal',
      textColor: 'black',
      cellPadding: 1,
      fontSize: 5,
    },
    columnStyles: {},
    body: [
      [
        {
          content: `(受給者番号)     ${formValues.recipientNumber}`,
          colSpan: 2,
          styles: { fontSize: 3.5 },
        },
      ],
      [{ content: '', colSpan: 2 }],
      [{ content: `(役職名)     ${formValues.jobTitle}`, colSpan: 2 }],
      [
        {
          content: '氏名',
          rowSpan: 2,
          styles: { cellWidth: 5, valign: 'middle', halign: 'center' },
        },
        {
          content: `(フリガナ)     ${formValues.furigana}`,
          styles: { fontSize: 3.5 },
        },
      ],
      [{ content: formValues.name }],
    ],
    didDrawCell: data => {
      if (data.row.index == 1) {
        doc.setDrawColor(0, 0, 0)
        doc.setLineWidth(0.15)
        doc.line(
          data.cell.x,
          data.cell.y + data.cell.height,
          data.cell.x + width,
          data.cell.y,
        )
      }
    },
  })
}

export const generateForm3 = (doc, { top, left, width }, formValues) => {
  doc.setFont('MSMINCHO', 'normal')
  doc.autoTable({
    theme: 'grid',
    startY: top,
    tableWidth: width,
    margin: { left: left },
    tableLineColor: 'black',
    tableLineWidth: 0.01,
    styles: {
      halign: 'center',
      valign: 'middle',
      font: 'MSMINCHO',
      fontStyle: 'normal',
      textColor: 'black',
      cellPadding: 1,
      fontSize: 5,
      cellWidth: 40,
    },
    body: [
      [
        {
          content: '種          別',
        },
        { content: '支   払   金   額' },
        {
          content: '給与所得控除後の金額 (調整控除後)',
        },
        { content: '所得控除の額の合計額' },
        { content: '源 泉 徴 収 税 額' },
      ],
    ],
  })
  doc.autoTable({
    theme: 'grid',
    startY: top + 4,
    tableWidth: width,
    margin: { left: left },
    tableLineColor: 'black',
    tableLineWidth: 0.01,
    styles: {
      halign: 'center',
      valign: 'middle',
      font: 'MSMINCHO',
      fontStyle: 'normal',
      textColor: 'black',
      cellPadding: 1,
      fontSize: 5,
      cellWidth: 13.3333,
      minCellHeight: 7,
    },
    body: [
      [
        {
          content: formValues.shubetsu,
          styles: { cellWidth: 13.3333 * 3 },
        },
        { content: formValues.payment.uchi },
        {
          content: formValues.payment.sen,
        },
        { content: formValues.payment.yen },
        { content: formValues.amountAfter.uchi },
        { content: formValues.amountAfter.sen },
        { content: formValues.amountAfter.yen },
        { content: formValues.totalDeduction.uchi },
        { content: formValues.totalDeduction.sen },
        { content: formValues.totalDeduction.yen },
        { content: formValues.taxAmount.uchi },
        { content: formValues.taxAmount.sen },
        { content: formValues.taxAmount.yen },
      ],
    ],
    didDrawCell: data => {
      if (data.column.index == 1 || data.column.index == 10) {
        doc.setFontSize(4)
        const OFFSET = 2
        doc.text('内', data.cell.x + OFFSET, data.cell.y + OFFSET)
      }
      if (
        data.column.index == 2 ||
        data.column.index == 5 ||
        data.column.index == 8 ||
        data.column.index == 11
      ) {
        doc.setFontSize(4)
        const OFFSET = 2
        doc.text(
          '千',
          data.cell.x + data.column.width - OFFSET,
          data.cell.y + OFFSET,
        )
      }
      if (
        data.column.index == 3 ||
        data.column.index == 6 ||
        data.column.index == 9 ||
        data.column.index == 12
      ) {
        doc.setFontSize(4)
        const OFFSET = 2
        doc.text(
          '円',
          data.cell.x + data.column.width - OFFSET,
          data.cell.y + OFFSET,
        )
      }
    },
  })
}

export const generateForm4 = (doc, { top, left, width }, formValues) => {
  doc.setFont('MSMINCHO', 'normal')
  doc.autoTable({
    theme: 'grid',
    startY: top,
    tableWidth: width,
    margin: { left: left },
    tableLineColor: 'black',
    tableLineWidth: 0.01,
    styles: {
      halign: 'center',
      valign: 'middle',
      font: 'MSMINCHO',
      fontStyle: 'normal',
      textColor: 'black',
      cellPadding: 1,
      fontSize: 5,
    },
    body: [
      [
        {
          content: '(源泉)控除対象配偶者の有無等',
          colSpan: 3,
        },
        { content: '配偶者(特別)控除の額', colSpan: 2, rowSpan: 2 },
        {
          content: '控除対象扶養親族の数(配偶者を除く 。)',
          styles: { minCellHeight: 7 },
          colSpan: 7,
        },
        {
          content: '16歳未満 扶養親族の数',
          rowSpan: 2,
          styles: { cellWidth: 10 },
        },
        { content: '障害者の数(本人を除く。)', colSpan: 3 },
        {
          content: '非居住者である親族の数',
          rowSpan: 2,
          styles: { cellWidth: 10 },
        },
      ],
      [
        '',
        '',
        '老人',
        { content: '特  定', colSpan: 2 },
        { content: '老   人', colSpan: 3 },
        { content: 'その他', colSpan: 2 },
        { content: '特  別', colSpan: 2 },
        { content: 'その他', styles: { cellWidth: 10 } },
      ],
      [
        '有',
        '従有',
        { content: formValues.deductableSpouse.roujin, rowSpan: 2 },
        { content: formValues.deductableSpouse.deduction.sen, rowSpan: 2 },
        { content: formValues.deductableSpouse.deduction.yen, rowSpan: 2 },
        { content: formValues.dependents.kids.number, rowSpan: 2 },
        { content: formValues.dependents.kids.elegible, rowSpan: 2 },
        { content: formValues.dependents.roujin.uchi, rowSpan: 2 },
        { content: formValues.dependents.roujin.number, rowSpan: 2 },
        { content: formValues.dependents.roujin.elegible, rowSpan: 2 },
        { content: formValues.dependents.other.number, rowSpan: 2 },
        { content: formValues.dependents.other.elegible, rowSpan: 2 },
        { content: formValues.under16.number, rowSpan: 2 },
        { content: formValues.disability.tokubetsu.uchi, rowSpan: 2 },
        { content: formValues.disability.tokubetsu.number, rowSpan: 2 },
        { content: formValues.disability.other.number, rowSpan: 2 },
        { content: formValues.nonResidents.number, rowSpan: 2 },
      ],
      [
        {
          content: formValues.deductableSpouse.ari,
          styles: { minCellHeight: 8 },
        },
        formValues.deductableSpouse.elegible,
      ],
    ],
    didParseCell: data => {
      if (
        (data.row.index == 0 || data.row.index == 1) &&
        (data.column.index == 0 || data.column.index == 1)
      ) {
        data.cell.styles.lineWidth = 0
      }
    },
    didDrawCell: data => {
      if (
        data.row.index == 2 &&
        (data.column.index == 8 || data.column.index == 14)
      ) {
        doc.setDrawColor(255, 255, 255)
        doc.setLineWidth(0.2)
        doc.setLineDashPattern([0.5, 0.2], 0)
        doc.line(
          data.cell.x,
          data.cell.y,
          data.cell.x,
          data.cell.y + data.cell.height,
        )
        doc.setLineDashPattern([1, 0], 0)
        doc.setDrawColor(0, 0, 0)
      }
      if (
        data.row.index == 2 &&
        (data.column.index == 5 ||
          data.column.index == 8 ||
          data.column.index == 10 ||
          data.column.index == 12 ||
          data.column.index == 14 ||
          data.column.index == 15 ||
          data.column.index == 16)
      ) {
        doc.setFontSize(4)
        const OFFSET = 2
        doc.text(
          '人',
          data.cell.x + data.column.width - OFFSET,
          data.cell.y + OFFSET,
        )
      }
      if (
        data.row.index == 2 &&
        (data.column.index == 6 ||
          data.column.index == 9 ||
          data.column.index == 11)
      ) {
        doc.setFontSize(4)
        const OFFSET = 2
        doc.text(
          '従人',
          data.cell.x + data.column.width - OFFSET * 2,
          data.cell.y + OFFSET,
        )
      }
      if (
        data.row.index == 2 &&
        (data.column.index == 7 || data.column.index == 13)
      ) {
        doc.setFontSize(4)
        const OFFSET = 2
        doc.text(
          '内',
          data.cell.x + data.column.width - OFFSET,
          data.cell.y + OFFSET,
        )
      }
      if (data.row.index == 2 && data.column.index == 3) {
        doc.setFontSize(4)
        const OFFSET = 2
        doc.text(
          '千',
          data.cell.x + data.column.width - OFFSET,
          data.cell.y + OFFSET,
        )
      }
      if (data.row.index == 2 && data.column.index == 4) {
        doc.setFontSize(4)
        const OFFSET = 2
        doc.text(
          '円',
          data.cell.x + data.column.width - OFFSET,
          data.cell.y + OFFSET,
        )
      }
    },
  })
}

export const generateForm5 = (doc, { top, left, width }, formValues) => {
  doc.setFont('MSMINCHO', 'normal')
  doc.autoTable({
    theme: 'grid',
    startY: top,
    tableWidth: width,
    margin: { left: left },
    tableLineColor: 'black',
    tableLineWidth: 0.01,
    styles: {
      halign: 'center',
      valign: 'middle',
      font: 'MSMINCHO',
      fontStyle: 'normal',
      textColor: 'black',
      cellPadding: 1,
      fontSize: 5,
      cellWidth: 50,
    },
    body: [
      [
        {
          content: '社会保険料等の金額',
        },
        { content: '生命保険料の控除額' },
        {
          content: '地震保険料の控除額',
        },
        { content: '住宅借入金等特別控除の額' },
      ],
    ],
  })
  doc.autoTable({
    theme: 'grid',
    startY: top + 4,
    tableWidth: width,
    margin: { left: left },
    tableLineColor: 'black',
    tableLineWidth: 0.01,
    styles: {
      halign: 'center',
      valign: 'middle',
      font: 'MSMINCHO',
      fontStyle: 'normal',
      textColor: 'black',
      cellPadding: 1,
      fontSize: 5,
      cellWidth: 25,
      minCellHeight: 7,
    },
    body: [
      [
        { content: formValues.socialInsurance.sen },
        { content: formValues.socialInsurance.yen },
        { content: formValues.lifeInsurance.sen },
        { content: formValues.lifeInsurance.yen },
        { content: formValues.earthquakeInsurance.sen },
        { content: formValues.earthquakeInsurance.yen },
        { content: formValues.specialDeduction.sen },
        { content: formValues.specialDeduction.yen },
      ],
    ],
    didDrawCell: data => {
      if (data.column.index == 0) {
        doc.setFontSize(4)
        const OFFSET = 2
        doc.text('内', data.cell.x + OFFSET, data.cell.y + OFFSET)
        doc.text(
          '千',
          data.cell.x + data.column.width - OFFSET,
          data.cell.y + OFFSET,
        )
      }
      if (
        data.column.index == 2 ||
        data.column.index == 4 ||
        data.column.index == 6
      ) {
        doc.setFontSize(4)
        const OFFSET = 2
        doc.text(
          '千',
          data.cell.x + data.column.width - OFFSET,
          data.cell.y + OFFSET,
        )
      }
      if (
        data.column.index == 1 ||
        data.column.index == 3 ||
        data.column.index == 5 ||
        data.column.index == 7
      ) {
        doc.setFontSize(4)
        const OFFSET = 2
        doc.text(
          '円',
          data.cell.x + data.column.width - OFFSET,
          data.cell.y + OFFSET,
        )
      }
    },
  })
}

export const generateForm6 = (
  doc,
  { top, left, width, height = 10 },
  formValues,
) => {
  doc.setFont('MSMINCHO', 'normal')
  doc.autoTable({
    theme: 'grid',
    startY: top,
    tableWidth: width,
    margin: { left: left },
    tableLineColor: 'black',
    tableLineWidth: 0.01,
    styles: {
      valign: 'middle',
      font: 'MSMINCHO',
      fontStyle: 'normal',
      textColor: 'black',
      minCellHeight: height,
      cellPadding: 1,
      fontSize: 5,
    },
    body: [[formValues.summary]],
    didDrawCell: data => {
      if (data.column.index == 0) {
        doc.text('(摘要)', data.cell.x + 1, data.cell.y + 2.5)
      }
    },
  })
}

export const generateForm7 = (doc, { top, left, width }, formValues) => {
  doc.setFont('MSMINCHO', 'normal')
  doc.autoTable({
    theme: 'grid',
    startY: top,
    tableWidth: width,
    margin: { left: left },
    tableLineColor: 'black',
    tableLineWidth: 0.01,
    styles: {
      valign: 'middle',
      halign: 'center',
      font: 'MSMINCHO',
      fontStyle: 'normal',
      textColor: 'black',
      cellPadding: 1,
      fontSize: 5,
    },
    body: [
      [
        { content: '生命保険料の 金額の内訳', styles: { cellWidth: 15 } },
        { content: '新生命保険料の金額', styles: { cellWidth: 15 } },
        formValues.newLifeInsurance,
        { content: '旧生命保険料の金額', styles: { cellWidth: 15 } },
        formValues.oldLifeInsurance,
        { content: '介護医療保険料の金額', styles: { cellWidth: 15 } },
        formValues.longTermCare,
        { content: '新個人年金保険料の金額', styles: { cellWidth: 15 } },
        formValues.individualAnnuity,
        { content: '旧個人年金保険料の金', styles: { cellWidth: 15 } },
        formValues.oldIndividualAnnuity,
      ],
    ],
    didDrawCell: data => {
      if (
        data.column.index == 2 ||
        data.column.index == 4 ||
        data.column.index == 6 ||
        data.column.index == 8 ||
        data.column.index == 10
      ) {
        doc.setFontSize(4)
        const OFFSET = 2
        doc.text(
          '円',
          data.cell.x + data.column.width - OFFSET,
          data.cell.y + OFFSET,
        )
      }
    },
  })
}

export const generateForm8 = (doc, { top, left, width }, formValues) => {
  doc.setFont('MSMINCHO', 'normal')
  doc.autoTable({
    theme: 'grid',
    startY: top,
    tableWidth: width,
    margin: { left: left },
    tableLineColor: 'black',
    tableLineWidth: 0.01,
    styles: {
      valign: 'middle',
      halign: 'center',
      font: 'MSMINCHO',
      fontStyle: 'normal',
      textColor: 'black',
      cellPadding: 1,
      fontSize: 5,
    },
    body: [
      [
        {
          content: '住宅借入金等特別控除の額の内訳',
          rowSpan: 2,
          styles: { cellWidth: 15 },
        },
        { content: '住宅借入金等特別控除適用数', styles: { cellWidth: 15 } },
        formValues.newLifeInsurance,
        { content: '居住開始年月日 (1回目)', styles: { cellWidth: 15 } },
        { content: formValues.oldLifeInsurance, styles: { cellWidth: 12 } },
        { content: formValues.oldLifeInsurance, styles: { cellWidth: 12 } },
        { content: formValues.oldLifeInsurance, styles: { cellWidth: 12 } },
        {
          content: '住宅借入金等特別控除区分(1回目)',
          styles: { cellWidth: 15 },
        },
        formValues.longTermCare,
        { content: '住宅借入金等年末残高(1回目)', styles: { cellWidth: 15 } },
        formValues.individualAnnuity,
      ],
      [
        { content: '住宅借入金等特別控除可能額', styles: { cellWidth: 15 } },
        formValues.newLifeInsurance,
        { content: '居住開始年月日 (2回目)', styles: { cellWidth: 15 } },
        { content: formValues.oldLifeInsurance, styles: { cellWidth: 12 } },
        { content: formValues.oldLifeInsurance, styles: { cellWidth: 12 } },
        { content: formValues.oldLifeInsurance, styles: { cellWidth: 12 } },
        {
          content: '住宅借入金等特別控除区分(2回目)',
          styles: { cellWidth: 15 },
        },
        formValues.longTermCare,
        { content: '住宅借入金等年末残高(2回目)', styles: { cellWidth: 15 } },
        formValues.individualAnnuity,
      ],
    ],
    didDrawCell: data => {
      if (data.column.index == 4) {
        doc.setFontSize(4)
        const OFFSET = 2
        doc.text(
          '年',
          data.cell.x + data.column.width - OFFSET,
          data.cell.y + OFFSET,
        )
      }
      if (data.column.index == 5) {
        doc.setFontSize(4)
        const OFFSET = 2
        doc.text(
          '月',
          data.cell.x + data.column.width - OFFSET,
          data.cell.y + OFFSET,
        )
      }
      if (data.column.index == 6) {
        doc.setFontSize(4)
        const OFFSET = 2
        doc.text(
          '日',
          data.cell.x + data.column.width - OFFSET,
          data.cell.y + OFFSET,
        )
      }
      if (
        (data.row.index == 0 && data.column.index == 10) ||
        (data.row.index == 1 &&
          (data.column.index == 2 || data.column.index == 10))
      ) {
        doc.setFontSize(4)
        const OFFSET = 2
        doc.text(
          '円',
          data.cell.x + data.column.width - OFFSET,
          data.cell.y + OFFSET,
        )
      }
    },
  })
}

export const generateForm9 = (doc, { width, top, left }, formValues) => {
  doc.setFont('MSMINCHO', 'normal')

  doc.autoTable({
    theme: 'grid',
    startY: top,
    tableWidth: width,
    margin: { left: left },
    tableLineColor: 'black',
    tableLineWidth: 0.01,
    styles: {
      valign: 'middle',
      font: 'MSMINCHO',
      fontStyle: 'normal',
      textColor: 'black',
      cellPadding: 0.3,
      fontSize: 5,
    },
    columnStyles: {
      0: {
        halign: 'center',
        fontSize: 3.5,
        cellWidth: 10,
        minCellHeight: 10,
      },
      1: { halign: 'center', fontSize: 4.6, cellWidth: 10 },
      3: {
        halign: 'center',
        fontSize: 4,
        cellWidth: 3,
      },
      4: {
        halign: 'center',
        cellWidth: 6,
      },
    },
    didDrawCell: data => {
      if (
        data.row.index == 1 &&
        (data.column.index == 2 || data.column.index == 1)
      ) {
        doc.setDrawColor(255, 255, 255)
        doc.setLineWidth(0.2)
        doc.setLineDashPattern([0.5, 0.2], 0)
        doc.line(
          data.cell.x,
          data.cell.y,
          data.cell.x + data.column.width,
          data.cell.y,
        )
        doc.setLineDashPattern([1, 0], 0)
        doc.setDrawColor(0, 0, 0)
      }
      if (data.section == 'body' && data.row.index == 2) {
        doc.setDrawColor(0, 0, 0)
        doc.setLineWidth(0.1)
        doc.line(
          data.cell.x,
          data.cell.y + data.cell.height,
          data.cell.x + (width - 10),
          data.cell.y,
        )
      }
    },
    body: [
      [
        { content: '(源泉・特別)\n控除対象\n配偶者', rowSpan: 3 },
        '(フリガナ)',
        formValues.furigana,
        { content: '区\n分', rowSpan: 2 },
        { content: formValues.kubun, rowSpan: 2 },
      ],
      ['氏名', formValues.name],
      [{ content: '', colSpan: 4 }],
    ],
  })
}

export const generateForm10 = (doc, { width, top, left }, formValues) => {
  doc.setFont('MSMINCHO', 'normal')

  doc.autoTable({
    theme: 'grid',
    startY: top,
    tableWidth: width,
    margin: { left: left },
    tableLineColor: 'black',
    tableLineWidth: 0.01,
    styles: {
      valign: 'middle',
      font: 'MSMINCHO',
      fontStyle: 'normal',
      textColor: 'black',
      cellPadding: 0.3,
      fontSize: 5,
    },
    columnStyles: {
      0: {
        halign: 'center',
        fontSize: 4.5,
        cellWidth: 20,
        minCellHeight: 10,
      },
      1: { halign: 'center', fontSize: 4.6, cellWidth: 20 },
      2: {
        halign: 'center',
        fontSize: 4.5,
        cellWidth: 20,
      },
      3: {
        halign: 'center',
        fontSize: 4.5,
        cellWidth: 20,
      },
      4: {
        halign: 'center',
        fontSize: 4.5,
        cellWidth: 20,
      },
      5: {
        halign: 'center',
        fontSize: 4.5,
        cellWidth: 20,
      },
    },
    didDrawCell: data => {
      if (
        data.column.index == 1 ||
        data.column.index == 3 ||
        data.column.index == 5
      ) {
        const OFFSET = 2
        doc.text(
          '円',
          data.cell.x + data.column.width - OFFSET,
          data.cell.y + OFFSET,
        )
      }
    },
    body: [
      [
        { content: '配偶者の\n合計所得', rowSpan: 2 },
        { content: formValues.totalIncome, rowSpan: 2 },
        { content: '国民年金保険\n料等の金額' },
        { content: formValues.pension },
        { content: '旧長期損害\n保険料の金額' },
        { content: formValues.insurance },
      ],
      [
        '基礎控除の額',
        formValues.basicDeduction,
        '所得金額\n調整控除額',
        formValues.adjustment,
      ],
    ],
  })
}

export const generateForm11 = (doc, { width, top, left }, formValues) => {
  doc.setFont('MSMINCHO', 'normal')

  const FIRST_TABLE_WIDTH = 3
  const SECOND_TABLE_HEIGHT = 10

  const SECOND_TABLES_QNT = 4

  doc.autoTable({
    theme: 'grid',
    startY: top,
    tableWidth: FIRST_TABLE_WIDTH,
    margin: { left: left },
    tableLineColor: 'black',
    tableLineWidth: 0.01,
    styles: {
      valign: 'middle',
      font: 'MSMINCHO',
      fontStyle: 'normal',
      textColor: 'black',
      cellPadding: 0.3,
      fontSize: 4.5,
    },
    columnStyles: {
      0: {
        halign: 'center',
        cellWidth: FIRST_TABLE_WIDTH,
        minCellHeight: SECOND_TABLE_HEIGHT * SECOND_TABLES_QNT,
      },
    },
    body: [['控除対象扶養親族']],
  })

  const generate_subtable = tableIndex => {
    doc.autoTable({
      theme: 'grid',
      startY: top + tableIndex * SECOND_TABLE_HEIGHT,
      tableWidth: width - FIRST_TABLE_WIDTH,
      margin: { left: left + FIRST_TABLE_WIDTH },
      tableLineColor: 'black',
      tableLineWidth: 0.01,
      styles: {
        valign: 'middle',
        font: 'MSMINCHO',
        fontStyle: 'normal',
        textColor: 'black',
        cellPadding: 0.3,
        fontSize: 5,
      },
      columnStyles: {
        0: {
          halign: 'center',
          fontSize: 3.5,
          cellWidth: 2.5,
          minCellHeight: 10,
        },
        1: { halign: 'center', fontSize: 4.6, cellWidth: 10 },
        3: {
          halign: 'center',
          fontSize: 4,
          cellWidth: 3,
        },
        4: {
          halign: 'center',
          cellWidth: 6,
        },
      },
      didDrawCell: data => {
        if (
          data.row.index == 1 &&
          (data.column.index == 2 || data.column.index == 1)
        ) {
          doc.setDrawColor(255, 255, 255)
          doc.setLineWidth(0.2)
          doc.setLineDashPattern([0.5, 0.2], 0)
          doc.line(
            data.cell.x,
            data.cell.y,
            data.cell.x + data.column.width,
            data.cell.y,
          )
          doc.setLineDashPattern([1, 0], 0)
          doc.setDrawColor(0, 0, 0)
        }
        if (data.section == 'body' && data.row.index == 2) {
          doc.setDrawColor(0, 0, 0)
          doc.setLineWidth(0.1)
          doc.line(
            data.cell.x,
            data.cell.y + data.cell.height,
            data.cell.x + (width - 2.5 - FIRST_TABLE_WIDTH),
            data.cell.y,
          )
        }
      },
      body: [
        [
          { content: tableIndex + 1, rowSpan: 3 },
          '(フリガナ)',
          formValues[tableIndex + 1].furigana,
          { content: '区\n分', rowSpan: 2 },
          { content: formValues[tableIndex + 1].kubun, rowSpan: 2 },
        ],
        ['氏名', formValues[tableIndex + 1].name],
        [{ content: '', colSpan: 4 }],
      ],
    })
  }
  for (const tableIndex in [...Array(SECOND_TABLES_QNT)]) {
    generate_subtable(+tableIndex)
  }
}

export const generateForm12 = (doc, { width, top, left }, formValues) => {
  doc.setFont('MSMINCHO', 'normal')

  const FIRST_TABLE_WIDTH = 3
  const THIRD_TABLE_WIDTH = 20
  const SECOND_TABLE_HEIGHT = 10

  const SECOND_TABLES_QNT = 4

  doc.autoTable({
    theme: 'grid',
    startY: top,
    tableWidth: FIRST_TABLE_WIDTH,
    margin: { left: left },
    tableLineColor: 'black',
    tableLineWidth: 0.01,
    styles: {
      valign: 'middle',
      font: 'MSMINCHO',
      fontStyle: 'normal',
      textColor: 'black',
      cellPadding: 0.3,
      fontSize: 4.5,
    },
    columnStyles: {
      0: {
        halign: 'center',
        cellWidth: FIRST_TABLE_WIDTH,
        minCellHeight: SECOND_TABLE_HEIGHT * SECOND_TABLES_QNT,
      },
    },
    body: [['16歳未満の扶養親族']],
  })

  const generate_subtable = tableIndex => {
    doc.autoTable({
      theme: 'grid',
      startY: top + tableIndex * SECOND_TABLE_HEIGHT,
      tableWidth: width - FIRST_TABLE_WIDTH - THIRD_TABLE_WIDTH,
      margin: { left: left + FIRST_TABLE_WIDTH },
      tableLineColor: 'black',
      tableLineWidth: 0.01,
      styles: {
        valign: 'middle',
        font: 'MSMINCHO',
        fontStyle: 'normal',
        textColor: 'black',
        cellPadding: 0.3,
        fontSize: 5,
      },
      columnStyles: {
        0: {
          halign: 'center',
          fontSize: 3.5,
          cellWidth: 2.5,
          minCellHeight: 10,
        },
        1: { halign: 'center', fontSize: 4.6, cellWidth: 10 },
        3: {
          halign: 'center',
          fontSize: 4,
          cellWidth: 3,
        },
        4: {
          halign: 'center',
          cellWidth: 6,
        },
      },
      didDrawCell: data => {
        if (
          data.row.index == 1 &&
          (data.column.index == 2 || data.column.index == 1)
        ) {
          doc.setDrawColor(255, 255, 255)
          doc.setLineWidth(0.2)
          doc.setLineDashPattern([0.5, 0.2], 0)
          doc.line(
            data.cell.x,
            data.cell.y,
            data.cell.x + data.column.width,
            data.cell.y,
          )
          doc.setLineDashPattern([1, 0], 0)
          doc.setDrawColor(0, 0, 0)
        }
        if (data.section == 'body' && data.row.index == 2) {
          doc.setDrawColor(0, 0, 0)
          doc.setLineWidth(0.1)
          doc.line(
            data.cell.x,
            data.cell.y + data.cell.height,
            data.cell.x + (width - 2.5 - FIRST_TABLE_WIDTH - THIRD_TABLE_WIDTH),
            data.cell.y,
          )
        }
      },
      body: [
        [
          { content: tableIndex + 1, rowSpan: 3 },
          '(フリガナ)',
          formValues[tableIndex + 1].furigana,
          { content: '区\n分', rowSpan: 2 },
          { content: formValues[tableIndex + 1].kubun, rowSpan: 2 },
        ],
        ['氏名', formValues[tableIndex + 1].name],
        [{ content: '', colSpan: 4 }],
      ],
    })
  }

  doc.autoTable({
    theme: 'grid',
    startY: top,
    tableWidth: THIRD_TABLE_WIDTH,
    margin: {
      left:
        left +
        FIRST_TABLE_WIDTH +
        (width - FIRST_TABLE_WIDTH - THIRD_TABLE_WIDTH),
    },
    tableLineColor: 'black',
    tableLineWidth: 0.01,
    styles: {
      valign: 'middle',
      font: 'MSMINCHO',
      fontStyle: 'normal',
      textColor: 'black',
      cellPadding: 0.3,
      fontSize: 4.5,
    },
    columnStyles: {
      0: {
        halign: 'center',
        cellWidth: THIRD_TABLE_WIDTH,
        minCellHeight: SECOND_TABLE_HEIGHT * SECOND_TABLES_QNT,
      },
    },
    didDrawCell: data => {
      if (data.row.index == 0) {
        doc.setDrawColor(0, 0, 0)
        doc.setLineWidth(0.1)
        doc.line(
          data.cell.x,
          data.cell.y + data.cell.height,
          data.cell.x + THIRD_TABLE_WIDTH,
          data.cell.y,
        )
      }
    },
    body: [['']],
  })

  for (const tableIndex in [...Array(SECOND_TABLES_QNT)]) {
    generate_subtable(+tableIndex)
  }
}

export const generateForm13 = (doc, { top, left, width }, formValues) => {
  doc.setFont('MSMINCHO', 'normal')
  doc.autoTable({
    theme: 'grid',
    startY: top,
    tableWidth: width,
    margin: { left: left },
    tableLineColor: 'black',
    tableLineWidth: 0.01,
    styles: {
      valign: 'middle',
      halign: 'center',
      font: 'MSMINCHO',
      fontStyle: 'normal',
      textColor: 'black',
      cellPadding: 1,
      fontSize: 5,
    },
    body: [
      [
        { content: '未 成 年 者', rowSpan: 2 },
        { content: '外 国 人', rowSpan: 2 },
        { content: '死 亡 退 職', rowSpan: 2 },
        { content: '災 害 者', rowSpan: 2 },
        { content: '乙    欄', rowSpan: 2 },
        { content: '本人が障害者', colSpan: 2 },
        { content: '寡    婦', rowSpan: 2 },
        { content: 'ひ と り 親', rowSpan: 2 },
        { content: '勤 労 学 生', rowSpan: 2 },
        { content: '', rowSpan: 3, styles: { cellWidth: 15 } },
        { content: '中途就・退職', colSpan: 5 },
        { content: '受給者生年月日', colSpan: 4 },
      ],
      [
        '特別',
        'そ の 他',
        '就職',
        '退職',
        '年',
        '月',
        '日',
        { content: '元号', styles: { cellWidth: 18 } },
        '年',
        '月',
        '日',
      ],
      [
        { content: formValues.minor, styles: { minCellHeight: 10 } },
        formValues.foreigner,
        formValues.deathRetirement,
        formValues.disasterVictim,
        formValues.otsuran,
        formValues.disability.special,
        formValues.disability.other,
        formValues.widow,
        formValues.singleParent,
        formValues.workingStudent,
        formValues.midOrRetirement.searching,
        formValues.midOrRetirement.retired,
        formValues.midOrRetirement.year,
        formValues.midOrRetirement.month,
        formValues.midOrRetirement.day,
        formValues.beneficiary.number,
        formValues.beneficiary.year,
        formValues.beneficiary.month,
        formValues.beneficiary.day,
      ],
    ],
  })
}

export const generateForm14 = (doc, { width, top, left }, formValues) => {
  doc.setFont('MSMINCHO', 'normal')

  doc.autoTable({
    theme: 'grid',
    startY: top,
    tableWidth: width,
    margin: { left: left },
    tableLineColor: 'black',
    tableLineWidth: 0.01,
    styles: {
      valign: 'middle',
      font: 'MSMINCHO',
      fontStyle: 'normal',
      textColor: 'black',
      cellPadding: 0.3,
      fontSize: 5,
    },
    body: [
      [
        {
          content: '支\n払\n者',
          rowSpan: 3,
          styles: { cellWidth: 5, halign: 'center' },
        },
        { content: '', colSpan: 3, styles: { minCellHeight: 5 } },
      ],
      [
        {
          content: '住所(居所)又は所在地',
          styles: { cellWidth: 20, halign: 'center' },
        },
        { content: formValues.jyusho, colSpan: 2 },
      ],
      [
        { content: '氏名又は名称', styles: { halign: 'center' } },
        formValues.name,
        formValues.phone,
      ],
    ],
    didDrawCell: data => {
      console.log(data)
      if (data.row.index == 0 && data.column.index == 1) {
        doc.setDrawColor(0, 0, 0)
        doc.setLineWidth(0.1)
        doc.line(
          data.cell.x,
          data.cell.y + data.cell.height,
          data.cell.x + data.cell.width,
          data.cell.y,
        )
      }
      if (data.row.index == 2 && data.column.index == 3) {
        doc.setDrawColor('white')
        doc.setLineWidth(0.5)
        doc.line(
          data.cell.x,
          data.cell.y + 0.05,
          data.cell.x,
          data.cell.y + data.cell.height - 0.05,
        )
        doc.setFontSize(4)
        doc.text(
          '(電話)',
          data.cell.x - 5,
          data.cell.y + data.cell.height - 0.5,
        )
      }
    },
  })
}
