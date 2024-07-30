
import dbConnection from '../../../../utils/dbConnection.js'
import PostModel from '../../../../models/postModel.js'

export async function GET(req,{params}) {
    try {
        await dbConnection()
        const postData =await PostModel.findOne({_id:params.id})
        return Response.json(postData)
    } catch (error) {
        return Response.json({message:error.message})
    }
}