import styles from './DefaultBlur.module.css';
import Image from 'next/image';
import { DefaultBlurProps } from './DefaultBlur.props';
import { getPlaiceholder } from 'plaiceholder';

export const DefaultBlur = async ({ src, alt }: DefaultBlurProps): Promise<JSX.Element> => {

  

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src={src} fill alt={alt} />
            </div>
        </div>
    );
};
