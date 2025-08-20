import type { ReactElement } from "react";

interface ITimeProps {
  time: number;
}
export default function SecondsToMin(props: ITimeProps): ReactElement {
  const { time } = props;
  const min = Math.floor(time / 60);
  const seconds = time % 60;
  return (
    <p className="p">
      {min}:{seconds}
    </p>
  );
}
