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
            dateString += fullYear + "-";
            dateString += month + "-";
            dateString += date;
            break;
        default:
            return dateString;
    }

    /*
    switch (format) {
        case "d-m-y":

        case "default":
            dateString += fullYear + "-";
            dateString += month + "-";
            dateString += date;
            return dateString;
    }*/

    return dateString;
}

export default formatDate;
