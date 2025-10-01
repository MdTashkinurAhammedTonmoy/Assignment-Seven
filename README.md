1. What is JSX, and why is it used?
JSX  is a syntax extension for JavaScript that lets you write HTML-like code directly inside your JavaScript files.

It's used because it makes a code It visually represents the UI structure. It allows you to combine rendering logic  and UI logic JS in one place, making components easier to read and maintain.

2. State vs Props: The Difference

* State
Data managed inside the component.
Mutable (Can be changed using a setter .
To track internal data that changes over time.

*Props
Data passed from a parent to a child component.
Immutable ,Read-only; cannot be changed by the receiving component.
To make components reusable and pass configurations.


3. What is the useState hook?
The useState hook is a built-in React function that allows functional components to have state .

How it works:
You call useState(initialValue).
It returns an array: [currentStateValue, setStateFunction].
Calling the setStateFunction updates the state value and triggers a re-render of the component with the new data.

4. How to share state between components?
The standard way to share state, 
Move the State: The state is moved from the child components to their closest common parent.
Pass Down: The parent passes the state value and the setter function down to the children as props.
Any child component can then call the setter function to update the shared state in the parent, forcing all related children to re-render.


5. How is event handling done in React?
Event handling in React is similar to HTML but with key differences:

CamelCase: Event names are written in camelCase.
 You pass a JavaScript function as the handler, not a string.
React uses a Synthetic Event system to ensure events behave consistently across all browsers.
 To stop default browser actions, you call event.preventDefault() inside your handler function.