const toggleInfo = (letter) => {
    const infoBox = document.getElementById(`info-box-${letter}`);
    
    if (infoBox.style.display === 'flex') {
        infoBox.style.display = 'none';
    } else {
        infoBox.style.display = 'flex';
    }
};
