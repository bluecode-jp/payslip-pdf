import styles from './styles.module.css'
import PropTypes from 'prop-types'
import SubForm1 from './SubForms/SubForm1'
import SubForm2 from './SubForms/SubForm2'

function Form8({ formValues, setFormValues }) {
  return (
    <div className={styles.form8Wrapper}>
      <div className={styles.titleContainer}>
        <label style={{ padding: '0.2rem' }}>
          住宅借入金等特別控除の額の内訳
        </label>
      </div>
      <div>
        <SubForm1 {...{ formValues, setFormValues }} />
        <SubForm2 {...{ formValues, setFormValues }} />
      </div>
    </div>
  )
}

Form8.propTypes = {
  formValues: PropTypes.object,
  setFormValues: PropTypes.func,
}

export default Form8
