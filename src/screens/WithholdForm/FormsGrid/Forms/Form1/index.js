import styles from './styles.module.css'

function Form1() {
  return (
    <div className={styles.form1Wrapper}>
      <div className={`${styles.column} ${styles.firstCol}`}>
        支払を受ける者
      </div>
      <div className={`${styles.column} ${styles.secondCol}`}>住所又は居所</div>
      <div className={`${styles.column} ${styles.thirdCol}`}>
        <input type={'text'} />
      </div>
    </div>
  )
}

export default Form1
