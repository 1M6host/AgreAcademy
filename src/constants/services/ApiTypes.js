import { apiConst } from "./apiConst";

export const UrlTypes = {
    SignUp: apiConst.Registration + "NewRegistration",
    VerifyOTP: apiConst.Registration + "OTPVerify",
    SetPIN: apiConst.Registration + "SetPIN",
    Login: apiConst.Login + "Authentication",
    ForgotPassword: apiConst.Login + "ForgotPassword",
    ResetPassword: apiConst.Login + "ResetPassword",
}