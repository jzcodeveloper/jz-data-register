import React from "react";

import avatar from "../../../assets/avatar.png";

import classes from "./Form.css";
import InputGroup from "./InputGroup/InputGroup";

import { formatDate } from "../../../utils/utility";

const Form = ({
  disabled,
  showFileInput,
  onSubmit,
  data,
  caption,
  hideButton
}) => {
  const onChange = e => {
    const img = document.getElementById("avatar");
    if (e.target.files[0]) {
      img.src = URL.createObjectURL(e.target.files[0]);
    } else {
      img.src = data && data.photo ? data.photo : avatar;
    }
  };

  return (
    <form className={classes.Form} onSubmit={onSubmit}>
      <div className={classes.Avatar}>
        <img
          className={classes.ScaleImage}
          src={data && data.photo ? data.photo : avatar}
          alt="Avatar"
          id="avatar"
        />
        {showFileInput ? (
          <InputGroup
            type="file"
            name="photo"
            accept="image/*"
            onChange={onChange}
            id="files"
          />
        ) : null}
      </div>
      <div className={`${classes.Fieldset} ${classes.AnimateFieldset}`}>
        <div>
          <h4>Student's Information</h4>
        </div>
        <div className={classes.Data}>
          <datalist id="sex">
            <option value="Masculino" label="Sexo" />
            <option value="Femenino" label="Sexo" />
          </datalist>
          <datalist id="yesno">
            <option value="Si" label="¿Si/No?" />
            <option value="No" label="¿Si/No?" />
          </datalist>
          <datalist id="civil">
            <option value="Casado/a" label="¿Si/No?" />
            <option value="Soltero/a" label="¿Si/No?" />
            <option value="Viudo/a" label="¿Si/No?" />
          </datalist>

          {/*<!-- Student's Data -->*/}
          <InputGroup
            type="text"
            name="name"
            labelText="Nombres Y Apellidos"
            pattern="[A-Za-z ]{1,}"
            maxLength="35"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? data.name : ""}
          />
          <InputGroup
            type="number"
            name="identification"
            labelText="Cédula"
            pattern="[0-9]{1,}"
            maxLength="8"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? data.identification : ""}
          />
          <InputGroup
            type="text"
            name="sex"
            list="sex"
            labelText="Sexo"
            max="9"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? data.sex : ""}
          />
          <InputGroup
            type="date"
            name="birthday"
            labelText="Fecha de Nacimiento"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? formatDate(data.birthday) : ""}
          />
          <InputGroup
            type="text"
            name="birthdayPlace"
            labelText="Lugar de Nacimiento"
            pattern="[A-Za-z ]{1,}"
            maxLength="30"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? data.birthdayPlace : ""}
          />
          <InputGroup
            type="text"
            name="municipality"
            labelText="Municipio"
            pattern="[A-Za-z ]{1,}"
            maxLength="30"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? data.municipality : ""}
          />
          <InputGroup
            type="text"
            name="country"
            labelText="Entidad Federal / País"
            pattern="[A-Za-z ]{1,}"
            maxLength="30"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? data.country : ""}
          />
          <InputGroup
            type="number"
            name="age"
            labelText="Edad"
            pattern="[0-9]{1,}"
            maxLength="3"
            min="0"
            max="120"
            step="1"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? data.age : ""}
          />
          <InputGroup
            type="number"
            name="weight"
            labelText="Peso"
            pattern="[0-9]{1,}"
            maxLength="3"
            min="0"
            max="500"
            step="1"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? data.weight : ""}
          />
          <InputGroup
            type="number"
            name="height"
            labelText="Estatura"
            pattern="[0-9]{1,}"
            maxLength="3"
            min="0"
            max="500"
            step="1"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? data.height : ""}
          />
          <InputGroup
            type="number"
            name="shirtSize"
            list="size"
            labelText="Talla de Camisa"
            pattern="[0-9]{1,}"
            maxLength="2"
            min="0"
            max="500"
            step="1"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? data.shirtSize : ""}
          />
          <InputGroup
            type="number"
            name="pantSize"
            list="size"
            labelText="Talla de Pantalón"
            pattern="[0-9]{1,}"
            maxLength="2"
            min="0"
            max="500"
            step="1"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? data.pantSize : ""}
          />
          <InputGroup
            type="number"
            name="shoeSize"
            list="size"
            labelText="Talla de Zapato"
            pattern="[0-9]{1,}"
            maxLength="2"
            min="0"
            max="500"
            step="1"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? data.shoeSize : ""}
          />
          <InputGroup
            type="text"
            name="liveWithParents"
            list="yesno"
            labelText="¿Si/No?"
            pattern="[A-Za-z]{1,}"
            maxLength="2"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? data.liveWithParents : ""}
          />
          <InputGroup
            type="text"
            name="direction"
            labelText="Dirección"
            pattern="[A-Za-z0-9 -.,]{1,}"
            maxLength="30"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? data.direction : ""}
          />
          <InputGroup
            type="number"
            name="phoneNumber"
            labelText="Teléfono"
            pattern="[0-9]{1,}"
            maxLength="11"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? data.phoneNumber : ""}
          />
          <InputGroup
            type="text"
            name="impedimentToSports"
            labelText="Impedimento A Deportes"
            pattern="[A-Za-z ]{1,}"
            maxLength="30"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? data.impedimentToSports : ""}
          />
          <InputGroup
            type="text"
            name="alergicTo"
            labelText="Alérgico A"
            pattern="[A-Za-z ]{1,}"
            maxLength="30"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? data.alergicTo : ""}
          />
          <div />
          <div />
        </div>
      </div>
      <div className={`${classes.Fieldset} ${classes.AnimateFieldset}`}>
        <div className="title">
          <h4>Parent's Information</h4>
        </div>
        <div className={classes.Data}>
          {/*<!-- Parent's Data -->*/}
          <InputGroup
            type="text"
            name="parentName"
            labelText="Nombres Y Apellidos"
            pattern="[A-Za-z ]{1,}"
            maxLength="35"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? data.parent.name : ""}
          />
          <InputGroup
            type="text"
            name="parentSex"
            list="sex"
            labelText="Sexo"
            pattern="[A-Za-z]{1,}"
            maxLength="9"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? data.parent.sex : ""}
          />
          <InputGroup
            type="number"
            name="parentIdentification"
            labelText="Cédula"
            pattern="[0-9]{1,}"
            maxLength="8"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? data.parent.identification : ""}
          />
          <InputGroup
            type="date"
            name="parentBirthday"
            labelText="Fecha de Nacimiento"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? formatDate(data.parent.birthday) : ""}
          />
          <InputGroup
            type="text"
            name="parentCompany"
            labelText="Empresa dónde labora"
            pattern="[A-Za-z ]{1,}"
            maxLength="30"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? data.parent.company : ""}
          />
          <InputGroup
            type="text"
            name="parentCivilState"
            list="civil"
            labelText="Estado Civil"
            pattern="[A-Za-z/]{1,}"
            maxLength="9"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? data.parent.civilState : ""}
          />
          <InputGroup
            type="text"
            name="parentOcupation"
            labelText="Ocupación"
            pattern="[A-Za-z ]{1,}"
            maxLength="30"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? data.parent.ocupation : ""}
          />
          <InputGroup
            type="text"
            name="parentDirection"
            labelText="Dirección de Habitación"
            pattern="[A-Za-z0-9 -.,]{1,}"
            maxLength="30"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? data.parent.direction : ""}
          />
          <InputGroup
            type="number"
            name="parentPhoneNumber1"
            labelText="Teléfono 1"
            pattern="[0-9]{1,}"
            maxLength="11"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? data.parent.phoneNumber1 : ""}
          />
          <InputGroup
            type="number"
            name="parentPhoneNumber2"
            labelText="Teléfono 2"
            pattern="[0-9]{1,}"
            maxLength="11"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? data.parent.phoneNumber2 : ""}
          />
          <InputGroup
            type="text"
            name="liveWithKid"
            list="yesno"
            labelText="¿Si/No?"
            pattern="[A-Za-z]{1,}"
            maxLength="2"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? data.parent.liveWithKid : ""}
          />
          <div />
        </div>
      </div>
      <div className={`${classes.Fieldset} ${classes.AnimateFieldset}`}>
        <div className="title">
          <h4>Representative's Information</h4>
        </div>
        <div className={classes.Data}>
          {/*<!-- Representative's Data -->*/}
          <InputGroup
            type="text"
            name="representName"
            labelText="Nombres Y Apellidos"
            pattern="[A-Za-z ]{1,}"
            maxLength="35"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? data.represent.name : ""}
          />
          <InputGroup
            type="text"
            name="representSex"
            list="sex"
            labelText="Sexo"
            pattern="[A-Za-z ]{1,}"
            maxLength="9"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? data.represent.sex : ""}
          />
          <InputGroup
            type="number"
            name="representID"
            labelText="Cédula"
            pattern="[0-9]{1,}"
            maxLength="8"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? data.represent.identification : ""}
          />
          <InputGroup
            type="date"
            name="representBirthday"
            labelText="Fecha de Nacimiento"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? formatDate(data.represent.birthday) : ""}
          />
          <InputGroup
            type="number"
            name="representAge"
            labelText="Edad"
            pattern="[0-9]{1,}"
            maxLength="3"
            min="0"
            max="120"
            step="1"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? data.represent.age : ""}
          />
          <InputGroup
            type="text"
            name="representCivilState"
            list="civil"
            labelText="Estado Civil"
            pattern="[A-Za-z/]{1,}"
            maxLength="9"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? data.represent.civilState : ""}
          />
          <InputGroup
            type="text"
            name="representOcupation"
            labelText="Ocupación"
            pattern="[A-Za-z ]{1,}"
            maxLength="30"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? data.represent.ocupation : ""}
          />
          <InputGroup
            type="text"
            name="representCompany"
            labelText="Empresa"
            pattern="[A-Za-z ]{1,}"
            maxLength="30"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? data.represent.company : ""}
          />
          <InputGroup
            type="text"
            name="representDirection"
            labelText="Dirección de Habitación"
            pattern="[A-Za-z0-9 -.,]{1,}"
            maxLength="30"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? data.represent.direction : ""}
          />
          <InputGroup
            type="number"
            name="representPhoneNumber1"
            labelText="Teléfono 1"
            pattern="[0-9]{1,}"
            maxLength="11"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? data.represent.phoneNumber1 : ""}
          />
          <InputGroup
            type="number"
            name="representPhoneNumber2"
            labelText="Teléfono 2"
            pattern="[0-9]{1,}"
            maxLength="11"
            required
            autoComplete="off"
            disabled={disabled}
            defaultValue={data ? data.represent.phoneNumber2 : ""}
          />
          <div />
        </div>
      </div>

      {!hideButton ? (
        <div className={classes.Buttons}>
          <button type="submit" className={`${classes.Btn} ${classes.Submit}`}>
            {caption}
          </button>
        </div>
      ) : null}
    </form>
  );
};

export default Form;
