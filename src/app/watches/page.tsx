import React from 'react'

const Watches = () => {

    const watchData=[
        {id: 1, name: "Rolex", price: 12000, description: "Luxury Watch", image:"/image-01.jpg"},
        {id: 2, name: "Omega", price: 10000, description: "Sporty Design", image:"/image-02.jpg"},
        {id: 3, name: "Citizen", price: 25000, description: "Sporty and stylish", image:"/image-03.jpg"},
        {id: 4, name: "Seiko", price: 8000, description: "Affordable and reliable", image:"/image-04.jpg"},
        {id: 5, name: "Casio", price: 12000, description: "Bold and rugged", image:"/image-05.jpg"},
        {id: 6, name: "TAG Heuer", price: 12000, description: "Bold and unique", image:"/image-06.jpg"},

    ]
  return (
    <div>
      <div className='watches'>
        {watchData.map((watch)=>(
            <div key={watch.id} className='watch-card'>
                <img src={watch.image} alt={watch.name}/>
                <h3>{watch.name}</h3>
                <p>{watch.description}</p>
                <div className='price'>${watch.price}</div>
                <button>Add to Cart</button>

            </div>
        ))}
      </div>
    </div>
  )
}

export default Watches
