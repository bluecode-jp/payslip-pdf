import styles from './styles.module.css'
import PropTypes from 'prop-types'
function Form1({ formValues, setFormValues }) {
  return (
    <div className={styles.form1Wrapper}>
      <div className={`${styles.column} ${styles.firstCol}`}>
        支払を受ける者
      </div>
      <div className={`${styles.column} ${styles.secondCol}`}>住所又は居所</div>
      <div className={`${styles.column} ${styles.thirdCol}`}>
        <input
          type={'text'}
          value={formValues.form1.jyusho}
          onChange={e =>
            setFormValues(prevState => {
              const formValues = { ...prevState }
              formValues.form1.jyusho = e.target.value
              return formValues
            })
          }
        />
      </div>
    </div>
  )
}

Form1.propTypes = {
  formValues: PropTypes.object,
  setFormValues: PropTypes.func,
}

export default Form1
