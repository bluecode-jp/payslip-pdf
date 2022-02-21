import styles from './styles.module.css'
import PropTypes from 'prop-types'

function Form3({ formValues, setFormValues }) {
  return (
    <div className={styles.form3Wrapper}>
      <div className={`${styles.column} ${styles.firstCol}`}>
        <label>種 別</label>
        <div>
          <input
            type={'text'}
            value={formValues.form3.shubetsu}
            onChange={e =>
              setFormValues(prevState => {
                const formValues = { ...prevState }
                formValues.form3.shubetsu = e.target.value
                return formValues
              })
            }
          />
        </div>
      </div>
      <div className={`${styles.column} ${styles.secondCol}`}>
        <label>支 払 金 額</label>
        <div className={styles.numberContainer}>
          <div className={styles.uchi}>
            <input
              type={'text'}
              value={formValues.form3.payment.uchi}
              onChange={e =>
                setFormValues(prevState => {
                  const formValues = { ...prevState }
                  formValues.form3.payment.uchi = e.target.value
                  return formValues
                })
              }
            />
          </div>
          <div className={styles.sen}>
            <input
              type={'text'}
              value={formValues.form3.payment.sen}
              onChange={e =>
                setFormValues(prevState => {
                  const formValues = { ...prevState }
                  formValues.form3.payment.sen = e.target.value
                  return formValues
                })
              }
            />
          </div>
          <div className={styles.yen}>
            <input
              type={'text'}
              value={formValues.form3.payment.yen}
              onChange={e =>
                setFormValues(prevState => {
                  const formValues = { ...prevState }
                  formValues.form3.payment.yen = e.target.value
                  return formValues
                })
              }
            />
          </div>
        </div>
      </div>
      <div className={`${styles.column} ${styles.thirdCol}`}>
        <label>給与所得控除後の金額 (調整控除後)</label>
        <div className={styles.numberContainer}>
          <div>
            <input
              type={'text'}
              value={formValues.form3.amountAfter.uchi}
              onChange={e =>
                setFormValues(prevState => {
                  const formValues = { ...prevState }
                  formValues.form3.amountAfter.uchi = e.target.value
                  return formValues
                })
              }
            />
          </div>
          <div className={styles.sen}>
            <input
              type={'text'}
              value={formValues.form3.amountAfter.sen}
              onChange={e =>
                setFormValues(prevState => {
                  const formValues = { ...prevState }
                  formValues.form3.amountAfter.sen = e.target.value
                  return formValues
                })
              }
            />
          </div>
          <div className={styles.yen}>
            <input
              type={'text'}
              value={formValues.form3.amountAfter.yen}
              onChange={e =>
                setFormValues(prevState => {
                  const formValues = { ...prevState }
                  formValues.form3.amountAfter.yen = e.target.value
                  return formValues
                })
              }
            />
          </div>
        </div>
      </div>
      <div className={`${styles.column} ${styles.fourthCol}`}>
        <label>所得控除の額の合計額</label>
        <div className={styles.numberContainer}>
          <div>
            <input
              type={'text'}
              value={formValues.form3.totalDeduction.uchi}
              onChange={e =>
                setFormValues(prevState => {
                  const formValues = { ...prevState }
                  formValues.form3.totalDeduction.uchi = e.target.value
                  return formValues
                })
              }
            />
          </div>
          <div className={styles.sen}>
            <input
              type={'text'}
              value={formValues.form3.totalDeduction.sen}
              onChange={e =>
                setFormValues(prevState => {
                  const formValues = { ...prevState }
                  formValues.form3.totalDeduction.sen = e.target.value
                  return formValues
                })
              }
            />
          </div>
          <div className={styles.yen}>
            <input
              type={'text'}
              value={formValues.form3.totalDeduction.yen}
              onChange={e =>
                setFormValues(prevState => {
                  const formValues = { ...prevState }
                  formValues.form3.totalDeduction.yen = e.target.value
                  return formValues
                })
              }
            />
          </div>
        </div>
      </div>
      <div className={`${styles.column} ${styles.fifthCol}`}>
        <label>源 泉 徴 収 税 額</label>
        <div className={styles.numberContainer}>
          <div className={styles.uchi}>
            <input
              type={'text'}
              value={formValues.form3.taxAmount.uchi}
              onChange={e =>
                setFormValues(prevState => {
                  const formValues = { ...prevState }
                  formValues.form3.taxAmount.uchi = e.target.value
                  return formValues
                })
              }
            />
          </div>
          <div className={styles.sen}>
            <input
              type={'text'}
              value={formValues.form3.taxAmount.sen}
              onChange={e =>
                setFormValues(prevState => {
                  const formValues = { ...prevState }
                  formValues.form3.taxAmount.sen = e.target.value
                  return formValues
                })
              }
            />
          </div>
          <div className={styles.yen}>
            <input
              type={'text'}
              value={formValues.form3.taxAmount.yen}
              onChange={e =>
                setFormValues(prevState => {
                  const formValues = { ...prevState }
                  formValues.form3.taxAmount.yen = e.target.value
                  return formValues
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Form3.propTypes = {
  formValues: PropTypes.object,
  setFormValues: PropTypes.func,
}

export default Form3
