import { useState } from 'react'

const EstimationForm = () => {
  const [title, setTitle] = useState('')
  const [formFields, setFormFields] = useState([
    { index: 0, name: '', quantity: 0, price: 0 },
  ])

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ alignSelf: 'center' }}>Estimation Form</h2>
      <label>Title</label>
      <input
        type="text"
        placeholder="Fruit Gift"
        onChange={e => setTitle(e.target.value)}
      />
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Quantity</td>
            <td>Price</td>
            <td></td>
          </tr>
          {formFields.map(field => (
            <tr key={field.index}>
              <td>
                <input
                  type={'text'}
                  placeholder={'Name'}
                  defaultValue={field.name}
                  onChange={e => (field.name = e.target.value)}
                />
              </td>
              <td>
                <input
                  type={'number'}
                  defaultValue={field.quantity}
                  onChange={e => (field.quantity = e.target.value)}
                />
              </td>
              <td>
                <input
                  type={'number'}
                  defaultValue={field.price}
                  onChange={e => (field.price = e.target.value)}
                />
              </td>
              <td>
                <button
                  onClick={() =>
                    formFields.length > 1 &&
                    setFormFields(
                      formFields.filter(item => item.index != field.index),
                    )
                  }>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={() =>
          setFormFields(prevState => [
            ...prevState,
            {
              index: prevState.length,
              name: '',
              quantity: 0,
              price: 0,
            },
          ])
        }>
        Add Field
      </button>
      <button
        onClick={() => {
          console.log({ title, fields: formFields })
        }}>
        Submit
      </button>
    </div>
  )
}

export default EstimationForm
