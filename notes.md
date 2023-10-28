# HTML & CSS

## Semantic HTML

- Four really useful tags
  - Header - Site, title, logo and nav
  - section - A stand-alone section
  - footer - copyright, TS & cs etc
  - main - The page's unique content.

### Why use Semantic HTML

- More readable
- Better for accessibility
- Better for SEO.

## Margins Strange Behaviour

- When an element touches its parent its top and bottom margins will merge with the margins of parent element.
- Adding padding to the parent element is the solution.
- This is not an issue when we are using flexbox and grid.

## Images

- Generally take width of entire screen, to make it take just section width then use 100%;


## Specificity

- element = 1 point
- class = 10 points
- id = 100 points
- for compound selector is sum of selectors.

## CSS Combinators

- A CSS selector can contain more than one simple selector. Between the simple selectors, we can include a combinator.
- There are four different combinators in CSS:
  - descendant selector (space) : The descendant selector matches all elements that are descendants of a specified element.
  - child selector (>) : The child selector selects all elements that are the children of a specified element.
  - adjacent sibling selector (+)  : The adjacent sibling selector is used to select an element that is directly after another specific element.
  - general sibling selector (~) : The general sibling selector selects all elements that are next siblings of a specified element.


## When to use a link, and when to use a button ?

- Buttons for actions that effects the website's front-end or back-end
- Links for navigation to somewhere on the same page, within the site, or else where on the internet.


## Inline elements

- Sit side by side
- span and a are examples of inline elements
- Can't set height and margin top and bottom.


## Inline block elements

- Sit side by side
- button and input are examples of inline elements
- Can set height and margin top and bottom.