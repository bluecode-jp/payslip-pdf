import PropTypes from 'prop-types'
import styles from './styles.module.css'

function SubForm1({ formValues, setFormValues }) {
  return (
    <div className={styles.subform1Wrapper}>
      <div className={`${styles.column} ${styles.firstCol}`}>
        <label>国民年金保険料等の金額</label>
        <div className={styles.yen}>
          <input
            type={'text'}
            value={formValues.form10.pension}
            onChange={e =>
              setFormValues(prevState => {
                const formValues = { ...prevState }
                formValues.form10.pension = e.target.value
                return formValues
              })
            }
          />
        </div>
      </div>
      <div className={`${styles.column} ${styles.secondCol}`}>
        <label>旧長期損害 保険料の金額</label>
        <div className={styles.yen}>
          <input
            type={'text'}
            value={formValues.form10.insurance}
            onChange={e =>
              setFormValues(prevState => {
                const formValues = { ...prevState }
                formValues.form10.insurance = e.target.value
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
