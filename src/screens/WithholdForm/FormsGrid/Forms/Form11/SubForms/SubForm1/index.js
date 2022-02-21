import PropTypes from 'prop-types'
import styles from './styles.module.css'

function SubForm1({ index = 1, formValues, setFormValues }) {
  return (
    <div className={styles.subform1Wrapper}>
      <div style={{ display: 'flex' }}>
        <label className={styles.indexCol}>{index}</label>
        <div className={styles.rowsWrapper}>
          <div className={`${styles.row} ${styles.firstRow}`}>
            <div>
              <div className={styles.firstSubrow}>
                <label>(フリガナ)</label>
                <div>
                  <input
                    type={'text'}
                    value={formValues.form11[index].furigana}
                    onChange={e =>
                      setFormValues(prevState => {
                        const formValues = { ...prevState }
                        formValues.form11[index].furigana = e.target.value
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
                    value={formValues.form11[index].name}
                    onChange={e =>
                      setFormValues(prevState => {
                        const formValues = { ...prevState }
                        formValues.form11[index].name = e.target.value
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
                      formValues.form11[index].kubun =
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
      </div>
    </div>
  )
}

SubForm1.propTypes = {
  index: PropTypes.number,
  formValues: PropTypes.object,
  setFormValues: PropTypes.func,
}

export default SubForm1
