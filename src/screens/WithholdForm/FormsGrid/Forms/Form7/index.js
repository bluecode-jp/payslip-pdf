import styles from './styles.module.css'
import PropTypes from 'prop-types'

function Form7({ formValues, setFormValues }) {
  return (
    <div className={styles.form7Wrapper}>
      <div className={`${styles.column} ${styles.firstCol}`}>
        <label>生命保険料の金額の内訳</label>
      </div>
      <div className={`${styles.column} ${styles.secondCol}`}>
        <label>新生命保険料の金額</label>
        <div className={styles.yen}>
          <input
            type={'text'}
            value={formValues.form7.newLifeInsurance}
            onChange={e =>
              setFormValues(prevState => {
                const formValues = { ...prevState }
                formValues.form7.newLifeInsurance = e.target.value
                return formValues
              })
            }
          />
        </div>
      </div>
      <div className={`${styles.column} ${styles.thirdCol}`}>
        <label>旧生命保険料の金額</label>
        <div className={styles.yen}>
          <input
            type={'text'}
            value={formValues.form7.oldLifeInsurance}
            onChange={e =>
              setFormValues(prevState => {
                const formValues = { ...prevState }
                formValues.form7.oldLifeInsurance = e.target.value
                return formValues
              })
            }
          />
        </div>
      </div>
      <div className={`${styles.column} ${styles.fourthCol}`}>
        <label>介護医療保険料の金額</label>
        <div className={styles.yen}>
          <input
            type={'text'}
            value={formValues.form7.longTermCare}
            onChange={e =>
              setFormValues(prevState => {
                const formValues = { ...prevState }
                formValues.form7.longTermCare = e.target.value
                return formValues
              })
            }
          />
        </div>
      </div>
      <div className={`${styles.column} ${styles.fifthCol}`}>
        <label>新個人年金保険料の金額</label>
        <div className={styles.yen}>
          <input
            type={'text'}
            value={formValues.form7.individualAnnuity}
            onChange={e =>
              setFormValues(prevState => {
                const formValues = { ...prevState }
                formValues.form7.individualAnnuity = e.target.value
                return formValues
              })
            }
          />
        </div>
      </div>
      <div className={`${styles.column} ${styles.sixthCol}`}>
        <label>旧個人年金保険料の金額</label>
        <div className={styles.yen}>
          <input
            type={'text'}
            value={formValues.form7.oldIndividualAnnuity}
            onChange={e =>
              setFormValues(prevState => {
                const formValues = { ...prevState }
                formValues.form7.oldIndividualAnnuity = e.target.value
                return formValues
              })
            }
          />
        </div>
      </div>
    </div>
  )
}

Form7.propTypes = {
  formValues: PropTypes.object,
  setFormValues: PropTypes.func,
}

export default Form7
