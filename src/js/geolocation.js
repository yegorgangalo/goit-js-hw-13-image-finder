// console.log(window.navigator);

/* ----через колбек----- */
// const onGetPositionSuccess = location => {
//     console.log(location);
// }

// const onGetPositionError = error => {
//     console.log(error);
// }
// navigator.geolocation.getCurrentPosition(onGetPositionSuccess, onGetPositionError, options);

/* -------через Проміс------ */
const getCurrentPosition = () => {
    const options = {
        timeout: 5000,
    }

    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};

getCurrentPosition().then(console.log).catch(console.log);

/* ------------------ */