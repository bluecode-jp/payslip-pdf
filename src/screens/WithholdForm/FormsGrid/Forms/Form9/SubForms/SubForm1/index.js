import styles from './styles.module.css'
import PropTypes from 'prop-types'

function SubForm1({ formValues, setFormValues }) {
  return (
    <div className={styles.subform1Wrapper}>
      <div className={`${styles.row} ${styles.firstRow}`}>
        <div>
          <div className={styles.firstSubrow}>
            <label>(フリガナ)</label>
            <div>
              <input
                type={'text'}
                value={formValues.form9.furigana}
                onChange={e =>
                  setFormValues(prevState => {
                    const formValues = { ...prevState }
                    formValues.form9.furigana = e.target.value
                    return formValues
                  })
                }
              />
            </div>
          </div>
          <div className={styles.secondSubrow}>
            <label>氏名</label>
            <div>
              <input
                type={'text'}
                value={formValues.form9.name}
                onChange={e =>
                  setFormValues(prevState => {
                    const formValues = { ...prevState }
                    formValues.form9.name = e.target.value
                    return formValues
                  })
                }
              />
            </div>
          </div>
        </div>
        <div className={styles.kubun}>
          <label>区分</label>
        </div>
        <div className={styles.kubunSelectWrapper}>
          <div className={styles.selectContainer}>
            <select
              name={'kubun'}
              onChange={e =>
                setFormValues(prevState => {
                  const formValues = { ...prevState }
                  formValues.form9.kubun =
                    e.target.options[e.target.selectedIndex].value
                  return formValues
                })
              }>
              <option value={''}></option>
              <option value={'A'}>A</option>
              <option value={'B'}>B</option>
              <option value={'C'}>C</option>
            </select>
          </div>
        </div>
      </div>
      <div className={`${styles.row} ${styles.secondRow}`}></div>
    </div>
  )
}

SubForm1.propTypes = {
  formValues: PropTypes.object,
  setFormValues: PropTypes.func,
}

export default SubForm1
