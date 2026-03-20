const getStoredInstalledApp = () => {
    const storedInstalledAppSTR = localStorage.getItem("app");
    if (storedInstalledAppSTR) {
        const storedInstalledApp = JSON.parse(storedInstalledAppSTR);
        return storedInstalledApp;
    }
    else {
        return [];
    }
}

const addToDB = (id) => {
    const storedApp = getStoredInstalledApp();
    if (storedApp.includes(String(id))) {
        // here i do id into string forcely cause in my case id is not store as a strigified id. why?
        alert("This id is already exist")
    }
    else {
        const strId = String(id)
        // here i do id into string forcely cause in my case id is not store as a strigified id. why?
        storedApp.push(strId);
        console.log(storedApp);
        const storedData = JSON.stringify(storedApp);
        console.log(storedData);
        localStorage.setItem("app", storedData);
    }
}

export { addToDB };