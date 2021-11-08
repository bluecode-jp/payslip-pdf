import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import EstimationForm from './screens/EstimationForm'
// import ResultPage from './screens/ResultPage'
import PayslipForm from './screens/PayslipForm'
import PDFViewer from './screens/PDFViewer'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route path={'/'} exact component={() => <EstimationForm />} /> */}
          <Route path={'/'} exact component={PayslipForm} />
          <Route path={'/payslip-pdf'} exact component={PDFViewer} />
          {/* <Route path={'/result'} exact component={ResultPage} /> */}
          <Route path={'*'} exact component={() => <div> NOT FOUND!</div>} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
