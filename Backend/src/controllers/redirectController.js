import { findLinkUrlByCode } from "../services/linkService.js";
export default async function redirectHandler(req,res){
    try{
        const {code} = req.params;
        const link = await findLinkUrlByCode(code);
        console.log(link);
        if(!link){
            console.log("link not found");
            return res.status(404).json({message: "link not found"});
        }
        return res.redirect(302,link.url);

    }catch(err){
        console.log(err);
    }
}