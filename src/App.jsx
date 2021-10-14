import { useState } from 'react'
import { CoinTable } from './components/CoinTable'
import { Pagination } from './components/Pagination'

function App() {
  const [result, setResult] = useState([])
  const [filter, setFilter] = useState([])
  const [darkmode, setDarkmode] = useState(false)
  const [input, setInput] = useState('')
  
  const handleDarkMode = ()=>{
    setDarkmode(darkmode=>!darkmode)
  }
  

  const handleSearch = (e)=>{
    const search = e.target.value;
    var filterResult = []

    setInput(search)

    if(search.length > 0){
      if(result.length>0){
        filterResult = result.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));
        setFilter(filterResult)
      }else{
        setFilter(result)
      }
    }else{
      setFilter([])
    }

    console.log(filterResult);
   
  }

  return (
    <div className={darkmode ? 'd-flex flex-column bg-dark' : 'd-flex flex-column'}>
      <div>
        <button className="btn" onClick={handleDarkMode} ><i className={!darkmode ? 'fas fa-sun' : 'fas fa-moon text-white'}></i></button>
      </div>
      <p className={!darkmode ? 'display-1 my-5 text-center' : 'display-1 my-5 text-center text-white'}>CryptoApp</p>
      <Pagination setResult={setResult}/>
      <div className="p-5">
        <input type="text" className="form-control border border-primary" onChange={handleSearch} placeholder="Search.." value={input}/>
      </div>
      <div className="table-responsive">
        <CoinTable darkmode={darkmode} result={filter.length>0 ? filter :result}/>
      </div>
    </div>
  )
}

export default App
