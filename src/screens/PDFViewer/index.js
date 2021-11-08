import { useEffect } from 'react'
import { Viewer, Worker } from '@react-pdf-viewer/core'
import { useHistory, useLocation } from 'react-router-dom'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'

import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

const PDFViewer = () => {
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    !location.state && history.replace('/')
  }, [])

  const defaultLayoutPluginInstance = defaultLayoutPlugin()
  return (
    <>
      {location.state && (
        <div
          style={{
            width: '100vw',
            height: '100vh',
          }}>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
            <Viewer
              fileUrl={location.state.pdfFile}
              plugins={[defaultLayoutPluginInstance]}
            />
          </Worker>
        </div>
      )}
    </>
  )
}

export default PDFViewer
