1. When an array is not passed, for both use effects, they will be called on each re render when ever increment and decrement buttons are clicked
2. Pass Empty array - When empty array is passed, use Effect is only called on initial render of the page.
3. When the particular variable is passed to useEffect, it will render, when ever the passed variable is changed.
4. Avoid using setState in useEffect when array is not passed, because it will continuously sets the page state, and makes the page of the application in Infinite loop - making the page unresponsive