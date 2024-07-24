# Design and Technical decisions

Created feature called Comments, which provides routes and ngrx feature state for lazy loading.
In this case application can be scalable and new features can be easily added to current implementation.

For API interaction were used middleware ngrx effects, so developers can keep track of application state change and build logic based on dispatched actions.

Comments facade was created for convenient use of state selectors and action methods, also bring flexibility for injecting mock facade to tested components.

For Add Comment logic was used dialog popup that depends on query parameter, that allows to open popup in any feature children routes.

Sort data is being set to the state, which allows to create single selector for sorted list and keep sorted status when switching between pages
