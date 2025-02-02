import { NextRequest, NextResponse } from 'next/server';
import pool from '../../utils/db';

export async function GET() {
  try {
    const [rows] = await pool.query("SELECT * FROM exam.member");
    return NextResponse.json(rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Database connection failed' });
  }
}
