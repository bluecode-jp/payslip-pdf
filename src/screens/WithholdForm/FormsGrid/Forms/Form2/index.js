import styles from './styles.module.css'
import PropTypes from 'prop-types'

function Form2({ formValues, setFormValues }) {
  return (
    <div className={styles.form2Wrapper}>
      <div className={`${styles.row} ${styles.firstRow}`}>
        <label>(受給者番号)</label>
        <input
          type={'text'}
          value={formValues.form2.recipientNumber}
          onChange={e =>
            setFormValues(prevState => {
              const formValues = { ...prevState }
              formValues.form2.recipientNumber = e.target.value
              return formValues
            })
          }
        />
      </div>
      <div className={`${styles.row} ${styles.secondRow}`}></div>
      <div className={`${styles.row} ${styles.thirdRow}`}>
        <label>(役職名)</label>
        <input
          type={'text'}
          value={formValues.form2.jobTitle}
          onChange={e =>
            setFormValues(prevState => {
              const formValues = { ...prevState }
              formValues.form2.jobTitle = e.target.value
              return formValues
            })
          }
        />
      </div>
      <div className={`${styles.row} ${styles.fourthRow}`}>
        <div className={styles.rowTitle}>
          <label>氏名</label>
        </div>
        <div className={styles.rowContent}>
          <div className={styles.furigana}>
            <label>(フリガナ)</label>
            <input
              type={'text'}
              value={formValues.form2.furigana}
              onChange={e =>
                setFormValues(prevState => {
                  const formValues = { ...prevState }
                  formValues.form2.furigana = e.target.value
                  return formValues
                })
              }
            />
          </div>
          <input
            type={'text'}
            value={formValues.form2.name}
            onChange={e =>
              setFormValues(prevState => {
                const formValues = { ...prevState }
                formValues.form2.name = e.target.value
                return formValues
              })
            }
          />
        </div>
      </div>
    </div>
  )
}

Form2.propTypes = {
  formValues: PropTypes.object,
  setFormValues: PropTypes.func,
}

export default Form2
