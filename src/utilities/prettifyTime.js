export default function prettifyTime(dateObj) {
    let minutes = ('0' + dateObj.getMinutes()).slice(-2),
    hours = ('0' + dateObj.getHours()).slice(-2) % 12,
    amOrPm = dateObj.getHours() < 13 ? "AM" : "PM",
    day = ('0' + dateObj.getDate()).slice(-2),
    month = ('0' + dateObj.getMonth()).slice(-2),
    year = dateObj.getFullYear();

    return `${day}/${month}/${year}   ${hours}:${minutes} ${amOrPm}`
}