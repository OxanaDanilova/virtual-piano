const app = () => {
    const piano = document.getElementsByClassName('piano')[0];
    const handlePiano = (event) => {
        console.log(event);
    }
    piano.addEventListener('click', handlePiano);
    
}

app();