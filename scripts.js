
const contactBtn = document.querySelector('.btn-contact');
if (contactBtn) {
  contactBtn.addEventListener('click', () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  });
}


const projectBoxes = document.querySelectorAll('.project-box');
projectBoxes.forEach(box => {
  box.addEventListener('mouseenter', () => {
    box.style.transform = 'scale(1.03)';
  });
  box.addEventListener('mouseleave', () => {
    box.style.transform = 'scale(1)';
  });
});

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

 function showThankYou(event) {
    event.preventDefault(); // stop actual form submission
    document.getElementById("thank-you-msg").style.display = "block";
  }
