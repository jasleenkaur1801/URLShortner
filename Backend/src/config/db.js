import { Pool } from "pg";
import "dotenv/config"

const connectionString=process.env.DATABASE_URL;
if(!connectionString){
    throw new Error("Conection string not found");
}
const connectionPool=new Pool({connectionString});
connectionPool.connect()
      .then(()=>{console.log("DB connected")})
      .catch((err)=>{console.log(`${err}`)});

export default connectionPool;