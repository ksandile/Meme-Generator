# Documentation:

## Header Component:

Purpose: This component renders the header section of the Meme Generator application. It includes a logo or image, the title of the application, and a subtitle or project description.

### JSX Structure:

### Image:

Displays an image (troll1.jpeg) which acts as a logo or visual representation for the header. The alt attribute provides alternative text for the image.

### Title:

Displays the main title of the application: "Meme Generator".

### Subtitle:

Displays a subtitle or project description: "React Course - Project 3".

___

## Meme Component:

Purpose: This component allows users to generate a random meme image from a set of templates and add custom text to the top and bottom of the image.

### State Variables:

meme: Holds the current meme data, including topText, bottomText, and randomImage.
allMemes: Stores the list of meme templates fetched from the Imgflip API.



### useEffect:

Fetches meme templates from the Imgflip API when the component mounts and sets allMemes with the fetched data.

### handleChange Function:

Updates the meme state with the user's input for topText and bottomText.

## JSX Structure:

### Form:

Contains two input fields for topText and bottomText and a button to generate a new meme image.

### Meme Display:

Displays the selected meme image with the custom text on top and bottom.