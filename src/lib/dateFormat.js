function formatDate(timestamp, format = "d-m-y") {
    // Split timestamp into [ Y, M, D, h, m, s ]
    var t = timestamp.split(/[- T :]/);
    // console.log(t);
    // Apply each element to the Date function
    var d = new Date(Date.UTC(t[0], t[1] - 1, t[2]));
    var dateString = "";
    // console.log(d);
    var fullYear = d.getFullYear();
    var month = d.getMonth() + 1;
    var date = d.getDate();

    switch (format) {
        case "d-m-y":
            dateString += date + "/";
            dateString += month + "/";
            dateString += fullYear;
            break;
        default:
            return dateString;
    }
    return dateString;
}

export default formatDate;
