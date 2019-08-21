# react-component-scrollwheel-pagination

Aside from being a mouthful, this is a basic concept using React that implements the ability to present elements that are 'implicitly scrollable', meaning they are by default, when rendered, scrollable in an up or down fashion as far as the browser is concerned.

However, we hi-jack this behavior in order to create a scrolling-pagination effect, meaning that a scroll within our div, that is scrollable with some hacky CSS, is recorded as an event but reset by the app-logic. Scroll direction (up or down) is recorded within the method, meaning you could implement a linear carousel type state here.

Scrolling outside of the tagged component is not affected.

Note: It can be a bit juttery in Firefox. This doesn't happen in Chrome.

See live build [here](https://franklyt.github.io/react-component-scrollwheel-pagination/).
