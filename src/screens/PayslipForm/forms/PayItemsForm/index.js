import './PayItemsForm.css'

const PayItemsForm = ({ formValues, setFormValues }) => {
  return (
    <div className={'pay-items-wrapper'}>
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
              支給項目
            </td>
          </tr>
          <tr>
            <td>
              <label>基本給</label>
            </td>
            <td style={{ float: 'right' }}>
              <input
                type={'number'}
                placeholder={0}
                min={0}
                onChange={e =>
                  setFormValues(prevState => {
                    const formValues = { ...prevState }
                    formValues.toBePaid.baseSalary = e.target.value
                    formValues.toBePaid.total =
                      +formValues.toBePaid.baseSalary +
                      +formValues.toBePaid.qualificationSalary +
                      +formValues.toBePaid.roleSalary +
                      +formValues.toBePaid.evaluationSalary
                    return formValues
                  })
                }
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>資格給</label>
            </td>
            <td style={{ float: 'right' }}>
              <input
                type={'number'}
                placeholder={0}
                min={0}
                onChange={e =>
                  setFormValues(prevState => {
                    const formValues = { ...prevState }
                    formValues.toBePaid.qualificationSalary = e.target.value
                    formValues.toBePaid.total =
                      +formValues.toBePaid.baseSalary +
                      +formValues.toBePaid.qualificationSalary +
                      +formValues.toBePaid.roleSalary +
                      +formValues.toBePaid.evaluationSalary
                    return formValues
                  })
                }
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>役割給</label>
            </td>
            <td style={{ float: 'right' }}>
              <input
                type={'number'}
                placeholder={0}
                min={0}
                onChange={e =>
                  setFormValues(prevState => {
                    const formValues = { ...prevState }
                    formValues.toBePaid.roleSalary = e.target.value
                    formValues.toBePaid.total =
                      +formValues.toBePaid.baseSalary +
                      +formValues.toBePaid.qualificationSalary +
                      +formValues.toBePaid.roleSalary +
                      +formValues.toBePaid.evaluationSalary
                    return formValues
                  })
                }
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>評価給</label>
            </td>
            <td style={{ float: 'right' }}>
              <input
                type={'number'}
                placeholder={0}
                min={0}
                onChange={e =>
                  setFormValues(prevState => {
                    const formValues = { ...prevState }
                    formValues.toBePaid.evaluationSalary = e.target.value
                    formValues.toBePaid.total =
                      +formValues.toBePaid.baseSalary +
                      +formValues.toBePaid.qualificationSalary +
                      +formValues.toBePaid.roleSalary +
                      +formValues.toBePaid.evaluationSalary
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
              <label>支給合計</label>
            </td>
            <td>
              <label>{formValues.toBePaid.total}</label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

PayItemsForm.propTypes = {
  formValues: Object,
  setFormValues: Function,
}

export default PayItemsForm
