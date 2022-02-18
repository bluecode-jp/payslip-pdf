import './FormsGrid.css'
import PropTypes from 'prop-types'
import Header from './Forms/Header'
import Form1 from './Forms/Form1'
import Form2 from './Forms/Form2'
import Form3 from './Forms/Form3'
import Form4 from './Forms/Form4'
import Form5 from './Forms/Form5'
import Form6 from './Forms/Form6'
import Form7 from './Forms/Form7'
import Form8 from './Forms/Form8'
import Form9 from './Forms/Form9'
import Form10 from './Forms/Form10'
import Form11 from './Forms/Form11'
import Form12 from './Forms/Form12'
import Form13 from './Forms/Form13'
import Form14 from './Forms/Form14'

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
      <div className="section section4">
        <Form3 />
      </div>
      <div className="section section5">
        <Form4 />
      </div>
      <div className="section section6">
        <Form5 />
      </div>
      <div className="section section7">
        <Form6 />
      </div>
      <div className="section section8">
        <Form7 />
      </div>
      <div className="section section9">
        <Form8 />
      </div>
      <div className="section section10">
        <Form9 />
      </div>
      <div className="section section11">
        <Form10 />
      </div>
      <div className="section section12">
        <Form11 />
      </div>
      <div className="section section13">
        <Form12 />
      </div>
      <div className="section section14">
        <Form13 />
      </div>
      <div className="section section15">
        <Form14 />
      </div>
    </div>
  )
}

FormsGrid.propTypes = {
  formValues: PropTypes.object,
  setFormValues: PropTypes.func,
}

export default FormsGrid
