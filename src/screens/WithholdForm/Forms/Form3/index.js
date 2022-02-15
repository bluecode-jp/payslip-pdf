import './Form3.css'
import PropTypes from 'prop-types'

const SubForm = ({ isLast = false, index = 1, formValues, setFormValues }) => {
  return (
    <div className={'subform3'}>
      <table>
        <tbody>
          <tr>
            <td className={'no-right-border dotted-bottom-border'}>
              <label>(フリガナ)</label>
            </td>
            <td className={'no-right-border dotted-bottom-border'}>
              <input
                type={'text'}
                placeholder={'ナマエ'}
                value={formValues.form3[index].furigana}
                onChange={e =>
                  setFormValues(prevState => {
                    const formValues = { ...prevState }
                    formValues.form3[index].furigana = e.target.value
                    return formValues
                  })
                }
              />
            </td>
            <td className={'no-right-border no-bottom-border'} rowSpan={2}>
              <label>区</label>
              <br />
              <label>分</label>
            </td>
            <td rowSpan={2} className={'no-bottom-border'}>
              <select
                name="kubun"
                onChange={e =>
                  setFormValues(prevState => {
                    const formValues = { ...prevState }
                    formValues.form3[index].kubun =
                      e.target.options[e.target.selectedIndex].value
                    return formValues
                  })
                }>
                <option value=""></option>
                <option value="○">○</option>
                <option value="X">✕</option>
                <option value="□">□</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className={'no-top-border no-right-border no-bottom-border'}>
              <label>氏名</label>
            </td>
            <td className={'no-top-border no-right-border no-bottom-border'}>
              <input
                type={'text'}
                placeholder={'氏名'}
                value={formValues.form3[index].name}
                onChange={e =>
                  setFormValues(prevState => {
                    const formValues = { ...prevState }
                    formValues.form3[index].name = e.target.value
                    return formValues
                  })
                }
              />
            </td>
          </tr>
          <tr>
            <td className={!isLast ? 'no-bottom-border' : ''} colSpan={5}>
              <label>{''}</label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

SubForm.propTypes = {
  isLast: PropTypes.bool,
  index: PropTypes.number,
  formValues: PropTypes.object,
  setFormValues: PropTypes.func,
}

const Form3 = ({ formValues, setFormValues }) => {
  return (
    <div className={'form3-wrapper'}>
      <table>
        <tbody>
          <tr>
            <td className={'no-right-border'} rowSpan={5}>
              <label>{'控'}</label>
              <br />
              <label>{'除'}</label>
              <br />
              <label>{'対'}</label>
              <br />
              <label>{'象'}</label>
              <br />
              <label>{'扶'}</label>
              <br />
              <label>{'養'}</label>
              <br />
              <label>{'親'}</label>
              <br />
              <label>{'族'}</label>
            </td>
            <td className={'no-right-border'} rowSpan={1}>
              <label>{'1'}</label>
            </td>
            <td className={'subform3-wrapper'}>
              <SubForm index={1} {...{ formValues, setFormValues }} />
            </td>
          </tr>
          <tr>
            <td className={'no-right-border'} rowSpan={1}>
              <label>{'2'}</label>
            </td>
            <td className={'subform3-wrapper'}>
              <SubForm index={2} {...{ formValues, setFormValues }} />
            </td>
          </tr>
          <tr>
            <td className={'no-right-border'} rowSpan={1}>
              <label>{'3'}</label>
            </td>
            <td className={'subform3-wrapper'}>
              <SubForm index={3} {...{ formValues, setFormValues }} />
            </td>
          </tr>
          <tr>
            <td className={'no-right-border'} rowSpan={1}>
              <label>{'4'}</label>
            </td>
            <td className={'subform3-wrapper'}>
              <SubForm
                index={4}
                isLast={true}
                {...{ formValues, setFormValues }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

Form3.propTypes = {
  formValues: PropTypes.object,
  setFormValues: PropTypes.func,
}

export default Form3
