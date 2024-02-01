// src/Category.js
import React, { useState } from "react";
import data from "./data";
import Buttons from "./Buttons";

const Category = () => {
    const[item,setItems]=useState(data)
    const menuItems = [...new Set(data.map((val)=> val.category))]
    console.log(menuItems)

    const filterItems = (cat) =>{
        const newItems = data.filter((newval) => newval.category === cat)
        setItems(newItems)
    }
  return (  
    <>
    <div className="flex justify-center container mx-auto items-center p-6">
        <Buttons
            menuItems={menuItems}
            filterItems ={filterItems}
            setItems = {setItems}
        />
    </div>
      <div className=" flex justify-center container mx-auto items-center">

        <div className="border-1 border-gray-300 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {item.map((product) => (
            
            <div key={product.id} className="max-w-sm rounded overflow-hidden my-3 border-2 border-gray-300" >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.title}</div>
                <p className="text-gray-700 text-base">{product.description}</p>
              </div>
              <div className="px-6 py-4">
                <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  Price: ${product.price}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  {product.category}
                </span>
              </div>
              <div className="flex justify-center">
                <button className="px-10 py-2 bg-amber-400 rounded text-white font-bold">
                  buy now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
