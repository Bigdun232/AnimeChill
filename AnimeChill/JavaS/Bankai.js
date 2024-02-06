// All Bankai random

document.addEventListener("DOMContentLoaded", function() {
    const videoSources = [
      'videos/Bankai-Bazuka.mp4',
      'videos/Bankai-Black.mp4',
      'videos/Bankai-deda.mp4',
      'videos/Bankai-Gin.mp4',
      'videos/Bankai-Glava.mp4',
      'videos/Bankai-Ichigo.mp4',
      'videos/Bankai-Kempachi.mp4',
      'videos/Bankai-Kiske.mp4',
      'videos/Bankai-Lisika.mp4',
      'videos/Bankai-Senbondzakura.mp4',
      'videos/Bankai-Uchoniy.mp4',
      'videos/Bankai-Unahana.mp4',
    ];

    // Выбираем случайное видео
    const randomVideoSource = videoSources[Math.floor(Math.random() * videoSources.length)];

    // Устанавливаем выбранное видео в элемент <video>
    const videoElement = document.querySelector('.random-video');
    videoElement.src = randomVideoSource;

    // Добавляем атрибуты для автоматического воспроизведения и контролов
    videoElement.setAttribute('controls', 'true');
    videoElement.setAttribute('autoplay', 'true');

    // Запуск видео на весь экран
    function playFullscreen() {
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if (videoElement.mozRequestFullScreen) {
        videoElement.mozRequestFullScreen();
      } else if (videoElement.webkitRequestFullscreen) {
        videoElement.webkitRequestFullscreen();
      } else if (videoElement.msRequestFullscreen) {
        videoElement.msRequestFullscreen();
      }
    }

    // Вызываем метод для включения полноэкранного режима после загрузки видео
    videoElement.addEventListener('loadeddata', playFullscreen);
  });




    
    
    