import PropTypes from 'prop-types'
import styles from './styles.module.css'

function SubForm1({ index = 1 }) {
  return (
    <div className={styles.subform1Wrapper}>
      <div style={{ display: 'flex' }}>
        <label className={styles.indexCol}>{index}</label>
        <div className={styles.rowsWrapper}>
          <div className={`${styles.row} ${styles.firstRow}`}>
            <div>
              <div className={styles.firstSubrow}>
                <label>(フリガナ)</label>
                <div>
                  <input type={'text'} />
                </div>
              </div>
              <div className={styles.secondSubrow}>
                <label>氏名</label>
                <div>
                  <input type={'text'} />
                </div>
              </div>
            </div>
            <div className={styles.kubun}>
              <label>区分</label>
            </div>
            <div className={styles.kubunSelectWrapper}>
              <div className={styles.selectContainer}>
                <select name={'kubun'}>
                  <option value={''}></option>
                  <option value={'A'}>A</option>
                  <option value={'B'}>B</option>
                  <option value={'C'}>C</option>
                </select>
              </div>
            </div>
          </div>
          <div className={`${styles.row} ${styles.secondRow}`}></div>
        </div>
      </div>
    </div>
  )
}

SubForm1.propTypes = {
  index: PropTypes.number,
}

export default SubForm1
