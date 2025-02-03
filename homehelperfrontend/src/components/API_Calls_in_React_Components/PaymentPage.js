import React, { useEffect, useState } from 'react';
import { getPayments, createPayment, deletePayment } from './PaymentService';

const PaymentPage = () => {
  const [payments, setPayments] = useState([]);
  const [newPayment, setNewPayment] = useState({ amount: '', paymentDate: '', status: '' });

  useEffect(() => {
    // Fetch payments on component mount
    const fetchPayments = async () => {
      try {
        const paymentData = await getPayments();
        setPayments(paymentData);
      } catch (error) {
        console.error('Error fetching payments:', error);
      }
    };

    fetchPayments();
  }, []);

  const handlePaymentCreate = async () => {
    try {
      const createdPayment = await createPayment(newPayment);
      setPayments([...payments, createdPayment]);
      setNewPayment({ amount: '', paymentDate: '', status: '' });
    } catch (error) {
      console.error('Error creating payment:', error);
    }
  };

  const handlePaymentDelete = async (id) => {
    try {
      await deletePayment(id);
      setPayments(payments.filter(payment => payment.id !== id));
    } catch (error) {
      console.error('Error deleting payment:', error);
    }
  };

  return (
    <div>
      <h1>Payments</h1>

      {/* Create Payment Form */}
      <div>
        <input 
          type="text" 
          placeholder="Amount" 
          value={newPayment.amount} 
          onChange={(e) => setNewPayment({ ...newPayment, amount: e.target.value })} 
        />
        <input 
          type="date" 
          value={newPayment.paymentDate} 
          onChange={(e) => setNewPayment({ ...newPayment, paymentDate: e.target.value })} 
        />
        <input 
          type="text" 
          placeholder="Status" 
          value={newPayment.status} 
          onChange={(e) => setNewPayment({ ...newPayment, status: e.target.value })} 
        />
        <button onClick={handlePaymentCreate}>Create Payment</button>
      </div>

      {/* Payments List */}
      <ul>
        {payments.map(payment => (
          <li key={payment.id}>
            {payment.amount} - {payment.paymentDate} - {payment.status}
            <button onClick={() => handlePaymentDelete(payment.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentPage;
