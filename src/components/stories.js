import { createElement } from "../react/index";

export const stories = () => {
  let array = [
    {
      imgSrc:
        "https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

        para:" kifayat"
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

        para:" azhar"
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

        para:" tajwar"

    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

        para:"salman"


    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

        para:"khan"


    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

        para:"ali_"

    
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

        para:" ayyaz"

    },
    {
        imgSrc:
          "https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

          para:"arshad-"
  
      }
  ];

  let emptyArray = [];

  array.forEach((e) => {
    const storiesImgs = createElement("img", { src: e.imgSrc }, e.name);


    const imageName = createElement('p',{class:"name-para"},e.para)


    const storyDiv = createElement('div', { class: "story-div" }, storiesImgs,)
    const stories = createElement("div", { class: "all-stories" },storyDiv,imageName);

    emptyArray.push(stories);
  });

  const null1 = createElement("div", null);
  const null2 = createElement("div", null);
  const stry = createElement("div", { class: "new" }, emptyArray);
  return createElement("div", { class: "stories" }, null1, stry, null2);
};
