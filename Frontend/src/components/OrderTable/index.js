import React from 'react';
import '../../style/components/orderTable.scss';
const OrderTable = (props) => {
  // TO DO Waiting for badckend data
  const orders = [
    { index: 0, orderId: '123456', payment: '123', complete: 0 },
    { index: 1, orderId: '123456', payment: '123', complete: 0 },
    { index: 2, orderId: '123456', payment: '123', complete: 0 },
    { index: 3, orderId: '123456', payment: '123', complete: 0 },
    { index: 4, orderId: '123456', payment: '123', complete: 0 },
    { index: 5, orderId: '123456', payment: '123', complete: 0 },
  ];

  return (
    <table className="order-table__orders-table">
      <tbody>
        {orders.map((entry) => (
          <tr key={entry.index}>
            <td className="order-table__orders-table-order-id">#{entry.orderId}</td>
            <td className="order-table__orders-table-payment">${entry.payment}</td>
            <td className="order-table__orders-table-complete-button">
              <span className="order-table__orders-table-button">Complete</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default React.memo(OrderTable);
