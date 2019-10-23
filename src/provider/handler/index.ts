import { commands } from "./commands";

export const handler = nativeBridge => params => {
  const { type } = params;

  if (!type || !["collection", "item"].includes(type)) {
    return nativeBridge.throwError("unknown request");
  }

  return commands[type](params)
    .then(nativeBridge.sendResponse)
    .catch(nativeBridge.throwError);
};
