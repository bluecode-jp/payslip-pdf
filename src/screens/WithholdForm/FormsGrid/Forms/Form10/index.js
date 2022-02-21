import PropTypes from 'prop-types'
import styles from './styles.module.css'
import SubForm1 from './SubForms/SubForm1'
import SubForm2 from './SubForms/SubForm2'

function Form10({ formValues, setFormValues }) {
  return (
    <div className={styles.form10Wrapper}>
      <div className={styles.titleContainer}>
        <label style={{ padding: '0.2rem' }}>配偶者の合計所得</label>
        <div className={styles.yen}>
          <input
            type={'text'}
            value={formValues.form10.totalIncome}
            onChange={e =>
              setFormValues(prevState => {
                const formValues = { ...prevState }
                formValues.form10.totalIncome = e.target.value
                return formValues
              })
            }
          />
        </div>
      </div>
      <div className={styles.subformWrapper}>
        <SubForm1 {...{ formValues, setFormValues }} />
        <SubForm2 {...{ formValues, setFormValues }} />
      </div>
    </div>
  )
}

Form10.propTypes = {
  formValues: PropTypes.object,
  setFormValues: PropTypes.func,
}

export default Form10
