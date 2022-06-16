import React from 'react'
import CoinItem from './CoinItem'
import Coin from '../routes/Coin'
import {Link} from 'react-router-dom'
import './Coins.css'
const Coins = (props) => {
  return (
    <div className='container'>
        <div>
            <div className='heading'>
            <p>#</p>
            <p className='coin-name'>coin</p>
            <p>price</p>
            <p>24h</p>
            <p className='hide-mobile'>volume</p>
            <p className='hide-mobile'>market cap</p>
            </div>
            {props.coins.map(coins=>{
                return(
                  <Link to={`/coin/${coins.id}`} element={<Coin/>} key={coins.id}>
                  
                    <CoinItem coins={coins}/>
                    </Link>
                )
            })}
        </div>
    </div>
  )
}

export default Coins