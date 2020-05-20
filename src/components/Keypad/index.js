import React, { memo, useEffect } from 'react'
import style from './style'
import Title from '../Title'

const greenText = {
  color: 'green',
  fontSize: '14px',
}

const keyNumber = {
  width: '70px',
  fontSize: '24px',
  color: 'white',
  backgroundColor: 'Transparent',
  backgroundRepeat: 'no-repeat',
  border: 'none',
  cursor: 'pointer',
  overflow: 'hidden',
  outline: 'none',
}

function index({ onClick, code, testFunction }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const Ripple = require('proper-ripple').default
      const buttonNodes = document.querySelectorAll('button')
      Ripple.bindTo(buttonNodes)
    }
  }, [])

  const testClick = () => {
    testFunction('ini value')
  }

  return (
    <>
      <div className="d-flex flex-column">
        <div className="d-flex flex-row justify-content-around mt-5 pb-4">
          <div
            className={code.length === 0 ? style.circle : style.circle_white}
          />
          <div
            className={code.length <= 1 ? style.circle : style.circle_white}
          />
          <div
            className={code.length <= 2 ? style.circle : style.circle_white}
          />
          <div
            className={code.length <= 3 ? style.circle : style.circle_white}
          />
          <div
            className={code.length <= 4 ? style.circle : style.circle_white}
          />
          <div
            className={code.length <= 5 ? style.circle : style.circle_white}
          />
        </div>
        <Title style={greenText}>Lupa Security Code?</Title>
      </div>
      <div
        className="d-flex flex-row flex-wrap justify-content-around p-3 mt-5"
        style={{ maxWidth: '300px' }}
      >
        <button value="1" onClick={onClick} style={keyNumber}>
          <p className="text-center">1</p>
        </button>
        <button value="2" onClick={onClick} style={keyNumber}>
          <p className="text-center">2</p>
        </button>
        <button value="3" onClick={onClick} style={keyNumber}>
          <p className="text-center">3</p>
        </button>
        <button value="4" onClick={onClick} style={keyNumber}>
          <p className="text-center">4</p>
        </button>
        <button value="5" onClick={onClick} style={keyNumber}>
          <p className="text-center">5</p>
        </button>
        <button value="6" onClick={onClick} style={keyNumber}>
          <p className="text-center">6</p>
        </button>
        <button value="7" onClick={onClick} style={keyNumber}>
          <p className="text-center">7</p>
        </button>
        <button value="8" onClick={onClick} style={keyNumber}>
          <p className="text-center">8</p>
        </button>
        <button value="9" onClick={onClick} style={keyNumber}>
          <p className="text-center">9</p>
        </button>
        <button value="0" onClick={onClick} style={keyNumber}>
          <p className="text-center">0</p>
        </button>
      </div>
    </>
  )
}

export default memo(index)
