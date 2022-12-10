function modal(modall, modalBtn, modalClos) {
      moda = document.querySelector(modall),
      modalBt = document.querySelector(modalBtn),
         modalClos = document.querySelector(modalClos),
   
   modalBt.addEventListener('click', e => {
      e.preventDefault()

      moda.style.display = 'flex'
   })

   modalClos.addEventListener('click', () => {
      moda.style.display = 'none'
   })
   
   moda.addEventListener('click', e => {
       if (e.target === moda) {
         moda.style.display = 'none'
    }
   
      })

}

modal('.modal__wrapper', '.modal_btn', '.modal__s');
