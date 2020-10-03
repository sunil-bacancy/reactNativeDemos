import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';

export default class CalendarDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCalendar: false,
            selectedDate: '',
            markDates: {},
        }
    }

    componentDidMount = async () => {

        let FetchDate = await AsyncStorage.getItem('MYDATE');
        let presentDate = JSON.parse(FetchDate);
        // alert(presentDate)
        this.setState({
            selectedDate: presentDate,
        });
        let markDate;
        let arr = [];
        let obj = {
            date: moment(presentDate).format('YYYY-MM-DD'),
            marked: true,
            selected: true, selectedColor: 'red'
        }
        arr.push(obj);

        arr.map((item, key) => {
            markDate = { ...markDate, [item.date]: { ...item } }
        })
        this.setState({ markDates: markDate })
    }

    onDayPress = async (day) => {
        let a = await AsyncStorage.setItem('MYDATE', JSON.stringify(day.dateString))
        this.setState({ selectedDate: day.dateString });
        let markDate;
        let arr = [];
        let obj = {
            date: moment(day.dateString).format('YYYY-MM-DD'), marked: true,
            selected: true, selectedColor: 'red'
        }
        arr.push(obj);

        arr.map((item, key) => {
            markDate = { ...markDate, [item.date]: { ...item } }
        })
        this.setState({ markDates: markDate })
    }

    onShowCalendar() {
        // <CalendarComponent />
        return (<Calendar style={{ borderWidth: 1, borderColor: 'red', height: 350, }}
            theme={{ calendarBackground: 'aqua', selectedDotColor: 'green', selectedDayBackgroundColor: 'red', textSectionTitleColor: 'orange', todayTextColor: 'red', monthTextColor: 'blue', }}
            markedDates={this.state.markDates}
            onDayPress={(day) => this.onDayPress(day)}>

        </Calendar>)
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                <TouchableOpacity
                    style={{ minWidth: 150, height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#2AC062', display: 'flex', borderRadius: 5, shadowColor: '#2AC062', shadowOpacity: 0.4, shadowRadius: 20, shadowOffset: { height: 10, width: 5 }, }}
                    onPress={() => { alert('button pressed'); }}>
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>press me</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'blue', height: 40, width: "30%", justifyContent: 'center', alignItems: 'center' }} onPress={() => this.setState({ showCalendar: !this.state.showCalendar })} >
                    <Text style={{ color: 'white' }}>Open Calendar</Text>
                </TouchableOpacity>
                {(this.state.showCalendar) ? this.onShowCalendar() : <Text>{'shfcjdfcjds'}</Text>}
            </View>
        )
    }
}