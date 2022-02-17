import styles from './styles.module.css'

function Form7() {
  return (
    <div className={styles.form7Wrapper}>
      <div className={`${styles.column} ${styles.firstCol}`}>
        <label>生命保険料の金額の内訳</label>
      </div>
      <div className={`${styles.column} ${styles.secondCol}`}>
        <label>新生命保険料の金額</label>
        <div className={styles.yen}>
          <input type={'text'} />
        </div>
      </div>
      <div className={`${styles.column} ${styles.thirdCol}`}>
        <label>旧生命保険料の金額</label>
        <div className={styles.yen}>
          <input type={'text'} />
        </div>
      </div>
      <div className={`${styles.column} ${styles.fourthCol}`}>
        <label>介護医療保険料の金額</label>
        <div className={styles.yen}>
          <input type={'text'} />
        </div>
      </div>
      <div className={`${styles.column} ${styles.fifthCol}`}>
        <label>新個人年金保険料の金額</label>
        <div className={styles.yen}>
          <input type={'text'} />
        </div>
      </div>
      <div className={`${styles.column} ${styles.sixthCol}`}>
        <label>旧個人年金保険料の金額</label>
        <div className={styles.yen}>
          <input type={'text'} />
        </div>
      </div>
    </div>
  )
}

export default Form7
