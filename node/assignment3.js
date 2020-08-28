//Author Business Logic

let Author=function(id,name,biography=null,photoUrl=null,email=null){

    this.id=id;
    this.name=name;
    this.biography=biography;
    this.photoUrl=photoUrl;
    this.email=email;
    this.books=[] ;
}
Author.prototype.toString=function(){
    return `Author[${this.id},${this.name}]`;
};

var AuthorManager=   function(){
    this.authors=[];
};

AuthorManager.prototype.addAuthor= async function(author){
    let aut = await author;
    if(aut && aut.id && aut.name )
        this.authors.push(aut);
};

AuthorManager.prototype.getAll= async function(){
    const auth = await this.authors
    try {
    return auth;
    }catch(error) {
        console.log("error", error)
    }
};

AuthorManager.prototype.getById= async function(id){

    try{
    for await(let author of this.authors)
        if (author.id===id){
            return author;
        }
    }
    catch(error) {
        console.log("erroe", error)
    }
    
    return null;
};

AuthorManager.prototype.remove= async function(id){


    let newList=[];
    try {
   for await(let author of this.authors){
       if(author.id!==id)
            newList.push(author); 
   }
}catch(error) {
    console.log("error", error)
}

   this.authors=newList;

}


async function showAuthors(authors, heading=null){
    console.log(heading);
    try{
    for await(let author of authors){
        console.log(`aaaaaaaa ${author}`);
    }
}catch(error) {
    console.log("error", error)
}
}


let manager=new AuthorManager();

manager.addAuthor(new Author('vivek','Vivek Dutta Mishra','Author of the Lost Epic Series'));
manager.addAuthor(new Author('archer','Jeffrey Archer','International best seller of fictions'));
manager.addAuthor(new Author('grisham','John Grisham','Leading author of legal fiction'));


 showAuthors(manager.getAll(), 'List of All Authors');

console.log('author with id vivek', manager.getAll());


 manager.remove('archer');

showAuthors(manager.getAll(), 'List after deleting Archer');