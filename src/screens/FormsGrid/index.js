import EmploymentStatusForm from '../PayslipForm/forms/EmploymentStatusForm'
import './FormsGrid.css'

const FormsGrid = () => {
  return (
    <div className={'grid-wrapper'}>
      <div className="section1">
        <EmploymentStatusForm />
        <EmploymentStatusForm />
      </div>
      <div className="section2">
        <EmploymentStatusForm />
      </div>
      <div className="section3">
        <EmploymentStatusForm />
      </div>
      <div className="section4">
        <EmploymentStatusForm />
      </div>
      <div className="section5">
        <EmploymentStatusForm />
      </div>
      <div className="section6">
        <EmploymentStatusForm />
      </div>
    </div>
  )
}

export default FormsGrid
