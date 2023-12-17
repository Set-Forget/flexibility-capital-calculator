import React from 'react';

const Results = ({ apiResponse, onBackClick }) => {
  if (!apiResponse) {
    // No response or loading state
    return <div>Loading...</div>;
  }

  if (apiResponse === 'loan_not_found') {
    // Handle failure case
    return (
      <div className="form-section bg-white p-6 rounded-lg flex flex-col justify-center">
        <span className="font-medium text-xl text-zinc-800">Bad news!</span>
        <br />
        <br />
        <span className="font-medium text-xl text-zinc-800">
          You do not qualify for any loan.
        </span>
        <br />
        <br />
        <button
            onClick={onBackClick}
          className="w-20 bg-white hover:bg-black text-black font-bold hover:text-white py-2 px-4 rounded border border-black focus:outline-none focus:shadow-outline"
        >
          Back
        </button>
      </div>
    );
  }

  // Handle success cases
  const { averageMonthlyRevenue, creditProgram, qualifiedLoanTermsOutput } =
    apiResponse;

  return (
    <div className="form-section bg-white p-6 rounded-lg flex flex-col justify-center">
      <span className="font-medium text-xl text-zinc-800">Great news!</span>
      <br />
      <span className="font-medium text-xl text-zinc-800">
        {qualifiedLoanTermsOutput}
      </span>
      <br />
      {creditProgram && (
        <>
          <span className="font-normal mb-2 text-base text-zinc-800">
            You also qualify for our 18-month revolving line of credit program.
            It's reserved exclusively for people with 650+ credit score like
            yourself.
          </span>
        </>
      )}
      <span className="font-normal my-2 text-base text-zinc-800">
        Congratulations on your Instant Approval above! If additional funds are
        needed, most businesses can increase their Instant Approval once their
        Full Application has been submitted.
      </span>

      <span className="font-normal my-2 text-base text-zinc-800">
        The Next Step is to review the email you just received from us. This
        email includes your Full Application and access to our Secure Portal
        where you can submit the most recent 3 months of your Business Bank
        Statements.
      </span>

      <span className="font-normal my-2 text-base text-zinc-800">
        Your dedicated Funding Manager will be reaching out to you shortly to
        support you through the process.
      </span>

      <span className="font-normal my-2 text-base text-zinc-800">
        Please have three months of bank statements handy for verification.
      </span>

      <p className="text-xs my-2">
        <b className="text-xs text-zinc-800">Please Note </b>- To support
        funding businesses like yours within days, as we do, our fraud
        prevention team reviews the accuracy of the submitted details. Final
        approval will be in based on those findings.
      </p>

      <button
        onClick={onBackClick}
        className="w-20 bg-white hover:bg-black text-black font-bold hover:text-white py-2 px-4 mt-2 rounded border border-black focus:outline-none focus:shadow-outline"
      >
        Back
      </button>
    </div>
  );
};

export default Results;
