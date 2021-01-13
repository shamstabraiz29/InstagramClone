import { createElement } from "../react/index";




// let container = createElement('div',{class:"links-container"});

// let div = (e) => {
//   e.forEach((a) => {
//     let links = createElement("a", { href: a.hrf }, a.name);
//     container.appendChild(links);
//   });
// };

// let div1 = div([
//   { name: "About.", hrf: "/home" },
//   { name: "Help.", hrf: "/about" },
//   { name: "contact.", hrf: "/home" },
//   { name: "Press.", hrf: "/home" },
//   { name: "API.", hrf: "/home" },
//   { name: "Jobs.", hrf: "/home" },
//   { name: "privacy.", hrf: "/home" },
//   { name: "Terms.", hrf: "/home" },
//   { name: "Terms.", hrf: "/home" },
//   { name: "Terms.", hrf: "/home" },
//   { name: "Terms.", hrf: "/home" }
// ]);




export const footer = () => {






   let a = [

         {
            name:"heloo",
            salman:"/home"
         },
         {
            name:"heloo",
            salman: "/about"
         },
         {
            name:"heloo"
         },
         {
            name:"heloo"
         },
         {
            name:"heloo"
         },


   ];


   let b = [];
   
   a.forEach((e) => {
      const ul = createElement('a',{href:e.salman},e.name)
   
      const newdiv = createElement('div',{class:"new-div"},ul)

     b.push(newdiv)


   })
   
   const kk = createElement('div', {class:'arshad'},b)






  const footerPara = createElement(
    "p",
    { class: "footer-para" },
    "© 2021 INSTAGRAM FROM FACEBOOK"
  );
  const foote = createElement(
    "footer",
    null,
    createElement(
      "div",
      { class: "footer-main" },
      // container,
      kk,
      footerPara
    )
  );
  return foote;
};
