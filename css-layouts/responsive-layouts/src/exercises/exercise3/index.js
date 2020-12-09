/*
  ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
  
  💡 For this final exercise, you will need to combine what
  💡 you learned from the first two exercises: the size prop,
  💡 and all of the various flex props to create a fully responsive
  💡 layout.

  💡 Below, you'll see a bunch of component imports that
  💡 are named after page elements you may see on a website
  💡 or application. These are what you'll be wrapping in 
  💡 `Block` components to replicate the layout you see
  💡 on the right side of the browser window.

  ⚠️ Much like the sizes prop, the flex props also accept
  ⚠️ an object of values. For example: 

  ```
    flexDirection={{
      small: "row",
      large: "column"
    }}
  ```

  💡 Would define the flex axis on the container to be vertical
  💡 on small screens, and then horizontal on large screens.

  💡 You may need to nest Block components inside other Block
  💡 components to achieve the desired layout.

  💡 Once again: since this involves re-sizing the screen to confirm your results,
  💡 it is suggested that you open the browser view in a new window by clicking
  💡 the button located on the far right of the browser toolbar

  ⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
*/

import React from "react";
import { Block } from "../../grid-components";
import {
  Page,
  Logo,
  NavigationLinkOne,
  NavigationLinkTwo,
  NavigationLinkThree,
  HamburgerButton,
  HeroImage,
  HeroSideContent,
  Divider,
  ValuePropOne,
  ValuePropTwo,
  ValuePropThree,
  FooterContent,
  TestimonialOne,
  TestimonialTwo
} from "../../utilities/website-components";
import { QuestionOne } from "./questions";

const ExerciseThree = () => {
  return (
    <QuestionOne>
      <Page>
        {/* 🟢 UNCOMMENT BELOW TO BEGIN 🟢 
        
        ❗ Note: if you want to confirm any of the website components behavior,
        ❗ feel free to check the website-components JS and SCSS source files. 
        ❗ The styles and HTML were kept simple to avoid any confusion with flex behavior. 
        */}

        {/* <Logo />
        <NavigationLinkOne />
        <NavigationLinkTwo />
        <NavigationLinkThree />
        <HamburgerButton />
        <HeroImage />
        <HeroSideContent />
        <Divider />
        <ValuePropOne />
        <ValuePropTwo />
        <ValuePropThree />
        <FooterContent />
        <TestimonialOne />
        <TestimonialTwo /> */}
      </Page>
    </QuestionOne>
  );
};

export default ExerciseThree;
