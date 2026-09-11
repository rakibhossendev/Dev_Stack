# DevStack

## Title description
This is a DevStack website. It was show some technologies information like technologies name,icon,rating,difficulty and more. 

## Technologies Use
- React 
- TypeScript
- Tailwind Css

## Features
- Modern,Clean and Responsive User Interface.
- Add to stack any technology.
- Remove and Remove All technology from Stack.

## Questions Answer
- What is JSX, and why is it used in React?
- `Ans:` JSX is a JavaScript XML. It is a tool that write HTML in your Js file. React use JSX because JSX handle Logic and UI Structure in same file. 

- What is the difference between props and state?
- Props:
    - Props is a system that send data parent component from child component.
    - It can only read data. can't modify or change data.
    - It was use to communicate parent component to child component.

- State:
    - State is a data managed inside component. 
    - When State change, react re-render the component.
    - It can be update.
    - Use to get Dynamic or interactive data.


- What does the useState hook do, and where did you use it in this project?
- `Ans: ` useState Hook is use to make dynamic data inside function. When need to change data and show changed data in UI, I use useState hook.

- What does the useEffect hook do, and why did you need it to load the JSON data?
- `Ans: ` useEffect Hook is create a side effect when component rendered. It is help to run fetch properly and unnecessary data repeated loading.

- Why does every item in a .map() list need a unique key prop?
- `Ans: ` Unique key helps to identify Which item changed or modify or added or removed. So it can update ui efficiently.

- What is conditional rendering? Show one place you used it (example: the empty stack message).
- `Ans: ` Conditional Rendering means display different UI based on Condition.
```jsx
{
    isData ?
        <div>
            {addedStackData.map(data => <AddedCardHero removeData={removeData} data={data}></AddedCardHero>)}
        </div>
    :

        <div className="p-2 mt-3 border-dotted border-[#E2E8F0] border-2 rounded py-10">
            <p className="text-center text-md text-[#64748B]">Your stack is Empty</p>
        </div>
}
```

- How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
- `Ans: ` Using props can pass data parent component from child component. Child component pass data from parent component using callback function and through props.
