import { createElement } from "../react";
import "../style.css";
import { heartPopup } from "../components/heartPopup";

export const header = () => {
    let evt = (link) => ({
        onclick: () => {
            window.location.pathname = link;
        },
    });

    let navbar = [
        {
            link: "/home",
            props: {
                class: "icon home-icon fa fa-home",
            },
        },
        {
            link: "/messenger",
            props: {
                class: "icon messenger-icon fab fa-facebook-messenger",
            },
        },

        {
            link: "/explore",
            props: {
                class: "icon explore-icon fa fa-compass",
            },
        },
        {
            link: "",
            props: {
                class: "icon explore-icon fa fa-heart",

                onclick: () => {
                    var aa = document.querySelector(".show");
                    console.log(aa);

                    if (!aa.style.display) {
                        aa.style.display = "block";
                    } else {
                        aa.style.display = "";
                    }
                },
            },
        },
        {
            link: "/profile",
            props: {
                src:
                    "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/116701613_336290860718596_7765623644053597489_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=sahX302g8QoAX9roOzt&tp=1&oh=bcefcc6ad2c3f232da56d7af5b300397&oe=6035ED62",
                class: "profile-img",
            },
        },
    ];

    let list = [];

    navbar.forEach((item) => {
        if (item.link === "/profile") {
            let img = createElement("img", { ...evt(item.link), ...item.props });
            list.push(img);
        } else {
            let li = createElement("i", { ...evt(item.link), ...item.props });

            list.push(li);
        }
    });

    ///// logo div start here /////////

    const img = createElement("img", {
        src: "https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png",
    });
    const logoDiv = createElement("div", { class: "logo-div" }, img);

    ///// logo div end here /////////

    ///// input div start here /////////

    const inputIcon = createElement("i", { class: "search-icon fa fa-search" });
    const inputIconDiv = createElement(
        "div",
        { class: "search-icon-div" },
        inputIcon
    );
    const input = createElement("input", {
        class: "nav-input",
        placeholder: "Search",
    });
    const inputDiv = createElement(
        "div",
        { class: "input-div" },
        input,
        inputIconDiv
    );

    ///// input div end here /////////

    //// header /////

    let iconsDiv = createElement("div", null, list);
    let ul = createElement("ul", null, logoDiv, inputDiv, iconsDiv);
    return createElement("header", null, ul);
};
