document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const menuList = document.querySelector('.menu ul');
  const avatarContainer = document.querySelector('.avatar-container');

  menuToggle.addEventListener('click', function () {
    menuList.classList.toggle('active');
    avatarContainer.classList.toggle('active');
    menuToggle.innerHTML = menuList.classList.contains('active') ? '&times;' : '&#9776;';
  });
});