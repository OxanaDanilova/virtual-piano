const app = () => {
    const piano = document.getElementsByClassName('piano')[0];
    const pianoKeys = document.getElementsByClassName('piano-key');
    const lettersBtn = document.getElementsByClassName('btn-letters')[0];
    const notesBtn = document.getElementsByClassName('btn-notes')[0];
    
    const showLetters = (event) => {
      let target = event.target;
      if (target === lettersBtn) {
        target.classList.add('btn-active');
        notesBtn.classList.remove('btn-active');
        Object.values(pianoKeys).forEach((item)=> {
          item.classList.add('letter');
          });       
    };
  }

    const showNotes = (event) => {
      let target = event.target;
      if (target === notesBtn) {
        target.classList.add('btn-active');
        lettersBtn.classList.remove('btn-active');
        Object.values(pianoKeys).forEach((item)=> {
          item.classList.remove('letter');
          }); 
        };
    }

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

        const handleKey = (event) => {
          let fileName;
          switch (event.code) {
            case 'KeyD': fileName = 'c';
            break;
            case 'KeyF': fileName = 'd';
            break;
            case 'KeyG': fileName = 'e';
            break;
            case 'KeyH': fileName = 'f';
            break;
            case 'KeyJ': fileName = 'g';
            break;
            case 'KeyK': fileName = 'a';
            break;
            case 'KeyL': fileName = 'b';
            break;
            case 'KeyR': fileName = 'c♯';
            break;
            case 'KeyT': fileName = 'd♯';
            break;
            case 'KeyU': fileName = 'f♯';
            break;
            case 'KeyI': fileName = 'g♯';
            break;
            case 'KeyO': fileName = 'a♯';
            break;
            default: break;

          }
        if (fileName) {
            console.log('note', fileName);
            let src = `./assets/audio/${fileName}.mp3`;
            console.log(src);
            playAudio(src); 
          }                   
        }
      
    piano.addEventListener('click', handlePiano);   
    window.addEventListener('keydown', handleKey);
    lettersBtn.addEventListener('click', showLetters );
    notesBtn.addEventListener('click', showNotes);


}

app();