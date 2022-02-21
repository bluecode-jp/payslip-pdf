import styles from './styles.module.css'
import PropTypes from 'prop-types'

function SubForm1({ formValues, setFormValues }) {
  return (
    <div className={styles.subform1Wrapper}>
      <div className={`${styles.column} ${styles.firstCol}`}>
        <label>住宅借入金等特別控除適用数</label>
        <div>
          <input
            type={'text'}
            value={formValues.form8.specialDeductions}
            onChange={e =>
              setFormValues(prevState => {
                const formValues = { ...prevState }
                formValues.form8.specialDeductions = e.target.value
                return formValues
              })
            }
          />
        </div>
      </div>
      <div className={`${styles.column} ${styles.secondCol}`}>
        <label>居住開始年月日(1回目)</label>
        <div className={styles.nen}>
          <input
            type={'text'}
            value={formValues.form8.startOfResidence1.year}
            onChange={e =>
              setFormValues(prevState => {
                const formValues = { ...prevState }
                formValues.form8.startOfResidence1.year = e.target.value
                return formValues
              })
            }
          />
        </div>
        <div className={styles.getsu}>
          <input
            type={'text'}
            value={formValues.form8.startOfResidence1.month}
            onChange={e =>
              setFormValues(prevState => {
                const formValues = { ...prevState }
                formValues.form8.startOfResidence1.month = e.target.value
                return formValues
              })
            }
          />
        </div>
        <div className={styles.hi}>
          <input
            type={'text'}
            value={formValues.form8.startOfResidence1.day}
            onChange={e =>
              setFormValues(prevState => {
                const formValues = { ...prevState }
                formValues.form8.startOfResidence1.day = e.target.value
                return formValues
              })
            }
          />
        </div>
      </div>
      <div className={`${styles.column} ${styles.thirdCol}`}>
        <label>住宅借入金等特別控除区分(1回目)</label>
        <div>
          <input
            type={'text'}
            value={formValues.form8.kubun1}
            onChange={e =>
              setFormValues(prevState => {
                const formValues = { ...prevState }
                formValues.form8.kubun1 = e.target.value
                return formValues
              })
            }
          />
        </div>
      </div>
      <div className={`${styles.column} ${styles.fourthCol}`}>
        <label>住宅借入金等年末残高(1回目)</label>
        <div className={styles.yen}>
          <input
            type={'text'}
            value={formValues.form8.yearEndBalance1}
            onChange={e =>
              setFormValues(prevState => {
                const formValues = { ...prevState }
                formValues.form8.yearEndBalance1 = e.target.value
                return formValues
              })
            }
          />
        </div>
      </div>
    </div>
  )
}

SubForm1.propTypes = {
  formValues: PropTypes.object,
  setFormValues: PropTypes.func,
}

export default SubForm1
