// import React, { useEffect, useState } from 'react';
// import { Customer } from '../type';

// interface CustomerListProps {
//   onSelectCustomer: (customer: Customer) => void;
//   selectedCustomer: Customer | null;
// }

// const CustomerList: React.FC<CustomerListProps> = ({ onSelectCustomer, selectedCustomer }) => {
//   const [customers, setCustomers] = useState<Customer[]>([]);

//   useEffect(() => {
//     const fetchCustomers = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         // Map data to match the Customer type
//         const customerData = data.map((user: any) => ({
//           id: user.id,
//           name: user.name,
//           title: user.username, // Just an example, map this appropriately
//           address: `${user.address.street}, ${user.address.city}`,
//           photos: [] // Set an empty array or fetch photos separately
//         }));
//         setCustomers(customerData);
//       } catch (error) {
//         console.error('Error fetching customers:', error);
//       }
//     };

//     fetchCustomers();
//   }, []);

//   return (
//     <div className="customer-list">
//       {customers.map((customer) => (
//         <div
//           key={customer.id}
//           className={`customer-card ${selectedCustomer?.id === customer.id ? 'selected' : ''}`}
//           onClick={() => onSelectCustomer(customer)}
//         >
//           <h4>{customer.name}</h4>
//           <p>{customer.title}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CustomerList;


import React, { useEffect, useState } from 'react';
import { Customer } from '../type';
import './styles/customerList.css';

interface CustomerListProps {
  onSelectCustomer: (customer: Customer) => void;
  selectedCustomer: Customer | null;
}

const CustomerList: React.FC<CustomerListProps> = ({ onSelectCustomer, selectedCustomer }) => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        // Map data to match the Customer type
        const customerData = data.map((user: any) => ({
          id: user.id,
          name: user.name,
          title: user.username, // Just an example, map this appropriately
          address: `${user.address.street}, ${user.address.city}`,
          photos: [] // Set an empty array or fetch photos separately
        }));
        setCustomers(customerData);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div className="customer-list">
      {customers.map((customer) => (
        <div
          key={customer.id}
          className={`customer-card ${selectedCustomer?.id === customer.id ? 'selected' : ''}`}
          onClick={() => onSelectCustomer(customer)}
        >
          <h4>{customer.name}</h4>
          <p>{customer.title}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerList;
