import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email?: string;
  message: string;
  source?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  message,
  source = "Contact form",
}) => (
  <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.5, color: "#111" }}>
    <h2 style={{ margin: "0 0 12px" }}>New message from your portfolio</h2>
    <p style={{ margin: "0 0 4px" }}>
      <strong>Source:</strong> {source}
    </p>
    <p style={{ margin: "0 0 4px" }}>
      <strong>Name:</strong> {fullName}
    </p>
    {email && (
      <p style={{ margin: "0 0 12px" }}>
        <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
      </p>
    )}
    <blockquote
      style={{
        margin: 0,
        padding: "12px 16px",
        background: "#f4f4f5",
        borderLeft: "4px solid #a855f7",
        whiteSpace: "pre-wrap",
      }}
    >
      {message}
    </blockquote>
  </div>
);
