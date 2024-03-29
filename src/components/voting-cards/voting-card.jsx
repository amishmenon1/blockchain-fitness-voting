import React from "react";
import { Card } from "react-bootstrap";
import { StyledButton } from "components/button";

function VotingCard({ variant, voteDisabled = false, voteCallback }) {
  const styles = {
    button: {
      backgroundColor: "#D6DBDF",
      color: "#000000",
    },
    image: {
      objectFit: "cover",
      borderRadius: 40,
      height: "80px",
    },
    card: {
      width: "18rem",
    },
    header: {
      marginTop: "10px",
      marginBottom: "10px",
      fontFamily: "cursive",
      fontSize: "large",
    },
  };
  return (
    <Card
      key={variant.value}
      variant="light"
      style={styles.card}
      className="mb-2 img-fluid"
    >
      <Card.Img src={variant.image} style={styles.image} />
      <Card.Header style={styles.header}>{variant.text}</Card.Header>
      <Card.Body>
        <StyledButton
          type="submit"
          onClick={() => voteCallback(variant)}
          value={variant.value}
          key={variant.value}
          disabled={voteDisabled}
          hoverEnabled={true}
          className="btn btn-primary btn-block btn-lg"
          style={styles.button}
          aria-label={variant.value}
        >
          Vote!
        </StyledButton>
      </Card.Body>
    </Card>
  );
}

export default VotingCard;
