import fs from 'fs'

// Loads file content as Buffer for sending throught the peerjs
export const loadFileToBlob = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, buffer) => {
            if (err) {
                console.log(err)
                reject(err)
            } else {
                resolve(Uint8Array.from(buffer).buffer)
            }
        })
    })
}

