sessionStorage.setItem('key', 0);
    
        const a = document.getElementById('p1');
        const b = document.getElementById('p2');
    
        let localNumber = localStorage.getItem('key');
        if(!localNumber){
          localStorage.setItem('key', 0);
        }
    
        a.innerText = localStorage.getItem('key');
        b.innerText = sessionStorage.getItem('key');
        const button = document.querySelector('button');
    
        button.addEventListener('click', (event) => {
          localNumber = localStorage.getItem('key');
    
          let sessionNumber = sessionStorage.getItem('key');
          localStorage.setItem('key', Number.parseInt(localNumber) + 1);
          sessionStorage.setItem('key', Number.parseInt(sessionNumber) + 1);
          a.innerText =  localStorage.getItem('key');
          b.innerText =  sessionStorage.getItem('key');
        });