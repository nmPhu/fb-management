// This is an in-memory store. In a real application, you would save this to a database.
let accounts = [];

module.exports = (req, res) => {
  if (req.method === 'POST') {
    const { name, adAccountId, token } = req.body;
    // Add validation and error handling as necessary
    accounts.push({ name, adAccountId, token });
    res.status(200).json({ message: 'Account saved' });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
