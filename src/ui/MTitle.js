import React from 'react'

export default function Movetool({ textColor, children }) {
  return (
<div >

      <i className="bi bi-circle-fill" style={{ color: '#007bff', fontSize: '0.75rem'}}></i>

      <h2 style={{ fontSize: '1.5rem', margin: 0 }}>{children}
        <i className="bi bi-chevron-right" style={{ color: textColor, marginLeft: '8px', fontSize: '1rem' }}></i>
      </h2>

    </div>
  )
}