export default function GenderPicker({ onRadioChange, selectedGender }) {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label cursor-pointer gap-2 ${
            selectedGender === "male" ? "selected" : ""
          }`}
          htmlFor="male"
        >
          <span className="label-text">Male</span>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={selectedGender === "male"}
            onChange={() => onRadioChange("male")}
            className="radio checked:bg-blue-500"
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label cursor-pointer gap-2 ${
            selectedGender === "female" ? "selected" : ""
          }`}
          htmlFor="female"
        >
          <span className="label-text">Female</span>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={selectedGender === "female"}
            onChange={() => onRadioChange("female")}
            className="radio checked:bg-blue-500"
          />
        </label>
      </div>
    </div>
  );
}
