import './PayItemsForm.css'

const PayItemsForm = () => {
  return (
    <div className={'pay-items-wrapper'}>
      <table style={{}}>
        <tbody>
          <tr>
            <td
              style={{
                textAlign: 'center',
                backgroundColor: 'black',
                color: 'white',
              }}
              colSpan={2}>
              支給項目
            </td>
          </tr>
          <tr>
            <td>
              <label>基本給</label>
            </td>
            <td style={{ float: 'right' }}>
              <input type={'number'} placeholder={0} min={0} />
            </td>
          </tr>
          <tr>
            <td>
              <label>資格給</label>
            </td>
            <td style={{ float: 'right' }}>
              <input type={'number'} placeholder={0} min={0} />
            </td>
          </tr>
          <tr>
            <td>
              <label>役割給</label>
            </td>
            <td style={{ float: 'right' }}>
              <input type={'number'} placeholder={0} min={0} />
            </td>
          </tr>
          <tr>
            <td>
              <label>評価給</label>
            </td>
            <td style={{ float: 'right' }}>
              <input type={'number'} placeholder={0} min={0} />
            </td>
          </tr>
          <tr style={{ height: '1.2rem' }}>
            <td>
              <label>{''}</label>
            </td>
            <td>
              <label>{''}</label>
            </td>
          </tr>
        </tbody>
      </table>
      <table className={'result-table'}>
        <tbody>
          <tr>
            <td>
              <label>支給合計</label>
            </td>
            <td>
              <label>{0}</label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default PayItemsForm
