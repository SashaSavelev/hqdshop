'use client';

import { useState, useEffect } from 'react';
import styles from './Input.module.css';
import { Filters } from './Input.props';
import { useRouter } from 'next/navigation';
import { useDebounce } from 'use-debounce';
import cn from 'classnames';
import { IoMdCloseCircle } from 'react-icons/io';
import { Button } from '@/components';

const Input = (): JSX.Element => {
    const router = useRouter();

    const [filters, setFilters] = useState<Filters>({
        name: '',
        price: '',
    });

    const [query] = useDebounce(filters, 700);
    useEffect(() => {
        if (!query.name && !query.price) {
            router.push('/');
        } else {
            router.push(`/?name=${query.name}&price=${query.price}`);
        }
    }, [query.name, query.price, router]);

    return (
        <>
            <form className={styles.form}>
                <div className={cn(styles.input_box, styles.input_box_name)}>
                    <label htmlFor="name" className={cn(styles.label_name, styles.label)}>
                        Вкус:
                    </label>
                    <input
                        id="name"
                        onChange={e => setFilters(cur => ({ ...cur, name: e.target.value }))}
                        type="text"
                        value={filters.name}
                        placeholder="Banana"
                        className={cn(styles.input_name)}
                    />
                </div>
                <div className={cn(styles.input_box, styles.range)}>
                    <label className={styles.label} htmlFor="price">
                        Цена: {filters.price == '' ? '' : filters.price}
                    </label>
                    <input
                        className={cn(styles.input_range)}
                        onChange={e => setFilters(cur => ({ ...cur, price: e.target.value }))}
                        type="range"
                        id="price"
                        min="500"
                        max="1600"
                        step="100"
                    />
                </div>
                <Button title="Сlose button" onClick={() => setFilters({ name: '', price: '' })} appearance="imageButton" size="big">
                    <IoMdCloseCircle className={styles.button} />
                </Button>
            </form>
        </>
    );
};
export default Input;
