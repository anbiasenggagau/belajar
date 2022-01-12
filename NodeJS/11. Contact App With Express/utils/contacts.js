const fs=require('fs')

const dirPath='./data'

const loadContact=() => {
    const fileBuffer=fs.readFileSync(dirPath+"/contacts.json", 'utf-8')
    const identitas=JSON.parse(fileBuffer)
    return identitas;
}

const findContact=(nama) => {
    const contacts=loadContact()
    contacts.forEach(element => {
        console.log(element)
    });
}

module.exports={ loadContact, findContact }