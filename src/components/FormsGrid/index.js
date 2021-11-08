import './FormsGrid.css'
import PropTypes from 'prop-types'
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
        <PayItemsForm {...{ formValues, setFormValues }} />
      </div>
      <div className="section section3">
        <DeductionItemsForm {...{ formValues, setFormValues }} />
      </div>
      <div className="section section4">
        <BreakdownForm {...{ formValues, setFormValues }} />
      </div>
      <div className="section section5">
        <CommuteForm {...{ formValues, setFormValues }} />
      </div>
      <div className="section section6">
        <NoteForm {...{ formValues, setFormValues }} />
      </div>
    </div>
  )
}

FormsGrid.propTypes = {
  formValues: PropTypes.object,
  setFormValues: PropTypes.func,
}

export default FormsGrid
