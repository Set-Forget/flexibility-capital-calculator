import { motion } from 'framer-motion';
import axios from 'axios';
import { useState } from 'react';
import Results from './Results';
import Spinner from './Spinner';

const FormTwo = ({ formData, onBackClick, onButtonClick }) => {
  const [validationErrors, setValidationErrors] = useState({
    moneyNeeded: false,
    fullName: false,
    companyName: false,
    phoneNumber: false,
    emailAddress: false,
    termsAgreement: false,
  });
  const [apiResponse, setApiResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  function sendData() {
    setLoading(true);
    const { creditScore, yearsInBusiness, monthlyRevenue } = formData;

    // Retrieve the values from the form
    const moneyNeeded = document.getElementById('money-needed').value;
    const fullName = document.getElementById('full-name').value;
    const companyName = document.getElementById('company-name').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const emailAddress = document.getElementById('email-address').value;
    const params = new URLSearchParams(window.location.search);
    const URL = params.get('parentUrl');

    const GAS_URL =
      'https://script.google.com/macros/s/AKfycbx9zeeOofmyu0gRpwVyBzr1IVGjrcVFMbBPdcW5jLZR-QypeMcrot-kjb4OfdLP49pn/exec';

    // First GET request
    axios
      .get(
        GAS_URL +
          '?type=get' +
          '&creditScore=' +
          encodeURIComponent(creditScore) +
          '&businessTime=' +
          encodeURIComponent(yearsInBusiness) +
          '&revenue=' +
          encodeURIComponent(monthlyRevenue)
      )
      .then((response) => {
        console.log('Data received from first request:', response.data);
        setApiResponse(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data from first request:', error);
        setLoading(false);
      });

    // Second GET request
    axios
      .get(
        GAS_URL +
          '?type=post' +
          '&creditScore=' +
          encodeURIComponent(creditScore) +
          '&businessTime=' +
          encodeURIComponent(yearsInBusiness) +
          '&revenue=' +
          encodeURIComponent(monthlyRevenue) +
          '&moneyNeeded=' +
          encodeURIComponent(moneyNeeded) +
          '&fullName=' +
          encodeURIComponent(fullName) +
          '&companyName=' +
          encodeURIComponent(companyName) +
          '&phoneNumber=' +
          encodeURIComponent(phoneNumber) +
          '&emailAddress=' +
          encodeURIComponent(emailAddress) +
          '&url=' +
          encodeURIComponent(URL)
      )
      .then((response) => {
        console.log('Data received from second request:', response.data);
        // You can handle this response separately if needed
      })
      .catch((error) => {
        console.error('Error fetching data from second request:', error);
      });
  }

  function validateAndSendData() {
    const moneyNeeded = document.getElementById('money-needed').value;
    const fullName = document.getElementById('full-name').value;
    const companyName = document.getElementById('company-name').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const emailAddress = document.getElementById('email-address').value;
    const termsCheckbox = document.getElementById('terms-checkbox').checked;

    // set phone and mail validations
    const phoneRegex =
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})?[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const newValidationErrors = {
      moneyNeeded: !moneyNeeded,
      fullName: !fullName,
      companyName: !companyName,
      phoneNumber: !phoneNumber.match(phoneRegex),
      emailAddress: !emailAddress.match(emailRegex),
      termsAgreement: !termsCheckbox,
    };

    setValidationErrors(newValidationErrors);

    const allValid = Object.values(newValidationErrors).every((v) => !v);

    if (allValid) {
      sendData();
    }
  }

  function getInputBorderClass(fieldName) {
    return validationErrors[fieldName] ? 'border-red-700' : 'border-gray-700';
  }

  if (apiResponse) {
    return <Results apiResponse={apiResponse} onBackClick={onBackClick} />;
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        {loading ? (
          <div className="form-section bg-white p-6 rounded-lg flex flex-col justify-center">
            <Spinner className="absolute" />
            <h2 className="absolute self-center top-2/3 -translate-y-8">
              Getting Results...
            </h2>
          </div>
        ) : (
          <div
            id="second-part"
            className="form-section bg-white p-6 rounded-lg flex flex-col justify-around"
          >
            <button
              onClick={onButtonClick}
              className="w-20 self-end bg-white hover:bg-black text-black font-bold hover:text-white py-2 px-4 rounded border border-black focus:outline-none focus:shadow-outline"
            >
              Back
            </button>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="money-needed"
              >
                How much money do you need?
              </label>
              <input
                type="number"
                id="money-needed"
                className={`shadow appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${getInputBorderClass(
                  'moneyNeeded'
                )}`}
                placeholder="20,000"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="full-name"
              >
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                className={`shadow appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${getInputBorderClass(
                  'fullName'
                )}`}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="company-name"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company-name"
                className={`shadow appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${getInputBorderClass(
                  'companyName'
                )}`}
                placeholder="Apple Inc."
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone-number"
              >
                Phone Number
              </label>
              <input
                type="number"
                id="phone-number"
                className={`shadow appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${getInputBorderClass(
                  'phoneNumber'
                )}`}
                placeholder="Phone #"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email-address"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email-address"
                className={`shadow appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${getInputBorderClass(
                  'emailAddress'
                )}`}
                placeholder="Email"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block flex items-center text-gray-700 text-xs font-bold mb-2"
                htmlFor="terms-checkbox"
              >
                <input
                  type="checkbox"
                  id="terms-checkbox"
                  className={`mr-2 leading-tight rounded-sm ${getInputBorderClass(
                    'termsAgreement'
                  )}`}
                  required
                />
                <div>
                  I agree to receive contact via SMS texting for account and
                  informational alerts from Shore Funding. Message and Data
                  rates may apply. Recurring Messages. Text STOP to Optout.{' '}
                  <a
                    href="https://shorefundingsolutions.com/sms-policy/"
                    className="text-blue-600 underline hover:text-blue-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SMS Messaging Terms & Conditions and Policy
                  </a>
                  .
                </div>
              </label>
            </div>

            <button
              onClick={validateAndSendData}
              className="w-48 self-center bg-white text-[#2aae79] font-bold py-2 px-4 rounded border-2 border-[#2aae79] hover:bg-[#2aae79] hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Get Funded Today!
            </button>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default FormTwo;
