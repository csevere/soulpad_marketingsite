import React, { CSSProperties } from "react";
import Grid from "@mui/material/Grid2";
import { spacing, funFont1 } from "../styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";

interface AboutContentProps {
  link?: string;
  point: {
    title: string;
    number: string;
    title2: string;
    numbers?: string[];
    bullets?: string[];
    highlight?: string;
    p?: string;
    p1?: string;
    p2?: string;
    link?: string;
  };
}

const AboutPageContent: React.FC<AboutContentProps> = ({ point }) => {
  const bodyTextStyles: CSSProperties = {
    textAlign: "left",
    paddingLeft: `${spacing.sm}em`,
    marginTop: `${spacing.xs}em`,
  };

  const contentStyles: CSSProperties = {
    marginTop: spacing.lg,
  };
  const isMobile = useMediaQuery("(max-width:600px)");

  const numberStyles: CSSProperties = {
    paddingRight: `${spacing.sm / 2}em`,
  };

  const blockquoteStyles: CSSProperties = {
    fontFamily: "Galindo, sans-serif",
    fontWeight: "500",
    fontSize: "1.5rem",
    textAlign: "center",
    padding: `${spacing.md}em`,
    width: isMobile ? "unset" : "50%",
    margin: "auto",
  };

  return (
    <Grid
      container
      flexDirection="column"
      className="about-content"
      style={contentStyles}
    >
      <Typography variant="body1" style={bodyTextStyles}>
        {point.title}
        <span style={funFont1}>{point.number}</span>
        {point.title2}
      </Typography>

      {point.bullets && (
        <ul
          style={{
            listStyleType: "none",
            paddingLeft: spacing.md,
            margin: "0",
          }}
        >
          {point.bullets.map((bullet, index) => (
            <li
              key={index}
              style={{
                marginBottom: spacing.sm,
                display: "flex",
              }}
            >
              <Box className="number" sx={funFont1}>
                <div style={numberStyles}>{point.numbers?.[index]}</div>
              </Box>
              <Typography variant="body1" style={bodyTextStyles}>
                {bullet}
              </Typography>
            </li>
          ))}
        </ul>
      )}

      {point.highlight && (
        <blockquote style={blockquoteStyles}>{point.highlight}</blockquote>
      )}

      <Typography variant="body1" style={bodyTextStyles}>
        {point.p}
        {point.link && (
          <a
            href={point.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#ff6105", textDecoration: "underline" }}
          >
            (teens-tiktok-addiction-lawsuit-investigation-documents)
          </a>
        )}
      </Typography>

      <Typography variant="body1" style={bodyTextStyles}>
        {point.p1}
      </Typography>

      <Typography variant="body1" style={bodyTextStyles}>
        {point.p2}
      </Typography>
    </Grid>
  );
};

export default AboutPageContent;
