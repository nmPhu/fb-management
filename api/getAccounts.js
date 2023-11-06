// Assuming the same in-memory store as above
let accounts = []; // This should be in a shared or higher scope to be accessed by both functions

module.exports = (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json(accounts);
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
