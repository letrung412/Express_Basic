 function searchCustomer(date) {
    let obj = date.split("-");
    let year = obj[0];
    let month = obj[1];
    let day = obj[2];
    let d = new Date();
    let dmonth = d.getMonth();
    let dyear = d.getFullYear();
    let dday = d.setDate();
    let res;
    if (dmonth > month) res = dyear - year;
    else if (dmonth = month) {
        if (dday >= day) res = dyear - year + 1;
    } else res = dyear - year - 1;
    return res;
}
module.exports = searchCustomer ;