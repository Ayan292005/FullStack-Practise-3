import React, { useEffect, useState } from 'react'
import axios from "axios"
let DBurl = "http://localhost:4040/products"

function Products() {
    let [data, setData] = useState([])
    function getData() {

        axios.get(DBurl)
            .then(res => {
                setData(res.data)
                setOriginalData(res.data)
            })
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <div>
            <div className='container'>

                <div className='flex justify-content'>
                    {data && data.map(product => (
                        <div className='relative my-4 h-100 card border-r-2'>
                            <div className='flex flex-col items-center'>
                                <img src={product.image} />
                                <p className='font-medium'>{product.name}</p>
                                <p style={{ color: "#fe4c50", fontWeight: "bold" }}>{product.price}$</p>
                            </div>
                            <div className='flex justify-center items-center gap-2 btn-holder'>
                                {/* 
                                <NavLink to={`/flowers/${product.id}`}><IconButton style={{ backgroundColor: "white", padding: "10px", borderRadius: "50%" }}><SearchIcon style={{
                                    fontSize: '20px', color: "black", cursor: "pointer"
                                }} ></SearchIcon></IconButton></NavLink>

                                <IconButton onClick={() => handleAddBasket(product)} style={{ backgroundColor: "white", padding: "10px", borderRadius: "50%" }}><LocalMallIcon style={{ fontSize: '20px', color: "black", cursor: "pointer" }}></LocalMallIcon></IconButton>

                                <IconButton onClick={() => handleAddFavorite(product)} style={{ backgroundColor: "white", padding: "10px", borderRadius: "50%" }}><FavoriteBorderIcon style={{ fontSize: '20px', color: "black", cursor: "pointer" }}></FavoriteBorderIcon></IconButton> */}

                            </div>

                        </div>



                    ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Products