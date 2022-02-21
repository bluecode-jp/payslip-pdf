import styles from './styles.module.css'

function Header() {
  return (
    <header className={styles.headerWrapper}>
      <h2>
        令和
        <input type={'number'} />
        年分 給与所得の源泉徴収票
      </h2>
    </header>
  )
}

export default Header
