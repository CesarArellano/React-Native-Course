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
    marginBottom: 10,
  },
  smallMathResult: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  button: {
    height: 80,
    borderRadius: 100,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '400'
  },
});