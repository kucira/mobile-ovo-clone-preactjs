import { h, component } from 'preact'
import { memo } from 'preact/compat'

const style = {
  backgroundColor: 'red',
}

const DecButton = ({ title, onClick, count }) => {
  console.log('rerender button')
  return (
    <>
      <button style={style} onClick={onClick}>
        {title}
      </button>
      <p> Dec Counter : {count}</p>
    </>
  )
}

export default memo(DecButton)
