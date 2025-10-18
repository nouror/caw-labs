# 5.5 The explanation of :focus
When someone clicks or tabs into any input box, it will get a thick blue border. This helps users see which field they're currently typing in.

# 6.2
## Which rule takes precedence and why?
The h2 in the footer takes the value of 1.2em instead of 2em due to the concept of specificity in css.

### Explain your observations and the concept of specificity
Specificity determines which CSS rule applies when multiple rules target the same element based on the selectors using the specificity hierarchy (ex: Inline styles > Id selectors > Classes, attribute selectors and pseudo-classes > Type selector > Universal selector) + the more specific selector for each rule takes precedence.

So in our example we have:
- "footer h2" = 2 type selectors = higher specificity
- "h2" = 1 type selector = lower specificity

In this case we go with the "footer h2" rule cuz it has the higher specificity.