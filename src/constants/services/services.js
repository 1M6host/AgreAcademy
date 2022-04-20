import Api from "./api";
import { UrlTypes } from "./ApiTypes";

export const services = {
  signUp: (data) => Api.post(UrlTypes.SignUp, data, (response) => response),
  verifyOTP: (data) =>
    Api.get(UrlTypes.VerifyOTP + "?" + data, (response) => response),
  setPIN: (data) =>
    Api.get(UrlTypes.SetPIN + "?" + data, (response) => response),
  login: (data) => Api.get(UrlTypes.Login + "?" + data, (response) => response),
  forgotPassword: (data) =>
    Api.get(UrlTypes.ForgotPassword + "?" + data, (response) => response),
  resetPassword: (data) =>
    Api.get(UrlTypes.ResetPassword + "?" + data, (response) => response),
  getCourseType: () => Api.get(UrlTypes.GetCourseType, (response) => response),
  getInstituteById: (data) =>
    Api.get(UrlTypes.GetInstituteById + "?" + data, (response) => response),
  getCourseByInstituteId: (data) =>
    Api.get(
      UrlTypes.GetCourseByInstituteId + "?" + data,
      (response) => response
    ),
  getSubjectDetails: (data) =>
    Api.get(
      UrlTypes.GetSubjectByCourseAndInstitutionsID + "?" + data,
      (response) => response
    ),
  addNewStudent: (data) =>
    Api.post(UrlTypes.AddNewStudent, data, (response) => response),
};
