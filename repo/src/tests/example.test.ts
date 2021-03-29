import { createConnection } from 'typeorm';

test('example test', () => {
    expect(1+2).toBe(3);
})

test('test connecting to DB', async () => {
    const conn = await createConnection();
    expect(conn.options.database !== undefined).toBe(true);
    await conn.close();
})