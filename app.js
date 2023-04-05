// Establece la fecha de la cuenta regresiva (formato: mes/día/año)
const countdownDate = new Date("07/01/2023").getTime();

// Actualiza el contador cada segundo
const countdownTimer = setInterval(() => {
  // Obtiene la fecha actual
  const now = new Date().getTime();
  
  // Calcula la distancia entre la fecha actual y la fecha de la cuenta regresiva
  const distance = countdownDate - now;
  
  // Calcula los días, horas, minutos y segundos restantes
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Actualiza los valores en la cuenta regresiva
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  
  // Si la cuenta regresiva termina, muestra un mensaje
  if (distance < 0) {
    clearInterval(countdownTimer);
    document.getElementById("countdown").innerHTML = "La cuenta regresiva ha terminado";
  }
}, 1000);
