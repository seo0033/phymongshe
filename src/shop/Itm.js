import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Itm = ({ shopList, cart, setCart }) => {
  const { itm } = useParams();
  const navigate = useNavigate();
  const matchItm = shopList.find(it => itm == it.id);

  return (
    <section className='shopItm'>
      {/* {console.log(matchItm)}
        Itm{shopList[0].name} */}
      <div className="box">
        <img src={matchItm.src} alt="" />
      </div>
      <div className="name">{matchItm.name}</div>
      <div className="des">{matchItm.des.substring(0, 100)}...</div>
      <ul className='color'>
        {
          matchItm.color.map(color => {
            return (
              <li style={{ backgroung: color.h }}></li>
            )
          })
        }
      </ul>
      <div className="price"><span>{matchItm.price.toLocaleString()}</span> 원</div>
      <button onClick={() => {
        setCart([
          ...cart,
          { id: matchItm.id, itm: matchItm.name }
        ])
        navigate('/cart')
      }
      }>장바구니담기</button>

    </section>
  )
}

export default Itm