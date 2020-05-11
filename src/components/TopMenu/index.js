import React, { memo } from 'react'
import Title from '../Title'

const borderShadow = {
  borderRadius: '5px',
  background: 'white',
  boxShadow: '2px 3px 8px #e4e3e3',
}

const TopMenu = ({ title }) => (
  <nav>
    <div
      className="container d-flex justify-content-around flex-row"
      style={borderShadow}
    >
      <Title style="color: black">Topup</Title>
      <Title style="color: black">Transfer</Title>
      <Title style="color: black">History</Title>
    </div>
  </nav>
)

export default memo(TopMenu)
