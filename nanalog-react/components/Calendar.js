import React, {Component, PropTypes} from 'react';
import moment from 'moment';
import createDateObjects from './createDateObjects';
import CalendarDate from './CalendarDate';

// npm의 package인데 custom해야 될 부분들이 있어서 가져온 component

function getMonth(month, current_month) {
    let return_val = [];
    for (let i = 0; i < 12; i++) {
        if (i == (current_month - 1)) {
          return_val.push(
              <div className="column">
                  <div className="Calendar-day-item Calender-current-month" >
                      {month[i]}</div>
              </div>
          );
        } else {
            return_val.push(
                <div className="column">
                    <div className="Calendar-day-item">
                        {month[i]}</div>
                </div>
            );
        }
    }
    return (
        <div className="ui twelve column grid">
            {return_val}
        </div>
    )
}
function getDay(day) {
    return (
        <div className="column">
            <div className="Calendar-day-item">
                {day}</div>
        </div>
    )
}
// createDateObjects 에서  return된 date를 renderDate
function renderDate(day, i, props) {
    return (<CalendarDate key={`day-${i}`} pageId={day.pageId} day={day.day}/>)

}
export default class Calendar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            monthArray: [
                'JAN',
                'FEB',
                'MAR',
                'APR',
                'MAY',
                'JUN',
                'JUL',
                'AUG',
                'SEP',
                'OCT',
                'NOV',
                'DEC'
            ],
            dayArray: [
                'MON',
                'TUE',
                'WED',
                'THU',
                'FRI',
                'SAT',
                'SUN'
            ]
        }
    }

    render() {
        // < 2016 >   (laquo, date.format('YYYY'), laquo)
        // createDateObjects = 이번달 달력에 들어갈 date들을 계산하고 return해주는 function
        // return된 date를 가지고 renderDate
        const {
            date,
            weekOffset,
            renderDay,
            onNextMonth,
            onPrevMonth,
            onPickDate,
            pageList
        } = this.props;
        return (
            <div className='Calendar'>
                <div className='Calendar-header'>
                    <div className='Calendar-indicator'>
                        <div className='ui three column grid'>
                            <img className="laquo" src={require('../images/btn-prev.svg')} onClick={onPrevMonth}/>
                            <div className='Calendar-header-currentDate'>{date.format('YYYY')}</div>
                            <img className="laquo" src={require('../images/btn-next.svg')} onClick={onNextMonth}/>
                        </div>
                    </div>

                    {getMonth(this.state.monthArray, date.format('MM'))}

                    <div className="ui seven column grid">
                        <div className="row">
                            {this.state.dayArray.map(getDay)}
                        </div>
                    </div>
                </div>
                <div className='Calendar-grid'>
                    <div className='ui seven column grid'>
                        {createDateObjects(date, weekOffset, pageList).map((day, i) => renderDate(day, i, this.props))}
                    </div>
                </div>
            </div>
        );
    }
}
Calendar.defaultProps = {
    weekOffset: 0,
    renderDay: day => day.format('D')
}
Calendar.propTypes = {
    weekOffset: PropTypes.number.isRequired,
    date: PropTypes.object.isRequired,
    renderDay: PropTypes.func,
    pageList: PropTypes.array,
    onNextMonth: PropTypes.func.isRequired,
    onPrevMonth: PropTypes.func.isRequired
}
