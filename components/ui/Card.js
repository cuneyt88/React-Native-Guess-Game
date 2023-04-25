import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import Color from '../../constants/color'

const Card = ({children}) => {
  return (
    <View style={styles.card}>{children}</View>
  )
}

export default Card

const deviceWidth=Dimensions.get('window').width

const styles=StyleSheet.create({
    card:{
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:24,
        marginTop:deviceWidth < 380 ? 18 : 36,
        padding:16,
        backgroundColor:Color.primary800,
        borderRadius:8,
        elevation:4,
        shadowColor:'black',
        textShadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.25,
    },
})