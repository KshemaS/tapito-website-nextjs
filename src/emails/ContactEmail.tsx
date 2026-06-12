import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "react-email";

export interface ContactEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  country: string;
  reasonLabel: string;
  message: string;
}

const cell: React.CSSProperties = {
  padding: "10px 0",
  verticalAlign: "top",
};

const label: React.CSSProperties = {
  ...cell,
  width: "110px",
  color: "#64748b",
  fontSize: "13px",
  fontWeight: 600,
  paddingRight: "16px",
  whiteSpace: "nowrap",
};

const value: React.CSSProperties = {
  ...cell,
  color: "#0f172a",
  fontSize: "14px",
};

export default function ContactEmail({
  firstName,
  lastName,
  email,
  company,
  country,
  reasonLabel,
  message,
}: ContactEmailProps) {
  return (
    <Html lang="en">
      <Head />
      <Preview>
        {reasonLabel} from {firstName} {lastName} at {company}
      </Preview>
      <Body style={{ backgroundColor: "#f1f5f9", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif", margin: 0, padding: "40px 0" }}>
        <Container style={{ maxWidth: "600px", margin: "0 auto" }}>

          {/* ── Header ─────────────────────────────────────── */}
          <Section style={{ background: "linear-gradient(135deg,#09358c 0%,#05a0ec 100%)", borderRadius: "12px 12px 0 0", padding: "32px 40px" }}>
            <Heading style={{ color: "#ffffff", fontSize: "20px", fontWeight: 700, margin: "0 0 6px" }}>
              New Contact Form Submission
            </Heading>
            <Text style={{ color: "rgba(255,255,255,0.75)", fontSize: "13px", margin: 0 }}>
              {reasonLabel} · tapito.ai
            </Text>
          </Section>

          {/* ── Body ───────────────────────────────────────── */}
          <Section style={{ backgroundColor: "#ffffff", padding: "32px 40px" }}>

            {/* Sender summary */}
            <Heading as="h2" style={{ color: "#0f172a", fontSize: "16px", fontWeight: 700, margin: "0 0 20px" }}>
              {firstName} {lastName}
            </Heading>

            {/* Detail table */}
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  <td style={label}>Email</td>
                  <td style={value}>
                    <Link href={`mailto:${email}`} style={{ color: "#05a0ec", textDecoration: "none" }}>
                      {email}
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td style={label}>Company</td>
                  <td style={value}>{company}</td>
                </tr>
                <tr>
                  <td style={label}>Country</td>
                  <td style={value}>{country}</td>
                </tr>
                <tr>
                  <td style={label}>Reason</td>
                  <td style={value}>
                    <span style={{ display: "inline-block", backgroundColor: "#eff6ff", color: "#09358c", fontSize: "12px", fontWeight: 600, padding: "2px 10px", borderRadius: "999px", border: "1px solid #bfdbfe" }}>
                      {reasonLabel}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>

            <Hr style={{ borderColor: "#e2e8f0", margin: "24px 0" }} />

            {/* Message */}
            <Text style={{ color: "#64748b", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 8px" }}>
              Message
            </Text>
            <Text style={{ color: "#1e293b", fontSize: "14px", lineHeight: "1.7", margin: 0, whiteSpace: "pre-wrap" }}>
              {message}
            </Text>

            <Hr style={{ borderColor: "#e2e8f0", margin: "24px 0" }} />

            {/* Reply CTA */}
            <Link
              href={`mailto:${email}?subject=Re: ${reasonLabel} inquiry`}
              style={{ display: "inline-block", backgroundColor: "#09358c", color: "#ffffff", fontSize: "14px", fontWeight: 600, padding: "12px 24px", borderRadius: "8px", textDecoration: "none" }}
            >
              Reply to {firstName}
            </Link>
          </Section>

          {/* ── Footer ─────────────────────────────────────── */}
          <Section style={{ backgroundColor: "#f8fafc", borderRadius: "0 0 12px 12px", padding: "16px 40px", borderTop: "1px solid #e2e8f0" }}>
            <Text style={{ color: "#94a3b8", fontSize: "12px", margin: 0 }}>
              Submitted via the contact form at{" "}
              <Link href="https://tapito.ai/contact" style={{ color: "#94a3b8" }}>
                tapito.ai/contact
              </Link>
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}
