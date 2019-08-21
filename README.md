# react-component-scrollwheel-pagination

Aside from being a mouthful, this is a basic concept using React that implements the ability to present elements that are 'implicitly scrollable', meaning they are by default, when rendered, as far as the browser is concerned, 'scrollable' via the mousewheel in an up or down fashion.

Given this, we are able to capture scrolls and the directionality of scrolls, but we hi-jack this behavior by creating the illusion that no scroll ocurred, giving us the ability to discern scroll directionality via window offset differences, but maintaining complete control over the actual scrolling behavior.

This ultimately means that a scroll within our div, that is scrollable with some hacky CSS, is recorded as an event but reset by the app-logic. Scroll direction (up or down) is recorded within the method, meaning you could implement a linear carousel type state here. A 'paginating' effect is achieved where scroll behavior can be detected but outcomes are completely up to the developer.

Scrolling outside of the tagged component is not affected.

Note: It can be a bit juttery in Firefox. This doesn't happen in Chrome.

# See the live build [here](https://franklyt.github.io/react-component-scrollwheel-pagination/).
