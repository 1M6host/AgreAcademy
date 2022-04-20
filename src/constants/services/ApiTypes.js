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
  AddNewStudent: apiConst.student + "SaveStudent",
  GetSubjectByCourseAndInstitutionsID:
    apiConst.subject + "GetSubjectByCourseAndInstitutionsID",
};
