
interface Props {
  value: number;
  onChange: (value: number) => void;
}
const Slider = ({ value, onChange }: Props) => {
  return (
    <div className="flex flex-col items-center w-full">
      <label className="mb-2 text-lg font-medium text-green-500">
        Adjust Annual Saving Percentage
      </label>

      <input
        type="range"
        min="0"
        max="5"
        step="0.1"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="
          w-3/4
          h-2
          bg-gray-700
          rounded-lg
          appearance-none
          cursor-pointer
          accent-green-500
        "
      />
    </div>
  );
};

export default Slider;
