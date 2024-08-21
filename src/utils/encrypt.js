import * as CryptoJS from 'crypto-js';

export function storageEncryption() {
    let _key = import.meta.env.VITE_API_LOCAL_STORAGE_KEY

    function encrypt(txt) {
        return CryptoJS.AES.encrypt(txt, _key).toString();
    }

    function decrypt(txtToDecrypt) {
        return CryptoJS.AES.decrypt(txtToDecrypt, _key).toString(CryptoJS.enc.Utf8);
    }

    function manipulateLocalStorage() {
        Storage.prototype.setEncryptedItem = (key, value) => {
            localStorage.setItem(key, encrypt(value));
        };

        Storage.prototype.getDecryptedItem = (key) => {
            let data = localStorage.getItem(key) || "";
            return decrypt(data) || null;
        }
    }

    manipulateLocalStorage();

    // localStorage.setEncryptedItem("token", "12345");
    // const token = localStorage.getDecryptedItem("token");
    // console.log(token);
}