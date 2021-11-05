import './CommuteForm.css'

const CommuteForm = ({ setFormValues }) => {
  return (
    <div className={'commute-wrapper'}>
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
              通勤費補助情報非課税額
            </td>
          </tr>
          <tr>
            <td>
              <label>今月度通勤費非課税額</label>
            </td>
            <td style={{ float: 'right' }}>
              <input
                type={'number'}
                placeholder={0}
                min={0}
                onChange={e =>
                  setFormValues(prevState => {
                    const formValues = { ...prevState }
                    formValues.commute.monthlyFee = e.target.value
                    return formValues
                  })
                }
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>今月度通勤費課税額</label>
            </td>
            <td style={{ float: 'right' }}>
              <input
                type={'number'}
                placeholder={0}
                min={0}
                onChange={e =>
                  setFormValues(prevState => {
                    const formValues = { ...prevState }
                    formValues.commute.monthlyTaxableFee = e.target.value
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

CommuteForm.propTypes = {
  formValues: Object,
  setFormValues: Function,
}

export default CommuteForm
