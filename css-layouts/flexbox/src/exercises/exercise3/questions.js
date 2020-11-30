/**
 * This is NOT where to start with the exercise!
 *
 * Please click on `exercise3/index.js` to begin
 */

import React from "react";
import { Block } from "../../grid-components";
import {
  Page,
  Logo,
  NavigationLinks,
  HamburgerButton,
  HeroImage,
  HeroSideContent,
  Divider,
  ValueProps
} from "../../utilities/website-components";
import { QuestionWrapper } from "../../utilities/containers";

const QuestionOneSolution = () => (
  <Page>
    {/* Row 1 */}
    <Block flexWrap="nowrap">
      <Block
        size={{
          small: 6,
          medium: 4
        }}
      >
        <Logo />
      </Block>
      <Block
        size={{
          small: 0,
          medium: 8
        }}
      >
        <NavigationLinks />
      </Block>
      <Block
        size={{
          small: 6,
          medium: 0,
          large: 6
        }}
      >
        <HamburgerButton />
      </Block>
    </Block>

    {/* Row 2 */}
    <Block>
      <Block
        size={{
          small: 12,
          medium: 8,
          large: 9
        }}
      >
        <HeroImage />
      </Block>
      <Block
        size={{
          small: 12,
          medium: 4,
          large: 3
        }}
        alignContent="center"
      >
        <HeroSideContent />
      </Block>
    </Block>

    {/* Row 3 */}
    <Divider />
    <Block>
      <Block
        size={{
          small: 12,
          medium: 4,
          large: 3
        }}
      >
        <ValueProps />
      </Block>
      <Block
        size={{
          small: 0,
          medium: 4,
          large: 4
        }}
      >
        Value Prop 2
      </Block>
      <Block
        size={{
          small: 0,
          medium: 4,
          large: 4
        }}
      >
        Value Prop 3
      </Block>
    </Block>

    <Block>Footer</Block>
    <Divider />
  </Page>
);

export const QuestionOne = ({ children }) => (
  <QuestionWrapper
    title="Question 1"
    showOverlayToggle
    solution={<QuestionOneSolution />}
  >
    {children}
  </QuestionWrapper>
);
