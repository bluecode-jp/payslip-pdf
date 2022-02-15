import './Form2.css'
import PropTypes from 'prop-types'

const Form2 = ({ formValues, setFormValues }) => {
  console.log(formValues, setFormValues)
  return (
    <div className={'form2-wrapper'}>
      <div className={'cell no-right-border'}>
        <label>{'配偶者の'}</label>
        <label>{'合計所得'}</label>
      </div>
      <div className={'cell no-right-border hasYen'}>
        <input type={'text'} placeholder={'氏名'} />
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
              <input type={'text'} placeholder={'ナマエ'} />
            </td>
            <td className={'no-left-border no-right-border'}>
              <label>旧長期損害</label>
              <br />
              <label>保険料の金額</label>
            </td>
            <td className={'hasYen'}>
              <input type={'text'} placeholder={'ナマエ'} />
            </td>
          </tr>
          <tr>
            <td className={'no-top-border no-right-border'}>
              <label>基礎控除の額</label>
            </td>
            <td className={'no-top-border hasYen'}>
              <input type={'text'} placeholder={'氏名'} />
            </td>
            <td className={'no-top-border no-left-border no-right-border'}>
              <label>所得金額</label>
              <br />
              <label>調整控除額</label>
            </td>
            <td className={'no-top-border hasYen'}>
              <input type={'text'} placeholder={'氏名'} />
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
