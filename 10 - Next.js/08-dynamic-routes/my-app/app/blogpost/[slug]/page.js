export default function page({params}){
    //fetch your blog post by its slugs
    let languages = ["java","c++","python","javascript"]
    if(languages.includes(params.slug)){
        return <div>My post : {params.slug}</div>
    }
    else{
        return <div>params not found</div>
    }
}