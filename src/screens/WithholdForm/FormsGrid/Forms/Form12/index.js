import styles from './styles.module.css'
import SubForm1 from './SubForms/SubForm1'

function Form12() {
  return (
    <div className={styles.form12Wrapper}>
      <div className={styles.titleContainer}>
        <label>
          1<br />6 歳 未 満 の 扶 養 親 族
        </label>
      </div>
      <div className={styles.subformWrapper}>
        {
          // eslint-disable-next-line no-unused-vars
          [...Array(4)].map((_, index) => (
            <SubForm1 key={index} index={index + 1} />
          ))
        }
      </div>
      <div className={styles.emptyContainer}></div>
    </div>
  )
}

export default Form12
