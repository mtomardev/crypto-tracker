import "./style.css"
import React from 'react'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from "@mui/material";
import { convertNumber } from "../../../functions/convertNumber";
import { Link } from "react-router-dom";

function List({coin}) {
  return (
    <Link to = {`/coin/${coin.id}`}>
    <tr className="list-row">
      <td className='td-image'>
      <Tooltip  title="Logo" placement="bottom">
            <img src={coin.image} className='coin-logo' />
            </Tooltip>
     </td>

     <td>
        <div className='name-col'>
        <Tooltip  title="Symbol" placement="bottom">
                <p className='coin-symbol'>{coin.symbol}</p>
                </Tooltip>
                <Tooltip  title="Name" placement="bottom">
                <p className='coin-name'>{coin.name}</p>
                </Tooltip>
            </div>
        </td>
        <Tooltip  title="Price Change" placement="bottom">
        { coin.price_change_percentage_24h >0 ?(
        <td className='chip-flex'>
              <div className='price-chip'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
            
            <div className='icon-chip td-icon'>
                <TrendingUpRoundedIcon/></div>

            </td>
            

            ):(
              <td className='chip-flex'>
              <div className='price-chip chip-red'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
            
              <div className='icon-chip chip-red td-icon'>
                <TrendingDownRoundedIcon/></div>
              
            </td>
            )
        }
        </Tooltip>

    <Tooltip title="Current Price" placement="bottom">
        <td>
      <h3 className='coin-price td-center-align' style={{color:
      coin.price_change_percentage_24h < 0
      ?"var(--red)"
      :"var(--green)"
      }}>
        ${coin.current_price.toLocaleString()}
        </h3>
      </td>
      </Tooltip>

      <Tooltip  title="Total Volume" placement="bottom-end">
      <td>
        <p className='total-volume td-right-align td-total-volume'>${coin.total_volume.toLocaleString()}</p>
      
      </td>
      </Tooltip>

      <Tooltip  title="Market Cap" placement="bottom-end">
      <td className="desktop-td-mkt">
        <p className='total-volume td-right-align'>${coin.market_cap.toLocaleString()}</p>
      
      </td>
      </Tooltip>

      <Tooltip  title="Market Cap" placement="bottom-end">
      <td className="mobile-td-mkt">
        <p className='total-volume td-right-align'>
            ${convertNumber(coin.market_cap)}</p>
      
      </td>
      </Tooltip>
    </tr>
    </Link>
  )
}

export default List
