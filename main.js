
    const color = document.getElementById("bc")
    color.addEventListener('click',() => {
      const r = Math.floor(Math.random()*256);
      const g = Math.floor(Math.random()*256);
      const b = Math.floor(Math.random()*256); 
      const randomval = `rgb(${r},${g},${b})`;
       let co = document.getElementById("bg")
    co.style.backgroundColor=randomval
      const pval= document.getElementById("ptag")
      pval.innerHTML=randomval
      
    })
  
