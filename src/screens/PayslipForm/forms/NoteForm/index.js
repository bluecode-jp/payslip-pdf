import './NoteForm.css'

const NoteForm = () => {
  return (
    <div className={'note-wrapper'}>
      <table style={{}}>
        <tbody>
          <tr>
            <td
              style={{
                textAlign: 'center',
                backgroundColor: '#d2eafd',
              }}>
              お知らせ
            </td>
          </tr>
          <tr>
            <td>
              <textarea rows={6} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default NoteForm
