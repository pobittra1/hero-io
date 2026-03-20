import { toast } from "react-toastify";

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
        toast.warn("Already installed ⚠️", { autoClose: 3000 });
        return;
    } else {
        const strId = String(id)
        // here i do id into string forcely cause in my case id is not store as a strigified id. why?
        storedApp.push(strId);
        const storedData = JSON.stringify(storedApp);
        localStorage.setItem("app", storedData);
    }

}

export { addToDB, getStoredInstalledApp };