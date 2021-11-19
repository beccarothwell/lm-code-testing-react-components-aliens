# Activity 6 - Testing our validation

Our components already have `.test.js` files. Now we just need to make sure we're also testing the validation logic too.

Remember how to pass props to a component in tests? Here's an example you've seen earlier:

```JavaScript
	it(`Given the required props,
		When the component is rendered,
		Then the appointment description should be present`, () => {
		const requiredProps = {
		id: 1,
		name: 'Harriet',
		description: 'A very special appointment',
		date: '3 Nov',
		confirmed: false,
		onConfirmed: () => {},
		};

    	render(<Appointment {...requiredProps} />);

    	expect(
    		screen.getByText('A very special appointment')
    	).toBeInTheDocument();
    });
```

Your task now is to:

-   Add a test to each input component to test for NO error message when valid data is entered
-   Add (multiple if necessary) tests to each input component to test that the right error message is shown for each type of rule break

Reminder of the validation rules:

- **Species Name**: Must be between 3 and 23 characters. No numbers or special characters allowed!

- **Planet Name**: Must be between 2 and 49 characters. Numbers are allowed, but no special characters.

- **Number of beings**: Numbers ONLY. Must be at least 1,000,000,000.

-  **What is 2 + 2**: "4" must be selected. Selecting "Not 4" should display an error.

- **Reason for sparing**: Must be between 17 and 153 characters. 

- Write all of your tests and check they work for the above rules!

Now if you run `npm test` you should get confirmation that all of your components are validating correctly in all possible circumstances. The Earth is saved! 🌍💃🕺🥳 Have a well-deserved break. ☕

Form validation can get very complex, and there are many ways to approach it. I'm sure that if you made it this far you can see some of the drawbacks of this approach!

If you're feeling brave, you can take things just a little further with some extensions in [Activity 7 - This Time It's A Bit Harder](./activity-7-extension.md)
