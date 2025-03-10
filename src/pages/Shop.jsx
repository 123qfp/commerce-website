import React, { useState } from 'react'
import CommonSection from '../UI/CommonSection'
import { Col, Container, Row } from 'reactstrap'
import "../styles/shop.css"
import products from "../data/products"
import ProductsList from '../UI/productsList'



const Shop = () => {
  
  const [productsData,setProductsData]=useState(products)

const handleFilter=(e)=>{
  const filterValue = e.target.value;

  if(filterValue === "sofa"){
    const filteredProducts = products.filter((item)=> item.category === "sofa")
    setProductsData(filteredProducts)
  }

  if (filterValue === "mobile") {
    const filteredProducts = products.filter((item) => item.category === "mobile")
    setProductsData(filteredProducts)
  }

  if (filterValue === "chair") {
    const filteredProducts = products.filter((item) => item.category === "chair")
    setProductsData(filteredProducts)
  }

  if (filterValue === "wireless") {
    const filteredProducts = products.filter((item) => item.category === "wireless")
    setProductsData(filteredProducts)
  }

  if (filterValue === "watch") {
    const filteredProducts = products.filter((item) => item.category === "watch")
    setProductsData(filteredProducts)
  }

  
}

const handleSearch = e=>{
  const searchTerm = e.target.value

  const searchProducts = products.filter(item=>item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
  setProductsData(searchProducts)
}


  return <section>
    <CommonSection title="Product" />
    <section className='mt-5'>
      <Container>
        <Row>
          <Col lg='3' md='4'>
            <div className="filter__widget">
              <select onChange={handleFilter}>
                <option>Filter By Category</option>
                <option value="sofa">Sofa</option>
                <option value="mobile">Mobile</option>
                <option value="chair">Chair</option>
                <option value="watch">Watch</option>
                <option value="wireless">Wireless</option>
              </select>
            </div>
          </Col>
          <Col lg='3' md='4'>
            <div className="filter__widget">
              <select>
                <option>Sort By Category</option>
                <option value="sofa">Sofa</option>
                <option value="mobile">mobile</option>
                <option value="chair">chair</option>
                <option value="watch">watch</option>
                <option value="wireless">Wireless</option>
              </select>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className="search__box" onChange={handleSearch}>
             <input type="text" placeholder='Search....' />
              <span><i class="ri-search-line"></i></span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          {
            productsData.length === 0?(
              <h1 className='text-center fs-4 mt-5'>Products not found</h1>
            ):(
                <ProductsList data={productsData} />
            )
          }
        </Row>
      </Container>
    </section>
  </section>
}

export default Shop