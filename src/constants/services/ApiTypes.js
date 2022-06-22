import { apiConst } from "./apiConst";

export const UrlTypes = {
  SignUp: apiConst.Registration + "NewRegistration",
  VerifyOTP: apiConst.Registration + "OTPVerify",
  SetPIN: apiConst.Registration + "SetPIN",
  Login: apiConst.Login + "Authentication",
  ForgotPassword: apiConst.Login + "ForgotPassword",
  ResetPassword: apiConst.Login + "ResetPassword",
  GetDashboard: apiConst.Dashboard + "DashboardItem",
  GetCourseType: apiConst.courseType + "GetAll",
  GetInstituteById: apiConst.courseTypeInstitutions + "GetByCourseTypeID",
  GetCourseByInstituteId: apiConst.course + "GetByCourseTypeInstitutionsID",
  GetStudent: apiConst.student + "GetAllStudent",
  AddNewStudent: apiConst.student + "SaveStudent",
  UpdateStudent: apiConst.student + "UpdateStudent",
  GetSubjectByCourseAndInstitutionsID:
    apiConst.subject + "GetSubjectByCourseAndInstitutionsID",
  GetChapterBySubjectID: apiConst.chapter + "GetChapterBySubjectID",
  GetTopicByChapterID: apiConst.topic + "GetTopicByChapterID",
  GetVideoSessionByTopicID: apiConst.VideoSession + "GetVideoSessionByTopicID",
  getPlanDetails: apiConst.courseFee + "GetCourseFee",
  SkipForTrial: apiConst.Subscription + "SkipForTrial",
  GetUserProfile: apiConst.Registration + "RegistrationDetails",
  CreateOrder: apiConst.order + "CreateOrder",
  UpdateOrder: apiConst.payment + "SavePayment",
};
