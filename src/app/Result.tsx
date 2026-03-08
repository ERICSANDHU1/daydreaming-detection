import React from 'react';

interface ResultProps {
  data: any;
}

const Result: React.FC<ResultProps> = ({ data }) => {
  if (!data) {
    return null;
  }

  // Custom rendering for text analysis result
  if (data.prediction) {
    return (
      <div className="mt-4 p-4 bg-blue-50 rounded-md shadow-sm w-full">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">Analysis Result</h2>
        <p><strong>Prediction:</strong> {data.prediction}</p>
      </div>
    );
  }

  // Default rendering for image analysis result or other structures
  return (
    <div className="mt-4 p-4 bg-green-50 rounded-md shadow-sm w-full">
      <h2 className="text-xl font-semibold text-green-800 mb-2">Analysis Result</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs overflow-auto text-gray-800 dark:text-gray-200">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export default Result;