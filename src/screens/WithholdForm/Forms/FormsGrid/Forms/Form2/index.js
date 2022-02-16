import styles from './styles.module.css'

function Form2() {
  return (
    <div className={styles.form2Wrapper}>
      <div className={`${styles.row} ${styles.firstRow}`}>
        <label>(受給者番号)</label>
        <input type={'text'} />
      </div>
      <div className={`${styles.row} ${styles.secondRow}`}></div>
      <div className={`${styles.row} ${styles.thirdRow}`}>
        <label>(役職名)</label>
        <input type={'text'} />
      </div>
      <div className={`${styles.row} ${styles.fourthRow}`}>
        <div className={styles.rowTitle}>
          <label>氏名</label>
        </div>
        <div className={styles.rowContent}>
          <div className={styles.furigana}>
            <label>(フリガナ)</label>
            <input type={'text'} />
          </div>
          <input type={'text'} />
        </div>
      </div>
    </div>
  )
}

export default Form2
