import React from "react";

function UserForm({ data, updateFieldHandler }) {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="os">OS:</label>
        <input
          type="text"
          name="os"
          id="os"
          placeholder="Digite a ordem de serviço"
          required
          value={data.os || ""}
          onChange={(e) => updateFieldHandler("os", e.target.value)}
        />
      </div>

      <div className="form-control">
        <label htmlFor="name">Nome do técnico:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite o nome do tecnico que esta realizando o serviço"
          required
          value={data.name || ""}
          onChange={(e) => updateFieldHandler("name", e.target.value)}
        />
      </div>
    </div>
  );
}

export default UserForm;
