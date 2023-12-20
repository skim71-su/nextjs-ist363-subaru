import Container from '../components/Container';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import Paragraph from '../components/Paragraph';

const OwnersPage = () => {
    return <Layout>
        <Container>
            <Heading level={1} textAlign="center">Owners</Heading>
            <Paragraph>Everything you need to know about keeping your Subaru adventure-ready for a lifetime of miles is right here.</Paragraph>
        </Container>
    </Layout>
}
export default OwnersPage;
