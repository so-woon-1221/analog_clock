import { ComponentType } from "react";

interface Props {
  height: number;
  color: string;
  degrees: number;
  id: string;
}

const Needle: ComponentType<Props> = ({ height, color, degrees, id }) => {
  return (
    <div
      id={id}
      className="border-2 w-[0px] absolute left-[50%] origin-bottom"
      style={{
        transform: `rotate(${degrees}deg)`,
        height: `${height}px`,
        top: `calc(50% - ${height}px)`,
        borderColor: color,
      }}
    ></div>
  );
};

export default Needle;
