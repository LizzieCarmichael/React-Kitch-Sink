
Time to convert your functional component into a class-based component. Without changing any actual content, comment out your functional App component and create a new class-based App component that renders the same *props* as the functional one did (*Hint: this is where you will need to use the `class` syntax and extend the `Component` class that is exported from the `react` node_module*) (*Double-Hint: when using class-based components, you use `this` to work with the `props` and `state` properties*).
5. Now that your App is a class-based component, you can initialize *state*. Do that, and define a new property on *state* called "text" with some string as the value.

6. Your new component should display both values from props and state. (*Hint: you have two options here - you can either concatenate these strings in the same pair of JSX curly braces, or you can place two sets of braces for each string. Your choice! Choose wisely.*)

7. Add an input element to your App. Use the component's state to define its placeholder attribute (*Hint: you will need to escape the JSX in order to access JS variables/properties using `{}`, like `placeholder={}`*). Add an "onChange" event to the input, and then *handle* the event to set a **new property** on the App's state (pro tip: name this something appropriate considering it is an *input* event). Replace any "wrapping" divs with the `<React.Fragment>` tag (*Hint: `Fragment` is a component on the `React` value you `import` from the `react` node_module*). How does that change the ReactDOM? Why might that be important?

**NOTE: Any methods you define on the class *(i.e., between the `constructor` and `render` methods)* should have this structure:**
```javascript
handleEvent(params) {
  // do something useful
}
```

**HOWEVER: Any event handlers you define in JSX elements should use arrow notation (and the concise body syntax, where applicable):**
```javascript
onEvent={(params) => this.handleEvent(params)}
```

8. Add a button beneath that input. When clicked, the button should invoke a method defined on the class to toggle a "hasLoaded" state property, which has a default value of `false`.

9. Before you return your elements to be rendered, check whether or not the `hasLoaded` property is true. If it is, return the elements that you have already defined; otherwise, return a new heading with the text "Loading..." and a button beneath it that is identical to the one you created in step 8. What happens? Which React elements are displayed first, and why?

10. If you can answer the questions at the end of the previous task, you already have an intuitive understanding of the lifecycle of a React Component. Given this, you can start thinking about invoking methods when these lifecycle events take place. So, write a new method with the name `componentDidMount`, which will set the state property "hasLoaded" to `true`. Now what happens when the application re-renders? Which React elements are displayed first, and why?

**BONUS:**

You should have three state properties at this point. Set the one that contains just a string (that was being used for your `<h1>` in the first few tasks) to the *props* value that you passed in to `<App />` in step 3. Then, for the time being, remove the *props* parameters from the constructor and super methods. What happens?

Manually revert your state property back to a regular string. *Now what happens?* What's going on here?

----

#### Make it this far? Feeling lucky? PM an instructor on Slack, if you dare.

>***"One does not simply finish labs in Covalence"***
>
> Sean Bean, circa 2001
