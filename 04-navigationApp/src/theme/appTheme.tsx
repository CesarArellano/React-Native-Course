import { StyleSheet } from "react-native";

export const colors = {
  primary: '#5856D6'
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  mRight: {
    marginRight: 10,
  },
  title: {
    color: 'black',
    fontSize: 30,
    marginBottom: 10,
  },
  largeBtn: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  largeBtnText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 30,
  },
  menuText: {
    fontSize: 18,
    color: 'black'
  },
  menuBtn: {
    marginVertical: 10,
    flexDirection: 'row',
  }
});