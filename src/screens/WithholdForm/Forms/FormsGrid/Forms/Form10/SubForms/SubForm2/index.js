import styles from './styles.module.css'

function SubForm2() {
  return (
    <div className={styles.subform1Wrapper}>
      <div className={`${styles.column} ${styles.firstCol}`}>
        <label>基礎控除の額</label>
        <div className={styles.yen}>
          <input type={'text'} />
        </div>
      </div>
      <div className={`${styles.column} ${styles.secondCol}`}>
        <label>所得金額 調整控除額</label>
        <div className={styles.yen}>
          <input type={'text'} />
        </div>
      </div>
    </div>
  )
}

export default SubForm2
