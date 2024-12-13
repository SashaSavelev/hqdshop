'use server';

import { signIn, signOut } from '@/auth';

export async function doSocialLogin(formData: string) {
    await signIn(formData, { redirectTo: '/' });
}
export async function doCredentialLogin(formData:FormData) {

  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    return response;
  } catch (err) {
    throw err;
  }
}

export async function doSocialLogout() {
    await signOut();
}
