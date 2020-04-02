import {Swappable,Plugins} from '@shopify/draggable';


console.log("Hello from script")
document.addEventListener('DOMContentLoaded', function() {
    // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
    // // The Firebase SDK is initialized and available here!
    //
    // firebase.auth().onAuthStateChanged(user => { });

    firebase.database().ref('/members').on('value', snapshot => {
      let members = snapshot.val();
      let html = "<ul>" + members.map(member => { return `
            <a href="#" class="Block Block--isDraggable" title="Click to drag">
                <div class="BlockContent">
                    <h3 class="Heading Heading--size2 text-no-select">${member}</h3>
                </div>
            </a>`
        }).join("") + "</ul>";
      document.querySelector("#members").innerHTML = html;
    });
    
    console.log("Hello from before constructor")
    const containers = document.querySelectorAll('#members');
      const swappable = new Swappable(containers, {
      draggable: '.Block--isDraggable'
    });

    
    // firebase.messaging().requestPermission().then(() => { });
    // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
    //
    // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
    
    try {
      let app = firebase.app();
      let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
      document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
    } catch (e) {
      console.error(e);
      document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
    }
  });
