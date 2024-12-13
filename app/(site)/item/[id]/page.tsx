import { fetchProduct } from '@/lib/fetchProduct';
import Link from 'next/link';
const Item = async (props: { params: Promise<{ id: string }> }) => {
    const params = await props.params;

    const { id } = params;

    const productData = await fetchProduct(id);
    return <div>
    <p>{JSON.stringify(productData)}</p>
    <Link href={`/item/${id}/checkout`}>КУПИТЬ</Link>

    {/* `item/${item._id}` */}
    </div>;
};

export default Item;
