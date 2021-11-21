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

```JavaScript
<input type='text' value={myStateVariable} onChange='{doSomethingHereToUpdateState} />
```

(Of course, not all of the required fields are `<input>` tags so you may need to remind yourself of how `<select>` and `<textarea>` work - luckily, they're very similar to `<input>`)

🤔  QUESTION - where is the best place to store this state? 

(Hint: think about submitting the form - at some point the whole form needs to know about the state of each component, so perhaps the form component is a sensible place to store form state?)

-   Code a simple version of the form that stores each entered value in state

😡  If you get frustrated, there are some extra [Activity 3 Hints](./activity-3-hints.md) to help you build the basic form

## Step 2 - Add a submit button

Lastly your form will need to submit. In the final product we'd probably want to send the data to a server, but we can just use our submit button to check that all of our components are working correctly.

- For now, hook the button up with a click handler which logs to the console all the data entered to the form when you press submit.

- (Optional) Rather than logging to the console, if you prefer you could add a new component beneath the form which displays the entered form data on the page when you press submit.

Once you're happy you've built a basic form and hooked up some kind of submit function, let's move onto [Activity 4](./activity-4.md).
