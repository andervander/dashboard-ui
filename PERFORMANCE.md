# Performance and Accessibility

1) Application is being fully accessed by keyboards and allows user to navigate without using mouse;
2) Aria Labels being added to action links to provide accessible names;
3) By using Angular Material dialog, it provides shortcut for closing popup;
4) In the application every component has OnPush change detection strategy, which prevents angular to go through entire component tree on every change;
5) For charts third party library being used, and rendering is being run outside angular zone to prevent zone pollution (library might often call macro and microtasks which are monkeypatched by zone.js).
6) Made sure all subscriptions are unsubscribed when possible to avoid memory leaks
