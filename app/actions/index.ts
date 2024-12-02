'use server';

import { signIn, signOut } from '@/app/lib/auth';

export async function doSocialLogin(formData: string) {
    await signIn(formData, { redirectTo: '/' });
}

export async function doCredentialLogin(formdata: FormData) {
 
  try {
 
      const response = await signIn('credentials', {
          email: formdata.get('email'),
          password: formdata.get('password'),
          redirect: false,
      });
      
      return response;
  } catch (error) {
      throw new Error(error);
  }
}
export async function doSocialLogout() {
    await signOut();
}
