// const userArray = [
//   "Test 1",
//   "Test 2",
//   "Test 3",
//   "Test 4",
//   "Test 5",
//   "Test 5",
// ]

const container = document.getElementById("user-container");

// userArray.map((user) => {
//   const currentUser = document.createElement("div");
//   currentUser.innerHTML = user;
//   container.appendChild(currentUser)
// })




/************ 1 ***************/
/*async function getUsersData() {
  const url = "https://jsonplaceholder.typicode.com/users";
  try {
    const response = await fetch(url);
    if(!response.ok) {
      throw new Error("error")
    }
    const users = await response.json();
    users.map((user) => {
      //console.log("user: ", user)
      //const currentUser = document.createElement("div");
      //currentUser.innerHTML = user.name + ", " + user.email + ", " + user.address.city;
      //container.appendChild(currentUser)
    })
   
    
    // console.log("data: ", users)
  } catch (error) {
    //console.log("error: ", error)
  }
}*/

//getUsersData()


/************ 2 ***************/
/*const photoContainer = document.getElementById('photo-container')

async function photo(){
  const url = "https://jsonplaceholder.typicode.com/photos"
  try{
    const response  = await fetch(url);
    if(!response.ok){
      throw new Error("error")
    }
    const photos = await response.json();
    photos.map((pic) => {
      console.log("pic:",pic)
      const currentPhoto = document.createElement("div");
      const title = document.createElement("div");
      title.innerHTML = pic.title;
      const urlImage = document.createElement("img");
      urlImage.src = pic.url;
      const thumbnailUrlImage = document.createElement("img");
      thumbnailUrlImage.src = pic.thumbnailUrl;

      currentPhoto.appendChild(title);
      currentPhoto.appendChild(urlImage);
      currentPhoto.appendChild(thumbnailUrlImage);

      photoContainer.appendChild(currentPhoto)
    })

    console.log("data:" , photos)
  } catch(error){
    console.log("error: ",error)
  }
}*/

//photo()
 


/************ 3 ***************/
/*const albumContainer = document.getElementById('album-container');

async function album(){
  const url = "https://jsonplaceholder.typicode.com/albums"
  try{
    const response = await fetch(url);
    if(!response.ok){
      throw new Error('error')
    }
    const albums = await response.json();
    albums.map((content) => {
      console.log("content:" , content)
      const users = document.createElement('div');
      users.innerHTML = ` userId :  ${content.userId}   <br>  Id : ${content.id} <br> title :  ${content.title} <br><br>`
      albumContainer.appendChild(users)
    })

    console.log("albums:", albums)
  }catch(error){
    console.log("error:", error)
  }
}
album()*/
 


/************ 4 ***************/
/*const postsContainer = document.getElementById('posts-container');

async function post(){
  const url = "https://jsonplaceholder.typicode.com/posts"
  try{
    const reponse = await fetch(url);
    if(!reponse.ok){
      throw new Error('error')
    }
    const posts = await reponse.json();
    posts.map((peoplePost) => {
       console.log(peoplePost)
       const peoplePosts = document.createElement('div')
       peoplePosts.innerHTML = `userId: ${peoplePost.userId} <br> Id : ${peoplePost.id} <br> title : ${peoplePost.title}<br>  body : ${peoplePost.body} <br><br>`
       postsContainer.appendChild(peoplePosts)
    })
    console.log("posts:" ,  posts)
  }catch(error){
    console.log("error:", error)
  }
}
post()*/

/*************** 5  ************/
const commentContainer = document.getElementById("comments-container");

// async function comment(){
//   const url = "https://jsonplaceholder.typicode.com/comments";
//   try{
//     const responses = await fetch(url);
//     if(!responses.ok){
//       throw new Error("error")
//     }
//     const comments =  await responses.json();
//     comments.map((userComments) => {
//       const { name, body, email } = userComments;
//       const card = document.createElement("div");
//       const title = document.createElement("h3");
//       const content = document.createElement("div");


//       title.innerHTML = name;
//       content.innerHTML = body;
   
      
//       content.classList.add("content-body")
      
//       card.appendChild(title);
//       card.appendChild(content);


//       card.classList.add("card");

//       card.addEventListener('click', () =>{
//         window.alert(`hello  ${ email}`)
//       })
//       commentContainer.appendChild(card);
//     })
//   }catch(error){
//     console.log("error:" , error)
//   }
// }

// comment()


async function testDummyAPI () {
  try {
    const res = await fetch("http://localhost:8000/");
    console.log("res: ", res);
    const body = await res.json();
    console.log("body: ", body)
  } catch (error) {
    console.log("errr: ", error)
  }
}

testDummyAPI();

const userButton =  document.getElementById("users");
const userContainer =  document.getElementById("user-container");

userButton.addEventListener("click", () => {
  getUsers()
})

async function getUsers() {
  try {
    const res = await fetch("http://localhost:8000/users");
    const users = await res.json();
   users.map((user) => {
    const { name, email} = user;
    const userCard = document.createElement("div");
    userCard.innerHTML = `${name}, ${email}`;
    userContainer.appendChild(userCard)
   })

  } catch (error) {
    console.log("errr: ", error)
  }
}