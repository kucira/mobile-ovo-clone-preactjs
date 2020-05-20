import React, { memo, useCallback, useReducer } from 'react'
import Title from '../../components/Title'
import Keypad from '../../components/Keypad'
import Button from '../../components/Button'

const buttonMoveAccount = {
  width: '100%',
  position: 'fixed',
  bottom: '0px',
}

const initialState = {
  code: '',
}
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'set_number':
      let codeTransform = state.code
      codeTransform += action.payload
      return { ...state, code: codeTransform }
      break

    default:
      return state
      break
  }
}

function Home() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const onClick = useCallback((e) => {
    dispatch({ type: 'set_number', payload: e.currentTarget.value })
  }, [])

  return (
    <>
      <div className="container pt-5">
        <section className="d-flex flex-column align-items-center">
          <Title>Masukan Security Code Anda</Title>
          <Keypad onClick={onClick} code={state.code} />
        </section>
      </div>
      <Button text="Pindah ke akun lain" style={buttonMoveAccount} />
    </>
  )
}

export default memo(Home)
