import Container from '../components/Container';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import Paragraph from '../components/Paragraph';

const CompanyPage = () => {
    return <Layout>
        <Container>
            <Heading level={1} textAlign="center">Our Company</Heading>
            <Paragraph>Select a Subaru model to start building.</Paragraph>
        </Container>
    </Layout>
}
export default CompanyPage;