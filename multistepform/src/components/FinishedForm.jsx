import React from "react";
import "./FinishedForm.css";

import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  verysatisfied: <BsFillEmojiHeartEyesFill />
}

function FinishedForm({ data}) {
  return (
    <div className="thanks-container">
      <h2>A Empresa agradece!</h2>
      <p>Para finalizar O.S clique no botão de enviar abaixo.</p>
      <h3> Resumo da OS:</h3>
      <p className="review-data">
        <span>OS: </span>{data.os}
      </p>
      <p className="review-data">
        <span>Técnico:</span> {data.name}
      </p>
      <p className="review-data">
        <span>Satisfação:</span>
        {emojiData[data.review]}
      </p>
      <p className="review-data">
        <span>Comentário:</span>
        {data.comment}
      </p>
    </div>
  );
}

export default FinishedForm;
