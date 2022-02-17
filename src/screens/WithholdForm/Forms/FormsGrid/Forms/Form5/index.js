import styles from './styles.module.css'

function Form5() {
  return (
    <div className={styles.form5Wrapper}>
      <div className={`${styles.column} ${styles.firstCol}`}>
        <label>社会保険料等の金額</label>
        <div className={styles.numberContainer}>
          <div className={`${styles.sen} ${styles.uchi}`}>
            <input type={'text'} />
          </div>
          <div className={styles.yen}>
            <input type={'text'} />
          </div>
        </div>
      </div>
      <div className={`${styles.column} ${styles.secondCol}`}>
        <label>生命保険料の控除額</label>
        <div className={styles.numberContainer}>
          <div className={styles.sen}>
            <input type={'text'} />
          </div>
          <div className={styles.yen}>
            <input type={'text'} />
          </div>
        </div>
      </div>
      <div className={`${styles.column} ${styles.thirdCol}`}>
        <label>地震保険料の控除額</label>
        <div className={styles.numberContainer}>
          <div className={styles.sen}>
            <input type={'text'} />
          </div>
          <div className={styles.yen}>
            <input type={'text'} />
          </div>
        </div>
      </div>
      <div className={`${styles.column} ${styles.fourthCol}`}>
        <label>住宅借入金等特別控除の額</label>
        <div className={styles.numberContainer}>
          <div className={styles.sen}>
            <input type={'text'} />
          </div>
          <div className={styles.yen}>
            <input type={'text'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form5
