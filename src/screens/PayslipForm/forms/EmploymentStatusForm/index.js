import './EmploymentStatusForm.css'

const EmploymentStatusForm = ({ setFormValues }) => {
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
                type={'number'}
                placeholder={0}
                min={0}
                onChange={e =>
                  setFormValues(prevState => {
                    const formValues = { ...prevState }
                    formValues.employmentStatus.workDays = e.target.value
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
                type={'number'}
                placeholder={0}
                min={0}
                onChange={e =>
                  setFormValues(prevState => {
                    const formValues = { ...prevState }
                    formValues.employmentStatus.holidays.days = e.target.value
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
                type={'number'}
                placeholder={0}
                min={0}
                onChange={e =>
                  setFormValues(prevState => {
                    const formValues = { ...prevState }
                    formValues.employmentStatus.holidays.hours = e.target.value
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
