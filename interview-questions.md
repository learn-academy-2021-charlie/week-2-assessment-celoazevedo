# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is iteration?

  Your answer: is the when you perform a set of instructions over and over until a condition is met.

  Researched answer: iteration allows a program to perform repetitive tasks until a condition is met. This allows the code to be concise and adhere to principles like DRY (dont repeat yourself).



2. The built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer: .map() is an array built in method. It is also a higher order function that takes in another function (a callback function) as an argument. The callback function will perform the action in each element of the array. So it has access to the value of each element. In additino we can pass in the callback function the index position of the value and the actual array that the method is working with.

  Researched answer: .map() takes a callback function as a parameter. The callback function can take as an argumnet the current element that is being processed, the index of the element being processed and the array that was called upon.



3. What is object destructuring?

  Your answer: object destructuring is used to facilitate the access to the object's property by making the syntax to access that property shorter and more concise. If we destructure the object we can access its property directly by calling the property directly without the need of using the . (dot) notation.

  Researched answer: destructuring is a javascript expression that allows us to extract data from arrays and objects into their own variable. Facilitating the access to that information.



4. What is the difference between an object and a class?

  Your answer: A class is a blueprint of an object. It is like a cookie cutter with a predifined format that is used to make cookies (objects). If we want to create an object we can instantiate the class using the javascript keyword 'new' and store it in a variable. 

  Researched answer: A class is the template of an object and the object is the "member"/ instance of the class.



5. Why would you use the method super()?

  Your answer: the method super() is invoked inside of the constructor function when we are 'extending' a child class from the parent class. supper() allows the child class to inherit (have access to) the properties the were defined in the parent class.

  Researched answer: the super keyword is used to access and call functinos on object's parent.



6. STRETCH: What is hoisting in JavaScript?

  Your answer: when you declare a function in javascript, even though the script is processed from top to bottom, we can invoke the function before (above) it has been declared (they show up in the code). -- I think...

  Researched answer: is the default behaivior in javascript where all of the declarations (funcitons and variables) are automagically moved to the tope of their scope. --- > and this is what allows us to invoke the function before the function declaration.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. React: React is a javascript library / framework with a lot of built in tools to assist developer in making 'fancy' interactive user interfaces. React is component based and allow us to right single page applications that loads quickly and only reloads components/data that needs to be reloaded, allowing the page to be fast and responsive.

2. React lifecycle methods: mounting - this phase refers to the phase when a component is created and inserted to the DOM. Unmounting - this lifecycle method is invoked before the component is unmounted and destroyed. These are methods that you can override to run code at specified times during the lifecycle process.

3. React state: "...State allows React components to change their output over time in response to user actions, newtwork responses, and anything else..." React state holds the data for a component. A component state can change over time and when it shanges the component will re-render. The change in state determines the behavior of a component and how it will render.

4. Component invocation/call: React components are a lot like JS functions in which they can accept inputs/arguments (that are called 'props') in React. When invoking a component in React it will return a React element!!

5. DOM Events: events are triggered to excecute a specific action. Events can be executed by the click of a button, press of a key, etc...
