import './FormsGrid.css'
import PropTypes from 'prop-types'
import Form1 from '../Form1'
import Form3 from '../Form3'

const FormsGrid = ({ formValues, setFormValues }) => {
  return (
    <div className={'grid-wrapper'}>
      <div className="section section1">
        <Form1 {...{ formValues, setFormValues }} />
      </div>
      <div className="section section2">
        <Form1 {...{ formValues, setFormValues }} />
      </div>
      <div className="section section3">
        <Form3 {...{ formValues, setFormValues }} />
      </div>
      <div className="section section4">
        <Form3 {...{ formValues, setFormValues }} />
      </div>
    </div>
  )
}

FormsGrid.propTypes = {
  formValues: PropTypes.object,
  setFormValues: PropTypes.func,
}

export default FormsGrid
