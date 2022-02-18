import styles from './styles.module.css'

function Form13() {
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
            <select name={'kubun'}>
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
            <select name={'kubun'}>
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
            <select name={'kubun'}>
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
            <select name={'kubun'}>
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
            <select name={'kubun'}>
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
                <select name={'kubun'}>
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
                <select name={'kubun'}>
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
            <select name={'kubun'}>
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
            <select name={'kubun'}>
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
            <select name={'kubun'}>
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
                <select name={'kubun'}>
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
                <select name={'kubun'}>
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
                <input type={'text'} />
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
                <input type={'text'} />
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
                <input type={'text'} />
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
                <select name={'kubun'}>
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
                <input type={'text'} />
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
                <input type={'text'} />
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
                <input type={'text'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form13
