import React,{useState} from 'react'

const CoinInfo = () => {
    const [historicalData, setHistoricalData]=usestate();
    const [days, setDays]= useState(1);
    const {currency}=cryptoState()
    return (
    <div>CoinInfo</div>
  )
}

export default CoinInfo