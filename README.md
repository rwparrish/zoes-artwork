Features:
    - filter art by "sold" or "available"
      - create dropdown for users to select "available" or "sold"
    - show all artwork
     - on artworks page all pieces should be displayed as cards
      - create ArtworkCard component 
    - secret URL with a secret parameter to reveal admin panel 
    - user form that emails business email when submitted - smtplib library for this???

Pages:
    - About the artist
    - Gallery list all art pieces
    - Contact the artist (form)

Python Models:
    - art
    - FormData
    
    
**Workflow:**

1. **Set Up Backend Environment**:
   - **Purpose**: Establish the foundation for the backend development.
   - **Steps**:
     - Install Flask and SQLAlchemy.
     - Create a basic Flask application structure.
     - Set up a virtual environment using `pipenv`.

2. **Define Database Models**:
   - **Purpose**: Define the data structure for storing artwork information and form submissions.
   - **Steps**:
     - Create SQLAlchemy models for `Artwork` and `FormData`.
     - Define relationships between models if needed (e.g., one-to-many).

3. **Implement Backend Routes**:
   - **Purpose**: Set up the endpoints for handling HTTP requests and responses.
   - **Steps**:
     - Create routes for listing artwork, submitting forms, and sending emails.
     - Implement request handlers for each route.

4. **Create Frontend Components**:
   - **Purpose**: Develop the user interface components for displaying artwork and submitting forms.
   - **Steps**:
     - Set up React with Formik for form handling.
     - Design and implement components for viewing artwork listings and submitting forms.

5. **Add Styling**:
   - **Purpose**: Enhance the visual appearance and layout of the frontend components.
   - **Steps**:
     - Choose a styling approach (e.g., CSS, CSS frameworks like Bootstrap).
     - Apply styles to the frontend components to improve aesthetics and user experience.

6. **Integrate Backend with Frontend**:
   - **Purpose**: Connect the backend API endpoints with the frontend components.
   - **Steps**:
     - Make API requests from the frontend to fetch artwork data and submit form data.
     - Handle responses from the backend and update the UI accordingly.

7. **Implement Email Notification System**:
   - **Purpose**: Set up automated email notifications for form submissions.
   - **Steps**:
     - Add functionality to send emails using Python's `smtplib` library.
     - Trigger email notifications upon form submission.

8. **Refine and Test Features**:
   - **Purpose**: Fine-tune existing features and conduct thorough testing.
   - **Steps**:
     - Conduct user testing to identify and address any usability issues.
     - Refactor code for better organization and efficiency.
     - Perform comprehensive testing to ensure functionality and reliability.

9. **Deploy Application**:
   - **Purpose**: Make the application accessible to users on the web.
   - **Steps**:
     - Choose a hosting provider (e.g., Heroku, AWS) and deploy the backend and frontend.
     - Configure domain settings and SSL certificates if necessary.

