# Activity 3 - Hints

Let's work through creating one of the fields.

Here's an example React component for our SpeciesName:

`const SpeciesName = () => ( <div> <label for='speciesName'>Species Name</label> <input id='speciesName' type='text' value={speciesName} onChange={onChangeSpeciesName} /> </div> );`

---

The tricky part is figuring out where our `speciesName` and `onChangeSpeciesName` come from.

Ideally we'd like our **form** to manage all of our state for us, so the form always knows about everything it contains.

So, in `W12MForm.js` we can add some code to hold the state for this component:

`const [speciesName, setSpeciesName] = useState('humans');`

---

Then, also in `W12MForm.js`, we can pass the state value and a function to handle changing it into our `<SpeciesName/>` component:

`<SpeciesName speciesName={speciesName} onChangeSpeciesName={(e) => setSpeciesName(e.target.value)} />`

💡  The `onChange` event for an input gives us an event parameter, often called `e`, which contains the new value held by the input, which is stored in `e.target`. We can pass the value of this target to our setter function from `useState`.

---

Now all we need is to destructure the props in our `SpeciesName` component so we connect the state in the form to the values we're using in the child component. Change this:

`const SpeciesName = () => ... etc... `

to this:

`const SpeciesName = ( { speciesName, onChangeSpeciesName }) => ... etc... `

This input now keeps its state in the form component and updates it with any changes - hooray! 🥳

Go back to [Activity 3](./activity-3.md) and get all the fields on the page and controlled by state.
