import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface DefaultBlurProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    src: string;
    alt: string;
}
