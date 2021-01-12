
import { createElement } from '../react/index';
 


export const home = () =>{


const sideBar = createElement('div', {class:"side-bar"},"this is sideBar")



const stories = createElement('div',{class : "stories"})
const postProfile = createElement('div',{class:"post-profile"})


const heartIcon = createElement('i',{class:"postheart  fa fa-heart"})
const comenttIcon = createElement('i',{class:"fa fa-comment"})
const telegramIcon = createElement('i',{class:"fab fa-telegram-plane"})


const bookmark = createElement('i', {class:"fa fa-bookmark-o"})
const bookmarkDiv = createElement('div',{class:"bookmark-div"},bookmark)

const postName = createElement('a', null,"Here is Name")
const postLikes = createElement('p',{class:"posts-like"},"Liked by" ,postName)

const postPara = createElement('p', {class:"post-para"} ,"1 DAY AGO")



const postInput = createElement('input',{class:"addComment", placeholder:"Add a comment..."})


const postBtn = createElement("button",{class:"input-btn"},"Post")   

const btnDiv = createElement("div",{class:"btn-div"}, postBtn)
const postInputDiv = createElement("div",{class:"post-input-div"},postInput, btnDiv)
const postDetails = createElement('div',{class:"post-details"},postLikes,postPara)

const postIcons = createElement('div',{class:"post-icon"},heartIcon,comenttIcon, telegramIcon ,bookmarkDiv)


const postImg = createElement('img',{src:"https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"} )


const post = createElement('div',{class:"post"},postImg,postIcons,postDetails,postInputDiv)

const posts = createElement('div',{class:"posts"}, postProfile,post)
const main = createElement('div', {class:"main"},stories,posts)



const homeDiv = createElement('div', {class:"home"}, main, sideBar)
    

 return createElement("section",null, homeDiv)
};
