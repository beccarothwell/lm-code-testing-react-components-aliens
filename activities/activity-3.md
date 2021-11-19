# Activity 3 - Build Your Form Simply

The simplest version of this form does NO validation. So let's build that first.

## Step 1 - Add input fields and their labels

According to the aliens, each field should have a `<label>` and a corresponding tag for the input:

| Label              | Input Type          | Values                        | 
-------------------- | ------------------- | ----------------------------- | 
| Species Name       | text input tag      |                               |
| Planet Name        | text input tag      |                               |
| Number of beings   | text input tag      |                               |
| What is 2 + 2      | select tag          | two option tags: "4", "Not 4" |
| Reason for sparing | textarea tag        |                               |

💡  Don't forget we're in the world of React, so each input field needs to store its value somewhere in `state` - the `useState` hook will be required here.

As a refresher for inputs-with-state, for each input you'll need something like:

`<input type='text' value={myStateVariable} onChange='{doSomethingHereToUpdateState} />`

(Of course, not all of the required fields are `<input>` tags so you may need to remind yourself of how `<select>` and `<textarea>` work - luckily, they're very similar to `<input>`)

🤔  QUESTION - where is the best place to store this state? 

(Hint: think about submitting the form - at some point the whole form needs to know about the state of each component, so perhaps the form component is a sensible place to store form state?)

-   Code a simple version of the form that stores each entered value in state

😡  If you get frustrated, there are some extra [Activity 3 Hints](./activity-3-hints.md) to help you build the basic form

## Step 2 - Add a submit button

Lastly your form will need to submit. 

- For now, just hook the button up with a click handler that logs to the console that it has been submitted.

🤔  Can you get the button to log all the entered values in the console on submit? If you've designed the form carefully then this should just be a couple of lines of code!

Once you're happy you've built a basic form, let's move onto [Activity 4](./activity-4.md).
