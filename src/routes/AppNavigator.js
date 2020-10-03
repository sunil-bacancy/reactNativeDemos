import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import FlexLayout1 from '../screens/FlexLayout1';
import FlexLayout2 from '../screens/FlexLayout2';
import DesignScreen from '../screens/DesignScreen';
import TextInput from '../screens/TextInput';
import ImageTouchable from '../screens/ImageTouchable';
import List from '../screens/List';
import Dashboard from '../screens/Dashboard';
import PanResponderDemo from '../screens/PanResponder';
import ChessBoard from '../screens/ChessBoard';
import DesignFlatlist from '../screens/DesignFlatlist';
import Login from '../screens/Login'
import Registration from '../screens/Registration';
import FavoriteList from '../screens/FavoriteList';
import DashboardNew from '../screens/DashboardNew';
import DrawerComponent from '../components/DrawerComponent';
import AppImages from '../image';
import React from 'react';
import { Image } from 'react-native';
import LodashDemo from '../screens/LodashDemo';
import CalendarDemo from '../screens/CalendarDemo';
import ReduxDemo from '../screens/ReduxDemo';
import LoginRegRedux from '../screens/LoginRegRedux';
import RegRedux from '../screens/RegRedux';
import ReduxCombineRHOC from '../screens/ReduxCombineRHOC';
import CameraGallery from '../screens/CameraGallery';
import FBGoogleSignin from '../screens/FBGoogleSignin';
import DemoKartik from '../screens/DemoKartik';

const DrawerNavigator = createStackNavigator({
    HomeScreen: { screen: HomeScreen },
    Dashboard: { screen: Dashboard },
    List: { screen: List },
    Login: { screen: Login },
    FlexLayout1: { screen: FlexLayout1 },
    FlexLayout2: { screen: FlexLayout2 },
    ChessBoard: { screen: ChessBoard },
})

const DrawerStackNavigator = createDrawerNavigator({
    DrawerNavigator: { screen: DrawerNavigator }
}, {
    drawerWidth: 150,
    drawerPosition: 'left',
    drawerType: "slide",
    drawerWidth: "75%",
    // drawerPosition: 'right',
    // drawerLockMode: 'locked-closed',
    contentComponent: () => <DrawerComponent />
})

const TabTopNavigation = createMaterialTopTabNavigator({
    DashboardNew: {
        screen: DashboardNew,
        navigationOptions: {
            title: 'Layout1',
            tabBarIcon: () => (
                <Image source={AppImages.username_icon} style={{ height: 25, width: 25 }}></Image>
            )
        }
    },

    FlexLayout2: {
        screen: FlexLayout2,
        navigationOptions: {
            title: 'Layout2',
            // tabBarVisible: false,
            gestureEnabled: true,
            swipEnabled: true,
            tabBarIcon: () => (
                <Image source={AppImages.password_icon} style={{ height: 25, width: 25 }}></Image>
            )
        }
    },

    DesignFlatlist: {
        screen: DesignFlatlist,
        navigationOptions: {
            title: 'Design',
            tabBarIcon: () => (
                <Image style={{ height: 25, width: 25 }} source={AppImages.phone_icon}></Image>
            )
        }
    },

    ChessBoard: {
        screen: ChessBoard,
        navigationOptions: {
            title: 'Chessboard',
            tabBarIcon: () => (
                <Image source={AppImages.phone_icon} style={{ height: 25, width: 25 }}></Image>
            )
        }
    },
}, {
    initialRouteName: 'DashboardNew',
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'grey',
        pressColor: 'grey',
        showLabel: true,
        showIcon: true,
        keyboardHidesTabBar: true,
        upperCaseLabel: false,

        style: {
            // backgroundColor: 'aqua',
            height: 70,
            justifyContent: 'space-between'
        },
        labelStyle: {
            fontSize: 10,
            textAlign: 'center',

        },
        indicatorStyle: {
            borderBottomColor: 'red',
            borderBottomWidth: 2
        }
    }
})

const TabNavigation = createBottomTabNavigator({

    DashboardNew: {
        screen: DashboardNew,
        navigationOptions: {
            title: 'Layout1',
            tabBarIcon: () => (
                <Image source={AppImages.username_icon} style={{ height: 30, width: 30 }}></Image>
            )
        }
    },

    TextInput: {
        screen: TextInput,
        navigationOptions: {
            title: 'Layout1',
            tabBarIcon: () => (
                <Image source={AppImages.username_icon} style={{ height: 30, width: 30 }}></Image>
            )
        }
    },

    FlexLayout2: {
        screen: FlexLayout2,
        navigationOptions: {
            title: 'Layout2',
            // tabBarVisible: false,
            gestureEnabled: true,
            swipEnabled: true,
            tabBarIcon: () => (
                <Image source={AppImages.password_icon} style={{ height: 30, width: 30 }}></Image>
            )
        }
    },

    DesignFlatlist: {
        screen: DesignFlatlist,
        navigationOptions: {
            title: 'Design',
            tabBarIcon: () => (
                <Image style={{ height: 30, width: 30 }} source={AppImages.phone_icon}></Image>
            )
        }
    },

    ChessBoard: {
        screen: ChessBoard,
        navigationOptions: {
            title: 'Chessboard',
            tabBarIcon: () => (
                <Image source={AppImages.phone_icon} style={{ height: 30, width: 30 }}></Image>
            )
        }
    },
}, {
    initialRouteName: 'DashboardNew',
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'grey',
        activeBackgroundColor: 'lightgrey',
        // showLabel: false,
        // showIcon: false,
        tabBarPotision: 'top',
        keyboardHidesTabBar: true,
        style: {
            // backgroundColor: 'aqua',
            borderTopWidth: 1
        },
        ellipsizeMode: 'tail',
        numberOfLines: 1,
        labelStyle: {
            fontSize: 12,
            textAlign: 'center',
        },
    }
})
const AutoStack = createStackNavigator({
    HomeScreen: { screen: HomeScreen },
    FlexLayout1: { screen: FlexLayout1 },
    FlexLayout2: { screen: FlexLayout2 },
    DesignScreen: { screen: DesignScreen },
    TextInput: { screen: TextInput },
    ImageTouchable: { screen: ImageTouchable },
    List: { screen: List },
    Dashboard: { screen: Dashboard },
    PanResponderDemo: { screen: PanResponderDemo },
    ChessBoard: { screen: ChessBoard },
    DesignFlatlist: { screen: DesignFlatlist },
    Login: { screen: Login },
    Registration: { screen: Registration },
    FavoriteList: { screen: FavoriteList },
    LodashDemo: { screen: LodashDemo },
    CalendarDemo: { screen: CalendarDemo },
    // TabNavigation: { screen: TabNavigation },
    // TabTopNavigation: { screen: TabTopNavigation },
    // DrawerStackNavigator: { screen: DrawerStackNavigator }
    DashboardNew: { screen: DashboardNew },
    ReduxDemo: { screen: ReduxDemo },
    LoginRegRedux: { screen: LoginRegRedux },
    RegRedux: { screen: RegRedux },
    ReduxCombineRHOC: { screen: ReduxCombineRHOC },
    CameraGallery: { screen: CameraGallery },
    FBGoogleSignin: { screen: FBGoogleSignin },
    DemoKartik: { screen: DemoKartik },
}, {
    headerMode: 'none',
});

const AuthStack = createStackNavigator({

    // DrawerStackNavigator,
    AutoStack,

    // TabTopNavigation,

    // TabNavigation,
}, {
    headerMode: 'none'
})

const AppNavigator = createAppContainer(AuthStack);

export default AppNavigator;
