import { Connection, createConnection } from 'typeorm';

let conn: Connection;

beforeAll(async (done) => {
    conn = await createConnection();
    done();
});

afterAll(async (done) => {
    await conn.close();
    done();
})

test('example test', () => {
    expect(1+2).toBe(3);
});

test('test connecting to DB', async () => {
    expect(conn.options.database !== undefined).toBe(true);
});
