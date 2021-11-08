import PropTypes from 'prop-types'
import './PersonalSituationForm.css'

const PersonalSituationForm = ({ setFormValues }) => {
  return (
    <div className={'personal-situation-wrapper'}>
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
              本人状況
            </td>
          </tr>
          <tr>
            <td>
              <label>資格 / 等級</label>
            </td>
            <td style={{ float: 'right' }}>
              <input
                type={'text'}
                placeholder={'G1'}
                onChange={e =>
                  setFormValues(prevState => {
                    const formValues = { ...prevState }
                    formValues.personalSituation.qualification = e.target.value
                    return formValues
                  })
                }
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>契約区分</label>
            </td>
            <td style={{ float: 'right' }}>
              <input
                type={'text'}
                placeholder={'社員'}
                onChange={e =>
                  setFormValues(prevState => {
                    const formValues = { ...prevState }
                    formValues.personalSituation.contractClassification =
                      e.target.value
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

PersonalSituationForm.propTypes = {
  formValues: PropTypes.object,
  setFormValues: PropTypes.func,
}

export default PersonalSituationForm
