import './NoteForm.css'
import PropTypes from 'prop-types'

const NoteForm = ({ setFormValues }) => {
  return (
    <div className={'note-wrapper'}>
      <table style={{}}>
        <tbody>
          <tr>
            <td
              style={{
                textAlign: 'center',
                backgroundColor: '#d2eafd',
                border: '0.5px #00000088 solid',
              }}>
              お知らせ
            </td>
          </tr>
          <tr>
            <td>
              <textarea
                placeholder={
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a felis malesuada, ultrices odio vitae, porta justo. '
                }
                rows={6}
                onChange={e =>
                  setFormValues(prevState => {
                    const formValues = { ...prevState }
                    formValues.oshirase = e.target.value
                    return formValues
                  })
                }
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

NoteForm.propTypes = {
  formValues: PropTypes.object,
  setFormValues: PropTypes.func,
}

export default NoteForm
