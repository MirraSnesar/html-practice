document.querySelector('.reservation_submit').addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    modal.classList.remove('hidden');
  })
  
  document.querySelector('.close-modal').addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    modal.classList.add('hidden');
  })
  