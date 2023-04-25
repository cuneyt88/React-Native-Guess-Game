import { useState } from 'react';
import {useFonts} from 'expo-font'
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import AppLoading from 'expo-app-loading'
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import Color from './constants/color';
import GameOverScreen from './screens/GameOverScreen'

export default function App() {

  const [userNumber, setUserNumber] = useState()
  const [gameIsOver, setGameIsOver] = useState(true)
  const [guessRounds, setGuessRounds] = useState(0)

  const [fontsLoaded]=useFonts({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if(!fontsLoaded ){
    return <AppLoading/>
  }

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }
  
  function gameOverHandler(numberOfRounds){
    setGameIsOver(true)
    setGuessRounds(numberOfRounds)
  }

  function startNewGmaeHandler(){
    setUserNumber(null);
    setGuessRounds(0)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if(gameIsOver && userNumber){
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGmaeHandler}/>
  }




  return (
    <LinearGradient colors={[Color.primary700, Color.accent500]} style={styles.rootScren}>
      <ImageBackground source={require('./assets/images/dices.jpg')} resizeMode='cover' style={styles.rootScren} imageStyle={styles.backgroundImage}>
      <SafeAreaView style={styles.rootScren}>
       {screen}
      </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    
  );
}

const styles = StyleSheet.create({
  rootScren:{
    flex:1
  },
  backgroundImage:{
    opacity:0.4
  }
});
