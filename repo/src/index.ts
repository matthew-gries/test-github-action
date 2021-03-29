import dotenv from 'dotenv';

const main = () => {

    if (process.env.NODE_ENV !== "production") {
        dotenv.config({path: "./config/.env"})
    }
    console.log("Hello world!");
}

main();