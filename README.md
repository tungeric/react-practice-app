# Nimble Pharmacy Front-End Challenge
Utilize two mock APIs to implement a page in which you can search for patient data. An online sandbox has been set up for you at CodeSandbox. Feel free to alter the folder structure as you wish, and if you need any dependencies (though none are necessary to complete this challenge), those can be installed by going to the ‘Dependencies’ menu in the left sidebar and clicking ‘Adding a Package’. The url of the sandbox is: https://codesandbox.io/s/3olp96mvq

## APIs
The two APIs you will need are given below. Though each API takes in a request parameter, both APIs are mocked and will return the same result each time.

### Patient Search API
The API takes in a search query string as a query parameter, and returns a list of patient profiles that fit a certain search query.
URL: ‘http://private-211206-codingchallenge2.apiary-mock.com/persons/search?query={QUERY}’
Example usage: ‘http://private-211206-codingchallenge2.apiary-mock.com/persons/search?query=bobby’

### Patient Prescription API
The API takes a Person-Id (a string identifying a person in the Nimble system) in the API path, and returns a list of prescriptions that belong to a certain patient.
URL: ‘http://private-211206-codingchallenge2.apiary-mock.com/persons/{PersonId}/prescriptions’
Example usage: ‘http://private-211206-codingchallenge2.apiary-mock.com/persons/P-abcde/prescriptions’
The Person-Id can be found in the profiles of each patient returned from the Patient Search API, under the ‘personalInfo” property.
Note: these APIs return fake user data (we take patient privacy seriously).

## Features
Please implement as many of the following user features as possible in the time allotted. Feel free to jump around to different features, though features 1-3 need to be done in order.

The user should be able to:
1. Enter a search query into a search bar.
2. View a list of patients who match the search query and their associated demographic data.
3. View a list of prescriptions associated with each patient.
4. See a maximum of 3 prescriptions per patient, and to be able to toggle the view of the full list of prescriptions by clicking a button (see the ‘MORE’ button in the design provided below)
5. Remove a patient’s prescription from the prescription list view (note: no API has been given for this feature, we are looking for a front-end only operation of removing the prescription from view)

## Design
An approximate design has been provided for you to follow. Don’t worry about getting the design exactly right; we are just looking for rough approximations on the layouts and appearance of the components in the design.

Notes on CodeSandbox: If you’ve never used CodeSandbox before, it may be helpful to turn off the auto-preview feature, which reloads the preview of your application automatically. You can do so by clicking on the gear icon, clicking on ‘Preview’, and disabling the feature ‘Preview on Edit’. 

Submission: Please double-check the CodeSandbox URL that you are currently working on. If it differs from the URL provided above, please email us the correct sandbox link.
