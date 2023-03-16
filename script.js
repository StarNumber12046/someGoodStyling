function mouse_position() {
  var e = window.event;

  var stuff = document.getElementById('mover');
  let left = e.pageX - 37.5;
  let top = e.pageY - 37.5;
  stuff.style.left = left + 'px';
  stuff.style.top = top + 'px';
}

document.addEventListener('mousemove', mouse_position);
