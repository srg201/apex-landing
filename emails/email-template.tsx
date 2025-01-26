import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Text
} from "@react-email/components";

interface PlaidVerifyIdentityEmailProps {
  name?: string;
  email?: string;
  problem?: string;
}

const baseUrl = process.env.NEXT_PUBLIC_CLIENT_URL || `http://localhost:3000`;

export const EmailTemplate = ({
  name,
  email,
  problem,
}: PlaidVerifyIdentityEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/logo-dark.svg`}
          width="212"
          height="88"
          alt="Plaid"
          style={logo}
        />
        <Text style={tertiary}>Request From Website</Text>
        <Text style={paragraph}>{name}</Text>
        <Text style={paragraph}>{email}</Text>
        <Text style={paragraph}>{problem}</Text>
      </Container>
    </Body>
  </Html>
);

EmailTemplate.PreviewProps = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  problem: 'I forgot my password',
} as PlaidVerifyIdentityEmailProps;

export default EmailTemplate;

const main = {
  backgroundColor: "#ffffff",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #eee",
  borderRadius: "5px",
  boxShadow: "0 5px 10px rgba(20,50,70,.2)",
  marginTop: "20px",
  maxWidth: "360px",
  margin: "0 auto",
  padding: "68px 0 130px",
};

const logo = {
  margin: "0 auto",
};

const tertiary = {
  color: "#0a85ea",
  fontSize: "11px",
  fontWeight: 700,
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  height: "16px",
  letterSpacing: "0",
  lineHeight: "16px",
  margin: "16px 8px 8px 8px",
  textTransform: "uppercase" as const,
  textAlign: "center" as const,
};


const paragraph = {
  color: "#444",
  fontSize: "15px",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  letterSpacing: "0",
  lineHeight: "23px",
  padding: "0 40px",
  margin: "0",
  textAlign: "center" as const,
};
