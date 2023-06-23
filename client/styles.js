import { StyleSheet, Dimensions  } from 'react-native';
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({

  container: {
    backgroundColor: '#242424',
    color: "white",
    flex: 1,
    flexDirection: 'column',
    zIndex: -1000,
  },
  intro: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
  },
  title: { fontSize: 18, fontWeight: 'bold', color: "white", display: 'flex', flex: 1, textAlign: 'center', marginLeft: 20, },
  addHabitContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: "white",
    borderRadius: 9,
    marginTop: 40,
    marginRight: 30,
    marginBottom: 40,
    marginLeft: 30,
    padding: 5,
    zIndex: -1000,
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
  },
  deleteBtnContainer: {
    display: "flex",
    alignItems: 'flex-end',
  },
  deleteButton: {
    backgroundColor: '#E32636',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 8,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  habitsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  habitContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
    gap: 5,
  },
  checkbox: {
    display: "flex",
    alignItems: 'flex-end',
    padding: 0,
    margin: 0,
  },
  habitsElements: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    borderRadius: 5,
    padding: 10,
    marginLeft: 10,
  },
  input: {
    maxWidth: 200,
  },
  habitText: {
    flex: 1,
    marginLeft: 10,
    color: "white"
  },
  dashboardContainer: {
    backgroundColor: '#242424',
    color: 'white',
    flex: 1,
  },
  menuIcon: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center', 
    gap: 1,
  },
  line: {
    width: 30,
    height: 3,
    backgroundColor: '#ffffff',
    marginBottom: 5,
  },
  lineClicked: {
    width: 25,
    marginBottom: 5,
  },
  ProgressBarContainer: {
    width: width,
    height: 200,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    marginTop: 40,
    zIndex: -1000,
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: 'red',
    backgroundColor: 'transparent',
    borderWidth: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 
