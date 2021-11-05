import React from 'react'

const EmploymentStatusForm = () => {
  return (
    <div>
      <table style={{ backgroundColor: 'khaki', width: '100%' }}>
        <tbody>
          <tr>
            <td
              style={{
                textAlign: 'center',
                backgroundColor: 'black',
                color: 'white',
              }}
              colSpan={2}>
              雇用状況
            </td>
          </tr>
          <tr>
            <td>
              <label>出勤日数 (日)</label>
            </td>
            <td style={{ float: 'right' }}>
              <input type={'number'} placeholder={0} min={0} />
            </td>
          </tr>
          <tr>
            <td>
              <label>計画休日(日)</label>
            </td>
            <td style={{ float: 'right' }}>
              <input type={'number'} placeholder={0} min={0} />
            </td>
          </tr>
          <tr>
            <td>
              <label>計画休日(時)</label>
            </td>
            <td style={{ float: 'right' }}>
              <input type={'number'} placeholder={0} min={0} />
            </td>
          </tr>
          <tr style={{ height: '1.2rem' }}></tr>
          <tr style={{ height: '1.2rem' }}></tr>
          <tr style={{ height: '1.2rem' }}></tr>
        </tbody>
      </table>
    </div>
  )
}

export default EmploymentStatusForm
