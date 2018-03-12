# Treehouse Project 3

## Set focus on the first text field
* When the page loads, give focus to the first text field

## ”Job Role” section of the form:
* A text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu.
* Give the field an id of “other-title,” and add the placeholder text of "Your Job Role" to the field.

## ”T-Shirt Info” section of the form:
* For the T-Shirt color menu, only display the color options that match the design selected in the "Design" menu.
* If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
* If the user selects "Theme - I ♥ JS" then the color menu should only display "Tomato," "Steel Blue," and "Dim Grey."

## ”Register for Activities” section of the form:
*Some events are at the same time as others. If the user selects a workshop, don't allow selection of a workshop at the same date and time -- you should disable the checkbox and visually indicate that the workshop in the competing time slot isn't available.
* When a user unchecks an activity, make sure that competing activities (if there are any) are no longer disabled.
* As a user selects activities, a running total should display below the list of checkboxes. For example, if the user selects "Main Conference", then Total: $200 should appear. If they add 1 workshop, the total should change to Total: $300.

## Payment Info section of the form:
* Display payment sections based on the payment option chosen in the select menu
The "Credit Card" payment option should be selected by default, display the #credit-card div, and hide the "Paypal" and "Bitcoin information.
* When a user selects the "PayPal" payment option, the Paypal information should display, and the credit card and “Bitcoin” information should be hidden.
* When a user selects the "Bitcoin" payment option, the Bitcoin information should display, and the credit card and “PayPal” information should be hidden.

##Form validation messages:
* Provide some kind of indication when there’s a validation error. The field’s borders could turn red, for example, or a message could appear near the field or at the top of the form
* There should be an error indication for the name field, email field, “Register for Activities” checkboxes, credit card number, zip code, and CVV