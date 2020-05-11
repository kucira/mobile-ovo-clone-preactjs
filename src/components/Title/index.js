import React, { memo } from 'react'

function index({ children, ...props }) {
  return (
    <p className="font-verdana mb-2" {...props}>
      {children}
    </p>
  )
}

export default memo(index)
