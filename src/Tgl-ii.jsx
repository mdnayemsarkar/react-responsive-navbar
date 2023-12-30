import { useState } from "react";
import { Switch } from "@headlessui/react";

function MyToggle() {
  const [enabled, setEnabled] = useState(false);

  const handleToggle = () => {
    document.body.style.backgroundColor = enabled ? "#ffffff" : "#000000";
    setEnabled(!enabled);
  };

  return (
    <Switch
      checked={enabled}
      onChange={handleToggle}
      className={`${
        enabled ? "bg-blue-600" : "bg-gray-200"
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
}

export default MyToggle;
