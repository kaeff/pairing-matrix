import {Swappable,Plugins} from '@shopify/draggable';


let render = members => {
  let html = "<ul>" + members.map(member => { return `
        <a href="#" class="Block Block--isDraggable" title="Click to drag">
            <div class="BlockContent">
                <h3 class="Heading Heading--size2 text-no-select">${member}</h3>
            </div>
        </a>`
  }).join("") + "</ul>";
  document.querySelector("#members").innerHTML = html;
};

let initDb = () => {
  try {
    firebase.database().ref('/members').on('value', snapshot => render(snapshot.val()));
  } catch (e) {
    console.error(e);
  }
};

let initSwappable = () => {
  const containers = document.querySelectorAll('#members');
  const swappable = new Swappable(containers, {
    draggable: '.Block--isDraggable'
  });
};

document.addEventListener('DOMContentLoaded', initDb);
document.addEventListener('DOMContentLoaded', initSwappable);

