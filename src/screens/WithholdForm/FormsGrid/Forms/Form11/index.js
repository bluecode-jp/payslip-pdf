import PropTypes from 'prop-types'
import styles from './styles.module.css'
import SubForm1 from './SubForms/SubForm1'

function Form11({ formValues, setFormValues }) {
  return (
    <div className={styles.form11Wrapper}>
      <div className={styles.titleContainer}>
        <label>控 除 対 象 扶 養 親</label>
      </div>
      <div className={styles.subformWrapper}>
        {
          // eslint-disable-next-line no-unused-vars
          [...Array(4)].map((_, index) => (
            <SubForm1
              key={index}
              index={index + 1}
              {...{ formValues, setFormValues }}
            />
          ))
        }
      </div>
    </div>
  )
}

Form11.propTypes = {
  formValues: PropTypes.object,
  setFormValues: PropTypes.func,
}

export default Form11
