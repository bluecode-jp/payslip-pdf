import PropTypes from 'prop-types'
import styles from './styles.module.css'

function SubForm1({ formValues, setFormValues }) {
  return (
    <div className={styles.subform1Wrapper}>
      <div className={`${styles.row} ${styles.firstRow}`}></div>
      <div className={`${styles.row} ${styles.secondRow}`}>
        <div>
          <div className={styles.firstSubrow}>
            <label>住所(居所) 又は所在地</label>
            <div>
              <input
                type={'text'}
                value={formValues.form14.jyusho}
                onChange={e =>
                  setFormValues(prevState => {
                    const formValues = { ...prevState }
                    formValues.form14.jyusho = e.target.value
                    return formValues
                  })
                }
              />
            </div>
          </div>
          <div className={styles.secondSubrow}>
            <label>氏名又は名称</label>
            <div>
              <input
                type={'text'}
                value={formValues.form14.name}
                onChange={e =>
                  setFormValues(prevState => {
                    const formValues = { ...prevState }
                    formValues.form14.name = e.target.value
                    return formValues
                  })
                }
              />
            </div>
            <label className={styles.phone}>(電話)</label>
            <div>
              <input
                type={'text'}
                value={formValues.form14.phone}
                onChange={e =>
                  setFormValues(prevState => {
                    const formValues = { ...prevState }
                    formValues.form14.phone = e.target.value
                    return formValues
                  })
                }
              />
            </div>
          </div>
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
