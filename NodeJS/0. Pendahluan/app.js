// const crypto = require('crypto')

// const hash = crypto.createHash('sha256')

// hash.update('a')

// console.log(hash.copy().digest('base64'))

// const pass = "be58fddca05960893ab699a8b7c716779ed3da0c8e866b85a8582f1bdc75ae9d"

// hash.update('anbia')

// const input = hash.copy().digest('hex')

// console.log(input)

// if (input == pass) console.log('Password benar')
// else { console.log('Password salah') }

(async function () {

    const bcrypt = await require('bcrypt')

    let salt = await bcrypt.genSalt()

    let password = await bcrypt.hash('anbia', salt)

    let check = await bcrypt.compareSync('anbia', password)

    console.log(check)

    salt = await bcrypt.genSalt()

    password = await bcrypt.hash('senggagau', salt)

    console.log(password)

    salt = await bcrypt.genSalt()

    password = await bcrypt.hash('senggagau', salt)

    console.log(password)

    salt = await bcrypt.genSalt()

    password = await bcrypt.hash('senggagau', salt)

    console.log(password)

    salt = await bcrypt.genSalt()

    password = await bcrypt.hash('senggagau', salt)

    console.log(password)

    salt = await bcrypt.genSalt()

    password = await bcrypt.hash('senggagau', salt)

    console.log(password)

    check = await bcrypt.compareSync('senggagau', password)

    console.log(check)

}())

