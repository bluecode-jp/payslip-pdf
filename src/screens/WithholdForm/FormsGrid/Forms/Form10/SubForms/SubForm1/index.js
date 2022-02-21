import styles from './styles.module.css'

function SubForm1() {
  return (
    <div className={styles.subform1Wrapper}>
      <div className={`${styles.column} ${styles.firstCol}`}>
        <label>国民年金保険料等の金額</label>
        <div className={styles.yen}>
          <input type={'text'} />
        </div>
      </div>
      <div className={`${styles.column} ${styles.secondCol}`}>
        <label>旧長期損害 保険料の金額</label>
        <div className={styles.yen}>
          <input type={'text'} />
        </div>
      </div>
    </div>
  )
}

export default SubForm1
