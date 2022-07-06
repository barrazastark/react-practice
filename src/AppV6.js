import { useState } from "react";
import "./App.css";

const STOCKS_DB = [
  {
    id: Math.random(),
    name: 'APL',
    price: 500,
    status: 'red',
    percent: .03,
  },
  {
    id: Math.random(),
    name: 'GGL',
    price: 300,
    status: 'green',
    percent: 12,
  },
  {
    id: Math.random(),
    name: 'AMZ',
    price: 2000,
    status: 'green',
    percent: 5,
  },
  {
    id: Math.random(),
    name: 'APL',
    price: 500,
    status: 'red',
    percent: .03,
  },
  {
    id: Math.random(),
    name: 'GGL',
    price: 300,
    status: 'red',
    percent: 12,
  },
  {
    id: Math.random(),
    name: 'AMZ',
    price: 2000,
    status: 'red',
    percent: 5,
  },
  {
    id: Math.random(),
    name: 'APL',
    price: 500,
    status: 'red',
    percent: .03,
  },
  {
    id: Math.random(),
    name: 'GGL',
    price: 300,
    status: 'green',
    percent: 12,
  },
  {
    id: Math.random(),
    name: 'AMZ',
    price: 2000,
    status: 'green',
    percent: 5,
  },
  {
    id: Math.random(),
    name: 'APL',
    price: 500,
    status: 'red',
    percent: .03,
  },
  {
    id: Math.random(),
    name: 'GGL',
    price: 300,
    status: 'green',
    percent: 12,
  },
  {
    id: Math.random(),
    name: 'AMZ',
    price: 2000,
    status: 'green',
    percent: 5,
  },
  {
    id: Math.random(),
    name: 'APL',
    price: 500,
    status: 'red',
    percent: .03,
  },
  {
    id: Math.random(),
    name: 'GGL',
    price: 300,
    status: 'red',
    percent: 12,
  },
  {
    id: Math.random(),
    name: 'AMZ',
    price: 2000,
    status: 'red',
    percent: 5,
  },
  {
    id: Math.random(),
    name: 'APL',
    price: 500,
    status: 'red',
    percent: .03,
  },
  {
    id: Math.random(),
    name: 'GGL',
    price: 300,
    status: 'red',
    percent: 12,
  },
  {
    id: Math.random(),
    name: 'AMZ',
    price: 2000,
    status: 'red',
    percent: 5,
  },
  {
    id: Math.random(),
    name: 'APL',
    price: 500,
    status: 'red',
    percent: .03,
  },
  {
    id: Math.random(),
    name: 'GGL',
    price: 300,
    status: 'green',
    percent: 12,
  },
  {
    id: Math.random(),
    name: 'AMZ',
    price: 2000,
    status: 'green',
    percent: 5,
  },
  {
    id: Math.random(),
    name: 'APL',
    price: 500,
    status: 'red',
    percent: .03,
  },
  {
    id: 11,
    name: 'GGL',
    price: 300,
    status: 'green',
    percent: 12,
  },
 
]

const APPV6 = () => {

  const [stocks] = useState(STOCKS_DB);
  const [selectedStocks, setSelectedStocks] = useState([]);

  const handleClick = (stock) => {
    const exist = selectedStocks.find(s => s.id === stock.id);
    
    if(!exist) {
      setSelectedStocks([stock, ...selectedStocks]);
    } else {
      setSelectedStocks(
        selectedStocks.filter(s => s.id !== exist.id)
      );
    }
  }

  const total = selectedStocks.reduce((acc, current) => acc + current.price, 0)

  return (
    <div className="App-wrapper">
      <h2>Available stocks</h2>
      <div className="main">
        {
          stocks.map((stock) => {
            const { id, name, price, status, percent } = stock;
            const arrow = status === 'green' ? String.fromCharCode(8593) : String.fromCharCode(8595)

            return (
              <div key={id} className={`stock ${status}`} onClick={() => handleClick(stock)}>
                <p>{name}</p>
                <p>{`$${price}`}</p>
                <p>{percent} % {arrow}</p>
              </div>
            );
          })
        }
      </div>
      <div className="cart">
        <h2>Stocks agregados</h2>
        {!selectedStocks.length && (
          <p>No haz seleccionado stocks</p>
        )}
        {
          selectedStocks.map(s => (
            <p key={s.id}>{s.name}, ${s.price}</p>
          ))
        }
        <h3>Total: ${total}</h3>
      </div>
    </div>
  )
}

export default APPV6;