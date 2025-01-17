import {  useCallback } from "react";
import { Glowbug, GlowbugKind } from "./Glowbug/types";
import { v4 as uuidv4 } from 'uuid';
import React from "react";

type Props = {
    addBug: (bug: Glowbug) => void
}
function JarInput({ addBug }: Props) {

  const onButtonClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
 addBug({
      id: uuidv4(),
      kind: GlowbugKind.PEE
  }  ) 
  }, [])


  return (
    <form>
      <button onClick={onButtonClick}>Add Bug</button>
    </form>
  );
}

export default JarInput;
