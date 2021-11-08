import './BreakdownForm.css'
import { addCommas, removeNonNumeric } from '../../../../utils/utils'

const BreakdownForm = ({ formValues, setFormValues }) => {
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
              <label>※寮費 / 社宅費</label>
            </td>
            <td style={{ float: 'right' }}>
              <input
                type={'text'}
                placeholder={0}
                value={formValues.breakdown.dormitoryFee}
                onChange={e =>
                  setFormValues(prevState => {
                    const formValues = { ...prevState }
                    formValues.breakdown.dormitoryFee = addCommas(
                      removeNonNumeric(e.target.value),
                    )
                    return formValues
                  })
                }
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>社宅費 本人</label>
            </td>
            <td style={{ float: 'right' }}>
              <input
                type={'text'}
                placeholder={0}
                value={formValues.breakdown.companyHousingExpenses}
                onChange={e =>
                  setFormValues(prevState => {
                    const formValues = { ...prevState }
                    formValues.breakdown.companyHousingExpenses = addCommas(
                      removeNonNumeric(e.target.value),
                    )
                    return formValues
                  })
                }
              />
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

BreakdownForm.propTypes = {
  formValues: Object,
  setFormValues: Function,
}

export default BreakdownForm
