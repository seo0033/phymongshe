import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './pages/Main';
import List from './shop/List';
import Itm from './shop/Itm';
import Cart from './shop/Cart';
import './css/ShopDetail.scss'
import { Route, Routes } from 'react-router-dom';
//https://desipossa.github.io/shop_cra/assets/data.json

const App = () => {
    const [itm, setItm] = useState();
    const [cart, setCart] = useState([
        { id: 1, itm: '아이템01', price: '50000' }
    ]);

    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {
          window.scrollTo(0, 0);
        }
      }, []);
      
    useEffect(() => {
        const url = 'https://desipossa.github.io/shop_cra/assets/data.json'
        const getProduct = async () => {
            const res = await axios.get(url);

            const shopdata = res.data.slice(50, 140).map(it => {
                return {
                    id: it.id,
                    name: it.name,
                    src: it.image_link,
                    brand: it.brand,
                    cate: it.category,
                    price: it.price * 1450,
                    des: it.description,
                    color: it.product_colors,
                    ca: it.created_at,
                    type: it.product_type,
                    time: it.updated_at,
                }//밑에서 쉽게 쓰기위해 이름 바꿔줌
            })
            setItm(shopdata)
            console.log(res.data);
            console.log(shopdata);
        }
        getProduct();
    }, [])//데이터를 async를 이용해서 한번만 가져와라
    return (
        <>
            <Header />
            {/* {
                itm ? <ul>
                    {
                        itm.map((it, idx) => {
                            return (
                                <ul>
                                    <li style={{ fontSize: '100px' }}>{idx}</li>
                                    <li>{it.name}</li>
                                    <li>{it.des}</li>
                                    <li>{it.price.toLocaleString()}원</li>
                                    <li>{it.time}에 업데이트</li>
                                    <li>
                                        <img src={it.src} alt="" />
                                    </li>

                                </ul>
                            )
                        })
                    }
                </ul> : <div>로딩중임당</div>
            } */}

            {/* 데이터가져올때 delay걸려서 새로고침시 실행X : optional chaining itm?,it? */}
            {
                itm ?
                    <Routes>
                        <Route path='/' element={<Main />} />
                        <Route path='/cart' element={<Cart cart={cart} />} />
                        <Route path='/shoplist' element={<List shopList={itm} />} />
                        <Route path='/shopitm/:itm' element={<Itm shopList={itm} cart={cart} setCart={setCart} />} />
                        {/* element : 그 경로에서 쓸 데이터 담아둠*/}
                    </Routes>
                    : <div>로딩중임당</div>
            }
            <Footer />
        </>
    )
}

export default App