'use server'
import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../utils/db';

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const [rows] = await pool.query("SELECT * FROM member");
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database connection failed' });
  }
}
