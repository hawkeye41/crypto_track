import React,{useState,useEffect} from 'react'
import CoinItem from './CoinItem'
import Coin from '../routes/Coin'
import {Link} from 'react-router-dom'
// import TextField from '@material-ui/core/TextField';
import './Coins.css'
const Coins = (props) => {
  const [search, setSearch] = useState('');
  const handleChange=e=>{
    setSearch(e.target.value);
};

console.log(props)
const filterCoin= props.coins.filter(coin =>
  coin.name.toLowerCase().includes(search.toLowerCase())
);

  return (
    <>
    <div className="search">
    
    <form noValidate autoComplete="off">
    
   <input placeholder='search...' id='search_input' onChange={handleChange}/>
     
 </form>
     
    </div>
    <div className='container'>
        <div>
            <div className='heading'>
            <p>#</p>
            <p className='coin-name'>Coin</p>
            <p>Price</p>
            <p>24h</p>
            <p className='hide-mobile'>Volume</p>
            <p className='hide-mobile'>Market cap</p>
            </div>
            <div className="filter">
    {filterCoin.map(coin=>{
      return(
        <Link to={`/coin/${coin.id}`} element={<Coin/>} key={coin.id}>
        <CoinItem coins ={coin}/>
        </Link>
      )
    })}
    </div>
        </div>
    </div>
    </>
  )
}

export default Coins