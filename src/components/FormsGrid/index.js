import PayItemsForm from '../../screens/PayslipForm/forms/PayItemsForm'
import DeductionItemsForm from '../../screens/PayslipForm/forms/DeductionItemsForm'
import EmploymentStatusForm from '../../screens/PayslipForm/forms/EmploymentStatusForm'
import PersonalSituationForm from '../../screens/PayslipForm/forms/PersonalSituationForm'
import './FormsGrid.css'
import BreakdownForm from '../../screens/PayslipForm/forms/BreakdownForm'
import CommuteForm from '../../screens/PayslipForm/forms/CommuteForm'

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
        <DeductionItemsForm />
      </div>
      <div className="section section4">
        <BreakdownForm />
      </div>
      <div className="section section5">
        <CommuteForm />
      </div>
      <div className="section section6">
        <EmploymentStatusForm />
      </div>
    </div>
  )
}

export default FormsGrid
