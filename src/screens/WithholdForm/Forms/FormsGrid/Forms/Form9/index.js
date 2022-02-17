import styles from './styles.module.css'
import SubForm1 from './SubForms/SubForm1'

function Form9() {
  return (
    <div className={styles.form9Wrapper}>
      <div className={styles.titleContainer}>
        <label style={{ padding: '0.2rem' }}>
          (源泉・特別) 控除対象 配偶者
        </label>
      </div>
      <div className={styles.subformWrapper}>
        <SubForm1 />
      </div>
    </div>
  )
}

export default Form9
