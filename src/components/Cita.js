import React from 'react';

const Cita = ({ cita, eliminarCita }) => {
  return (
    <div className="cita">
      <p>
        Mascota: <span>{cita.mascota}</span>
      </p>
      <p>
        Dueño: <span>{cita.propietario}</span>
      </p>
      <p>
        fecha: <span>{cita.fecha}</span>
      </p>
      <p>
        hora: <span>{cita.hora}</span>
      </p>
      <p>
        sintomas: <span>{cita.sintomas}</span>
      </p>

      <button
        type="button"
        class="button eliminar u-full-width"
        onClick={()=>eliminarCita(cita.id)}
      >
        Eliminar &times;
      </button>
    </div>
  );
};
 
export default Cita;