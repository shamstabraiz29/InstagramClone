import { createElement } from "../react";

export const Header = () => {
  const listProps = (link) => ({
    onclick: (posts) => {
      window.location.pathname = link;
      console.log(posts)
    },
  });
  const menuItems = [
    {
        link: "/",
        props: {
          name: "home",
          class: "icon home-icon fa fa-home",
        },
    
    },
    {
      link: "/messenger",
      props: {
        name: "messenger",
        class : "icon fab fa-facebook-messenger",
      }
    },
   
      {
        link: "/explore",
        props: {
          class: "icon explore-icon fa fa-compass",
        }
      },
      {
        link: "/notification",
        props: {
          class: "icon  fa fa-heart",
        }
      },
      {
        link: "/profile",
        props: {
          class: "icon profileIcon",
        }
      },
  ];

  const list = [];

  menuItems.forEach((item) => {

    if(item.link === '/profile'){

     let icons = createElement("i", {...item.props, ...listProps(item.link)}, createElement("img",{src:"https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",class:"profile-img"}));
     list.push(icons);
     return;
    }
    const icons = createElement("i", {...item.props, ...listProps(item.link)}, item.name);
    list.push(icons);
    
  });





  const img = createElement("img",{src:"https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png",type:"search"})
  const logoDiv = createElement("div",{class:"logo-div"},img)




  const inputIcon = createElement("i",{class:"search-icon fa fa-search"})
  const inputIconDiv = createElement("div",{class:"search-icon-div"}, inputIcon)
  const input = createElement("input", {class:"nav-input",placeholder:"Search"});
  const inputDiv = createElement("div",{class:"input-div"},input,inputIconDiv);  

  const listDiv = createElement("div",{class:"list-div"},list )
  const menus = createElement("ul",null, logoDiv, inputDiv,listDiv  ) ;

  return createElement("header", null, menus);
};


