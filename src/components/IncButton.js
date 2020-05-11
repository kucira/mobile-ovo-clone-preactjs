import { h, component } from 'preact'
import { memo } from 'preact/compat'

const style = {
  backgroundColor: 'green',
}

const IncButton = ({ title, onClick, count }) => {
  console.log('rerender button')
  return (
    <>
      <button style={style} onClick={onClick}>
        {title}
      </button>
      <p> Inc Counter : {count}</p>
    </>
  )
}

export default memo(IncButton)
