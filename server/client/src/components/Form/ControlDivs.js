import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import { HelpIcon } from "components/Icons/ClickableIcons";

export function CheckboxDiv({ inputText, tooltipText, handler }) {
   const [value, setValue] = useState(false);
   return (
      <div className={"checkbox-div"}>
         <Checkbox
            size="small"
            value={value}
            color="primary"
            onChange={(e) => {
               handler(!value);
               setValue(!value);
            }}
         />
         <span>{inputText} </span>
         <HelpIcon tooltipText={tooltipText} />
      </div>
   );
}
export function RadioDiv({ checked, handleChange, inputText, tooltipText }) {
   return (
      <div className={"checkbox-div"}>
         <Radio
            size="small"
            color="primary"
            value={inputText}
            checked={checked}
            onClick={handleChange}
         />
         <span>{inputText} </span>
         <HelpIcon tooltipText={tooltipText} />
      </div>
   );
}