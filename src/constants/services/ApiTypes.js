import { apiConst } from "./apiConst";

export const UrlTypes = {
  SignUp: apiConst.Registration + "NewRegistration",
  VerifyOTP: apiConst.Registration + "OTPVerify",
  SetPIN: apiConst.Registration + "SetPIN",
  Login: apiConst.Login + "Authentication",
  ForgotPassword: apiConst.Login + "ForgotPassword",
  ResetPassword: apiConst.Login + "ResetPassword",
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
  SkipForTrial:apiConst.Subscription+"SkipForTrial"
};
