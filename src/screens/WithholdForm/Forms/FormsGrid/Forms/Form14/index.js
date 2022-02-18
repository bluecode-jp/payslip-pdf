import styles from './styles.module.css'
import SubForm1 from './SubForms/SubForm1'

function Form14() {
  return (
    <div className={styles.form14Wrapper}>
      <div className={styles.titleContainer}>
        <label style={{ width: '1rem' }}>支 払 者</label>
      </div>
      <div className={styles.subformWrapper}>
        <SubForm1 />
      </div>
    </div>
  )
}

export default Form14
