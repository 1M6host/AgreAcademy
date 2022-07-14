import Api from "./api";
import { UrlTypes } from "./ApiTypes";

export const services = {
  signUp: (data) => Api.post(UrlTypes.SignUp, data, (response) => response),
  verifyOTP: (data) =>
    Api.get(UrlTypes.VerifyOTP + "/" + data, (response) => response),
  setPIN: (data) =>
    Api.get(UrlTypes.SetPIN + "/" + data, (response) => response),
  login: (data) => Api.get(UrlTypes.Login + "?" + data, (response) => response),
  forgotPassword: (data) =>
    Api.get(UrlTypes.ForgotPassword + "?" + data, (response) => response),
  resetPassword: (data) =>
    Api.get(UrlTypes.ResetPassword + "?" + data, (response) => response),
  getDashboard: () => Api.get(UrlTypes.GetDashboard, (response) => response),
  getCourseType: () => Api.get(UrlTypes.GetCourseType, (response) => response),
  getInstituteById: (data) =>
    Api.get(UrlTypes.GetInstituteById + "/" + data, (response) => response),
  getCourseByInstituteId: (data) =>
    Api.get(
      UrlTypes.GetCourseByInstituteId + "/" + data,
      (response) => response
    ),
  getSubjectList: (data) =>
    Api.get(
      UrlTypes.GetSubjectByCourseAndInstitutionsID + "/" + data,
      (response) => response
    ),
  getSubjectDetails: (data) =>
    Api.get(
      UrlTypes.GetChapterBySubjectID + "/" + data,
      (response) => response
    ),
  getChapterDetails: (data) =>
    Api.get(UrlTypes.GetTopicByChapterID + "/" + data, (response) => response),

  addNewStudent: (data) =>
    Api.post(UrlTypes.AddNewStudent, data, (response) => response),

  getTopicDetails: (data) =>
    Api.get(
      UrlTypes.GetVideoSessionByTopicID + "?" + data,
      (response) => response
    ),

  updateStudent: (id, data) =>
    Api.post(UrlTypes.UpdateStudent + "/" + id, data, (response) => response),

  getStudents: (data) =>
    Api.get(UrlTypes.GetStudent + "/" + data, (response) => response),
  getPlanDetails: (data) =>
    Api.get(UrlTypes.getPlanDetails + "?" + data, (response) => response),
  createOrder: (data) =>
    Api.get(UrlTypes.CreateOrder + "?" + data, (response) => response),
  SkipForTrial: (data) =>
    Api.get(UrlTypes.SkipForTrial + "?" + data, (response) => response),
  GetUserProfile: (data) =>
    Api.get(UrlTypes.GetUserProfile + "/" + data, (response) => response),
  updateOrder: (data) =>
    Api.post(UrlTypes.UpdateOrder, data, (response) => response),
};
