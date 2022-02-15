import './Form1.css'
import PropTypes from 'prop-types'

const Form1 = ({ formValues, setFormValues }) => {
  console.log(formValues, setFormValues)
  return (
    <div className={'form1-wrapper'}>
      <table>
        <tbody>
          <td className={'no-right-border no-bottom-border'} rowSpan={3}>
            <label>{'(源泉・特別)'}</label>
            <br />
            <label>{'控除対象'}</label>
            <br />
            <label>{'配偶者'}</label>
          </td>
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
            <td colSpan={5}>
              <label>{''}</label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

Form1.propTypes = {
  formValues: PropTypes.object,
  setFormValues: PropTypes.func,
}

export default Form1
