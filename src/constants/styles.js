import { StyleSheet } from "react-native";
import { Colors } from "./Colors";
import { Fontsize } from "./Fontsize";
import { FontWeight } from "./FontWeights";
import { SHeight, SWidth } from "./Utls";

export const iconSize = SHeight(2);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerStyle: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SWidth(5),
    backgroundColor: Colors.white,
    elevation: 5,
    zIndex: 5,
  },
  container_loader_center_all: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    backgroundColor: Colors.white_Alpha_loader,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  container_Align_Center_All: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container_Align_Center_Justify_Space_Evenly: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  footerContainerStyle: {
    flexDirection: "row",
    width: SWidth(100),
    justifyContent: "space-between",
    paddingHorizontal: SWidth(5),
    paddingBottom: SWidth(5),
  },
  FormInputContainer: {
    marginHorizontal: SWidth(2.5),
    marginVertical: SWidth(1.5),
    flexDirection: "row",
    alignItems: "center",
  },
  text_H1: {
    color: Colors.black,
    fontSize: Fontsize.H1,
    fontWeight: FontWeight.bold,
  },
  text_H2: {
    color: Colors.black,
    fontSize: Fontsize.H2,
    fontWeight: FontWeight.bold,
  },
  text_H2_normal: {
    color: Colors.black,
    fontSize: Fontsize.H2,
    fontWeight: FontWeight.normal,
  },
  text_normal: {
    color: Colors.black,
    fontSize: Fontsize.normal,
    fontWeight: FontWeight.normal,
  },
  text_normal_bold: {
    color: Colors.black,
    fontSize: Fontsize.normal,
    fontWeight: FontWeight.bold,
  },
  text_normal_bold_timer: {
    color: Colors.fbBlue,
    fontSize: Fontsize.normal,
    fontWeight: FontWeight.bold,
  },
  text_title: {
    color: Colors.grey,
    fontSize: Fontsize.title,
    fontWeight: FontWeight.normal,
  },
  commonBackStyle: {
    backgroundColor: "#d3d3d3",
  },
  commonBackTextStyle: {
    color:'#000'
  },
  AppLogoStyle: {
    height: SHeight(20),
    aspectRatio: 1,
    marginVertical: SHeight(1),
  },
  AppButtonStyle: {
    width: SWidth(85),
    height: SHeight(6),
    marginTop: SHeight(2),
    borderRadius: SWidth(1),
  },
  AppButtonTextStyle: {
    color: Colors.white,
    fontSize: Fontsize.normal,
    fontWeight: FontWeight.bold,
  },
  AppBlueButtonStyle: {
    backgroundColor: "blue",
    width: SWidth(30),
    height: 30,
    borderRadius: SWidth(1),
    alignItems: "center",
    justifyContent: "center",
  },
  AppBlueButtonTextStyle: {
    color: Colors.white,
    fontSize: Fontsize.normal,
    fontWeight: FontWeight.bold,
  },
  LoginInputView: {
    width: SWidth(90),
    marginHorizontal: SWidth(2.5),
    padding: SWidth(2.5),
    paddingVertical: SHeight(3),
    borderRadius: SWidth(2),
    backgroundColor: Colors.white_Alpha_70,
  },
  TextInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: SHeight(1.5),
    paddingHorizontal: SHeight(1),
    borderRadius: SWidth(1),
    backgroundColor: Colors.white,
    borderWidth: StyleSheet.hairlineWidth,
  },
  textInput: {
    flex: 1,
  },
  CheckBoxContainerStyle: {
    marginHorizontal: SWidth(2),
  },
  inputRadius: {
    textAlign: "center",
    backgroundColor: "red",
    flex: 1,
    marginHorizontal: SWidth(2),
    borderRadius: SWidth(1),
    backgroundColor: Colors.white,
    borderWidth: StyleSheet.hairlineWidth,
  },
  OTPInputTextView_Style: {
    marginVertical: SHeight(5),
  },
  OTPInputTextView_Container_Style: {
    flexDirection: "row",
  },
  modalContentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white_Alpha_loader,
  },
  modalContentInnerContainer: {
    width: SWidth(80),
    backgroundColor: Colors.white,
    elevation: 5,
  },
  checkBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
