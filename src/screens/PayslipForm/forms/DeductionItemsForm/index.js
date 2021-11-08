import './DeductionItemsForm.css'
import PropTypes from 'prop-types'
import {
  addCommas,
  removeNonNumeric,
  removeCommas,
} from '../../../../utils/utils'

const DeductionItemsForm = ({ formValues, setFormValues }) => {
  return (
    <div className={'deduction-items-wrapper'}>
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
              控除項目
            </td>
          </tr>
          <tr>
            <td>
              <label>健康保険料</label>
            </td>
            <td style={{ float: 'right' }}>
              <input
                type={'text'}
                placeholder={0}
                value={formValues.toBeDeducted.healthInsurance}
                onChange={e =>
                  setFormValues(prevState => {
                    const formValues = { ...prevState }
                    formValues.toBeDeducted.healthInsurance = addCommas(
                      removeNonNumeric(e.target.value),
                    )
                    formValues.toBeDeducted.total =
                      +removeCommas(formValues.toBeDeducted.healthInsurance) +
                      +removeCommas(formValues.toBeDeducted.longTermCare) +
                      +removeCommas(formValues.toBeDeducted.pension) +
                      +removeCommas(formValues.toBeDeducted.employmentInsurance)
                    return formValues
                  })
                }
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>介護保険料</label>
            </td>
            <td style={{ float: 'right' }}>
              <input
                type={'text'}
                placeholder={0}
                min={0}
                value={formValues.toBeDeducted.longTermCare}
                onChange={e =>
                  setFormValues(prevState => {
                    const formValues = { ...prevState }
                    formValues.toBeDeducted.longTermCare = addCommas(
                      removeNonNumeric(e.target.value),
                    )
                    formValues.toBeDeducted.total =
                      +removeCommas(formValues.toBeDeducted.healthInsurance) +
                      +removeCommas(formValues.toBeDeducted.longTermCare) +
                      +removeCommas(formValues.toBeDeducted.pension) +
                      +removeCommas(formValues.toBeDeducted.employmentInsurance)
                    return formValues
                  })
                }
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>厚生年金保険料</label>
            </td>
            <td style={{ float: 'right' }}>
              <input
                type={'text'}
                placeholder={0}
                value={formValues.toBeDeducted.pension}
                onChange={e =>
                  setFormValues(prevState => {
                    const formValues = { ...prevState }
                    formValues.toBeDeducted.pension = addCommas(
                      removeNonNumeric(e.target.value),
                    )
                    formValues.toBeDeducted.total =
                      +removeCommas(formValues.toBeDeducted.healthInsurance) +
                      +removeCommas(formValues.toBeDeducted.longTermCare) +
                      +removeCommas(formValues.toBeDeducted.pension) +
                      +removeCommas(formValues.toBeDeducted.employmentInsurance)
                    return formValues
                  })
                }
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>雇用保険料</label>
            </td>
            <td style={{ float: 'right' }}>
              <input
                type={'text'}
                placeholder={0}
                value={formValues.toBeDeducted.employmentInsurance}
                onChange={e =>
                  setFormValues(prevState => {
                    const formValues = { ...prevState }
                    formValues.toBeDeducted.employmentInsurance = addCommas(
                      removeNonNumeric(e.target.value),
                    )
                    formValues.toBeDeducted.total =
                      +removeCommas(formValues.toBeDeducted.healthInsurance) +
                      +removeCommas(formValues.toBeDeducted.longTermCare) +
                      +removeCommas(formValues.toBeDeducted.pension) +
                      +removeCommas(formValues.toBeDeducted.employmentInsurance)
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
      <table className={'result-table'}>
        <tbody>
          <tr>
            <td>
              <label>控除合計</label>
            </td>
            <td>
              <label>{formValues.toBeDeducted.total.toLocaleString()}</label>
            </td>
          </tr>
        </tbody>
      </table>
      <table className={'result-table'}>
        <tbody>
          <tr>
            <td>
              <label>差引支給額</label>
            </td>
            <td>
              <label>
                {(
                  formValues.toBePaid.total - formValues.toBeDeducted.total
                ).toLocaleString()}
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

DeductionItemsForm.propTypes = {
  formValues: PropTypes.object,
  setFormValues: PropTypes.func,
}

export default DeductionItemsForm
