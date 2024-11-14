const showInfo = (letter) => {
    const infoBox = document.getElementById(`info-box-${letter}`);
    infoBox.style.display = 'flex'; 
};

const hideInfo = (letter) => {
    const infoBox = document.getElementById(`info-box-${letter}`);
    infoBox.style.display = 'none'; 
};
