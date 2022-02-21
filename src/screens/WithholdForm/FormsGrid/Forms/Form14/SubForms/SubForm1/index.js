import styles from './styles.module.css'

function SubForm1() {
  return (
    <div className={styles.subform1Wrapper}>
      <div className={`${styles.row} ${styles.firstRow}`}></div>
      <div className={`${styles.row} ${styles.secondRow}`}>
        <div>
          <div className={styles.firstSubrow}>
            <label>住所(居所) 又は所在地</label>
            <div>
              <input type={'text'} />
            </div>
          </div>
          <div className={styles.secondSubrow}>
            <label>氏名又は名称</label>
            <div>
              <input type={'text'} />
            </div>
            <label className={styles.phone}>(電話)</label>
            <div>
              <input type={'text'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubForm1
