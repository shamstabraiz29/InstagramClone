import { createElement } from "../react/index";
import { footer } from "../components/footer";
import { stories } from "./stories";

export const home = () => {
  // SideBar start here

  const a = [
    {
      buttonName: "Follow",
      para: "Full name",
      UserName: "Kifayat",
      imgsrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/120366833_421455985505503_4946674907762157794_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_ohc=U1DTQEfrb2EAX_8hC5E&tp=1&oh=41f0362591baafe3f84f96fe600b9452&oe=6026293B",
    },
    {
      buttonName: "Follow",
      para: "Full name",
      UserName: "Azhar",
      imgsrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/131896099_682865725710974_2490294181980913958_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_ohc=G_U3XllR6VIAX-02SgD&tp=1&oh=7913de46174b25ee5184819d6ea8e888&oe=6027D9FD",
    },

    {
      buttonName: "Follow",
      para: "Full name",
      UserName: "Tajwar",
      imgsrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/120366833_421455985505503_4946674907762157794_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_ohc=U1DTQEfrb2EAX_8hC5E&tp=1&oh=41f0362591baafe3f84f96fe600b9452&oe=6026293B",
    },
    {
      buttonName: "Follow",
      para: "Full name",
      UserName: "Salman ",
      imgsrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/120366833_421455985505503_4946674907762157794_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_ohc=U1DTQEfrb2EAX_8hC5E&tp=1&oh=41f0362591baafe3f84f96fe600b9452&oe=6026293B",
    },
  ];

  let b = [];

  a.forEach((e) => {
    const switchBtn = createElement(
      "button",
      { class: "switch-btn each" },
      e.buttonName
    );
    const sideBarFullName = createElement(
      "p",
      { class: "sidebar-full-Name each" },
      e.para
    );
    const sideBarName = createElement(
      "h4",
      { class: "sidebar-user-name each" },
      e.UserName
    );

    const sideBarImg = createElement("img", {
      class: "foreachImg",
      src: e.imgsrc,
    });

    const sideBarProfile = createElement(
      "div",
      { class: "side-bar-profle" },
      sideBarImg,
      sideBarName,
      sideBarFullName,
      switchBtn
    );

    b.push(sideBarProfile);
  });

  const loopdiv = createElement("div", { class: "more" }, b);

  const seeAllBtn = createElement(
    "button",
    { class: "see-all-btn" },
    "See All"
  );
  const suggPara = createElement(
    "p",
    { class: "sugg-pra" },
    "Suggestions For You"
  );
  const suggDiv = createElement(
    "div",
    { class: "sugg-div" },
    suggPara,
    seeAllBtn
  );

  const switchBtn = createElement("button", { class: "switch-btn" }, "Switch");

  const sideBarFullName = createElement(
    "p",
    { class: "sidebar-full-Name" },
    "full name"
  );
  const sideBarName = createElement(
    "h4",
    { class: "sidebar-user-name" },
    " Salman khan"
  );

  const sideBarImg = createElement("img", {
    src:
      "https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  });

  const sideBarProfile = createElement(
    "div",
    { class: "side-bar-profle" },
    sideBarImg,
    sideBarName,
    sideBarFullName,
    switchBtn
  );

  const sideBar = createElement(
    "div",
    { class: "side-bar" },
    sideBarProfile,
    suggDiv,
    loopdiv,
    footer()
  );

  // SideBar End here

  // Posts Section start Here



  const heartIcon = createElement("i", {
    class: "postheart  fa fa-heart",
    onclick: (e) => {
      if (!e.target.style.color) {
        e.target.style.color = "#c53737";
      } else {
        e.target.style.color = "";
      }
    },
  });

  const comenttIcon = createElement("i", { class: "fa fa-comment-o" });
  const telegramIcon = createElement("i", { class: "fab fa-telegram-plane" });

  const bookmark = createElement("i", {
    class: "fa fa-bookmark",
    onclick: (e) => {
      if (!e.target.style.color) {
        e.target.style.color = "gray";
      } else {
        e.target.style.color = "";
      }
    },
  });

  const bookmarkDiv = createElement("div", { class: "bookmark-div" }, bookmark);

  const postName = createElement("a", null, "Here is Name");
  const postLikes = createElement(
    "p",
    { class: "posts-like" },
    "Liked by",
    postName
  );

  const postPara = createElement("p", { class: "post-para" }, "1 DAY AGO");

  const postInput = createElement("input", {
    class: "addComment",
    placeholder: "Add a comment...",
  });

  const postBtn = createElement("button", { class: "input-btn" }, "Post");

  const btnDiv = createElement("div", { class: "btn-div" }, postBtn);
  const postInputDiv = createElement(
    "div",
    { class: "post-input-div" },
    postInput,
    btnDiv
  );
  const postDetails = createElement(
    "div",
    { class: "post-details" },
    postLikes,
    postPara
  );

  const postIcons = createElement(
    "div",
    { class: "post-icon" },
    heartIcon,
    comenttIcon,
    telegramIcon,
    bookmarkDiv
  );

  const postImg = createElement("img", {
    src:
      "https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  });

  const postProfileImg = createElement("img", {
    src:
      "https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  });

  const profileName = createElement(
    "h6",
    { class: "profile-name" },
    "Salman khan"
  );

  const profileAdress = createElement(
    "p",
    { class: "profile-address" },
    "Uconnect"
  );

  const postProfileDiv = createElement(
    "div",
    { class: "post-profile-div" },
    postProfileImg,
    profileName,
    profileAdress
  );

  const posts = createElement(
    "div",
    { class: "post" },
    postProfileDiv,
    postImg,
    postIcons,
    postDetails,
    postInputDiv
  );

  const main = createElement("div", { class: "main" }, posts);

  const homeDiv = createElement("div", { class: "home" }, main, sideBar);

  return createElement("section", null, stories() ,homeDiv);
};
