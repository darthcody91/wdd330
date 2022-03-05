let links = [
    {
      label: "Week 1 Notes",
      url: "week1/index.html"},

     {label: "Week 2 Notes",
      url: "week2/index.html"
    },

    {label: "TEAM ACTIVITY 1",
      url: "teamactivity1.html"},

    {label: "Week 3 Notes",
      url: "week3/index.html"},

      {label: "TEAM ACTIVITY 2",
      url: "w03-ta.html"},

      {label: "TEAM ACTIVITY 2.5",
      url: "w03-ta2.html"},

      {label: "Week 4 Notes",
      url: "week4/index.html"},

      {label: "TEAM ACTIVITY W4",
      url: "week4/W4ta04.html"},

      {label: "TEAM ACTIVITY W5",
      url: "W5/index.html"},

      {label: "TO-DO LIST APPLICATION",
      url: "week5/todolist.html"},

      {label: "Week 7 Notes",
      url: "week7/index.html"},

      {label: "TEAM ACTIVITY W8",
      url: "week8/teamact08.html"},

      {label: "Week 8 Notes",
    url: "week8/index.html"},

      {label: "TEAM ACTIVITY W9",
    url: "week0/teamact9.html"},

    {label: "Week 9 Notes",
    url: "week9/index.html"}

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