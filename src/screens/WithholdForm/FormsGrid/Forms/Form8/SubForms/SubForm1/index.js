import styles from './styles.module.css'

function SubForm1() {
  return (
    <div className={styles.subform1Wrapper}>
      <div className={`${styles.column} ${styles.firstCol}`}>
        <label>住宅借入金等特別控除適用数</label>
        <div>
          <input type={'text'} />
        </div>
      </div>
      <div className={`${styles.column} ${styles.secondCol}`}>
        <label>居住開始年月日(1回目)</label>
        <div className={styles.nen}>
          <input type={'text'} />
        </div>
        <div className={styles.getsu}>
          <input type={'text'} />
        </div>
        <div className={styles.hi}>
          <input type={'text'} />
        </div>
      </div>
      <div className={`${styles.column} ${styles.thirdCol}`}>
        <label>住宅借入金等特別控除区分(1回目)</label>
        <div>
          <input type={'text'} />
        </div>
      </div>
      <div className={`${styles.column} ${styles.fourthCol}`}>
        <label>住宅借入金等年末残高(1回目)</label>
        <div className={styles.yen}>
          <input type={'text'} />
        </div>
      </div>
    </div>
  )
}

export default SubForm1
