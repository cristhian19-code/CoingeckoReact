import React, { useState } from 'react'

export const Pagination = ({setResult}) => {
    const [post, setPost] = useState(1)
    const [pos, setPos] = useState(1)

    const leftPosition = ()=>{
        setPost(post-1)
    }

    const rigthPosition = ()=>{
        setPost(post+1)
    }

    const nextPage = async (e)=>{
        const page = parseInt(e.target.id)
        
        setPos(page)
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`)
        
        const data = await res.json()
        setResult(data);
    }

    return (
        <ul className="pagination d-flex justify-content-center my-4">
            <li className={post==1 ? 'page-item disabled' : 'page-item'}>
                <button onClick={leftPosition} className="page-link">&laquo;</button>
            </li>
            <li className={pos === (post) ? "page-item active": "page-item"}>
                <button onClick={nextPage} id={post} className="page-link">{post}</button>
            </li>
            <li className={pos === (post+1) ? "page-item active": "page-item"}>
                <button onClick={nextPage} id={post+1} className="page-link">{post+1}</button>
            </li>
            <li className={pos === (post+2) ? "page-item active": "page-item"}>
                <button onClick={nextPage} id={post+2} className="page-link">{post+2}</button>
            </li>
            <li className={pos === (post+3) ? "page-item active": "page-item"}>
                <button onClick={nextPage} id={post+3} className="page-link">{post+3}</button>
            </li>
            <li className={pos === (post+4) ? "page-item active": "page-item"}>
                <button onClick={nextPage} id={post+4} className="page-link">{post+4}</button>
            </li>
            <li className={post==10 ? 'page-item disabled' : 'page-item'}>
                <button onClick={rigthPosition} className="page-link">&raquo;</button>
            </li>
        </ul>
    )
}
