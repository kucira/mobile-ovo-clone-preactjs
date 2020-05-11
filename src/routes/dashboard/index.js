import React, { memo, useCallback, useReducer } from 'react'
import Header from '../../components/Header'
import TopMenu from '../../components/TopMenu'
import Hero from '../../components/Hero'
import Menu from '../../components/Menu'

function Dashboard() {
  return (
    <>
      <Header />
      <section className="" style="background-color: white; height: 100%">
        <Hero />
        <Menu />
      </section>
    </>
  )
}

export default memo(Dashboard)
