import React from 'react'
import BarfiImage from './barfi1.jfif';


const Offerings = () => {
  const offeringsData = [
    { id: 1, name: 'Barfi', price: 'Rs 900', image: BarfiImage },
    { id: 2, name: 'Barfi', price: 'Rs 900', image: BarfiImage },
    { id: 3, name: 'Barfi', price: 'Rs 900', image: BarfiImage },
    { id: 4, name: 'Barfi', price: 'Rs 900', image: BarfiImage },
    { id: 5, name: 'Barfi', price: 'Rs 900', image: BarfiImage },
    { id: 6, name: 'Barfi', price: 'Rs 900', image: BarfiImage },
  ]

  return (
    <div className='offerings-container'>
      <h1>Our Offerings</h1>
      <div className='offerings-row'>
        {offeringsData.slice(0, 3).map((item) => (
          <div key={item.id} className='offering-item'>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
      <div className='offerings-row'>
        {offeringsData.slice(3, 6).map((item) => (
          <div key={item.id} className='offering-item'>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Offerings
