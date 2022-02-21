import PropTypes from 'prop-types'
import styles from './styles.module.css'

// form13: {
//   minor: 1,
//   foreigner: 2,
//   deathRetirement: 3,
//   disasterVictim: 4,
//   otsuran: 5,
//   disability: { special: 6, other: 7 },
//   widow: 8,
//   singleParent: 9,
//   workingStudent: 10,
//   midOrRetirement: {
//     searching: 11,
//     retired: 12,
//     year: 13,
//     month: 14,
//     day: 15,
//   },
//   beneficiary: {
//     number: 16,
//     year: 17,
//     month: 18,
//     day: 19,
//   },
// },

function Form13({ formValues, setFormValues }) {
  return (
    <div className={styles.form13Wrapper}>
      <div className={styles.firstHalf}>
        <div className={styles.columnWrapper}>
          <div className={styles.titleContainer}>
            <label
              style={{
                width: '1rem',
              }}>
              未 成 年 者
            </label>
          </div>
          <div className={styles.selectContainer}>
            <select
              name={'minor'}
              onChange={e =>
                setFormValues(prevState => {
                  const formValues = { ...prevState }
                  formValues.form13.minor =
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
        <div className={styles.columnWrapper}>
          <div className={styles.titleContainer}>
            <label
              style={{
                width: '1rem',
              }}>
              外 国 人
            </label>
          </div>
          <div className={styles.selectContainer}>
            <select
              name={'foreigner'}
              onChange={e =>
                setFormValues(prevState => {
                  const formValues = { ...prevState }
                  formValues.form13.foreigner =
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
        <div className={styles.columnWrapper}>
          <div className={styles.titleContainer}>
            <label
              style={{
                width: '1rem',
              }}>
              死 亡 退 職
            </label>
          </div>
          <div className={styles.selectContainer}>
            <select
              name={'deathRetirement'}
              onChange={e =>
                setFormValues(prevState => {
                  const formValues = { ...prevState }
                  formValues.form13.deathRetirement =
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
        <div className={styles.columnWrapper}>
          <div className={styles.titleContainer}>
            <label
              style={{
                width: '1rem',
              }}>
              災 害 者
            </label>
          </div>
          <div className={styles.selectContainer}>
            <select
              name={'disasterVictim'}
              onChange={e =>
                setFormValues(prevState => {
                  const formValues = { ...prevState }
                  formValues.form13.disasterVictim =
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
        <div className={styles.columnWrapper}>
          <div className={styles.titleContainer}>
            <label
              style={{
                width: '1rem',
              }}>
              乙 欄
            </label>
          </div>
          <div className={styles.selectContainer}>
            <select
              name={'otsuran'}
              onChange={e =>
                setFormValues(prevState => {
                  const formValues = { ...prevState }
                  formValues.form13.otsuran =
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

        <div className={`${styles.columnWrapper} ${styles.doubleCol}`}>
          <label>本人が障害者</label>
          <div style={{ display: 'flex', height: '100%' }}>
            <div className={styles.columnWrapper}>
              <div className={styles.titleContainer}>
                <label
                  style={{
                    width: '1rem',
                  }}>
                  特 別
                </label>
              </div>
              <div className={styles.selectContainer}>
                <select
                  name={'disabilitySpecial'}
                  onChange={e =>
                    setFormValues(prevState => {
                      const formValues = { ...prevState }
                      formValues.form13.disability.special =
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

            <div className={styles.columnWrapper}>
              <div className={styles.titleContainer}>
                <label
                  style={{
                    width: '1rem',
                  }}>
                  そ の 他
                </label>
              </div>
              <div className={styles.selectContainer}>
                <select
                  name={'disabilityOther'}
                  onChange={e =>
                    setFormValues(prevState => {
                      const formValues = { ...prevState }
                      formValues.form13.disability.other =
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
        </div>

        <div className={styles.columnWrapper}>
          <div className={styles.titleContainer}>
            <label
              style={{
                width: '1rem',
              }}>
              寡 婦
            </label>
          </div>
          <div className={styles.selectContainer}>
            <select
              name={'widow'}
              onChange={e =>
                setFormValues(prevState => {
                  const formValues = { ...prevState }
                  formValues.form13.widow =
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
        <div className={styles.columnWrapper}>
          <div className={styles.titleContainer}>
            <label
              style={{
                width: '1rem',
              }}>
              ひ と り 親
            </label>
          </div>
          <div className={styles.selectContainer}>
            <select
              name={'singleParent'}
              onChange={e =>
                setFormValues(prevState => {
                  const formValues = { ...prevState }
                  formValues.form13.singleParent =
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
        <div className={styles.columnWrapper}>
          <div className={styles.titleContainer}>
            <label
              style={{
                width: '1rem',
              }}>
              勤 労 学 生
            </label>
          </div>
          <div className={styles.selectContainer}>
            <select
              name={'workingStudent'}
              onChange={e =>
                setFormValues(prevState => {
                  const formValues = { ...prevState }
                  formValues.form13.workingStudent =
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
        <div className={styles.columnWrapper}>
          <div className={styles.emptyCol} />
        </div>
      </div>
      <div className={styles.secondHalf}>
        <div className={`${styles.columnWrapper} ${styles.multiCol}`}>
          <label>中途就・退職</label>
          <div>
            <div className={styles.columnWrapper}>
              <div className={styles.titleContainer}>
                <label
                  style={{
                    width: '1rem',
                  }}>
                  就職
                </label>
              </div>
              <div className={styles.selectContainer}>
                <select
                  name={'midOrRetirementSearching'}
                  onChange={e =>
                    setFormValues(prevState => {
                      const formValues = { ...prevState }
                      formValues.form13.midOrRetirement.searching =
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
            <div className={styles.columnWrapper}>
              <div className={styles.titleContainer}>
                <label
                  style={{
                    width: '1rem',
                  }}>
                  退職
                </label>
              </div>
              <div className={styles.selectContainer}>
                <select
                  name={'midOrRetirementRetired'}
                  onChange={e =>
                    setFormValues(prevState => {
                      const formValues = { ...prevState }
                      formValues.form13.midOrRetirement.retired =
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
            <div className={styles.columnWrapper}>
              <div className={styles.titleContainer}>
                <label
                  style={{
                    width: '1rem',
                  }}>
                  年
                </label>
              </div>
              <div className={styles.inputContainer}>
                <input
                  type={'text'}
                  value={formValues.form13.midOrRetirement.year}
                  onChange={e =>
                    setFormValues(prevState => {
                      const formValues = { ...prevState }
                      formValues.form13.midOrRetirement.year = e.target.value
                      return formValues
                    })
                  }
                />
              </div>
            </div>
            <div className={styles.columnWrapper}>
              <div className={styles.titleContainer}>
                <label
                  style={{
                    width: '1rem',
                  }}>
                  月
                </label>
              </div>
              <div className={styles.inputContainer}>
                <input
                  type={'text'}
                  value={formValues.form13.midOrRetirement.month}
                  onChange={e =>
                    setFormValues(prevState => {
                      const formValues = { ...prevState }
                      formValues.form13.midOrRetirement.month = e.target.value
                      return formValues
                    })
                  }
                />
              </div>
            </div>
            <div className={styles.columnWrapper}>
              <div className={styles.titleContainer}>
                <label
                  style={{
                    width: '1rem',
                  }}>
                  日
                </label>
              </div>
              <div className={styles.inputContainer}>
                <input
                  type={'text'}
                  value={formValues.form13.midOrRetirement.day}
                  onChange={e =>
                    setFormValues(prevState => {
                      const formValues = { ...prevState }
                      formValues.form13.midOrRetirement.day = e.target.value
                      return formValues
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.columnWrapper} ${styles.multiCol}`}>
          <label>受給者生年月日</label>
          <div>
            <div className={`${styles.columnWrapper} ${styles.biggerCol}`}>
              <div className={styles.titleContainer}>
                <label
                  style={{
                    width: '1rem',
                  }}>
                  元号
                </label>
              </div>
              <div className={styles.selectContainer}>
                <select
                  name={'beneficiary'}
                  onChange={e =>
                    setFormValues(prevState => {
                      const formValues = { ...prevState }
                      formValues.form13.beneficiary.number =
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
            <div className={styles.columnWrapper}>
              <div className={styles.titleContainer}>
                <label
                  style={{
                    width: '1rem',
                  }}>
                  年
                </label>
              </div>
              <div className={styles.inputContainer}>
                <input
                  type={'text'}
                  value={formValues.form13.beneficiary.year}
                  onChange={e =>
                    setFormValues(prevState => {
                      const formValues = { ...prevState }
                      formValues.form13.beneficiary.year = e.target.value
                      return formValues
                    })
                  }
                />
              </div>
            </div>
            <div className={styles.columnWrapper}>
              <div className={styles.titleContainer}>
                <label
                  style={{
                    width: '1rem',
                  }}>
                  月
                </label>
              </div>
              <div className={styles.inputContainer}>
                <input
                  type={'text'}
                  value={formValues.form13.beneficiary.month}
                  onChange={e =>
                    setFormValues(prevState => {
                      const formValues = { ...prevState }
                      formValues.form13.beneficiary.month = e.target.value
                      return formValues
                    })
                  }
                />
              </div>
            </div>
            <div className={styles.columnWrapper}>
              <div className={styles.titleContainer}>
                <label
                  style={{
                    width: '1rem',
                  }}>
                  日
                </label>
              </div>
              <div className={styles.inputContainer}>
                <input
                  type={'text'}
                  value={formValues.form13.beneficiary.day}
                  onChange={e =>
                    setFormValues(prevState => {
                      const formValues = { ...prevState }
                      formValues.form13.beneficiary.day = e.target.value
                      return formValues
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Form13.propTypes = {
  formValues: PropTypes.object,
  setFormValues: PropTypes.func,
}

export default Form13
