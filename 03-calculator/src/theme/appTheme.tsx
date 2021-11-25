import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,

  },
  mathResult: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
  },
  smallMathResult: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: '#333333',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '300'
  },
});