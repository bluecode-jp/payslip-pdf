import styles from './styles.module.css'
import PropTypes from 'prop-types'

function Form6({ formValues, setFormValues }) {
  return (
    <div className={styles.form6Wrapper}>
      <label>(摘要)</label>
      <input
        type={'text'}
        value={formValues.form6.summary}
        onChange={e =>
          setFormValues(prevState => {
            const formValues = { ...prevState }
            formValues.form6.summary = e.target.value
            return formValues
          })
        }
      />
    </div>
  )
}

Form6.propTypes = {
  formValues: PropTypes.object,
  setFormValues: PropTypes.func,
}

export default Form6
