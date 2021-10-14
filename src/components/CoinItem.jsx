import React from 'react'

export const CoinItem = ({coin}) => {
    return (
        <tr className="table-active">
            <th scope="row">{coin.name}</th>
            <td>
                <img src={coin.image} alt={coin.name} height="40px"/>
            </td>
            <td>{coin.symbol}</td>
            <td>{coin.current_price}</td>
            <td className={coin.price_change_24h>0 ? 'text-success' : 'text-danger'}>
                <i className={coin.price_change_24h>0 ? 'fas fa-caret-up' : 'fas fa-caret-down'}></i>
                {Math.round(coin.price_change_24h*100000)/100000}
            </td>
            <td>{coin.low_24h}</td>
            <td>{coin.atl_change_percentage}%</td>
        </tr>
    )
}
