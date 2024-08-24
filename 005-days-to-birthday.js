// create current date
// create birthday day
// check if the we are over birthday month
// check if we are over day month birthday
// if we are over,add one year more and substract the different

const counterDates = time => {
    const meses = Math.floor(time / (1000 * 3600))
    const days = Math.floor(time / (1000 * 3600 * 24))
    const hours = Math.floor(time / (1000 * 3600 * 24 * 60))
    const seconds = time / (1000 * 3600 * 24 * 60 * 60)


    return [meses, days, hours, seconds]
}

const daysToBirthday = (month, day) => {
    let currentDate = new Date()
    let birthday = new Date(currentDate.getFullYear(), month, day)

    if(currentDate.getMonth() === birthday.getMonth() && currentDate.getDate() === birthday.getDate()) {
        return 'Tody is your birthday'
    }

    if(currentDate.getTime() < birthday.getTime()) {
        const result = birthday.getTime() - currentDate.getTime()
        return `Faltan ${counterDates(result)} dias`
    } else {
        birthday.setFullYear(birthday.getFullYear() + 1)
        const result = birthday.getTime() - currentDate.getTime()
        return `Faltan ${counterDates(result)} dias`
    }
    // if()


}

console.log(daysToBirthday(11,8))