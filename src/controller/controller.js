const DataModel = require('../model/model');

const processPostRequest = (req, res) => {
  const { data } = req.body;
  
  if (!data || !Array.isArray(data)) {
    return res.status(400).json({ is_success: false, message: 'Invalid data format' });
  }

  const userModel = new DataModel(data);

  const response = {
    is_success: userModel.isSuccess,
    user_id: 'pratham_01011990', // Replace with actual user ID format
    email: 'pratham@example.com', // Replace with actual email
    roll_number: 'ABCD123', // Replace with actual roll number
    numbers: userModel.numbers,
    alphabets: userModel.alphabets,
    highest_lowercase_alphabet: userModel.highestLowercaseAlphabet,
  };

  return res.status(200).json(response);
};

const processGetRequest = (req, res) => {
  return res.status(200).json({ operation_code: 1 });
};

module.exports = {
  processPostRequest,
  processGetRequest,
};
