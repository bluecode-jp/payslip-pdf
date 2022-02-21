import styles from './styles.module.css'

function Form3() {
  return (
    <div className={styles.form3Wrapper}>
      <div className={`${styles.column} ${styles.firstCol}`}>
        <label>種 別</label>
        <div>
          <input type={'text'} />
        </div>
      </div>
      <div className={`${styles.column} ${styles.secondCol}`}>
        <label>支 払 金 額</label>
        <div className={styles.numberContainer}>
          <div className={styles.uchi}>
            <input type={'text'} />
          </div>
          <div className={styles.sen}>
            <input type={'text'} />
          </div>
          <div className={styles.yen}>
            <input type={'text'} />
          </div>
        </div>
      </div>
      <div className={`${styles.column} ${styles.thirdCol}`}>
        <label>給与所得控除後の金額 (調整控除後)</label>
        <div className={styles.numberContainer}>
          <div>
            <input type={'text'} />
          </div>
          <div className={styles.sen}>
            <input type={'text'} />
          </div>
          <div className={styles.yen}>
            <input type={'text'} />
          </div>
        </div>
      </div>
      <div className={`${styles.column} ${styles.fourthCol}`}>
        <label>所得控除の額の合計額</label>
        <div className={styles.numberContainer}>
          <div>
            <input type={'text'} />
          </div>
          <div className={styles.sen}>
            <input type={'text'} />
          </div>
          <div className={styles.yen}>
            <input type={'text'} />
          </div>
        </div>
      </div>
      <div className={`${styles.column} ${styles.fifthCol}`}>
        <label>源 泉 徴 収 税 額</label>
        <div className={styles.numberContainer}>
          <div className={styles.uchi}>
            <input type={'text'} />
          </div>
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

export default Form3
