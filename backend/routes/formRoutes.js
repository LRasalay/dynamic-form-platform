
const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/form-schema', async (req, res) => {
  const role = req.query.role || 'viewer';
  const result = await db.query(
    'SELECT schema, uischema FROM form_configs WHERE role = $1 LIMIT 1',
    [role]
  );
  res.json(result.rows[0] || {});
});

router.get('/form-data/:id', async (req, res) => {
  const id = req.params.id;
  const result = await db.query(
    'SELECT data FROM form_data WHERE id = $1',
    [id]
  );
  res.json(result.rows[0]?.data || {});
});

router.post('/form-data/:id', async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  await db.query(
    'INSERT INTO form_data (id, data) VALUES ($1, $2) ON CONFLICT (id) DO UPDATE SET data = $2',
    [id, data]
  );
  res.json({ success: true });
});

module.exports = router;
