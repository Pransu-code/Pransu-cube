import React, { useState } from "react";
import CustomerList from "./components/customerList";
import CustomerDetails from "./components/customerDetails";
import "./App.css";
import { Customer } from "./type";

const App: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );

  const handleCustomerSelect = (customer: Customer) => {
    setSelectedCustomer(customer);
  };

  return (
    <div className="app">
      <header className="app-header">Customer Details Portal</header>
      <div className="app-content">
        <CustomerList
          onSelectCustomer={handleCustomerSelect}
          selectedCustomer={selectedCustomer}
        />
        <CustomerDetails customer={selectedCustomer} />
      </div>
    </div>
  );
};

export default App;
