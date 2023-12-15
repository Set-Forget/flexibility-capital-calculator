import React from 'react';

const FormOne = ({ onButtonClick }) => {
  const handleSubmit = () => {
    const data = {
      yearsInBusiness: document.getElementById('years-in-business').value,
      monthlyRevenue: document.getElementById('monthly-revenue').value,
      creditScore: document.getElementById('credit-score').value,
    };
    onButtonClick(data); // Pass data to the toggle function
  };

  return (
    <>
      <div
        id="first-part"
        className="form-section bg-white p-6 rounded-lg shadow-lg flex flex-col justify-around"
      >
        <div className="bg-[#2aae79] text-white text-xl font-bold p-4">
          Realtime Funding Calculator
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="years-in-business"
          >
            1. How many years have you been in business?
          </label>
          <select
            id="years-in-business"
            className="block appearance-none w-full bg-white border border-black text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option>Over 5 Years</option>
            <option>3 years to 5 years</option>
            <option>1 year to 3 years</option>
            <option>6 months to 1 year</option>
            <option>Less than 6 months</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="monthly-revenue"
          >
            2. Average monthly revenue? (last 3 months)
          </label>
          <select
            id="monthly-revenue"
            className="block appearance-none w-full bg-white border border-black text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option>$0 - $8,499</option>
            <option>$8,500 - $25,000</option>
            <option>$25,000 - $42,000</option>
            <option>$42,000 - $85,000</option>
            <option>$85,000+</option>
          </select>
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="credit-score"
          >
            3. Select Your Credit Score
          </label>
          <select
            id="credit-score"
            className="block appearance-none w-full bg-white border border-black text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option>Under 550</option>
            <option>550 - 600</option>
            <option>600 - 650</option>
            <option>650 - 700</option>
            <option>700+</option>
          </select>
        </div>

        <button
          onClick={handleSubmit}
          className="w-48 self-center bg-white text-[#2aae79] font-bold py-2 px-4 rounded border-2 border-[#2aae79] hover:bg-[#2aae79] hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Get Funded Today!
        </button>
      </div>
    </>
  );
};

export default FormOne;
