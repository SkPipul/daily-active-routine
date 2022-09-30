let getLocalStorage = () => {
    let breakTime = localStorage.getItem('break-time')
    return breakTime;
}

const sentLocalStorage = (data) =>{
    localStorage.setItem('break-time', data);
}

export {
    getLocalStorage,
    sentLocalStorage
};