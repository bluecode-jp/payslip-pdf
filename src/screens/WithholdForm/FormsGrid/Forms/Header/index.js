import styles from './styles.module.css'
import PropTypes from 'prop-types'

function Header({ formValues, setFormValues }) {
  return (
    <header className={styles.headerWrapper}>
      <h2>
        令和
        <input
          type={'number'}
          value={formValues.header.year}
          onChange={e =>
            setFormValues(prevState => {
              const formValues = { ...prevState }
              formValues.header.year = e.target.value
              return formValues
            })
          }
        />
        年分 給与所得の源泉徴収票
      </h2>
    </header>
  )
}

Header.propTypes = {
  formValues: PropTypes.object,
  setFormValues: PropTypes.func,
}

export default Header
