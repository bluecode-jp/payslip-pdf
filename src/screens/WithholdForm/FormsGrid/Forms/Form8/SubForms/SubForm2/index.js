import styles from './styles.module.css'
import PropTypes from 'prop-types'

function SubForm2({ formValues, setFormValues }) {
  return (
    <div className={styles.subform2Wrapper}>
      <div className={`${styles.column} ${styles.firstCol}`}>
        <label>住宅借入金等特別控除可能額</label>
        <div className={styles.yen}>
          <input
            type={'text'}
            value={formValues.form8.specialDeductibleAmount}
            onChange={e =>
              setFormValues(prevState => {
                const formValues = { ...prevState }
                formValues.form8.specialDeductibleAmount = e.target.value
                return formValues
              })
            }
          />
        </div>
      </div>
      <div className={`${styles.column} ${styles.secondCol}`}>
        <label>居住開始年月日(2回目</label>
        <div className={styles.nen}>
          <input
            type={'text'}
            value={formValues.form8.startOfResidence2.year}
            onChange={e =>
              setFormValues(prevState => {
                const formValues = { ...prevState }
                formValues.form8.startOfResidence2.year = e.target.value
                return formValues
              })
            }
          />
        </div>
        <div className={styles.getsu}>
          <input
            type={'text'}
            value={formValues.form8.startOfResidence2.month}
            onChange={e =>
              setFormValues(prevState => {
                const formValues = { ...prevState }
                formValues.form8.startOfResidence2.month = e.target.value
                return formValues
              })
            }
          />
        </div>
        <div className={styles.hi}>
          <input
            type={'text'}
            value={formValues.form8.startOfResidence2.day}
            onChange={e =>
              setFormValues(prevState => {
                const formValues = { ...prevState }
                formValues.form8.startOfResidence2.day = e.target.value
                return formValues
              })
            }
          />
        </div>
      </div>
      <div className={`${styles.column} ${styles.thirdCol}`}>
        <label>住宅借入金等特別控除区分(2回目)</label>
        <div>
          <input
            type={'text'}
            value={formValues.form8.kubun2}
            onChange={e =>
              setFormValues(prevState => {
                const formValues = { ...prevState }
                formValues.form8.kubun2 = e.target.value
                return formValues
              })
            }
          />
        </div>
      </div>
      <div className={`${styles.column} ${styles.fourthCol}`}>
        <label>住宅借入金等年末残高(2回目)</label>
        <div className={styles.yen}>
          <input
            type={'text'}
            value={formValues.form8.yearEndBalance2}
            onChange={e =>
              setFormValues(prevState => {
                const formValues = { ...prevState }
                formValues.form8.yearEndBalance2 = e.target.value
                return formValues
              })
            }
          />
        </div>
      </div>
    </div>
  )
}

SubForm2.propTypes = {
  formValues: PropTypes.object,
  setFormValues: PropTypes.func,
}

export default SubForm2
