import GetDomain from "@/api/utils/GetDomain";
export const urlLogin = `${GetDomain()}/login`;
export const urlRegister = `${GetDomain()}/register`;
export const urlLogout = `${GetDomain()}/logout`;
export const urlGoogleCallback = `${GetDomain()}/auth/callback/google`;
export const urlFacebookCallback = `${GetDomain()}/auth/callback/facebook`;
export const urlAuthGoogle = `${GetDomain()}/auth/google`;
export const urlAuthFacebook = `${GetDomain()}/auth/facebook`;
