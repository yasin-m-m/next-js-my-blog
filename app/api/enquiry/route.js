import dbConnection from "@/utils/dbConnection";
import EnquiryModel from "@/models/enquiryModel";

export async function POST (req) {
    try {
        const {name,email,message} = await req.json()
        const enquiry = {name,email,message}
        await dbConnection()
        await EnquiryModel.create(enquiry)
        return Response.json({message:"Enquiry has been sent"})
    } catch (error) {
        console.log(error.message);
    }
}