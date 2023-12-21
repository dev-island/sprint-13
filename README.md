# Sprint 13 Week 1 

## Tuesday

### Intermediate Git
 - [Review this](https://www.theodinproject.com/lessons/javascript-a-deeper-look-at-git) - file away for future reference 
 - [Git Cheat sheet](https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet)
### Testing
#### TDD
  - Add a test.
  - Run all tests and see if any new test fails.
  - Write some code.
  - Run tests and Refactor code.
  - Repeat.

#### Testing tools
- [Jest](https://jestjs.io/)
- [Matchers](https://jestjs.io/docs/using-matchers) - [And more](https://jestjs.io/docs/expect)
- [Mocks](https://jestjs.io/docs/mock-functions)

#### Types of testing
- Unit tests: A unit test verifies the functionality of an application’s smallest possible module or “unit” independently from other modules. 
- Integration Tests: [Integration testing](https://www.browserstack.com/guide/integration-testing) verifies the interface between two software units or modules. 
- [End-to-end](https://www.browserstack.com/guide/end-to-end-testing)

### Intro to React
1. [What is react? Why do we use it](https://react.dev/)
   “The library for web and native interfaces”
  React is one of the most powerful, widely used JavaScript libraries.

  [JS Libraries and Frameworks](https://iamtapan.medium.com/this-is-how-long-the-life-cycle-of-a-javascript-framework-lasts-d21b29320512)
  ![libraries and frameworks](https://miro.medium.com/v2/resize:fit:640/format:webp/1*fniaUcKJGB-mjVlfATHhxQ.png)


1. Vite -> setup react env
2. JSX & components
3. Props
4. setting state



## Thursday
1. Start new react project (vite)
2. Folder structure
3. [Rendering Techniques](https://www.theodinproject.com/lessons/node-path-react-new-rendering-techniques)
4. [Keys](https://www.theodinproject.com/lessons/node-path-react-new-keys-in-react)
5. [Passing data between components]()
6. Tooling
   1. React Dev Tools
   2. CSS in JS
   3. 


# Sprint 13 - Week 2
## Tuesday
- Components
- Props
- State
- Intro to useEffects
- Intro to lifecycle

## Thursday
1. Virtual Dom - Not shadow dom (my b yall 🙃)

2. Hooks - "hooking into" react functionality
  - Hooks can only be called from the top level of a functional component.
  - Hooks can’t be called from inside loops or conditions.

3. State - A review
  "when a component’s state or props change, the component is destroyed and recreated from scratch. Yes, you heard that right: destroyed. This includes the variables, functions, and React nodes. The entire component is recreated but this time the latest state value will be returned from useState. This process is called rerendering. Rerendering is a key feature of React that enables it to efficiently update the user interface in response to changes in the underlying data."

  Rules of state:
  1. State shouldn't be directly mutated
  2. State updates are asynchronous. When you set state, React will apply the update in the next component render.

4. useEffect
   1. useEffect runs on every render
   2. Control the render with the dependency array
   3. Cleaning up our effects

5. Class based components -> The "old" way
   1. constructor
   2. 'this'
   3. binding
   4. lifecycle methods
   