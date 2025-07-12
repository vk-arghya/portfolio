// Smooth scroll to contact section
const contactBtn = document.querySelector('.btn-contact');
if (contactBtn) {
  contactBtn.addEventListener('click', () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  });
}

// Zoom in/out effect for project boxes (already CSS handled, optional extra JS hover effect)
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

