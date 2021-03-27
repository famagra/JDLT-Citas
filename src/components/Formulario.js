import React , {Fragment, useState}  from 'react';
import { v4 as uuidv4 } from "uuid";


const Formulario = ({crearCita}) => {


    //Crear State de Citas
    const [cita, actualizarCita] = useState({
        mascota:'',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas:'',
    });

    const [error, actualizarError] =useState(false);

    const actualizarState = (e) =>{
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    //Extraer valores
    const {mascota, propietario, fecha, hora, sintomas} = cita;

    //cuando el usuario envia el formulario

    const submitCita = (e) => {
        e.preventDefault();

        //validar el formulario
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            actualizarError(true);
            return;
        }

        //eliminar mensaje de errores
        actualizarError(false);

        //asignar un id
        cita.id = uuidv4();
        
        //crear la sita
        crearCita(cita);

        //reiniciar el formulario

        actualizarCita({
          mascota: "",
          propietario: "",
          fecha: "",
          hora: "",
          sintomas: ""
        });

    }

    return (
      <Fragment>
        <h2>Crear Cita</h2>

        {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

        <form onSubmit={submitCita}>
          <label>Nombre de Mascota</label>
          <input
            type="text"
            name="mascota"
            className="u-full-width"
            placeholder="Nombre de mascota"
            onChange={actualizarState}
            value={mascota}
          />
          <label>Nombre del Dueño</label>
          <input
            type="text"
            name="propietario"
            className="u-full-width"
            placeholder="Nombre del Dueño"
            onChange={actualizarState}
            value={propietario}
          />
        </form>
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />
        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>
        <button
          type="submit"
          className="u-full-width button-primary"
          onClick={submitCita}
        >
          Agregar Cita
        </button>
      </Fragment>
    );
}
 
export default Formulario;