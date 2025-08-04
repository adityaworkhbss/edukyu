// /app/api/topnavblogs/route.ts
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

export async function GET(req: NextRequest) {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'blogdb',
        });

        // If needed: await connection.connect();

        const query = 'SELECT * FROM blog WHERE blogId IN (197, 193, 158, 236)';
        const [rows] = await connection.query<BlogRow[]>(query);

        await connection.end();

        const blogs = rows.map((row) => ({
            blogId: row.blogId,
            title: row.name,
            subtitle: row.metaTitle,
            description: row.sortDescs,
            category: row.category,
            image: row.imageUrl,
            readMoreUrl: `/blog/${row.shortUrl || row.blogId}`,
            timeStamp: row.timeStamp,
            metaDesc: row.metaDesc,
            metaKey: row.metaKey,
        }));

        console.log("rowsss ::: " + blogs);

        return NextResponse.json({ blogs });
    } catch (error) {
        console.error('[ERROR] Blog fetch failed:', error);
        return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
    }
}
