import { useContext, useState } from "react";

import { TimeSwitchContext } from "../contexts/TimeSwitchContext";
import { TimeSwitchDispatchContext } from "../contexts/TimeSwitchDispatchContext";
import { ActionType } from "../reducers/TimeSwitchReducer";

export const TimeSwitcher = () => {
  const time = useContext(TimeSwitchContext);
  const dispatch = useContext(TimeSwitchDispatchContext);
  const [switcher, setSwitcher] = useState(false);

  const switchTime = () => {
    dispatch({ type: ActionType.SWITCHED, payload: time });
    setSwitcher(!switcher);
  };

  const handleSwitch = () => {
    setSwitcher(!switcher);
  };

  console.log(switcher);
  return (
    <></>
    /*  <TimeSwitchWrapper onClick={handleSwitch}>
      <BackgroundTextSlider switcher={switcher}>
        {switcher ? "21:00" : "18:00"}
      </BackgroundTextSlider>
      {switcher ? (
        <TimeSwitchSlider switcher={switcher}>18:00</TimeSwitchSlider>
      ) : (
        <TimeSwitchSlider switcher={switcher}>21:00</TimeSwitchSlider>
      )}
    </TimeSwitchWrapper> */
  );
};
