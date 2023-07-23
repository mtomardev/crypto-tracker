import React, { useState } from 'react'
import './styles.css'
import { color } from 'framer-motion'

function CoinInfo({heading, desc}) {

    const shortDesc = desc.slice(0,350) + 
    "<span style= 'color: var(--grey); cursor: pointer; '> Read more...</span>"
    const longDec = desc  + 
    "<span style= 'color: var(--grey); cursor: pointer; '> Read Less...</span>";
    const [flag, setFlag] = useState()

    return (
    <div className='grey-wrapper' style={{ padding: "0rem .5rem" }}>
        <h2 className='coin-info-heading'>{heading}</h2>
        {/* <p className='coin-info-desc'>{desc}</p> */}
        {desc.length > 350 ?
(          <p onClick={() => setFlag(!flag)} className='coin-info-desc' 
        dangerouslySetInnerHTML={{__html:!flag ? shortDesc :longDec }}
        />
        ) : (
          <p dangerouslySetInnerHTML={{__html : desc}} />
        ) }
      
    </div>
  )
}


export default CoinInfo
