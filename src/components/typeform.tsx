import * as React from 'react'

export const Typeform: React.FC<{ block: any }> = ({ block }) => {
  const source = (block.format as any)?.display_source
  if (!source) return null
  return (
    <div style={{ border: 0, outline: 0, width: '100%' }}>
      <iframe
        src={source}
        style={{ width: '100%', height: '500px', border: 0 }}
      />
    </div>
  )
}
