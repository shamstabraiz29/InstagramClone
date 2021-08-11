import { createElement } from "../react"
import { sidebar } from "./sidebar"
import "../styles/home.css"
import { stories } from "./stories";
import { header } from './header'
import { heartPopup } from "./heartPopup";

export const home = () => {


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
            "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/137659979_466066301465255_1790425210604152469_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=RzpR1VCLmWUAX-8yRA7&tp=1&oh=a0fc37bd1c0b43f65ed11fccf50ab9e6&oe=603400A4"

    });

    const postProfileImg = createElement("img", {
        src:
            "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1079.1079a/s640x640/137563198_3861949867188643_7169653622087330223_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=Ixt_dkEUDMYAX9WQPuJ&tp=1&oh=0a884dc414869825614039495a7b151a&oe=6032E46D",
    });

    const profileName = createElement(
        "h6",
        { class: "profile-name" },
        "Kifayat Ali"
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




    const post = createElement('div', { class: "post-div" }, postProfileDiv,
        postImg,
        postIcons,
        postDetails,
        postInputDiv)


    const postOuterDiv = createElement('div', { class: "home" }, stories(), heartPopup(), post,)

    const homeMain = createElement('div', { class: "home-main" }, postOuterDiv, sidebar())

    return createElement("section", null, header(), homeMain,)
}