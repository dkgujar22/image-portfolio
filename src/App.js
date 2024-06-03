import React, { useState } from "react";
import Foodapi from "./Foodapi";
import './App.css'
function App() {
  const [data, setdata] = useState(Foodapi);
  const [quantity,setquantity]=useState(null)
  // const [num,setnum]=useState(null)
  const addtocart = () => {
    setquantity(quantity+1)
  }
  const filteritem = (filterelem) =>{
    const update = Foodapi.filter((elem)=>{
      return elem.category===filterelem;
    })
    setdata(update)

  }

  return (
    <div className="container-fluid">
      <div className="container">
        <h1 className="text-center">Order your favourite dish</h1>
        <p><i className="fas fa-shopping-cart">{quantity}</i></p>

        <hr></hr>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 d-flex justify-content-center">
            <button type="button" className="btn btn-warning m-4" onClick={()=>filteritem('Dinner')}>Dinner</button>
            <button type="button" className="btn btn-warning m-4" onClick={()=>filteritem('Lunch')}>Lunch</button>
            <button type="button" className="btn btn-warning m-4" onClick={()=>filteritem('Breakfast')}>Breakfast</button>
            <button type="button" className="btn btn-warning m-4" onClick={()=>filteritem('Snack')}>Snack</button>
            <button type="button" className="btn btn-warning m-4" onClick={()=>setdata(Foodapi)}>All</button>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          {data.map((elem) => {
            const { id, title, description, foodType, price, imageUrl } = elem;
            return (
              <div key={id} className="col-md-4 mb-4">
                <div className="card h-100">
                  <img src={imageUrl} className="card-img-top" alt={title} />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{foodType}</h6>
                    <p className="card-text">{description}</p>
                  </div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <small className="text-muted">{price}</small>
                    <button className="btn btn-primary btn-order">Order Now</button>
                    <button onClick={addtocart} type="button" className="btn btn-primary">
                      <i className="fas fa-shopping-cart"></i> Add to Cart
                    </button>

                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>


    </div>

  );
}

export default App;
