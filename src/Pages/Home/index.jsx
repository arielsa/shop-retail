
import { useState, useEffect } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"

function Home() {
  
  const link = 'https://api.escuelajs.co/api/v1/products'

  const [items, setItems] = useState(null)
  useEffect(
    ()=>{
      fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
    },[]
  )

  return (
    <>
      <Layout>
        
        home
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          items?.map(
            item =>
              (<Card key = {item.key} data = {item} />)
            
          )
        }
        </div>
      </Layout>
    </>
  )
}

export default Home
