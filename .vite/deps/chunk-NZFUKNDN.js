import {
  chakra,
  require_jsx_runtime
} from "./chunk-AVABL33S.js";
import {
  require_react
} from "./chunk-32E4H3EV.js";
import {
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/@chakra-ui/react/dist/esm/components/box/box.js
var Box = chakra("div");
Box.displayName = "Box";

// node_modules/@chakra-ui/react/dist/esm/components/box/square.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var Square = (0, import_react.forwardRef)(
  function Square2(props, ref) {
    const { size, ...rest } = props;
    return (0, import_jsx_runtime.jsx)(
      Box,
      {
        ...rest,
        ref,
        boxSize: size,
        css: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          flexGrow: 0,
          ...props.css
        }
      }
    );
  }
);

// node_modules/@chakra-ui/react/dist/esm/components/box/circle.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var import_react2 = __toESM(require_react(), 1);
var Circle = (0, import_react2.forwardRef)(
  function Circle2(props, ref) {
    const { size, ...rest } = props;
    return (0, import_jsx_runtime2.jsx)(Square, { size, ref, borderRadius: "9999px", ...rest });
  }
);

// node_modules/@chakra-ui/react/dist/esm/components/box/span.js
var Span = chakra("span");

// node_modules/@chakra-ui/react/dist/esm/components/box/sticky.js
var Sticky = chakra("div", {
  base: {
    position: "sticky",
    top: 0
  }
});
Sticky.displayName = "Sticky";

export {
  Box,
  Square,
  Circle,
  Span,
  Sticky
};
//# sourceMappingURL=chunk-NZFUKNDN.js.map
