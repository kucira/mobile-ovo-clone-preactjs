import React, { memo } from 'react'

function index({ text, ...props }) {
  return (
    <button
      {...props}
      type="button btn-block"
      class="btn btn-primary text-uppercase p-2"
    >
      {text}
    </button>
  )
}

export default memo(index)
