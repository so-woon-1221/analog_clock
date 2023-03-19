import { timeState } from "@/atom/time";
import { tooltipState } from "@/atom/tooltip";
import Needle from "@/components/Needle";
import Tooltip from "@/components/Tooltip";
import { useCallback, useEffect, useMemo } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
const Clock = () => {
  const [time, setTime] = useRecoilState(timeState);
  const setTooltip = useSetRecoilState(tooltipState);

  useEffect(() => {
    setTime(
      new Date(
        new Date().getTime() +
          new Date().getTimezoneOffset() * 60 * 1000 +
          9 * 60 * 60 * 1000
      )
    );
    const interval = setInterval(() => {
      setTime(
        new Date(
          new Date().getTime() +
            new Date().getTimezoneOffset() * 60 * 1000 +
            9 * 60 * 60 * 1000
        )
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [setTime]);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const { x, y } = e.nativeEvent;

      setTooltip({
        isOpen: true,
        position: {
          x: x + 10,
          y: y - 30,
        },
      });
    },
    [setTooltip]
  );

  const onMouseLeave = useCallback(() => {
    setTooltip({
      isOpen: false,
      position: {
        x: 0,
        y: 0,
      },
    });
  }, [setTooltip]);

  const hourDegrees = useMemo(
    () =>
      time ? (time.getHours() % 12) * 30 + time.getMinutes() * 0.5 : undefined,
    [time]
  );
  const minuteDegrees = useMemo(
    () => (time ? time.getMinutes() * 6 + time.getSeconds() * 0.1 : undefined),
    [time]
  );
  const secondDegrees = useMemo(
    () => (time ? time.getSeconds() * 6 : undefined),
    [time]
  );

  return time ? (
    <div
      className="border-8 rounded-[100%] w-[700px] h-[700px] relative shadow-lg"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <Needle id="hour" color="black" degrees={hourDegrees!} height={150} />
      <Needle id="minute" color="black" degrees={minuteDegrees!} height={280} />
      <Needle id="second" color="red" degrees={secondDegrees!} height={300} />

      <Tooltip />
    </div>
  ) : null;
};

export default Clock;
