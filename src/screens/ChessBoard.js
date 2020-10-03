import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, } from 'react-native';

const {width,height} = Dimensions.get('window')
const CHESSBOARD = [
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0]
]
export default class ChessBoard extends Component {
    // display(chessBoxSquare) {
    //     return chessBoxSquare;
    // }
    onChessBoard() {
        let rows =[]
        for (let i = 1; i <= 8; i++) {
            let mColor = i%2 != 0 ? 0 : 1
            let columns =[];
            for (let j = 1; j <= 8; j++) {
                if(j>1){
                    mColor= Math.abs(mColor-1)
                }
                columns.push(<View style={[styles.boxStyle , {backgroundColor: mColor?'white':'black' }]}></View>)                                        
                
            }
            rows.push(columns)
        }
        return rows
        // const chessBlack = [], chessWhite = [];
        // let a, b;
        // for (let i = 1; i <= 8; i++) {
        //     for (let j = 1; j <= 8; j++) {
        //         if (j % 2 == 0) {
        //             a = <View style={{ height: 50, width: 50, backgroundColor: "black" }}></View>;
        //             chessBlack.push(a);
        //         } else {
        //             b = <View style={{ height: 50, width: 50, backgroundColor: "white" }}></View>;
        //             chessWhite.push(b);
        //         }
        //     }
        // }
        // // console.log(chessBlack.length);
        // // console.log(chessWhite.length);
        // for (let i = 1; i <= 8; i++) {
        //     for (let j = 1; j <= 8; j++) {
        //         if (j % 2 != 0) {
        //             this.display(chessBlack[j]);
        //         } else {
        //             this.display(chessWhite[j]);
        //         }
        //     }
        // }
    }

    render() {
        return (

            <View style={styles.mainContainer}>
                {/* {this.onChessBoard()} */}
                {CHESSBOARD.map((item)=>{
                    return <View style={{flexDirection:'row'}}>
                        {item.map((subItem)=><View style={[styles.boxStyle , {backgroundColor: subItem?'red':'black' }]} /> )}
                        </View>
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // backgroundColor: 'red'
    },

    boxStyle : {
        height : width / 8,
        width : width / 8,
    }

    
})