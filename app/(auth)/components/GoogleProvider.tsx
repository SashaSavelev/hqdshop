


import { doSocialLogin } from "@/app/actions";
import { Button } from "@/components";
import Image from "next/image";
import styles from '../auth.module.css'

export const GoogleProvider = (): JSX.Element => {
    return <>
      <form action={doSocialLogin} className={styles.form}>


       
  <Button size="medium" appearance="imageButton" type="submit" name="action" value="google" >
    <Image src='/googleicon.webp' width={20} height={20}></Image>
    <span>Google</span> 
  </Button>
      </form>
    </>;
};
