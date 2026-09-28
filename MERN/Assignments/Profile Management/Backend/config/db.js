import pg from 'pg'

const {Pool} = pg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})

pool.on('connect',()=>{
    console.log('Database connected')
})

pool.on('error',(error)=>{
    console.log("Can't connect with db",error)
})

export default pool