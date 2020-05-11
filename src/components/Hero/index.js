import { memo } from 'react'
import TopMenu from '../TopMenu'

function Hero() {
  return (
    <div
      className="container"
      style="height: 13rem; background: rgb(60, 25, 128); border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;padding-top: 4rem"
    >
      <p class="">Ovo Cash</p>
      <p class="">Rp. 123450050</p>
      <p class="">Ovo Points 4.500</p>
      <TopMenu />
    </div>
  )
}

export default memo(Hero)
