import styles from './styles.module.css'
import SubForm1 from './SubForms/SubForm1'
import SubForm2 from './SubForms/SubForm2'

function Form8() {
  return (
    <div className={styles.form8Wrapper}>
      <div className={styles.titleContainer}>
        <label style={{ padding: '0.2rem' }}>
          住宅借入金等特別控除の額の内訳
        </label>
      </div>
      <div>
        <SubForm1 />
        <SubForm2 />
      </div>
    </div>
  )
}

export default Form8
