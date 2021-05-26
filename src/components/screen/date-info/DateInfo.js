const DateInfo = (props) => {
    const date = [
        new Date().getDay(),
        new Date().getDate(),
        new Date().getMonth(),
        new Date().getFullYear(),
    ]
    
    const weekdays = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday"
    }

    const months = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December"
    }

    let ordinalSuffix = "";
    switch(true) {
        case date[1] === 1 || date[1] === 21 || date[1] === 31:
            ordinalSuffix = "st";
            break;
        case date[1] === 2 || date[1] === 22:
            ordinalSuffix = "nd";
            break;
        case date[1] === 3 || date[2] === 23:
            ordinalSuffix = "rd";
            break;
        default:
            ordinalSuffix = "th";
    }  

    return (
        <div className="screen-layout">
            <p>{`<`}</p>
            {props.text.length === 0 && <p className="screen-text">{`${weekdays[date[0]]}, ${date[1]}${ordinalSuffix} of ${months[date[2]]} ${date[3]}`}</p>}
            {props.text.length > 0 && <p className="screen-text">{props.text}</p>}
            <p>{`>`}</p>
        </div>
    )
}

export default DateInfo;