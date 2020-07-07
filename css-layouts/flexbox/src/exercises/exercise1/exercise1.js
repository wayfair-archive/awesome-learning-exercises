import React from "react";
import { Block } from "../../grid-components";


const ExerciseOne = () => {
  return (
    <Block flexDirection="row">
      <Block size={4} style={{background: 'teal'}}>
        Left side
      </Block>
      <Block size={8} style={{ background: 'orangered' }}>
        Hello :)
      </Block>
    </Block>
  );
}

export default ExerciseOne;
