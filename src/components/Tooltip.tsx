import { timeStringState } from "@/atom/time";
import { tooltipState } from "@/atom/tooltip";
import { useRecoilValue } from "recoil";

const Tooltip = () => {
  const { isOpen, position } = useRecoilValue(tooltipState);
  const timeString = useRecoilValue(timeStringState);

  return isOpen ? (
    <div
      className="fixed z-10 p-2 bg-white border rounded shadow-lg"
      style={{
        top: position.y,
        left: position.x,
      }}
    >
      {timeString}
    </div>
  ) : null;
};

export default Tooltip;
