import React, { Component } from "react";

export default class CalendarBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: ""
        }
    }

    componentDidMount() {
        if (!this.props.overflow)  {
            const { date, month, year } = this.props
            fetch(`http://127.0.0.1:5000/reminder/get/${date}/${month}/${year}`,
                { method: 'GET' }
            ).then(response => response.json())
            .then(data => {
                this.setState({
                    text: data.text
                })
            }).catch(error => console.log(error))
        }
    }

    render() {
        return (
            <div className={`calendar-box ${this.props.overflow ? 'overflow-day' : ""}`}>
                <div className="date">
                    {this.props.date}
                </div>

                <textarea value={this.state.text} />
            </div>
        )
    }
}