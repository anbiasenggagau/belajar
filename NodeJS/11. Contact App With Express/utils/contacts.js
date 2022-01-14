const fs=require('fs')

const dirPath='./data'

const loadContact=() => {
    const fileBuffer=fs.readFileSync(dirPath+"/contacts.json", 'utf-8')
    const identitas=JSON.parse(fileBuffer)
    return identitas;
}

const findContact=(contacts, nama) => {
    let a=contacts.find(element => element.nama==nama)
    return a
}

const tambahContact=contact => {
    const contactList=loadContact()
    contactList.push(contact)
    fs.writeFileSync(dirPath+"/contacts.json", JSON.stringify(contactList))
}

const cekDuplikat=contact => {
    const contactList=loadContact()
    return contactList.find((element) => element.nama==contact)
}

const hapusContact=nama => {
    const contactList=loadContact()
    const rowBefore=contactList.length
    const filtered=contactList.filter(element => element.nama!==nama)
    const rowAfter=filtered.length
    fs.writeFileSync(dirPath+"/contacts.json", JSON.stringify(filtered))
    return rowBefore>rowAfter
}

const editContact=contactObject => {
    let a;
    const contactList=loadContact()
    contactList.forEach((element, index) => {
        if (contactObject.nama==element.nama) {
            a=index;
        }
    })
    contactList[a].nama=contactObject.nama
    contactList[a].nohp=contactObject.nohp
    contactList[a].email=contactObject.email

    fs.writeFileSync(dirPath+"/contacts.json", JSON.stringify(contactList))
}
module.exports={ loadContact, findContact, tambahContact, cekDuplikat, hapusContact, editContact }