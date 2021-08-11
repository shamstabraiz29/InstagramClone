import { createElement } from "../react";
import { header } from "./header";
import "../styles/profile.css";
import { footer } from "./footer";
import { heartPopup } from "./heartPopup";
import { model } from "./modelBoxe"



export const profile = () => {
  //gallery loop

  let imgs = [
    {
      imgSrc:
        "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/136359401_926481617889706_8213824324811968301_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=YeYG2YKkgAcAX_azmQ5&tp=1&oh=dd05a8df6fcaebab5c97c69b54c3a79b&oe=60312483",
    },
    {
      imgSrc:
        "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/121274575_1749196658571543_2996978749485167755_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=g179trNEaX4AX_thGJ1&tp=1&oh=7c63c726f63b575cdf0039b08e95fe38&oe=60329AFB",
    },

    {
      imgSrc:
        "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.133.1064.1064a/s640x640/135327051_456037848891112_6490705346542014666_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=W6C0uhO378MAX9F2C-9&tp=1&oh=e5be8ac5dab78c4fdb3bed9347347629&oe=60337E19",
    },
    {
      imgSrc:
        "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.111.929.929a/s640x640/139627146_779001682961040_4014018666493015642_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=C8CYiRZL2JYAX9z8jbY&tp=1&oh=8581cf092dd82b8fb95653a5ceeaec4f&oe=6034032B",
    },

    {
      imgSrc:
        "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c240.0.960.960a/s640x640/139000624_212480313846569_2051133962789896099_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=yzpfEuoJc8cAX-oiWXl&tp=1&oh=20a98d8a6f2a2b2164e4503ba922ffe8&oe=6032F624",
    },
    {
      imgSrc:
        "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.19.1080.1080a/s640x640/122734799_412082053139703_3168278925321954175_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=lcIO54cdo30AX8nI4vW&tp=1&oh=7a569c74361751305fc4dfef6e926aea&oe=6034DE90",
    },
    {
      imgSrc:
        "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/91114426_1459361664232620_8287192033603212385_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=TXUEILTr1E8AX9DoSkc&tp=1&oh=8e899f644bab711593abc0c90647b33d&oe=60310363",
    },
    {
      imgSrc:
        "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1079.1079a/s640x640/137563198_3861949867188643_7169653622087330223_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=PsDFkTI-7BUAX-5mIpJ&tp=1&oh=30411a4559dd8490968adced32404a6e&oe=6032E46D",
    },
    {
      imgSrc:
        "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c135.0.810.810a/s640x640/92951851_261140218249667_633738424290156198_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=JaNKPfL6Tt0AX-weoy5&tp=1&oh=dd34fc2cf62198336d7f5b12c53e2e8d&oe=60329C79",
    },
  ];

  let allImgs = [];

  imgs.forEach((e) => {
    const overlayIcon1 = createElement("i", {
      class: "overlay-icon1 fa fa-comment",
    });
    const overlayIcon2 = createElement("i", {
      class: "overlay-icon2 fa fa-heart",
    });
    const overlayDiv = createElement(
      "div",
      {
        class: "overlay"
      },

      overlayIcon1,
      overlayIcon2
    );

    const imagee = createElement("img", {
      src: e.imgSrc,
      class: "overlayimage",

    });
    const container = createElement(
      "div",
      {
        class: "container",


        onclick: (n) => {

          var i = n.target.parentElement.firstChild.getAttribute("src");

          var modelBox = document.querySelector(".model-box ");

          var c = document.querySelector(".model-box .model-img");

          if (!modelBox.style.display) {
            modelBox.style.display = "block"
            c.setAttribute("src", i)
          } else {
            modelBox.style.display = ""
          }


        }
      },
      imagee,
      overlayDiv
    );
    allImgs.push(container);
  });

  const profileGallery = createElement(
    "div",
    { class: "profileGallery" },
    allImgs,
  );

  ///  profile Gallery Icon
  const postIcon = createElement("i", { class: "postt-icon fa fa-th" });
  const iGTvIcon = createElement("i", { class: "igtv-icon fa fa-tv" });
  const savedIcon = createElement("i", {
    class: " savedd-icon far fa-bookmark",
  });
  const taggedIcon = createElement("i", {
    class: "taggedd-icon  fa fa-id-badge",
  });
  const galleryIcons = createElement(
    "div",
    { class: "gallery-Icons" },
    postIcon,
    iGTvIcon,
    savedIcon,
    taggedIcon
  );

  const profileGalleryIcons = createElement("div", null, galleryIcons);

  /// fullName Div
  const caption = createElement("p", null, "A Boy from North");
  const fullName1 = createElement("h3", null, "Shams Tabraiz Baig");
  const fullNameDiv = createElement(
    "div",
    { class: "full-name-divv" },
    fullName1,
    caption
  );
  //// followers Div
  const following = createElement("p", { class: "following" }, "following");
  const followers = createElement("p", { class: "followers" }, "followers");
  const post1 = createElement("p", { class: "post1" }, "post");
  const followersDiv = createElement(
    "div",
    { class: "followers-divv" },
    post1,
    followers,
    following
  );

  /// username div
  const editIcon = createElement("i", { class: "fa fa-cog" });
  const editBtn = createElement("button", null, "edit profile");
  const infoName = createElement("h1", null, "shamstabaiz29");
  const usernameDiv = createElement(
    "div",
    { class: "user-name-div" },
    infoName,
    editBtn,
    editIcon
  );

  /// innerinfo div
  const innerinfoDiv = createElement(
    "div",
    { class: "inner-info-div" },
    usernameDiv,
    followersDiv,
    fullNameDiv,
    model(),
  );

  /// image
  const profileImage = createElement("img", {

    class: "prf-image",
    src:
      "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/116701613_336290860718596_7765623644053597489_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=sahX302g8QoAX9roOzt&tp=1&oh=bcefcc6ad2c3f232da56d7af5b300397&oe=6035ED62",
  });

  const infoDiv = createElement(
    "div",
    { class: "prof-div" },
    profileImage,
    innerinfoDiv
  );
  /// main div
  const profileMain = createElement("div", { class: "profile-main" }, infoDiv);
  ///footer
  const footerr = createElement("footer", { class: "all-footer" }, footer());
  return createElement(
    "section",
    null,
    header(),
    profileMain,
    profileGalleryIcons,
    profileGallery,
    heartPopup(),
    footerr
  );
};
