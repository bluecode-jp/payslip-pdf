import './Form2.css'
import PropTypes from 'prop-types'
import { addCommas, removeNonNumeric } from '../../../../utils/utils'

const Form2 = ({ formValues, setFormValues }) => {
  return (
    <div className={'form2-wrapper'}>
      <div className={'cell no-right-border'}>
        <label>{'配偶者の'}</label>
        <label>{'合計所得'}</label>
      </div>
      <div className={'cell no-right-border hasYen'}>
        <input
          type={'text'}
          placeholder={'0'}
          value={formValues.form2.totalIncome}
          onChange={e =>
            setFormValues(prevState => {
              const formValues = { ...prevState }
              formValues.form2.totalIncome = addCommas(
                removeNonNumeric(e.target.value),
              )
              return formValues
            })
          }
        />
      </div>
      <table>
        <tbody>
          <tr>
            <td className={'no-right-border '}>
              <label>国民年金保険</label>
              <br />
              <label>料等の金額</label>
            </td>
            <td className={'hasYen'}>
              <input
                type={'text'}
                placeholder={'0'}
                value={formValues.form2.pension}
                onChange={e =>
                  setFormValues(prevState => {
                    const formValues = { ...prevState }
                    formValues.form2.pension = addCommas(
                      removeNonNumeric(e.target.value),
                    )
                    return formValues
                  })
                }
              />
            </td>
            <td className={'no-left-border no-right-border'}>
              <label>旧長期損害</label>
              <br />
              <label>保険料の金額</label>
            </td>
            <td className={'hasYen'}>
              <input
                type={'text'}
                placeholder={'0'}
                value={formValues.form2.insurance}
                onChange={e =>
                  setFormValues(prevState => {
                    const formValues = { ...prevState }
                    formValues.form2.insurance = addCommas(
                      removeNonNumeric(e.target.value),
                    )
                    return formValues
                  })
                }
              />
            </td>
          </tr>
          <tr>
            <td className={'no-top-border no-right-border'}>
              <label>基礎控除の額</label>
            </td>
            <td className={'no-top-border hasYen'}>
              <input
                type={'text'}
                placeholder={'0'}
                value={formValues.form2.basicDeduction}
                onChange={e =>
                  setFormValues(prevState => {
                    const formValues = { ...prevState }
                    formValues.form2.basicDeduction = addCommas(
                      removeNonNumeric(e.target.value),
                    )
                    return formValues
                  })
                }
              />
            </td>
            <td className={'no-top-border no-left-border no-right-border'}>
              <label>所得金額</label>
              <br />
              <label>調整控除額</label>
            </td>
            <td className={'no-top-border hasYen'}>
              <input
                type={'text'}
                placeholder={'0'}
                value={formValues.form2.adjustment}
                onChange={e =>
                  setFormValues(prevState => {
                    const formValues = { ...prevState }
                    formValues.form2.adjustment = addCommas(
                      removeNonNumeric(e.target.value),
                    )
                    return formValues
                  })
                }
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

Form2.propTypes = {
  formValues: PropTypes.object,
  setFormValues: PropTypes.func,
}

export default Form2
