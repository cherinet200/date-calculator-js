function daysInMonth(Month, Year) {
    return new Date(Year, Month, 0).getDate();
}
console.log(daysInMonth(2, 2024));
function daysInYear(year) {
    if (year % 4 == 0) {
        return 366;
    } else if (year % 4 != 0 || year % 4 > 0) {
        return 365;
    }
}
function dsp(d3) {
    if (d3 > 1) {
        return "days";
    } else if (d3 == 1) {
        return "day";
    }
}
function msp(m3) {
    if (m3 > 1) {
        return "months";
    } else if (m3 == 1) {
        return "month";
    }
}
function ysp(y3) {
    if (y3 > 1) {
        return "years";
    } else if (y3 == 1) {
        return "year";
    }
}
const dateConverterToEthiopian = (date) => {
    const d = new Date(date);
    const options = {
        dateStyle: "short",
        calendar: "ethiopic",
    };
    return d.toLocaleDateString("am-GB", options);
};
const dateConverterToGregorian = (date) => {
    const d = new Date(date);
    const options = {
        dateStyle: "short",
        calendar: "",
    };
    return d.toLocaleDateString("en-GB", options);
};

function calculateDate() {
    const fDate = document.querySelector("#fDate").value;
    const sDate = document.querySelector("#sDate").value;
    const result = document.querySelector("#result");

    // user input to normal date format
    const dateOne = new Date(fDate); // new Date(firstDate)
    const dateTwo = new Date(sDate); // new Date(secondDate)

    // difference between the two dates
    const diff = Math.abs(dateTwo - dateOne);
    // change diffrence to day
    const days = diff / (1000 * 60 * 60 * 24);

    if (dateTwo < dateOne) {
        if (days == 1) {
            let s = "day";

            result.innerHTML = `${days} ${s} ${"ago"}`;
        } else if (days > 1) {
            let s = "days";

            result.innerHTML = `${days} ${s} ${"ago"}`;
        }
    } else if (dateTwo > dateOne) {
        if (days == 1) {
            let s = "day";

            result.innerHTML = `${days} ${s} ${"away"}`;
        } else if (days > 1) {
            let s = "days";

            result.innerHTML = `${days} ${s} ${"away"}`;
        }
    } else if (fDate | (sDate == "")) {
        result.innerHTML = "Please fill out the field!";
    } else if (sDate == fDate) {
        result.innerHTML = "Same day";
    }
}

// ===============================================================

function Calculate() {
    // get the user input
    const fDate = document.querySelector("#fDate").value;
    const sDate = document.querySelector("#sDate").value;
    const result = document.querySelector("#result");

    // change the input to normal date format
    const dateOne = new Date(fDate);
    const dateTwo = new Date(sDate);
    // Start Date
    const d1 = dateOne.getDate();
    const m1 = dateOne.getMonth();
    const y1 = dateOne.getFullYear();
    // End Date
    const d2 = dateTwo.getDate();
    const m2 = dateTwo.getMonth();
    const y2 = dateTwo.getFullYear();
    // diff in days
    const diff = Math.abs(dateTwo - dateOne);
    const days = diff / (1000 * 60 * 60 * 24);
    // result
    let d3, m3, y3;

    y3 = Math.floor(days / 365);
    d4 = d2 - d1;
    if (Math.sign(d4) == -1) {
        m3--;
        d3 = daysInMonth(m2, y2) + d4;
    } else if (Math.sign(d4) == 1) {
        d3 = d4;
    }
    dd = days % 365;
    mm = dd / daysInMonth(m2, y2);
    m3 = Math.floor(mm);
    if (dateTwo == dateOne) {
        result.innerHTML = "Same day";
    } else if ((y2 == y1) & (d2 != d1) & (m2 != m2)) {
        y3 = Math.abs(y2 - y1);
        ddd = d2 - d1;
        if (Math.sign(ddd) == -1) {
            d3 = daysInMonth(m2, y2) + ddd;
            if (m3 == 0) {
                if (y3 == 1 || y3 > 1) {
                    y3--;
                    m3 = 12 - 1;
                } else {
                }
            } else {
                m3 = m3 - 1;
                y3 = y3;
            }
        }
        result.innerHTML = `${y3} years, ${m3} months and ${d3} days
        away`;
    } else if (fDate | (sDate == "")) {
        result.innerHTML = "Please fill out the field!";
    } else if (dateTwo > dateOne) {
        result.innerHTML = `${y3} years, ${m3} months and ${d3} days away`;
    } else {
        result.innerHTML = `${y3} years, ${m3} months and ${d3} days ago`;
    }
}

function darkMode() {
    const body = document.body;
    const element1 = document.querySelector("#button");
    const element2 = document.querySelector("#btn1");
    const element3 = document.querySelector("#btn2");
    const input1 = document.querySelector("#fDate");
    const input2 = document.querySelector("#sDate");
    body.classList.toggle("dark-mode");
    // element1.classList;
    // element2.classList;
    // list.add("dark-mode-btn");
    // element3.classList;
    // input1.classList;
    // input2.classList;
    // list.toggle("dark-mode-input");
}
