const generateTable1 = (doc, { width, top, left }) => {
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
        doc.setDrawColor(255, 255, 255) // 色を変更
        doc.setLineWidth(0.2) // 線の太さ
        doc.setLineDashPattern([0.5, 0.2], 0) //破線破線のパターン. doc.setLineDashPattern([長さ何ミリ, ドットとドットの幅何ミリ], スタートの位置から何ミリ)
        // もっと詳しく情報: https://artskydj.github.io/jsPDF/docs/jsPDF.html#setLineDashPattern
        doc.line(
          data.cell.x,
          data.cell.y,
          data.cell.x + data.column.width,
          data.cell.y,
        )
        doc.setLineDashPattern([1, 0], 0) // 破線破線のパターンをリセット (普通のラインに戻す)
        doc.setDrawColor(0, 0, 0) // 色を変更
      }
      if (data.section == 'body' && data.row.index == 2) {
        doc.setDrawColor(0, 0, 0) // 色を変更
        doc.setLineWidth(0.1) // 線の太さ
        doc.line(
          data.cell.x,
          data.cell.y + data.cell.height,
          data.cell.x + (width - 10),
          data.cell.y,
        )
      }
    },
    // willDrawCell: data => {
    //   // addDashedLine(doc, data)
    // },
    body: [
      [
        { content: '(源泉・特別)\n控除対象\n配偶者', rowSpan: 3 },
        '(フリガナ)',
        '',
        { content: '区\n分', rowSpan: 2 },
        { content: '', rowSpan: 2 },
      ],
      ['氏名', ''],
      [{ content: '', colSpan: 4 }],
    ],
  })
}

const generateTable2 = (doc, { width, top, left }) => {
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

  const generate_subtable2 = tableIndex => {
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
        // console.log(data)
        if (
          data.row.index == 1 &&
          (data.column.index == 2 || data.column.index == 1)
        ) {
          doc.setDrawColor(255, 255, 255) // 色を変更
          doc.setLineWidth(0.2) // 線の太さ
          doc.setLineDashPattern([0.5, 0.2], 0) //破線破線のパターン. doc.setLineDashPattern([長さ何ミリ, ドットとドットの幅何ミリ], スタートの位置から何ミリ)
          // もっと詳しく情報: https://artskydj.github.io/jsPDF/docs/jsPDF.html#setLineDashPattern
          doc.line(
            data.cell.x,
            data.cell.y,
            data.cell.x + data.column.width,
            data.cell.y,
          )
          doc.setLineDashPattern([1, 0], 0) // 破線破線のパターンをリセット (普通のラインに戻す)
          doc.setDrawColor(0, 0, 0) // 色を変更
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
      // willDrawCell: data => {
      //   // addDashedLine(doc, data)
      // },
      body: [
        [
          { content: tableIndex + 1, rowSpan: 3 },
          '(フリガナ)',
          '',
          { content: '区\n分', rowSpan: 2 },
          { content: '', rowSpan: 2 },
        ],
        ['氏名', ''],
        [{ content: '', colSpan: 4 }],
      ],
    })
  }
  for (const tableIndex in [...Array(SECOND_TABLES_QNT)]) {
    generate_subtable2(+tableIndex)
  }
}

const generateTable3 = (doc, { width, top, left }) => {
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
        { content: '', rowSpan: 2 },
        { content: '国民年金保険\n料等の金額' },
        { content: '' },
        { content: '旧長期損害\n保険料の金額' },
        { content: '' },
      ],
      ['基礎控除の額', '', '所得金額\n調整控除額', ''],
    ],
  })
}

const generateTable4 = (doc, { width, top, left }) => {
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

  const generate_subtable2 = tableIndex => {
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
        // console.log(data)
        if (
          data.row.index == 1 &&
          (data.column.index == 2 || data.column.index == 1)
        ) {
          doc.setDrawColor(255, 255, 255) // 色を変更
          doc.setLineWidth(0.2) // 線の太さ
          doc.setLineDashPattern([0.5, 0.2], 0) //破線破線のパターン. doc.setLineDashPattern([長さ何ミリ, ドットとドットの幅何ミリ], スタートの位置から何ミリ)
          // もっと詳しく情報: https://artskydj.github.io/jsPDF/docs/jsPDF.html#setLineDashPattern
          doc.line(
            data.cell.x,
            data.cell.y,
            data.cell.x + data.column.width,
            data.cell.y,
          )
          doc.setLineDashPattern([1, 0], 0) // 破線破線のパターンをリセット (普通のラインに戻す)
          doc.setDrawColor(0, 0, 0) // 色を変更
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
          '',
          { content: '区\n分', rowSpan: 2 },
          { content: '', rowSpan: 2 },
        ],
        ['氏名', ''],
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
    generate_subtable2(+tableIndex)
  }
}

module.exports = {
  generateTable1,
  generateTable2,
  generateTable3,
  generateTable4,
}
