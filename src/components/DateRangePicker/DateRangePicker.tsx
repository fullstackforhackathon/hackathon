import React from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import './dateRangePicker.css';

interface IProps {

}

interface IState {
    startDate: Date;
    endDate: Date;
}

export default class DateRangePicker extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            startDate: new Date(),
            endDate: new Date(),
        };
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
    }

    handleChangeStart(date: Date) {
        this.setState({
            startDate: date
        });
    }

    handleChangeEnd(date: Date) {
        this.setState({
            startDate: date
        });
    }

    render() {
        return (
            <>
                <DatePicker
                    selected={this.state.startDate}
                    selectsStart
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeStart}
                    className="datePicker"
                />

                <DatePicker
                    selected={this.state.endDate}
                    selectsEnd
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeEnd}
                    className="datePicker"
                />
            </>
        );
    }
}