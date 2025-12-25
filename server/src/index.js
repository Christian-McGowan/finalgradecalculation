import express from 'express';
import cors from 'cors';
import { PORT, NODE_ENV } from './config.js';

const app = express();

app.use(cors());
app.use(express.json());

// Simple health route (for Render uptime checks)
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', env: NODE_ENV });
});

// Placeholder route – extend later for analytics / user saves
app.post('/api/events', (req, res) => {
  // Example: { type: "view", tool: "final-calculator" }
  // For now just 200 OK to keep it cheap and stateless.
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`);
});
