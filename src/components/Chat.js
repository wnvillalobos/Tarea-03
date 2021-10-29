import React, { useState, useEffect, useRef } from "react";
import Socket from "./Socket";
import "../App.css";

const Chat = ({date,message,name}) => {
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    socket.emit("CHAT", date,message,name);
  }, [name]);


  const submit = (e) => {
    e.preventDefault();
    socket.emit("CHAT", date, message,name);
    setMensaje("");
  };


    return (
      <div>
        <div className="chat">
          {mensajes.map((e, i) => (
            <div key={i}>
              <div>{e.nombre}</div>
              <div>{e.mensaje}</div>
            </div>
          ))}
          <div ref={divRef}></div>
        </div>
        <form onSubmit={submit}>
          <label htmlFor="">Escriba su mensaje</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          ></textarea>
          <button>Enviar</button>
        </form>
      </div>
    );
  };
