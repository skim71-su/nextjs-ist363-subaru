import Layout from '../../components/Layout';
import { getAllVehicle } from '../../lib/api';
import Link from 'next/link';

export async function getStaticProps() {
    const vehicles = getAllVehicle();
    return {
        props: {
            vehicles
        }
    }
}

const VehiclesPage = ({ vehicles }) => {
    return <Layout>
        <h1>Vehicles</h1>
        <ul>
            {vehicles.map((vehicle, index) => {
                const { model, price, slug } = vehicle;
                return <li key={index}>
                    <h3>{model}</h3>
                    <h4>${price}</h4>
                    <p>
                        <Link href={`/vehicles/${slug}`}>Learn more</Link>
                    </p>
                </li>
            })}
        </ul>
       
    </Layout>
}
export default VehiclesPage;