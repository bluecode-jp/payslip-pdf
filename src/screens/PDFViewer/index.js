import { useEffect } from 'react'
import { printPlugin } from '@react-pdf-viewer/print'
import { Viewer, Worker } from '@react-pdf-viewer/core'
import { useHistory, useLocation } from 'react-router-dom'
import { getFilePlugin } from '@react-pdf-viewer/get-file'

import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import '@react-pdf-viewer/print/lib/styles/index.css'

const PDFViewer = () => {
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    !location.state && history.replace('/')
  }, [])

  const printPluginInstance = printPlugin()
  const getFilePluginInstance = getFilePlugin()
  const { PrintButton } = printPluginInstance
  const { DownloadButton } = getFilePluginInstance

  return (
    <>
      {location.state && (
        <div
          style={{
            width: '100vw',
            height: '100vh',
            border: '1px solid rgba(0, 0, 0, 0.3)',
            display: 'flex',
            flexDirection: 'column',
          }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              backgroundColor: '#eeeeee',
              borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
              padding: '4px 4rem',
            }}>
            <PrintButton />
            <DownloadButton />
          </div>
          <div
            style={{
              flex: 1,
              overflow: 'hidden',
            }}>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
              <Viewer
                fileUrl={location.state.pdfFile}
                plugins={[printPluginInstance, getFilePluginInstance]}
              />
            </Worker>
          </div>
        </div>
      )}
    </>
  )
}

export default PDFViewer
