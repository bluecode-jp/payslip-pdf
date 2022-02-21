import styles from './styles.module.css'
import PropTypes from 'prop-types'

function Form5({ formValues, setFormValues }) {
  return (
    <div className={styles.form5Wrapper}>
      <div className={`${styles.column} ${styles.firstCol}`}>
        <label>社会保険料等の金額</label>
        <div className={styles.numberContainer}>
          <div className={`${styles.sen} ${styles.uchi}`}>
            <input
              type={'text'}
              value={formValues.form5.socialInsurance.sen}
              onChange={e =>
                setFormValues(prevState => {
                  const formValues = { ...prevState }
                  formValues.form5.socialInsurance.sen = e.target.value
                  return formValues
                })
              }
            />
          </div>
          <div className={styles.yen}>
            <input
              type={'text'}
              value={formValues.form5.socialInsurance.yen}
              onChange={e =>
                setFormValues(prevState => {
                  const formValues = { ...prevState }
                  formValues.form5.socialInsurance.yen = e.target.value
                  return formValues
                })
              }
            />
          </div>
        </div>
      </div>
      <div className={`${styles.column} ${styles.secondCol}`}>
        <label>生命保険料の控除額</label>
        <div className={styles.numberContainer}>
          <div className={styles.sen}>
            <input
              type={'text'}
              value={formValues.form5.lifeInsurance.sen}
              onChange={e =>
                setFormValues(prevState => {
                  const formValues = { ...prevState }
                  formValues.form5.lifeInsurance.sen = e.target.value
                  return formValues
                })
              }
            />
          </div>
          <div className={styles.yen}>
            <input
              type={'text'}
              value={formValues.form5.lifeInsurance.yen}
              onChange={e =>
                setFormValues(prevState => {
                  const formValues = { ...prevState }
                  formValues.form5.lifeInsurance.yen = e.target.value
                  return formValues
                })
              }
            />
          </div>
        </div>
      </div>
      <div className={`${styles.column} ${styles.thirdCol}`}>
        <label>地震保険料の控除額</label>
        <div className={styles.numberContainer}>
          <div className={styles.sen}>
            <input
              type={'text'}
              value={formValues.form5.earthquakeInsurance.sen}
              onChange={e =>
                setFormValues(prevState => {
                  const formValues = { ...prevState }
                  formValues.form5.earthquakeInsurance.sen = e.target.value
                  return formValues
                })
              }
            />
          </div>
          <div className={styles.yen}>
            <input
              type={'text'}
              value={formValues.form5.earthquakeInsurance.yen}
              onChange={e =>
                setFormValues(prevState => {
                  const formValues = { ...prevState }
                  formValues.form5.earthquakeInsurance.yen = e.target.value
                  return formValues
                })
              }
            />
          </div>
        </div>
      </div>
      <div className={`${styles.column} ${styles.fourthCol}`}>
        <label>住宅借入金等特別控除の額</label>
        <div className={styles.numberContainer}>
          <div className={styles.sen}>
            <input
              type={'text'}
              value={formValues.form5.specialDeduction.sen}
              onChange={e =>
                setFormValues(prevState => {
                  const formValues = { ...prevState }
                  formValues.form5.specialDeduction.sen = e.target.value
                  return formValues
                })
              }
            />
          </div>
          <div className={styles.yen}>
            <input
              type={'text'}
              value={formValues.form5.specialDeduction.yen}
              onChange={e =>
                setFormValues(prevState => {
                  const formValues = { ...prevState }
                  formValues.form5.specialDeduction.yen = e.target.value
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

Form5.propTypes = {
  formValues: PropTypes.object,
  setFormValues: PropTypes.func,
}

export default Form5
