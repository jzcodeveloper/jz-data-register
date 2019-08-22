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
            name="name"
            labelText="Names and Surnames"
            pattern="[A-Za-z ]{1,}"
            maxLength="35"
            disabled={disabled}
            required
            defaultValue={data ? data.name : ""}
          />
          <InputGroup
            type="number"
            name="identification"
            labelText="Identification Card"
            pattern="[0-9]{1,}"
            maxLength="8"
            disabled={disabled}
            required
            defaultValue={data ? data.identification : ""}
          />
          <InputGroup
            type="text"
            name="sex"
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
            name="birthday"
            labelText="Birthday"
            disabled={disabled}
            required
            defaultValue={data ? formatDate(data.birthday) : ""}
          />
          <InputGroup
            type="text"
            name="birthplace"
            labelText="Birthplace"
            pattern="[A-Za-z ]{1,}"
            maxLength="30"
            disabled={disabled}
            required
            defaultValue={data ? data.birthplace : ""}
          />
          <InputGroup
            type="text"
            name="municipality"
            labelText="Municipality"
            pattern="[A-Za-z ]{1,}"
            maxLength="30"
            disabled={disabled}
            required
            defaultValue={data ? data.municipality : ""}
          />
          <InputGroup
            type="text"
            name="country"
            labelText="Country"
            pattern="[A-Za-z ]{1,}"
            maxLength="30"
            disabled={disabled}
            required
            defaultValue={data ? data.country : ""}
          />
          <InputGroup
            type="number"
            name="age"
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
            name="weight"
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
            name="height"
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
            name="shirtSize"
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
            name="pantSize"
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
            name="shoeSize"
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
            name="liveWithParents"
            list="yesno"
            labelText="Lives with Parents?"
            pattern="Yes|No"
            maxLength="3"
            disabled={disabled}
            required
            defaultValue={data ? data.liveWithParents : ""}
          />
          <InputGroup
            type="text"
            name="direction"
            labelText="Address"
            pattern="[A-Za-z0-9 -.,]{1,}"
            maxLength="30"
            disabled={disabled}
            required
            defaultValue={data ? data.direction : ""}
          />
          <InputGroup
            type="number"
            name="phoneNumber"
            labelText="Phone Number"
            pattern="[0-9]{1,}"
            maxLength="11"
            disabled={disabled}
            required
            defaultValue={data ? data.phoneNumber : ""}
          />
          <InputGroup
            type="text"
            name="impedimentToSports"
            labelText="Impediment To Sports"
            pattern="[A-Za-z ]{1,}"
            maxLength="30"
            disabled={disabled}
            required
            defaultValue={data ? data.impedimentToSports : ""}
          />
          <InputGroup
            type="text"
            name="allergicTo"
            labelText="Alergic To"
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
            name="parentName"
            labelText="Names and Surnames"
            pattern="[A-Za-z ]{1,}"
            maxLength="35"
            disabled={disabled}
            required
            defaultValue={data ? data.parent.name : ""}
          />
          <InputGroup
            type="text"
            name="parentSex"
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
            name="parentIdentification"
            labelText="Identification Card"
            pattern="[0-9]{1,}"
            maxLength="8"
            disabled={disabled}
            required
            defaultValue={data ? data.parent.identification : ""}
          />
          <InputGroup
            type="date"
            name="parentBirthday"
            labelText="Birthday"
            disabled={disabled}
            required
            defaultValue={data ? formatDate(data.parent.birthday) : ""}
          />
          <InputGroup
            type="text"
            name="parentCompany"
            labelText="Company"
            pattern="[A-Za-z ]{1,}"
            maxLength="30"
            disabled={disabled}
            required
            defaultValue={data ? data.parent.company : ""}
          />
          <InputGroup
            type="text"
            name="parentMaritalStatus"
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
            name="parentOccupation"
            labelText="Occupation"
            pattern="[A-Za-z ]{1,}"
            maxLength="30"
            disabled={disabled}
            required
            defaultValue={data ? data.parent.occupation : ""}
          />
          <InputGroup
            type="text"
            name="parentDirection"
            labelText="Address"
            pattern="[A-Za-z0-9 -.,]{1,}"
            maxLength="30"
            disabled={disabled}
            required
            defaultValue={data ? data.parent.direction : ""}
          />
          <InputGroup
            type="number"
            name="parentPhoneNumber1"
            labelText="Phone Number 1"
            pattern="[0-9]{1,}"
            maxLength="11"
            disabled={disabled}
            required
            defaultValue={data ? data.parent.phoneNumber1 : ""}
          />
          <InputGroup
            type="number"
            name="parentPhoneNumber2"
            labelText="Phone Number 2"
            pattern="[0-9]{1,}"
            maxLength="11"
            disabled={disabled}
            required
            defaultValue={data ? data.parent.phoneNumber2 : ""}
          />
          <InputGroup
            type="text"
            name="liveWithKid"
            list="yesno"
            labelText="Lives with Kid?"
            pattern="Yes|No"
            maxLength="3"
            disabled={disabled}
            required
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
            labelText="Names and Surnames"
            pattern="[A-Za-z ]{1,}"
            maxLength="35"
            disabled={disabled}
            required
            defaultValue={data ? data.represent.name : ""}
          />
          <InputGroup
            type="text"
            name="representSex"
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
            name="representID"
            labelText="Identification Card"
            pattern="[0-9]{1,}"
            maxLength="8"
            disabled={disabled}
            required
            defaultValue={data ? data.represent.identification : ""}
          />
          <InputGroup
            type="date"
            name="representBirthday"
            labelText="Birthday"
            disabled={disabled}
            required
            defaultValue={data ? formatDate(data.represent.birthday) : ""}
          />
          <InputGroup
            type="number"
            name="representAge"
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
            name="representMaritalStatus"
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
            name="representOccupation"
            labelText="Occupation"
            pattern="[A-Za-z ]{1,}"
            maxLength="30"
            disabled={disabled}
            required
            defaultValue={data ? data.represent.occupation : ""}
          />
          <InputGroup
            type="text"
            name="representCompany"
            labelText="Company"
            pattern="[A-Za-z ]{1,}"
            maxLength="30"
            disabled={disabled}
            required
            defaultValue={data ? data.represent.company : ""}
          />
          <InputGroup
            type="text"
            name="representDirection"
            labelText="Address"
            pattern="[A-Za-z0-9 -.,]{1,}"
            maxLength="30"
            disabled={disabled}
            required
            defaultValue={data ? data.represent.direction : ""}
          />
          <InputGroup
            type="number"
            name="representPhoneNumber1"
            labelText="Phone Number 1"
            pattern="[0-9]{1,}"
            maxLength="11"
            disabled={disabled}
            required
            defaultValue={data ? data.represent.phoneNumber1 : ""}
          />
          <InputGroup
            type="number"
            name="representPhoneNumber2"
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
