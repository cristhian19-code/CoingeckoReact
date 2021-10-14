import React from 'react'
import { CoinItem } from './CoinItem'

export const CoinTable = ({result,darkmode}) => {
  return (
    <table className={darkmode ? 'table table-hover table-striped table-dark' : 'table table-hover table-striped table-light'}>
      <thead className="table-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Image</th>
          <th scope="col">Symbol</th>
          <th scope="col">Current Price</th>
          <th scope="col">Price Change(24H)</th>
          <th scope="col">Low(24H)</th>
          <th scope="col">Change percentage(%)</th>
        </tr>
      </thead>
      <tbody>
        {
          result.map(coin => {
            return (
              <CoinItem key={coin.id} coin={coin} />
            )
          })
        }
      </tbody>
    </table>
  )
}
