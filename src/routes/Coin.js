import React,{useState,useEffect} from 'react'
import './Coin.css'
import DOMPurify from 'dompurify';
import {useParams} from 'react-router-dom';
import axios from 'axios';


const Coin = () => {

   const params=useParams()
  const [coin, setCoin]= useState({});

  const url=`https://api.coingecko.com/api/v3/coins/${params.coinId}`


  useEffect(() => {
    axios.get(url).then((res) => {
        setCoin(res.data)
    }).catch((error) => {
        console.log(error)
    })
}, [])

  return (
    <>
    <div className='coin-container'>
      <div className='sym'>
      {coin.image ? <img src={coin.image.large}/>:null}
      </div>
      <div className='content'>
        <div className='rank'>
          <span className='rank-btn'>Rank #{coin.market_cap_rank}</span>
        </div>
        <div className='info'>
          <div className='coin-heading'>
            {coin.image ? <img src={coin.image.small}/>:null}
            <p>{coin.name}</p>
            <p id='symbol'>{coin.symbol}</p>
          </div>
          <div className='coin-price'>
          {coin.market_data?.current_price ? <h1>₹ {coin.market_data.current_price.inr.toLocaleString()}</h1> : null}
          </div>
         
        </div>
        <div className='up_down'>
        <div className='row1'>
          <h4>24 Hour Low</h4>
          {coin.market_data ?.low_24h?<p>₹ {coin.market_data.low_24h.inr.toLocaleString()}</p>: null}
          </div>
          <div className='row2'>
          <h4>24 Hour High</h4>
          {coin.market_data ?.high_24h?<p>₹ {coin.market_data.high_24h.inr.toLocaleString()}</p>: null}
          </div>
          </div>
        <div className='content'>
          <div className='about'>
          <h3>About</h3>
        <p dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(coin.description?coin.description.en:''),
        }}>

        </p>
        </div>
          </div>
        
      </div>
      
    </div>
     
      </>
  )
}

export default Coin;