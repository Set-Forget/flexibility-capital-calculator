import React, { useState } from 'react';
import './index.css';
import FormOne from './components/FormOne';
import FormTwo from './components/FormTwo';

export default function App() {
  const [showFormTwo, setShowFormTwo] = useState(false);
  const [formData, setFormData] = useState({}); // State to hold data from FormOne

  const toggleForms = (data) => {
    if (data) {
      setFormData(data); // Set the data when toggling to FormTwo
    }
    setShowFormTwo((prev) => !prev);
  };

  const handleBackClick = () => {
    setShowFormTwo(false);
  };

  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1">
        {!showFormTwo ? (
          <FormOne onButtonClick={toggleForms} />
        ) : (
          <FormTwo 
            formData={formData} 
            onBackClick={handleBackClick} 
            onButtonClick={toggleForms} 
          />
        )}
      </main>
    </div>
  );
}
