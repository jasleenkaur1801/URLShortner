import connectionPool from "../config/db.js";
import {generatedCode } from "../utils/codeGenerator.js";
export async function createShortLink(url,expiresAt=null){
    for(let i=0;i<5;i++){
        const code = generatedCode();
        try{
            const {rows} = await connectionPool.query(
                `insert into links(code,url,expires_at)
                values($1,$2,$3) returning id,code,url,created_at,expires_at`,
                [code,url,expiresAt]
            );
            return rows[0];
        }catch(error){
            if(error.code!=23505)throw error; //unique violation code- only work for postgres
        }
    }
    throw new Error("Link not submitted error")
}

//function to get the original url for the given short code
export async function findLinkUrlByCode(code){
    const {rows} = await connectionPool.query(
        "select * from links where code=$1",[code]
    );
    return rows[0] || null;
}