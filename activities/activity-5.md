# Activity 5 - Validation

We have a simple form rendering and all the state is stored in one place! That's pretty cool.

But the aliens are very finicky about their form and insist that each field conforms to some precise requirements. Let's look at what they want:

- **Species Name**: Must be between 3 and 23 characters. No numbers or special characters allowed!

- **Planet Name**: Must be between 2 and 49 characters. Numbers are allowed, but no special characters.

- **Number of beings**: Numbers ONLY. Must be at least 1,000,000,000.

-  **What is 2 + 2**: "4" must be selected. Selecting "Not 4" should display an error.

- **Reason for sparing**: Must be between 17 and 153 characters. 

It's unclear how a species is supposed to make a case in just 17 characters, but the client is always right  🙃

(even if they are aliens hellbent on the destruction of all things)

## Step 1 - Add validation rules

🤔  Where is the best place to validate the data?

Remember you're going to have to write tests for each component's validation messages, so ideally we'll include that logic in each component somehow.

---

The smart place seems like our `onChange` handlers. We can intercept them and add the extra logic we need.

Let's start with a text input, e.g. `SpeciesName` or `PlanetName`. Up to now, each component probably includes something like this:

`<input type="text" value={someValueFromProps} onChange={someFunctionFromProps}/>`

But we can intercept that function to add extra logic and then call the original function

`<input type="text" onChange={(e) => { // extra logic goes here 
someFunctionFromProps(e); }}/>`

Remember `e.target.value` contains the current value of the input, which we can validate here. 

One way to do this is to add a validation function in our component. In pseudocode this might look a bit like this:

`
		const someComponent = ({...props}) => {

		const [ errorMessage, setErrorMessage ] = useState('');

		const validate = (value) => {
			// perform validation
			// return a suitable error message, or '' if no errors
		}

		return(
			// rest of component here
			<input type="text" onChange={(e) => {
				const errorMessage = validate(e.target.value);
				setErrorMessage(errorMessage);
				someFunctionFromProps(e);
				}}/>
		);

		}
`

-   Take a moment to understand the pseudocode above before reading on.

💡  We're still using the handler passed to us from the form component to inform it about any updates, but we're also getting each component to check the value entered each time it changes. And we're using empty string as a signal that there's no errors.

-   Add an `<ErrorMessage/>` component to each field. This should take `errorMessage` from the state as a prop, and its job is to display it in red next to the input field if there's a message, or to display nothing if not.

-   Use this pattern to add a `validate` function to each field using the rules the aliens gave us. 👾

-   Each field should now display a red error message if invalid data is entered.

😭  Getting lost? Check out [Activity 5 Hints](./activity-5-hints.md) for some extra help with one field which should get you going again.

We're nearly done!

Don't forget to take a break 🌯

All we have to do now is add some tests to make sure we did this step right! Move onto [Activity 6](./activity-6.md)
