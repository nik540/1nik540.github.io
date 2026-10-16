function scrollSlider(direction) {
  const track = document.getElementById('gridTrack');
  const scrollAmount = track.clientWidth; // Ширина одной страницы
  track.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}