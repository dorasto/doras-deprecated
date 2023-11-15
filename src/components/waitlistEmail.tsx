import * as React from 'react';
import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Text,
} from '@react-email/components';

export function WaitlistEmailSend() {

    return (
        <Html>
            <Head />
            <Preview>You're On The Waitlist - Doras.to</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={h1}>Welcome to the waitlist for Doras.to</Heading>
                    <Heading style={h2}>We can't wait to have you join us.</Heading>

                    <Text style={{ ...text, marginBottom: '14px' }}>
                        We know you're eager, but the moment we're ready to have you, we'll let you know. We'll give you an email once we're ready to have you join us. In the meantime, you can join our Discord server or follow us on X to get updates on our progress.
                    </Text>
                    <Text>
                        Regards,<br></br>
                        The Doras Team
                    </Text>
                    <Container style={flex}>
                        <Link
                            href="https://gezel.io/discord"
                            target="_blank"
                            style={{ ...button, backgroundColor: "#4e5ae0" }}>Join The Discord</Link>
                        <Link
                            href="https://x.com/doras_to"
                            target="_blank"
                            style={{ ...button, backgroundColor: "#000000" }}>Follow us on X</Link>
                    </Container>
                </Container>
            </Body>
        </Html >
    );
}
const main = {
    backgroundColor: '#ffffff',
};

const container = {
    paddingLeft: '12px',
    paddingRight: '12px',
    margin: '0 auto',
};

const h1 = {
    color: '#333',
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '10px 0',
    padding: '0',
};
const h2 = {
    color: '#333',
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '20px 0',
    padding: '0',
};

const flex = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const button = {
    borderRadius: '5px',
    color: '#ffffff',
    display: 'inline-block',
    padding: '16px',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    marginRight: '20px',
    ':lastChild': {
        marginRight: '0',
    },
};

const text = {
    color: '#333',
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '14px',
    margin: '24px 0',
};



export default WaitlistEmailSend;