import styles from './styles.module.css'

function Form4() {
  return (
    <div className={styles.form4Wrapper}>
      <div className={`${styles.column} ${styles.firstCol}`}>
        <label>(源泉)控除対象配偶者の有無等</label>
        <div className={styles.contentWrapper}>
          <div>
            <label>有</label>
            <div className={styles.selectContainer}>
              <select name={'kubun'}>
                <option value={''}></option>
                <option value={'A'}>A</option>
                <option value={'B'}>B</option>
                <option value={'C'}>C</option>
              </select>
            </div>
          </div>
          <div>
            <label>従有</label>
            <div className={styles.selectContainer}>
              <select name={'kubun'}>
                <option value={''}></option>
                <option value={'A'}>A</option>
                <option value={'B'}>B</option>
                <option value={'C'}>C</option>
              </select>
            </div>
          </div>
          <div>
            <label>老人</label>
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
      <div className={`${styles.column} ${styles.secondCol}`}>
        <label>配偶者(特別)控除の額</label>
        <div className={styles.contentWrapper}>
          <div className={`${styles.numberContainer} ${styles.noBorderTop}`}>
            <div className={styles.sen}>
              <input type={'text'} />
            </div>
          </div>
          <div className={`${styles.numberContainer} ${styles.noBorderTop}`}>
            <div className={styles.yen}>
              <input type={'text'} />
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.column} ${styles.thirdCol}`}>
        <label>控除対象扶養親族の数(配偶者を除く。)</label>
        <div className={styles.contentWrapper}>
          <div>
            <label>特 定</label>
            <div style={{ display: 'flex', flex: 1 }}>
              <div className={styles.numberContainer}>
                <div className={styles.hito}>
                  <input type={'text'} />
                </div>
              </div>
              <div className={styles.numberContainer}>
                <div className={styles.hito2}>
                  <input type={'text'} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <label>老 人</label>
            <div style={{ display: 'flex', flex: 1 }}>
              <div className={styles.numberContainer}>
                <div className={`${styles.uchi} ${styles.dashedBorder}`}>
                  <input type={'text'} />
                </div>
              </div>
              <div className={styles.numberContainer}>
                <div className={styles.hito}>
                  <input type={'text'} />
                </div>
              </div>
              <div className={styles.numberContainer}>
                <div className={styles.hito2}>
                  <input type={'text'} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <label>その他</label>
            <div style={{ display: 'flex', flex: 1 }}>
              <div className={styles.numberContainer}>
                <div className={styles.hito}>
                  <input type={'text'} />
                </div>
              </div>
              <div className={styles.numberContainer}>
                <div className={styles.hito2}>
                  <input type={'text'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.column} ${styles.fourthCol}`}>
        <label>16歳未満扶養親族の数</label>
        <div className={`${styles.numberContainer} ${styles.noBorderTop}`}>
          <div className={styles.hito}>
            <input type={'text'} />
          </div>
        </div>
      </div>
      <div className={`${styles.column} ${styles.fifthCol}`}>
        <label>障害者の数(本人を除く。)</label>
        <div className={styles.contentWrapper}>
          <div style={{ flex: 1 }}>
            <label>特 別</label>
            <div style={{ display: 'flex', width: '100%', flex: 1 }}>
              <div className={styles.numberContainer}>
                <div className={`${styles.uchi} ${styles.dashedBorder}`}>
                  <input type={'text'} />
                </div>
              </div>
              <div className={styles.numberContainer}>
                <div className={styles.hito}>
                  <input type={'text'} />
                </div>
              </div>
            </div>
          </div>
          <div style={{ flex: 0.5 }}>
            <label>その他</label>
            <div style={{ display: 'flex', width: '100%', flex: 1 }}>
              <div className={styles.numberContainer}>
                <div className={styles.hito}>
                  <input type={'text'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.column} ${styles.sixthCol}`}>
        <label>非居住者である親族の数</label>
        <div className={`${styles.numberContainer} ${styles.noBorderTop}`}>
          <div className={styles.hito}>
            <input type={'text'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form4
