import Container from '../components/Container';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import Paragraph from '../components/Paragraph';

const CommitmentPage = () => {
    return <Layout>
        <Container>
            <Heading level={1} textAlign="center">Our Commitment</Heading>
            <Paragraph>At Subaru, we believe every day gives us the opportunity to positively impact the world around us – from how we build our vehicles to how we support our customers and the communities they live in. We are committed to doing it right in every aspect. </Paragraph>
        </Container>
    </Layout>
}
export default CommitmentPage;