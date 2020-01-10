# Creating Awesome Learning Courses
You have a subject you care about and want to teach. Use this guide to build the framework for your course centered around actionable learning outcomes.
## Brainstorm “Themes”
Within a given subject matter, what are the broad strokes you think your users should care about. Think of these as chapter names in a book or section headers on a website. They Introduce a top-level concept.

For example, when working with the subject matter of Data Types, some themes could be “Understanding Primitives”, “Working with Javascript Objects”, and “Equality and Coercion”.

## Define the “expert” mental model for each theme
Given a theme, define what an expert mental model for that theme looks like.
A mental model should explain how an expert visualizes the topic, what heuristics they use to make decisions within the space, and how/when they would apply certain concepts.

Continuing our example from above, we would describe how an expert visualizes javascript objects, when they would allow mutation and when not, when/how they would spread object properties and when they wouldn’t, etc.

## Brainstorm “learning outcomes”
A learning outcome answers the question “What should someone know or be able to do after they complete this exercise or course”.

The mental model represents an expert’s ability to improvise because they know the building blocks. Now that you have the expert mental model, try to capture all of the building blocks implicit in that model and put them into “should” statements.

For example, our mental model shows an expert knowing why you should and shouldn’t spread object properties. Implicit within that is the ability to spread properties at all. From that we derive the learning outcome of “should be able to destructure an object when it is a function parameter” (an ability—application of knowledge/understanding) and “should know when spreading an object is inappropriate (a piece of knowledge without necessarily the ability to apply it)

## Batch learning outcomes into themes
Given a list of things you want the user to be able to do, work to batch those outcomes into themes.

Given the following learning outcomes:

* Should be able to declare an object literal
* Should be able to destructure an object when it is a function parameter
* Should be able to access properties on objects using dot and bracket notation
* Should be able to spread props from one object into a new object
* Should be able to destructure an object in a block (getting local variables by way of destructuring)

We could batch these under the theme of “Working with Javascript Objects”

## For each learning outcome, determine how you “prove it”
Given a learning outcome such as “should be able to declare an object literal”, determine how someone would prove that they know how to do that. While ideating, consider edge cases and examples outside of your basic “toy” problems.

Strive to come up with a few examples of how someone would prove that they know this thing in the context of real-world examples.

For the above “should be able to spread props from one object into a new object”, we would want to see someone refactor a piece of code to spread props into a new object instead of explicitly transferring properties to make it more extensible for the future. We would also want to see things like property omission in spread, and when not to spread.

## For each “prove it”, create an exercise
Strive to keep exercises limited to one learning outcome. There will definitely be overlap and this isn’t axiomatic, but attempting to cover too many outcomes with one exercise can impact a user's depth of understanding on each outcome covered in this way.

## Anatomy of an Exercise
1. Co-locate any data and helper functions with the exercise itself - avoid forcing the user to open other files/pages to see everything related to their exercise.
2. Provide an answer, preferably with some comments as to why that was the chosen answer.
3. It helps retention if you can keep the exercises realistic

