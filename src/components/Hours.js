const Hours = () => {
    const weekdayNumber = new Date().getDay().toString()

    const days = {
        0 : {open: "9am", close: "8pm", name:"Sunday"},
        1: {open: "10am", close: "4pm", name:"Monday"},
        2: {open: "10am", close: "4pm", name:"Tuesday"},
        3: {open: "10am", close: "4pm", name:"Wendsday"},
        4: {open: "10am", close: "4pm", name:"Thursday"},
        5: {open: "10am", close: "4pm", name:"Friday"},
        6: {open: "9am", close: "8pm", name:"Saturday"},
    }

    return (
        <div>
            <h2>Today working hours</h2>
            <p>{days[weekdayNumber].name}: {days[weekdayNumber].open} to {days[weekdayNumber].close}.</p>
        </div>
    )

}

export default Hours