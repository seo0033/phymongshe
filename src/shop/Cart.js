import React from 'react'

const Cart = ({ cart }) => {
  return (
    <div style={{ padding: '300px 0' }}>
      {
        cart.map(ca => {
          return (
            <ul>
              <li>{ca.id}</li>
              <li>{ca.itm}</li>
            </ul>
          )
        })
      }
    </div >
  )
}

export default Cart