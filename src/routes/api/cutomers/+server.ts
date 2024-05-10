import type { RequestHandler } from './$types';

/** @type {import('./$types').RequestHandler} */
export async function GET({ request, platform }) {
    let result = await platform.env.DB.prepare(
        "SELECT * FROM Customers LIMIT 5"
    ).run();
    return new Response(JSON.stringify(result));
}