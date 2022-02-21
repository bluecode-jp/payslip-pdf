import PropTypes from 'prop-types'
import styles from './styles.module.css'
import SubForm1 from './SubForms/SubForm1'

function Form14({ formValues, setFormValues }) {
  return (
    <div className={styles.form14Wrapper}>
      <div className={styles.titleContainer}>
        <label style={{ width: '1rem' }}>支 払 者</label>
      </div>
      <div className={styles.subformWrapper}>
        <SubForm1 {...{ formValues, setFormValues }} />
      </div>
    </div>
  )
}

Form14.propTypes = {
  formValues: PropTypes.object,
  setFormValues: PropTypes.func,
}

export default Form14
