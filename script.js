document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.compact-form');
    const successMessage = document.querySelector('.form-success');
  
    if (form && successMessage) {
      form.addEventListener('submit', function () {
        successMessage.style.display = 'block';
      });
    }
  });
  