import './ResultPage.css'
import 'jspdf-autotable'

import { jsPDF } from 'jspdf'
import { useHistory, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const ResultPage = () => {
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    !location.state && history.replace('/')
  }, [])

  const onExport = async () => {
    const doc = new jsPDF()
    doc.text(location.state.formValues.title, 15, 10)

    const fields = location.state.formValues.fields.map(field => [
      field.name,
      field.quantity,
      field.price,
      field.price * field.quantity,
    ])
    doc.autoTable({
      theme: 'grid',
      styles: { halign: 'center' },
      headStyles: { fillColor: '#8ab0ab' },
      head: [['Name', 'Quantity', 'Price', 'Subtotal']],
      body: [
        ...fields,
        [
          {
            content: 'Amount',
            colSpan: 3,
            rowSpan: 2,
            styles: {
              halign: 'center',
              fontStyle: 'bold',
              fillColor: '#d6e4e2',
            },
          },
          {
            content: location.state.formValues.fields.reduce(
              (total, field) => total + field.price * field.quantity,
              0,
            ),
            styles: {
              halign: 'center',
              fontStyle: 'bold',
              fillColor: '#d6e4e2',
            },
          },
        ],
      ],
    })
    doc.save(Date.now() + '.pdf')
  }

  return (
    <>
      {location.state && (
        <div className={'result-page-wrapper'}>
          <h2>{location.state.formValues.title}</h2>
          <table id={'result-table'}>
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
          <button onClick={onExport}>Download as PDF</button>
        </div>
      )}
    </>
  )
}

export default ResultPage

// import './ResultPage.css'

// import ReactToPdf from 'react-to-pdf'
// import { useEffect, useRef } from 'react'
// import { useHistory, useLocation } from 'react-router-dom'

// const ResultPage = () => {
//   const location = useLocation()
//   const history = useHistory()
//   const printRef = useRef(null)

//   useEffect(() => {
//     !location.state && history.replace('/')
//   }, [])

//   return (
//     <>
//       <ReactToPdf targetRef={printRef} filename="div-blue.pdf">
//         {({ toPdf }) => <button onClick={toPdf}>Generate pdf</button>}
//       </ReactToPdf>
//       <div ref={printRef} className={'result-page-wrapper'}>
//         {location.state && (
//           <>
//             <h2>{location.state.formValues.title}</h2>
//             <table>
//               <tbody>
//                 <tr>
//                   <th>Name</th>
//                   <th>Quantity</th>
//                   <th>Price</th>
//                   <th>Subtotal</th>
//                 </tr>
//                 {location.state.formValues.fields.map(field => (
//                   <tr key={field.index}>
//                     <td>
//                       <label>{field.name}</label>
//                     </td>
//                     <td>
//                       <label>{field.quantity}</label>
//                     </td>
//                     <td>
//                       <label>{field.price}</label>
//                     </td>
//                     <td>
//                       <label>{field.price * field.quantity}</label>
//                     </td>
//                   </tr>
//                 ))}
//                 <tr>
//                   <td colSpan={3}>
//                     <label>Amount</label>
//                   </td>
//                   <td>
//                     <label>
//                       {location.state.formValues.fields.reduce(
//                         (total, field) => total + field.price * field.quantity,
//                         0,
//                       )}
//                     </label>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </>
//         )}
//       </div>
//     </>
//   )
// }

// export default ResultPage

// import './ResultPage.css'
// import { useEffect } from 'react'
// import { useHistory, useLocation } from 'react-router-dom'

// const ResultPage = () => {
//   const location = useLocation()
//   const history = useHistory()

//   useEffect(() => {
//     !location.state && history.replace('/')
//   }, [])

//   return (
//     <div className={'result-page-wrapper'}>
//       {location.state && (
//         <>
//           <h2>{location.state.formValues.title}</h2>
//           <table>
//             <tbody>
//               <tr>
//                 <th>Name</th>
//                 <th>Quantity</th>
//                 <th>Price</th>
//                 <th>Subtotal</th>
//               </tr>
//               {location.state.formValues.fields.map(field => (
//                 <tr key={field.index}>
//                   <td>
//                     <label>{field.name}</label>
//                   </td>
//                   <td>
//                     <label>{field.quantity}</label>
//                   </td>
//                   <td>
//                     <label>{field.price}</label>
//                   </td>
//                   <td>
//                     <label>{field.price * field.quantity}</label>
//                   </td>
//                 </tr>
//               ))}
//               <tr>
//                 <td colSpan={3}>
//                   <label>Amount</label>
//                 </td>
//                 <td>
//                   <label>
//                     {location.state.formValues.fields.reduce(
//                       (total, field) => total + field.price * field.quantity,
//                       0,
//                     )}
//                   </label>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </>
//       )}
//     </div>
//   )
// }

// export default ResultPage
