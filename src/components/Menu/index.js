import React, { memo } from 'react'
import Title from '../Title'

function Menu() {
  return (
    <div className="container d-flex flex-row flex-wrap justify-content-between mt-4">
      <a href="#" role="button" class="btn btn-danger btn-sm">
        PLN
      </a>
      <button>
        <Title style="color: black"> Pulsa </Title>
      </button>
      <button>
        <Title style="color: black"> Paket Data </Title>
      </button>
      <button>
        <Title style="color: black"> Pasca Bayar </Title>
      </button>
      <button>
        <Title style="color: black"> BPJS </Title>
      </button>
      <button>
        <Title style="color: black"> TV Kabel </Title>
      </button>
      <button>
        <Title style="color: black"> PAM </Title>
      </button>
      <button>
        <Title style="color: black"> Lainnya </Title>
      </button>
    </div>
  )
}

export default memo(Menu)
