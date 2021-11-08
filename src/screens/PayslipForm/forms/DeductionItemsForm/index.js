import './DeductionItemsForm.css'

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
                type={'number'}
                placeholder={0}
                min={0}
                onChange={e =>
                  setFormValues(prevState => {
                    const formValues = { ...prevState }
                    formValues.toBeDeducted.healthInsurance = e.target.value
                    formValues.toBeDeducted.total =
                      +formValues.toBeDeducted.healthInsurance +
                      +formValues.toBeDeducted.longTermCare +
                      +formValues.toBeDeducted.pension +
                      +formValues.toBeDeducted.employmentInsurance
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
                type={'number'}
                placeholder={0}
                min={0}
                onChange={e =>
                  setFormValues(prevState => {
                    const formValues = { ...prevState }
                    formValues.toBeDeducted.longTermCare = e.target.value
                    formValues.toBeDeducted.total =
                      +formValues.toBeDeducted.healthInsurance +
                      +formValues.toBeDeducted.longTermCare +
                      +formValues.toBeDeducted.pension +
                      +formValues.toBeDeducted.employmentInsurance
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
                type={'number'}
                placeholder={0}
                min={0}
                onChange={e =>
                  setFormValues(prevState => {
                    const formValues = { ...prevState }
                    formValues.toBeDeducted.pension = e.target.value
                    formValues.toBeDeducted.total =
                      +formValues.toBeDeducted.healthInsurance +
                      +formValues.toBeDeducted.longTermCare +
                      +formValues.toBeDeducted.pension +
                      +formValues.toBeDeducted.employmentInsurance
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
                type={'number'}
                placeholder={0}
                min={0}
                onChange={e =>
                  setFormValues(prevState => {
                    const formValues = { ...prevState }
                    formValues.toBeDeducted.employmentInsurance = e.target.value
                    formValues.toBeDeducted.total =
                      +formValues.toBeDeducted.healthInsurance +
                      +formValues.toBeDeducted.longTermCare +
                      +formValues.toBeDeducted.pension +
                      +formValues.toBeDeducted.employmentInsurance
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
              <label>{formValues.toBeDeducted.total}</label>
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
                {formValues.toBePaid.total - formValues.toBeDeducted.total}
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

DeductionItemsForm.propTypes = {
  formValues: Object,
  setFormValues: Function,
}

export default DeductionItemsForm
