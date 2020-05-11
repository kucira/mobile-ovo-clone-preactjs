import React, { memo } from 'react'
import { Link } from 'preact-router/match'
import style from './style.css'

const Header = ({ title }) => (
  <header
    className="d-block p-1 position-fixed w-100"
    style="z-index:99; 	background: rgb(60, 25, 128) !important;"
  >
    <nav class="navbar ">
      <div class="navbar-left">
        <a class="navbar-title" href="#">
          OVO
        </a>
      </div>
      <div class="navbar-right">
        <button>icon notification</button>
      </div>
    </nav>
  </header>
)

export default memo(Header)
