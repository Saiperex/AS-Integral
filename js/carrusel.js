const lis = document.querySelectorAll('.clientes li');

const options = {
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, options);

lis.forEach(li => {
  observer.observe(li);
});