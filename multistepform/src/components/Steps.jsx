import React from "react";
import "./Steps.css";

import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";
import { LuClipboardSignature } from "react-icons/lu";
import { FiSend } from "react-icons/fi";

const Steps = ({ currentStep }) => {
  return (
    <div className="steps">
      <div className="step active">
        <AiOutlineUser />
        <p>Ordem de serviço</p>
      </div>

      <div className={`step ${currentStep >= 1 ? "active": ""}`}>
        <AiOutlineStar />
        <p>Avaliação</p>
      </div>

      <div className={`step ${currentStep >= 1 ? "active": ""}`}>
      <LuClipboardSignature />
        <p>Assinatura</p>
      </div>

      <div className={`step ${currentStep >= 2 ? "active": ""}`}>
        <FiSend />
        <p>Envio</p>
      </div>

    </div>
  );
};

export default Steps;
