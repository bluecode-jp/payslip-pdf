import './EmploymentStatusForm.css'
import { addCommas, removeNonNumeric } from '../../../../utils/utils'

const EmploymentStatusForm = ({ formValues, setFormValues }) => {
  return (
    <div className={'employment-status-wrapper'}>
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
              雇用状況
            </td>
          </tr>
          <tr>
            <td>
              <label>出勤日数 (日)</label>
            </td>
            <td style={{ float: 'right' }}>
              <input
                type={'text'}
                placeholder={0}
                value={formValues.employmentStatus.workDays}
                onChange={e =>
                  setFormValues(prevState => {
                    const formValues = { ...prevState }
                    formValues.employmentStatus.workDays = addCommas(
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
              <label>計画休日(日)</label>
            </td>
            <td style={{ float: 'right' }}>
              <input
                type={'text'}
                placeholder={0}
                value={formValues.employmentStatus.holidays.days}
                onChange={e =>
                  setFormValues(prevState => {
                    const formValues = { ...prevState }
                    formValues.employmentStatus.holidays.days = addCommas(
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
              <label>計画休日(時)</label>
            </td>
            <td style={{ float: 'right' }}>
              <input
                type={'text'}
                placeholder={0}
                value={formValues.employmentStatus.holidays.hours}
                onChange={e =>
                  setFormValues(prevState => {
                    const formValues = { ...prevState }
                    formValues.employmentStatus.holidays.hours = addCommas(
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

EmploymentStatusForm.propTypes = {
  formValues: Object,
  setFormValues: Function,
}

export default EmploymentStatusForm
