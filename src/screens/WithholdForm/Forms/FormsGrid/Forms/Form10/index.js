import styles from './styles.module.css'
import SubForm1 from './SubForms/SubForm1'
import SubForm2 from './SubForms/SubForm2'

function Form10() {
  return (
    <div className={styles.form10Wrapper}>
      <div className={styles.titleContainer}>
        <label style={{ padding: '0.2rem' }}>配偶者の合計所得</label>
        <div className={styles.yen}>
          <input type={'text'} />
        </div>
      </div>
      <div className={styles.subformWrapper}>
        <SubForm1 />
        <SubForm2 />
      </div>
    </div>
  )
}

export default Form10
