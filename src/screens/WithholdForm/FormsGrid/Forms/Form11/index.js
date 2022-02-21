import styles from './styles.module.css'
import SubForm1 from './SubForms/SubForm1'

function Form11() {
  return (
    <div className={styles.form11Wrapper}>
      <div className={styles.titleContainer}>
        <label>控 除 対 象 扶 養 親</label>
      </div>
      <div className={styles.subformWrapper}>
        {
          // eslint-disable-next-line no-unused-vars
          [...Array(4)].map((_, index) => (
            <SubForm1 key={index} index={index + 1} />
          ))
        }
      </div>
    </div>
  )
}

export default Form11
