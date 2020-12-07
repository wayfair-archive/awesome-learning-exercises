/* eslint-disable */
<>
  <QuestionOne>
    <Block justifyContent="space-evenly">
      <Square size="large" color="red" />
      <Square size="large" color="blue" />
      <Square size="large" color="green" />
    </Block>
  </QuestionOne>

  <QuestionTwo>
    <Block flexDirection="row-reverse" alignItems="baseline">
      <Star size="large" color="red" />
      <Circle size="small" color="blue" />
      <Heart size="large" color="green" />
    </Block>
  </QuestionTwo>

  <QuestionThree>
    <Block flexDirection="column-reverse" justifyContent="space-evenly">
      <Circle size="medium" color="red" />
      <Circle size="medium" color="blue" />
    </Block>
  </QuestionThree>

  <QuestionFour>
    <Block size={12} justifyContent="space-between" alignContent="flex-end">
      <Square size="medium" color="green" />
      <Square size="medium" color="blue" />
      <Square size="medium" color="yellow" />
    </Block>
  </QuestionFour>

  <QuestionFive>
    <Block flexDirection="column" alignItems="flex-end" justifyItems="flex-end">
      <Circle size="large" color="blue" />
      <Circle size="small" color="green" />
      <Star size="small" color="red" />
    </Block>
  </QuestionFive>

  <QuestionSix>
    <Block flexDirection="row-reverse">
      <Heart size="large" color="red" />
      <Heart size="large" color="green" />
      <Square size="large" color="blue" />
    </Block>
  </QuestionSix>

  <QuestionSeven>
    <Block
      justifyContent="space-around"
      alignItems="center"
      alignContent="flex-end"
    >
      <Star size="large" color="yellow" />
      <Heart size="small" color="blue" />
      <Square size="medium" color="red" />
    </Block>
  </QuestionSeven>
</>;
