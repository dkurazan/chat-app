export default function GenderPicker() {
  return (
    <div className="flex">
      <div className="form-control">
        <label className="label cursor-pointer gap-2" htmlFor="male">
          <span className="label-text">Male</span>
          <input
            type="radio"
            name="gender"
            value="male"
            className="radio checked:bg-blue-500"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer gap-2" htmlFor="female">
          <span className="label-text">Female</span>
          <input
            type="radio"
            name="gender"
            value="female"
            className="radio checked:bg-blue-500"
          />
        </label>
      </div>
    </div>
  );
}
