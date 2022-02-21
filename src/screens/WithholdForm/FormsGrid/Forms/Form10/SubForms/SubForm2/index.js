import styles from './styles.module.css'
import PropTypes from 'prop-types'

function SubForm2({ formValues, setFormValues }) {
  return (
    <div className={styles.subform1Wrapper}>
      <div className={`${styles.column} ${styles.firstCol}`}>
        <label>基礎控除の額</label>
        <div className={styles.yen}>
          <input
            type={'text'}
            value={formValues.form10.basicDeduction}
            onChange={e =>
              setFormValues(prevState => {
                const formValues = { ...prevState }
                formValues.form10.basicDeduction = e.target.value
                return formValues
              })
            }
          />
        </div>
      </div>
      <div className={`${styles.column} ${styles.secondCol}`}>
        <label>所得金額 調整控除額</label>
        <div className={styles.yen}>
          <input
            type={'text'}
            value={formValues.form10.adjustment}
            onChange={e =>
              setFormValues(prevState => {
                const formValues = { ...prevState }
                formValues.form10.adjustment = e.target.value
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
