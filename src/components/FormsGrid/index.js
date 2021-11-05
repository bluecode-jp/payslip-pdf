import './FormsGrid.css'
import NoteForm from '../../screens/PayslipForm/forms/NoteForm'
import CommuteForm from '../../screens/PayslipForm/forms/CommuteForm'
import PayItemsForm from '../../screens/PayslipForm/forms/PayItemsForm'
import BreakdownForm from '../../screens/PayslipForm/forms/BreakdownForm'
import DeductionItemsForm from '../../screens/PayslipForm/forms/DeductionItemsForm'
import EmploymentStatusForm from '../../screens/PayslipForm/forms/EmploymentStatusForm'
import PersonalSituationForm from '../../screens/PayslipForm/forms/PersonalSituationForm'

const FormsGrid = ({ formValues, setFormValues }) => {
  return (
    <div className={'grid-wrapper'}>
      <div className="section section1">
        <EmploymentStatusForm {...{ formValues, setFormValues }} />
        <PersonalSituationForm {...{ formValues, setFormValues }} />
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

FormsGrid.propTypes = {
  formValues: Object,
  setFormValues: Function,
}

export default FormsGrid
