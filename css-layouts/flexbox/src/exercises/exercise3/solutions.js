/* eslint-disable */

<Page>
  {/* Row 1 */}
  <Block
    flexWrap={{
      small: "nowrap",
      medium: "wrap"
    }}
    alignItems="center"
  >
    <Block
      justifyContent="center"
      size={{
        small: 6,
        medium: 12,
        large: 2
      }}
    >
      <Logo />
    </Block>
    <Block
      size={{
        small: 0,
        medium: 12,
        large: 10
      }}
      justifyContent="space-evenly"
    >
      <NavigationLinkOne />
      <NavigationLinkTwo />
      <NavigationLinkThree />
    </Block>
    <Block
      size={{
        small: 12,
        medium: 0
      }}
      alignContent="flex-end"
      justifyContent="flex-end"
    >
      <HamburgerButton />
    </Block>
  </Block>
  <Divider />

  {/* Row 2 */}
  <Block>
    <Block
      size={{
        small: 12,
        medium: 6,
        large: 8
      }}
      alignContent="center"
    >
      <HeroImage />
    </Block>
    <Block
      size={{
        small: 12,
        medium: 6,
        large: 4
      }}
      alignContent="center"
    >
      <HeroSideContent />
    </Block>
  </Block>

  {/* Row 3 */}
  <Divider />
  <Block
    flexDirection={{
      medium: "row-reverse",
      large: "row"
    }}
    alignItems={{
      medium: "flex-start",
      large: "center"
    }}
  >
    <Block
      size={{
        small: 12,
        medium: 4,
        large: 4
      }}
      justifyContent="center"
    >
      <ValuePropOne />
    </Block>
    <Block
      size={{
        small: 0,
        medium: 4,
        large: 4
      }}
      justifyContent="center"
    >
      <ValuePropTwo />
    </Block>
    <Block
      size={{
        small: 0,
        medium: 4,
        large: 4
      }}
      justifyContent="center"
    >
      <ValuePropThree />
    </Block>
  </Block>
  <Divider />
  <Block>
    <Block
      size={{
        small: 0,
        medium: 8,
        large: 9
      }}
      flexDirection={{
        medium: "column",
        large: "row"
      }}
      flexWrap="nowrap"
    >
      <TestimonialOne />
      <TestimonialTwo />
    </Block>
    <Block
      size={{
        small: 12,
        medium: 4,
        large: 3
      }}
      alignContent={{
        medium: "center",
        large: "flex-end"
      }}
    >
      <FooterContent />
    </Block>
  </Block>
</Page>;
