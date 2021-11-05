import EmploymentStatusForm from '../../screens/PayslipForm/forms/EmploymentStatusForm'
import PayItemsForm from '../../screens/PayslipForm/forms/PayItemsForm'
import PersonalSituationForm from '../../screens/PayslipForm/forms/PersonalSituationForm'
import './FormsGrid.css'

const FormsGrid = () => {
  return (
    <div className={'grid-wrapper'}>
      <div className="section section1">
        <EmploymentStatusForm />
        <PersonalSituationForm />
      </div>
      <div className="section section2">
        <PayItemsForm />
      </div>
      <div className="section section3">
        <EmploymentStatusForm />
      </div>
      <div className="section section4">
        <EmploymentStatusForm />
      </div>
      <div className="section section5">
        <EmploymentStatusForm />
      </div>
      <div className="section section6">
        <EmploymentStatusForm />
      </div>
    </div>
  )
}

export default FormsGrid
