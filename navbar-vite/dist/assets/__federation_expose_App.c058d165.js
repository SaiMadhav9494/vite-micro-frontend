import { r as react } from './__federation_shared_@emotionReact.js';
import { t as jsx } from './__federation_shared_@muiIcons-material.js';

function App({
  isMenuOpen,
  closeMenu
}) {
  const [number, setNumber] = react.exports.useState(1);
  return /* @__PURE__ */ jsx("div", {
    children: number
  });
}

export { App as default };
