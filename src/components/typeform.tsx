import * as React from 'react'
import * as typeformEmbed from '@typeform/embed'

const Typeform: React.FC<{ block: any }> = ({ block }) => {
  const source = (block.format as any)?.display_source
  const typeformRef = React.useRef(null)
  React.useEffect(() => {
    typeformEmbed.makeWidget(typeformRef.current, source, {
      hideFooter: true,
      hideHeaders: true
      // opacity: 50,
    })
  }, [typeformRef])
  if (!source) return null
  return (
    <div
      style={{ border: 0, outline: 0, width: '100%', height: '500px' }}
      ref={typeformRef}
    />
  )
}
export default Typeform
