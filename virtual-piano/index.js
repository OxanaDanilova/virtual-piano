const app = () => {
    const piano = document.getElementsByClassName('piano')[0];
    const pianoKeys = document.getElementsByClassName('piano-key');
    const lettersBtn = document.getElementsByClassName('btn-letters')[0];
    const notesBtn = document.getElementsByClassName('btn-notes')[0];
    let isMouseDown = false;
    
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

    const handleMouseDown = (event)=> {
      isMouseDown = true;
      makeKeyActive(event);
    }

    const handleMouseUp = (event) => {
      isMouseDown = false;
      makeKeyNotActive(event);
    }


    const makeKeyActive = (event)=> {
      if (isMouseDown) {
        let target = event.target;
        if (target.classList.contains('piano-key')) {
          target.classList.add('piano-key-active');
          target.classList.add('piano-key-active-pseudo');
        }
      }
    
    }

    const makeKeyNotActive = (event) => {
      let target = event.target;
      if (target.classList.contains('piano-key-active')) {
          target.classList.remove('piano-key-active');
          target.classList.remove('piano-key-active-pseudo');
      }

    }

    const playAudio = (src) => {
        const audio = new Audio();
        audio.currentTime = 0;
        audio.src = src;
        audio.play();
      }

    const handlePiano = (event) => {
      if (event.type === 'mousedown' || isMouseDown && event.target!==event.relatedtarget) {
        let target = event.target;     
        if (target.classList.contains('piano-key')) {
          let fileName = target.dataset.note;
          let src = `./assets/audio/${fileName}.mp3`;
          console.log(src);
          playAudio(src);
            }
      }   
        }

        const defineKey = (event) => {
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
          if (fileName) return fileName;
        }

        const handleKey = (event) => {
          let fileName = defineKey(event);
          if (fileName) {             
          Object.values(pianoKeys).forEach((item) => {
            if (item.dataset.note === fileName) {
              item.classList.add('piano-key-active');
              item.classList.add('piano-key-active-pseudo');            
            }
          });
            console.log('note', fileName);
            let src = `./assets/audio/${fileName}.mp3`;
            playAudio(src); 
          }                    
        }

        const handleKeyUp = (event)=> { 
          let fileName = defineKey(event);
          if (fileName) {
            Object.values(pianoKeys).forEach((item) => {
              if (item.dataset.note === fileName) {
                item.classList.remove('piano-key-active');
                item.classList.remove('piano-key-active-pseudo');            
              }
          });
        }

          }
      
      
    piano.addEventListener('mousedown', handlePiano);  
    piano.addEventListener('mousedown', handleMouseDown);
    piano.addEventListener('mouseup', handleMouseUp);
    piano.addEventListener('mouseover', handlePiano ); 
    piano.addEventListener('mouseover', makeKeyActive ); 
    piano.addEventListener('mouseout', makeKeyNotActive);
    window.addEventListener('keydown', handleKey);
    window.addEventListener('keyup', handleKeyUp);
    lettersBtn.addEventListener('click', showLetters );
    notesBtn.addEventListener('click', showNotes);

}

app();