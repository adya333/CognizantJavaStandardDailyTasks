let meetings = new Map();

function addEvent()
{
  let meet = document.getElementById("meet").value;
  let parti = document.getElementById("parti").value;
  if(meetings.has(meet)) //true
  {
    meetings.get(meet).push(parti);
    let list = document.getElementsByClassName("list")[0];
    for(let i =0;i<list.children.length;i++)
      {
        if(list.children[i].children[0].innerText==meet)
        {
          let p = document.createElement("span");
          p.innerText=parti;
          list.children[i].children[1].appendChild(p);
        }
      }
  }
  else{
    meetings.set(meet,[parti]);
    let parent = document.createElement("div");
    let id = document.createElement("div");
    id.innerText=meet;
    let partidiv = document.createElement("div");
    for(let i=0;i<meetings.get(meet).length;i++)
      {
        let p = document.createElement("span");
        p.innerText=meetings.get(meet)[i];
        partidiv.appendChild(p);
      }
    parent.appendChild(id);
    parent.appendChild(partidiv);
    document.querySelector(".list").appendChild(parent);
  }
}
