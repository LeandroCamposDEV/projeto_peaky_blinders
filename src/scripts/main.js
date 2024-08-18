document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('backgroundMusic');
  const musicControl = document.getElementById('musicControl');

  // Tenta iniciar a música automaticamente
  function playAudio() {
    audio.play().then(() => {
      musicControl.classList.add('playing');
    }).catch(error => {
      console.log('Autoplay was prevented. User interaction may be required.');
    });
  }
  // Tenta reproduzir imediatamente
  playAudio();

  musicControl.addEventListener('click', function() {
    if (audio.paused) {
      playAudio();
    } else {
      audio.pause();
      musicControl.classList.remove('playing');
    }
  });
});