interface Props {
  value: number;
  onChange: (value: number) => void;
  onMouseUp: (value: number) => void;
}
const Slider = ({ value, onChange, onMouseUp }: Props) => {
  return (
    <div className="flex flex-col items-center w-full">
      <input
        type="range"
        min="0"
        max="10"
        step="0.1"
        value={value}
        onChange={(e) => 
          onChange(Number((e.target as HTMLInputElement).value))
        }
        onMouseUp={(e) =>
          onMouseUp(Number((e.target as HTMLInputElement).value))
        }
        onTouchEnd={(e) =>
          onMouseUp(Number((e.target as HTMLInputElement).value))
        }
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
