import './ResultPage.css'
import { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

const ResultPage = () => {
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    !location.state && history.replace('/')
  }, [])

  return (
    <div className={'result-page-wrapper'}>
      {location.state && (
        <>
          <h2>{location.state.formValues.title}</h2>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Subtotal</th>
              </tr>
              {location.state.formValues.fields.map(field => (
                <tr key={field.index}>
                  <td>
                    <label>{field.name}</label>
                  </td>
                  <td>
                    <label>{field.quantity}</label>
                  </td>
                  <td>
                    <label>{field.price}</label>
                  </td>
                  <td>
                    <label>{field.price * field.quantity}</label>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={3}>
                  <label>Amount</label>
                </td>
                <td>
                  <label>
                    {location.state.formValues.fields.reduce(
                      (total, field) => total + field.price * field.quantity,
                      0,
                    )}
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  )
}

export default ResultPage
