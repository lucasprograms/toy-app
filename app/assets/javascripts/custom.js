$(document).on('click', 'ul.dropdown-menu [data-toggle=dropdown]', function (e) {
  e.preventDefault();
  e.stopPropagation();
});