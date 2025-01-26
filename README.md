<!-- Description -->

Daily Random Quote Generator

This app is designed to provide user with a new, random inspirational quote each time they click the "Get Quote" button.
The app retrieves a list of pre-defined quotes from an array, displaying both the quotes and its author. After displaying the quote for a few seconds, it resets to the default text, awaiting the next user interaction.

 <!-- <!-- Main Features: -->

- Get a Random Quote: When the user clicks on the " Get Quote" button, a new quote appears.
- Auto Reset: After a few seconds, the quote reset back to a default message until the next button click.
- Responsive Design: The layout adjusts for different screen sizes, ensuring an optimal viewing experience on both desktops and mobile devices.
- Background Animation: A moving cloud animation enhances the user experience, providing a dynamic background

 <!-- Functions Used: -->

HTML:
-Button Element: The "Get Quote" button, whick triggers the random quote generation.
-Text Diplay: Containers to show the quote and its author.

CSS:
-Flexbox Layout: Used for centering the content on the page.
-Background Animation: Cloud movement is implementated with keyframes to give a dynamic effect.
-Responsive Design: Media queries are used to adjust the layout for smaller screens.

JavaScript:
-Array of Quotes: A list of quotes stored in an array for random selection
-Random Quote Function: Randomly selects a quote and display it.
-Event Listener: Adds functionality to the "Get Quote" button to display a new quote when clicked.
