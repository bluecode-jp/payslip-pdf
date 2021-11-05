import './BreakdownForm.css'

const BreakdownForm = () => {
  return (
    <div className={'breakdown-wrapper'}>
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
              支給 / 控除内訳欄(日給月給)・ 時間給情報(時間給)
            </td>
          </tr>
          <tr>
            <td>
              <label>寮費 / 社宅費</label>
            </td>
            <td style={{ float: 'right' }}>
              <input type={'number'} placeholder={0} min={0} />
            </td>
          </tr>
          <tr>
            <td>
              <label>社宅費 本人</label>
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
    </div>
  )
}

export default BreakdownForm
