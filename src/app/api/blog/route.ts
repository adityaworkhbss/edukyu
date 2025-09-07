import { NextRequest, NextResponse } from 'next/server';
import mysql, { RowDataPacket } from 'mysql2/promise';

interface BlogRow extends RowDataPacket {
    blogId: number;
    name: string;
    sortDescs: string;
    descs: string;
    category: string;
    shortUrl: string;
    metaTitle: string;
    metaDesc: string;
    imageUrl: string;
    timeStamp: string;
}

interface CountRow extends RowDataPacket {
    total: number;
}

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '8', 10);
    const offset = (page - 1) * limit;

    try {
        const connection = await mysql.createConnection({
            // host: 'localhost',
            // port: 3306,
            // user: 'root',
            // password: 'password',
            // database: 'EDUKYU',
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'blogdb',
        });

        // Count total blogs
        const [countRows] = await connection.query<CountRow[]>(
            'SELECT COUNT(*) as total FROM blog'
        );
        const total = countRows[0].total;

        // Build query string manually
        const blogQuery = `
            SELECT * 
            FROM blog
            ORDER BY timeStamp DESC
            LIMIT ${limit} OFFSET ${offset};
        `;


        const [rows] = await connection.query<BlogRow[]>(blogQuery)

        await connection.end();

        // Format the blog data
        const blogs = rows.map((row) => ({
            blogId: row.blogId,
            title: row.name,
            subtitle: row.metaTitle,
            description: row.sortDescs,
            category: row.category,
            image: row.imageUrl,
            shortUrl: row.shortUrl,
            readMoreUrl: `/blog/${row.shortUrl || row.blogId}`,
            timeStamp: row.timeStamp,
        }));

        return NextResponse.json({ blogs, page, limit, total });
    } catch (error) {
        console.error('[ERROR] Blog fetch failed:', error);
        return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
    }
}
