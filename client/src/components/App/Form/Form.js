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
            <option value="Male" label="Sex" />
            <option value="Female" label="Sex" />
          </datalist>
          <datalist id="yesno">
            <option value="Yes" label="Lives with Parents?" />
            <option value="No" label="Lives with Parents?" />
          </datalist>
          <datalist id="maritalstatus">
            <option value="Married" label="Marital Status" />
            <option value="Single" label="Marital Status" />
            <option value="Widowed" label="Marital Status" />
            <option value="Divorced" label="Marital Status" />
          </datalist>
          <datalist id="size">
            <option value="XS" label="Shirt Size" />
            <option value="S" label="Shirt Size" />
            <option value="M" label="Shirt Size" />
            <option value="L" label="Shirt Size" />
            <option value="XL" label="Shirt Size" />
          </datalist>

          {/*<!-- Student's Data -->*/}
          <InputGroup
            type="text"
            name="student.name"
            labelText="Names and Surnames"
            pattern="[A-Za-z ]{1,}"
            maxLength="35"
            disabled={disabled}
            required
            defaultValue={data ? data.name : ""}
          />
          <InputGroup
            type="number"
            name="student.identification"
            labelText="Identification Card"
            pattern="[0-9]{1,}"
            maxLength="8"
            disabled={disabled}
            required
            defaultValue={data ? data.identification : ""}
          />
          <InputGroup
            type="text"
            name="student.sex"
            list="sex"
            labelText="Sex"
            pattern="Male|Female"
            maxLength="6"
            disabled={disabled}
            required
            defaultValue={data ? data.sex : ""}
          />
          <InputGroup
            type="date"
            name="student.birthday"
            labelText="Birthday"
            disabled={disabled}
            required
            defaultValue={data ? formatDate(data.birthday) : ""}
          />
          <InputGroup
            type="text"
            name="student.birthplace"
            labelText="Birthplace"
            pattern="[A-Za-z ]{1,}"
            maxLength="30"
            disabled={disabled}
            required
            defaultValue={data ? data.birthplace : ""}
          />
          <InputGroup
            type="text"
            name="student.municipality"
            labelText="Municipality"
            pattern="[A-Za-z ]{1,}"
            maxLength="30"
            disabled={disabled}
            required
            defaultValue={data ? data.municipality : ""}
          />
          <InputGroup
            type="text"
            name="student.country"
            labelText="Country"
            pattern="[A-Za-z ]{1,}"
            maxLength="30"
            disabled={disabled}
            required
            defaultValue={data ? data.country : ""}
          />
          <InputGroup
            type="number"
            name="student.age"
            labelText="Age"
            pattern="[0-9]{1,}"
            maxLength="3"
            min="0"
            max="120"
            step="1"
            disabled={disabled}
            required
            defaultValue={data ? data.age : ""}
          />
          <InputGroup
            type="number"
            name="student.weight"
            labelText="Weight (kg)"
            pattern="[0-9]{1,}"
            maxLength="3"
            min="0"
            max="500"
            step="1"
            disabled={disabled}
            required
            defaultValue={data ? data.weight : ""}
          />
          <InputGroup
            type="number"
            name="student.height"
            labelText="Height (cm)"
            pattern="[0-9]{1,}"
            maxLength="3"
            min="0"
            max="500"
            step="1"
            disabled={disabled}
            required
            defaultValue={data ? data.height : ""}
          />
          <InputGroup
            type="text"
            name="student.shirtSize"
            list="size"
            labelText="Shirt Size"
            pattern="XS|S|M|L|XL"
            maxLength="2"
            disabled={disabled}
            required
            defaultValue={data ? data.shirtSize : ""}
          />
          <InputGroup
            type="number"
            name="student.pantSize"
            labelText="Pants Size"
            pattern="[0-9]{1,}"
            maxLength="2"
            min="0"
            max="50"
            step="1"
            disabled={disabled}
            required
            defaultValue={data ? data.pantSize : ""}
          />
          <InputGroup
            type="number"
            name="student.shoeSize"
            labelText="Shoe Size"
            pattern="[0-9]{1,}"
            maxLength="2"
            min="0"
            max="50"
            step="1"
            disabled={disabled}
            required
            defaultValue={data ? data.shoeSize : ""}
          />
          <InputGroup
            type="text"
            name="student.livesWithParents"
            list="yesno"
            labelText="Lives with Parents?"
            pattern="Yes|No"
            maxLength="3"
            disabled={disabled}
            required
            defaultValue={data ? data.livesWithParents : ""}
          />
          <InputGroup
            type="text"
            name="student.address"
            labelText="Address"
            pattern="[A-Za-z0-9 -.,]{1,}"
            maxLength="30"
            disabled={disabled}
            required
            defaultValue={data ? data.address : ""}
          />
          <InputGroup
            type="number"
            name="student.phoneNumber"
            labelText="Phone Number"
            pattern="[0-9]{1,}"
            maxLength="11"
            disabled={disabled}
            required
            defaultValue={data ? data.phoneNumber : ""}
          />
          <InputGroup
            type="text"
            name="student.impedimentToSports"
            labelText="Impediment To Sports"
            pattern="[A-Za-z ]{1,}"
            maxLength="30"
            disabled={disabled}
            required
            defaultValue={data ? data.impedimentToSports : ""}
          />
          <InputGroup
            type="text"
            name="student.allergicTo"
            labelText="Allergic To"
            pattern="[A-Za-z ]{1,}"
            maxLength="30"
            disabled={disabled}
            required
            defaultValue={data ? data.allergicTo : ""}
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
            name="parent.name"
            labelText="Names and Surnames"
            pattern="[A-Za-z ]{1,}"
            maxLength="35"
            disabled={disabled}
            required
            defaultValue={data ? data.parent.name : ""}
          />
          <InputGroup
            type="text"
            name="parent.sex"
            list="sex"
            labelText="Sex"
            pattern="Male|Female"
            maxLength="6"
            disabled={disabled}
            required
            defaultValue={data ? data.parent.sex : ""}
          />
          <InputGroup
            type="number"
            name="parent.identification"
            labelText="Identification Card"
            pattern="[0-9]{1,}"
            maxLength="8"
            disabled={disabled}
            required
            defaultValue={data ? data.parent.identification : ""}
          />
          <InputGroup
            type="date"
            name="parent.birthday"
            labelText="Birthday"
            disabled={disabled}
            required
            defaultValue={data ? formatDate(data.parent.birthday) : ""}
          />
          <InputGroup
            type="text"
            name="parent.company"
            labelText="Company"
            pattern="[A-Za-z ]{1,}"
            maxLength="30"
            disabled={disabled}
            required
            defaultValue={data ? data.parent.company : ""}
          />
          <InputGroup
            type="text"
            name="parent.maritalStatus"
            list="maritalstatus"
            labelText="Marital Status"
            pattern="Married|Single|Widowed|Divorced"
            maxLength="7"
            disabled={disabled}
            required
            defaultValue={data ? data.parent.maritalStatus : ""}
          />
          <InputGroup
            type="text"
            name="parent.occupation"
            labelText="Occupation"
            pattern="[A-Za-z ]{1,}"
            maxLength="30"
            disabled={disabled}
            required
            defaultValue={data ? data.parent.occupation : ""}
          />
          <InputGroup
            type="text"
            name="parent.address"
            labelText="Address"
            pattern="[A-Za-z0-9 -.,]{1,}"
            maxLength="30"
            disabled={disabled}
            required
            defaultValue={data ? data.parent.address : ""}
          />
          <InputGroup
            type="number"
            name="parent.phoneNumber1"
            labelText="Phone Number 1"
            pattern="[0-9]{1,}"
            maxLength="11"
            disabled={disabled}
            required
            defaultValue={data ? data.parent.phoneNumber1 : ""}
          />
          <InputGroup
            type="number"
            name="parent.phoneNumber2"
            labelText="Phone Number 2"
            pattern="[0-9]{1,}"
            maxLength="11"
            disabled={disabled}
            required
            defaultValue={data ? data.parent.phoneNumber2 : ""}
          />
          <InputGroup
            type="text"
            name="parent.livesWithKid"
            list="yesno"
            labelText="Lives with Kid?"
            pattern="Yes|No"
            maxLength="3"
            disabled={disabled}
            required
            defaultValue={data ? data.parent.livesWithKid : ""}
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
            name="represent.name"
            labelText="Names and Surnames"
            pattern="[A-Za-z ]{1,}"
            maxLength="35"
            disabled={disabled}
            required
            defaultValue={data ? data.represent.name : ""}
          />
          <InputGroup
            type="text"
            name="represent.sex"
            list="sex"
            labelText="Sex"
            pattern="Male|Female"
            maxLength="6"
            disabled={disabled}
            required
            defaultValue={data ? data.represent.sex : ""}
          />
          <InputGroup
            type="number"
            name="represent.identification"
            labelText="Identification Card"
            pattern="[0-9]{1,}"
            maxLength="8"
            disabled={disabled}
            required
            defaultValue={data ? data.represent.identification : ""}
          />
          <InputGroup
            type="date"
            name="represent.birthday"
            labelText="Birthday"
            disabled={disabled}
            required
            defaultValue={data ? formatDate(data.represent.birthday) : ""}
          />
          <InputGroup
            type="number"
            name="represent.age"
            labelText="Age"
            pattern="[0-9]{1,}"
            maxLength="3"
            min="0"
            max="120"
            step="1"
            disabled={disabled}
            required
            defaultValue={data ? data.represent.age : ""}
          />
          <InputGroup
            type="text"
            name="represent.maritalStatus"
            list="maritalstatus"
            labelText="Marital Status"
            pattern="Married|Single|Widowed|Divorced"
            maxLength="7"
            disabled={disabled}
            required
            defaultValue={data ? data.represent.maritalStatus : ""}
          />
          <InputGroup
            type="text"
            name="represent.occupation"
            labelText="Occupation"
            pattern="[A-Za-z ]{1,}"
            maxLength="30"
            disabled={disabled}
            required
            defaultValue={data ? data.represent.occupation : ""}
          />
          <InputGroup
            type="text"
            name="represent.company"
            labelText="Company"
            pattern="[A-Za-z ]{1,}"
            maxLength="30"
            disabled={disabled}
            required
            defaultValue={data ? data.represent.company : ""}
          />
          <InputGroup
            type="text"
            name="represent.address"
            labelText="Address"
            pattern="[A-Za-z0-9 -.,]{1,}"
            maxLength="30"
            disabled={disabled}
            required
            defaultValue={data ? data.represent.address : ""}
          />
          <InputGroup
            type="number"
            name="represent.phoneNumber1"
            labelText="Phone Number 1"
            pattern="[0-9]{1,}"
            maxLength="11"
            disabled={disabled}
            required
            defaultValue={data ? data.represent.phoneNumber1 : ""}
          />
          <InputGroup
            type="number"
            name="represent.phoneNumber2"
            labelText="Phone Number 2"
            pattern="[0-9]{1,}"
            maxLength="11"
            disabled={disabled}
            required
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
