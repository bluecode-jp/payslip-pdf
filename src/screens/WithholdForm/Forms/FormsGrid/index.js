import './FormsGrid.css'
import PropTypes from 'prop-types'
import Header from './Forms/Header'
import Form1 from './Forms/Form1'
import Form2 from './Forms/Form2'

const FormsGrid = ({ formValues, setFormValues }) => {
  console.log(formValues, setFormValues)
  return (
    <div className={'grid-wrapper'}>
      <div className="section section1">
        <Header />
      </div>
      <div className="section section2">
        <Form1 />
      </div>
      <div className="section section3">
        <Form2 />
      </div>
      <div className="section section4"></div>
    </div>
  )
}

FormsGrid.propTypes = {
  formValues: PropTypes.object,
  setFormValues: PropTypes.func,
}

export default FormsGrid
