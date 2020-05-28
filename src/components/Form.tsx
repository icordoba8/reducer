import React, { useReducer } from "react";
import { useForm } from "react-hook-form";
import { reducer } from "./Reducer";
import { formValid } from "./ValidateForm";

const initialState = {
  username: "",
  password: "",
  firstname: "",
  lastname: "",
  name: "",
  cellphone: "",
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const change = (e: any) => {
    if (e.target.name === "firstname" || e.target.name === "lastname") {
      dispatch({
        field: "name",
        value:
          e.target.name === "firstname"
            ? `${e.target.value} ${state.lastname}`
            : `${state.firstname} ${e.target.value}`,
      });
    }
    // if (e.target.name === "lastname") {
    //   dispatch({
    //     field: "name",
    //     value: state.firstname + " " + e.target.value,
    //   });
    // }

    if (e.target.name !== "firstname" || e.target.name !== "lastname") {
      dispatch({
        field: e.target.name,
        value: e.target.value,
      });
    }
  };

  const { handleSubmit, register, reset, errors } = useForm();
  const guardar = async (e: any) => {
    // reset(initialState); //
    console.log(state);
  };
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="username">Nombre usuario</label>
          <input
            type="text"
            name="username"
            className="form-control"
            onChange={change}
            ref={register(formValid.username)}
          />
          {errors.username && errors.username.message}
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={change}
            ref={register(formValid.password)}
          />
          {errors.password && errors.password.message}
        </div>

        <div className="form-group">
          <label htmlFor="firstname">Primer Nombre</label>
          <input
            type="text"
            name="firstname"
            className="form-control"
            onChange={change}
            ref={register(formValid.firstname)}
            autoComplete="off"
          />
          {errors.firstname && errors.firstname.message}
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Primer Apellido</label>
          <input
            type="text"
            name="lastname"
            className="form-control"
            onChange={change}
            ref={register(formValid.lastname)}
            autoComplete="off"
          />
          {errors.lastname && errors.lastname.message}
        </div>
        <div className="form-group">
          <label htmlFor="name">Nombre Completo</label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={change}
            disabled={true}
            value={state.name}
            ref={register(formValid.name)}
          />
          {errors.name && errors.lastname.message}
        </div>
        <div className="form-group">
          <label htmlFor="celphone">Teléfono/Celular</label>
          <input
            type="text"
            name="cellphone"
            className="form-control"
            onChange={change}
            ref={register(formValid.cellphone)}
          />
          {errors.cellphone && errors.cellphone.message}
        </div>
      </form>
      <button
        onClick={handleSubmit(guardar)}
        type="submit"
        className="btn btn-primary"
      >
        Guardar
      </button>
    </div>
  );
};

export default Form;
