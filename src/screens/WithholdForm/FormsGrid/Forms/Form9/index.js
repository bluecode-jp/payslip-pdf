import styles from './styles.module.css'
import SubForm1 from './SubForms/SubForm1'
import PropTypes from 'prop-types'

function Form9({ formValues, setFormValues }) {
  return (
    <div className={styles.form9Wrapper}>
      <div className={styles.titleContainer}>
        <label style={{ padding: '0.2rem' }}>
          (源泉・特別) 控除対象 配偶者
        </label>
      </div>
      <div className={styles.subformWrapper}>
        <SubForm1 {...{ formValues, setFormValues }} />
      </div>
    </div>
  )
}

Form9.propTypes = {
  formValues: PropTypes.object,
  setFormValues: PropTypes.func,
}

export default Form9
