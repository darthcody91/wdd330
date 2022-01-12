let links = [
    {
      label: "Week 1 Notes",
      url: "week1/index.html"},

     {label: "Week 2 Notes",
      url: "week2/index.html"
    },

    {label: "TEAM ACTIVITY 1",
      url: "teamactivity1.html"}
  ]
         
function loadIndex() {
    const ol = document.querySelector("#linkslist");
    
    links.forEach( link => {
        const li = document.createElement("li");
        const href = document.createElement("a");
        href.setAttribute("href", link.url);
        href.innerText = link.label;

        li.appendChild(href);
        ol.appendChild(li);
    })
}