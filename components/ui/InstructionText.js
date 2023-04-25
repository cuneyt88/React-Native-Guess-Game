import React from 'react'
import Color from '../../constants/color'
import { StyleSheet, Text } from 'react-native'

const InstructionText = ({children, style}) => {
  return (
    <Text style={[styles.instructionText, style]}>{children}</Text>
  )
}

export default InstructionText

const styles=StyleSheet.create({
    instructionText:{
        fontFamily:'open-sans',
        color:Color.accent500,
        fontSize:24
    }
})