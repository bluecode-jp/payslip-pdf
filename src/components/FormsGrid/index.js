import './FormsGrid.css'
import NoteForm from '../../screens/PayslipForm/forms/NoteForm'
import CommuteForm from '../../screens/PayslipForm/forms/CommuteForm'
import PayItemsForm from '../../screens/PayslipForm/forms/PayItemsForm'
import BreakdownForm from '../../screens/PayslipForm/forms/BreakdownForm'
import DeductionItemsForm from '../../screens/PayslipForm/forms/DeductionItemsForm'
import EmploymentStatusForm from '../../screens/PayslipForm/forms/EmploymentStatusForm'
import PersonalSituationForm from '../../screens/PayslipForm/forms/PersonalSituationForm'

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
        <NoteForm />
      </div>
    </div>
  )
}

export default FormsGrid
