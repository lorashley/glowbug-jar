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

// node_modules/@chakra-ui/react/dist/esm/components/flex/flex.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var Flex = (0, import_react.forwardRef)(
  function Flex2(props, ref) {
    const {
      direction,
      align,
      justify,
      wrap,
      basis,
      grow,
      shrink,
      inline,
      ...rest
    } = props;
    return (0, import_jsx_runtime.jsx)(
      chakra.div,
      {
        ref,
        ...rest,
        css: {
          display: inline ? "inline-flex" : "flex",
          flexDirection: direction,
          alignItems: align,
          justifyContent: justify,
          flexWrap: wrap,
          flexBasis: basis,
          flexGrow: grow,
          flexShrink: shrink,
          ...props.css
        }
      }
    );
  }
);

export {
  Flex
};
//# sourceMappingURL=chunk-NBSQQTHK.js.map
