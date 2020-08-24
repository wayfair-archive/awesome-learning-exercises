/**
 * Shop the Look Teamkit Config
 *
 * @author Jason Papanicholas <jpapanicholas@wayfair.com>
 * @copyright 2019 Wayfair LLC - All rights reserved
 */

/* eslint-env node */
const path = require("path");

module.exports = {
  styleguideOutput: path.join(__dirname, "shop_the_look_styleguide.js"),
  sections: [
    {
      name: "Shop the Look Styleguide",
      content: path.join(__dirname, "docs/introduction.md"),
    },
    {
      name: "Design Patterns",
      content: path.join(__dirname, "docs/design_patterns.md"),
    },
    {
      name: "Components",
      components: [
        "shop_the_look_copy",
        "shop_the_look_card",
        "shop_the_look_image_size_container",
        "shop_the_look_tags_v2",
        "shop_the_look_tagged_product",
        "shop_the_look_tag_base",
      ],
    },
    {
      name: "Demos",
      sections: [
        {
          name: "Photo with Tags",
          content: path.join(__dirname, "docs/shop_the_look_photo_demo.md"),
        },
        {
          name: "Photo Card with Copy",
          content: path.join(
            __dirname,
            "docs/shop_the_look_photo_with_copy_demo.md"
          ),
        },
        {
          name: "Photo Card with Modal",
          content: path.join(
            __dirname,
            "docs/shop_the_look_photo_with_modal_demo.md"
          ),
        },
        {
          name: "Photo Card with Carousel Modal",
          content: path.join(
            __dirname,
            "docs/shop_the_look_photo_with_carousel_modal_demo.md"
          ),
        },
        {
          name: "Photo Mega Card",
          content: path.join(
            __dirname,
            "docs/shop_the_look_photo_mega_card_demo.md"
          ),
        },
      ],
    },
  ],
  title: "Shop the Look Styleguide",
  theme: {
    color: {
      name: "7f187f",
      link: "#221924",
      linkHover: "#7f187f", // $wf-secondary
      border: "#dedede",
      sidebarBackground: "#fff",
      codeBackground: "#14161a", // HB code block black
      codeBase: "#fff",
      codeComment: "#999", // HB code block grey
      codePunctuation: "#5fb3b3", // HB code block sea green
      codeProperty: "#79b6f2", // HB code block royal blue
      codeString: "#8dc891", // HB code block light green
      codeOperator: "#fff",
      codeKeyword: "#c5a5c5", // HB code block light purple
      codeFunction: "#fc929e", // HB code block light red
      codeVariable: "#d7deea", // HB code block light blue grey
    },
    fontSize: {
      h1: "36px",
      h2: "24px",
    },
    sidebarWidth: "300px",
  },
  styles: {
    Logo: {
      logo: {
        color: "#fff",
        background: "#7f187f", // $wf-secondary
        padding: "24px 16px",
        fontWeight: "bold",
      },
    },
    Code: {
      code: {
        color: "#7f187f", // $wf-secondary
        background: "#f2e8f2", // light purple
      },
    },
    StyleGuide: {
      logo: {
        padding: "0",
      },
      sidebar: {
        boxShadow: "rgba(34, 25, 36, 0.25) 1px 0px 8px", // From Homebase
      },
    },
  },
};
