import './Form3.css'
import PropTypes from 'prop-types'

const SubForm = ({ isLast = false }) => {
  return (
    <div className={'subform3-wrapper'}>
      <table>
        <tbody>
          <tr>
            <td className={'no-right-border dotted-bottom-border'}>
              <label>(フリガナ)</label>
            </td>
            <td className={'no-right-border dotted-bottom-border'}>
              <input type={'text'} placeholder={'ナマエ'} />
            </td>
            <td className={'no-right-border no-bottom-border'} rowSpan={2}>
              <label>区</label>
              <br />
              <label>分</label>
            </td>
            <td rowSpan={2} className={'no-bottom-border'}>
              <select name="kubun">
                <option value="○">○</option>
                <option value="×">×</option>
                <option value="□">□</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className={'no-top-border no-right-border no-bottom-border'}>
              <label>氏名</label>
            </td>
            <td className={'no-top-border no-right-border no-bottom-border'}>
              <input type={'text'} placeholder={'氏名'} />
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
}

const Form3 = ({ formValues, setFormValues }) => {
  console.log(formValues, setFormValues)
  return (
    <div className={'form3-wrapper'}>
      <table>
        <tbody>
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
          <tr>
            <td className={'no-right-border'} rowSpan={1}>
              <label>{'1'}</label>
            </td>
            <SubForm />
          </tr>
          <tr>
            <td className={'no-right-border'} rowSpan={1}>
              <label>{'2'}</label>
            </td>
            <SubForm />
          </tr>
          <tr>
            <td className={'no-right-border'} rowSpan={1}>
              <label>{'3'}</label>
            </td>
            <SubForm />
          </tr>
          <tr>
            <td className={'no-right-border'} rowSpan={1}>
              <label>{'4'}</label>
            </td>
            <SubForm isLast={true} />
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
