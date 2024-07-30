const { Schema, model, models } = require("mongoose");

const postSchema = new Schema({
    title:String,
    description:String,
    image:String,
    created_at:String
},
{
    toJSON:{virtuals:true}
}
)


postSchema.virtual('shortDescription').get(function(){
    return this.description.substr(0,50)+'...'
})
postSchema.virtual('created_at_formatted').get(function(){
    return changeDateFormat(this.created_at)
})

const changeDateFormat=(date_str)=>{
    const date = new Date(date_str)
    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
        return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}
const PostModel = models.Post || model('Post', postSchema)

export default PostModel