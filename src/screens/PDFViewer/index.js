import React, { useEffect } from 'react'
import { printPlugin } from '@react-pdf-viewer/print'
import { Viewer, Worker } from '@react-pdf-viewer/core'
import { useHistory, useLocation } from 'react-router-dom'
import { getFilePlugin } from '@react-pdf-viewer/get-file'

import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/print/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry'

const PDFViewer = () => {
  const history = useHistory()
  function useQuery() {
    const { search } = useLocation()
    return React.useMemo(() => new URLSearchParams(search), [search])
  }
  const pdfURL = useQuery().get('pdfurl')
  const filename = useQuery().get('filename')

  useEffect(() => {
    !pdfURL && history.replace('/')
  }, [])

  const printPluginInstance = printPlugin()
  const getFilePluginInstance = getFilePlugin({
    fileNameGenerator: () => {
      // const fileName = file.name.substring(file.name.lastIndexOf('/') + 1)
      return filename || Date.now()
    },
  })
  const { PrintButton } = printPluginInstance
  const { DownloadButton } = getFilePluginInstance

  return (
    <>
      {pdfURL && (
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
            <Worker workerUrl={pdfjsWorker}>
              <Viewer
                fileUrl={pdfURL}
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
