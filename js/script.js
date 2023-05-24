const main_div = document.querySelectorAll('.tmp');
main_div.forEach(itm => {
  const x = itm.querySelector('.item');
  const y = itm.querySelector('.page');
  x.addEventListener('click', () => {
    y.classList.toggle('active');
  });
});
