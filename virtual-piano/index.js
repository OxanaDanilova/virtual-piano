const app = () => {
    const piano = document.getElementsByClassName('piano')[0];
    const pianoKey = document.getElementsByClassName('piano-key');

   
        
    const playAudio = (src) => {
        const audio = new Audio();
        audio.currentTime = 0;
        audio.src = src;
        audio.play();
      }

    const handlePiano = (event) => {
        let target = event.target;     
        if (target.classList.contains('piano-key')) {
          console.log(target.dataset.note);
          let fileName = target.dataset.note;
          let src = `./assets/audio/${fileName}.mp3`;
          console.log(src);
          playAudio(src);
            }
        }

      
    piano.addEventListener('click', handlePiano);   
}

app();