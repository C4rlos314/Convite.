 // Contagem regressiva até 19/12/2026 15:00 (horário local do visitante).
  // Esta é a única parte em JavaScript da página; o restante é HTML e CSS puros.
  var weddingDate = new Date("2026-12-19T15:00:00");

  function updateCountdown(){
    var now = new Date();
    var diff = weddingDate - now;
    if (diff < 0) diff = 0;

    var d = Math.floor(diff / (1000*60*60*24));
    var h = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
    var m = Math.floor((diff % (1000*60*60)) / (1000*60));
    var s = Math.floor((diff % (1000*60)) / 1000);

    document.getElementById('cd-days').textContent  = d;
    document.getElementById('cd-hours').textContent = String(h).padStart(2,'0');
    document.getElementById('cd-mins').textContent  = String(m).padStart(2,'0');
    document.getElementById('cd-secs').textContent  = String(s).padStart(2,'0');
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);