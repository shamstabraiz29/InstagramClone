import { createElement } from "../react/index";
import { header, Header } from "../components/header";
import { footer } from ".//footer";
import { heartPopup } from "./heartPopup";
import "../styles/messenger.css";

export const messenger = () => {
  // ============================================= Messanger Inbox Section start Here ==========================================================
  let a = [
    {
      img:
        "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/136359401_926481617889706_8213824324811968301_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=YeYG2YKkgAcAX_azmQ5&tp=1&oh=dd05a8df6fcaebab5c97c69b54c3a79b&oe=60312483",
      username: "Salman",
      fullname: "Active today",
    },
    {
      img:
        "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.133.1064.1064a/s640x640/135327051_456037848891112_6490705346542014666_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=W6C0uhO378MAX9F2C-9&tp=1&oh=e5be8ac5dab78c4fdb3bed9347347629&oe=60337E19",
      username: "Gulbasti",
      fullname: "Active 4h ago",
    },
    {
      img:
        "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.103.830.830a/s640x640/131893795_2747004802231478_4543342311195985642_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=_KIB0BIqSkwAX-UUtE6&tp=1&oh=9cfef9fc3b7f32c01dd316bfc444acc4&oe=60321E10",
      username: "ALi",
      fullname: "Active 31m ago",
    },
    {
      img:
        "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.19.1080.1080a/s640x640/122734799_412082053139703_3168278925321954175_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=lcIO54cdo30AX8nI4vW&tp=1&oh=7a569c74361751305fc4dfef6e926aea&oe=6034DE90",
      username: "Sajjad",
      fullname: "Active 3h ago ",
    },
    {
      img:
        "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/91114426_1459361664232620_8287192033603212385_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=TXUEILTr1E8AX9DoSkc&tp=1&oh=8e899f644bab711593abc0c90647b33d&oe=60310363",
      username: "Sultan",
      fullname: "Active 6day ago ",
    },
  ];

  let b = [];

  a.forEach((item) => {
    let loopimg = createElement("img", { src: item.img });
    let looph3 = createElement("h3", null, item.username);
    let looph4 = createElement("h4", null, item.fullname);
    let loopDiv = createElement(
      "div",
      { class: "loop-div" },
      loopimg,
      looph3,
      looph4
    );

    b.push(loopDiv);
  });

  const loopdiv = createElement("div", { class: "more" }, b);

  const sendMsg = createElement("div", { class: "send-msg" }, loopdiv);

  const editIcon = createElement("i", { class: "far fa-edit" });
  const editDiv = createElement("div", { class: "editDiv" }, editIcon);

  const inboxDownIcon = createElement("i", { class: "fas fa-chevron-down" });
  const inboxName = createElement("a", { class: "inbox-name" }, "shamstabraiz");
  const inboxNameDiv = createElement(
    "div",
    { class: "inbox-name-div" },
    inboxName,
    inboxDownIcon
  );

  const inboxTop = createElement(
    "div",
    { class: "inbox-top" },
    inboxNameDiv,
    editDiv
  );

  const inBoxDiv = createElement("div", { class: "inbox" }, inboxTop, sendMsg);

  // ============================================= Messenger inbox Section End Here ==========================================================

  // ============================================= Messenger sendMessage Section Start Here ==========================================================

  const msgIcon = createElement("i", { class: "fab fa-telegram-plane" });

  const msgIconDiv = createElement("div", { class: "msg-icon-div" }, msgIcon);

  const msgheading = createElement(
    "h1",
    { class: "msg-heading" },
    "Your Messages"
  );

  const mgsPara = createElement(
    "p",
    { class: "msg-para" },
    "Send private photos and messages to a friend or group."
  );

  const msgBtn = createElement("button", { class: "msg-btn" }, "Send Message");

  const mainMsgDiv = createElement(
    "div",
    { class: "main-msg-div" },
    msgIconDiv,
    msgheading,
    mgsPara,
    msgBtn
  );

  const sendMsgDiv = createElement(
    "div",
    { class: "send-msg-div" },
    mainMsgDiv
  );

  const mainDiv = createElement(
    "div",
    { class: "main-messanger" },
    inBoxDiv,
    sendMsgDiv,
    heartPopup()
  );

  const footerDiv = createElement("div", { class: "all-footer" }, footer());
  return createElement(
    "section",
    { class: "chat" },
    header(),
    mainDiv,
    footerDiv
  );
};

// ============================================= Messenger SendMessenge Section End Here ==========================================================

// ============================================= Messenger Section end Here ==========================================================
