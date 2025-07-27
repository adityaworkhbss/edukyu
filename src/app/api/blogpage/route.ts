import { NextRequest, NextResponse } from 'next/server';
import mysql, { RowDataPacket } from 'mysql2/promise';

interface BlogContentRow extends RowDataPacket {
    descs: string;
}

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const blogId = parseInt(searchParams.get('blogId') || '1', 10);

    if (isNaN(blogId)) {
        return NextResponse.json({ error: 'Invalid blogId' }, { status: 400 });
    }

    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'blogdb',
        });

        const [rows] = await connection.query<BlogContentRow[]>(
            `SELECT descs FROM blog WHERE blogId = ?`,
            [blogId]
        );


        await connection.end();

        if (rows.length === 0) {
            return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
        }

        return NextResponse.json({
            descs: rows[0].descs
        });
    } catch (error) {
        console.error('[ERROR] Single blog fetch failed:', error);
        return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 });
    }
}
