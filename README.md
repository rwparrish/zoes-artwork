Features:
    - filter art by "sold" or "available"
    - secret URL with a secret parameter to reveal admin panel 
    - user form that emails business email when submitted - smtplib library for this???

Pages:
    - About the artist
    - Gallery list all art pieces
    - Contact the artist (form)

Python Models:
    - art
    - FormData
    
Workflow:

1. **Set Up Backend Environment**:
   - **Purpose**: Establish the foundation for the backend development.
   - **Steps**:
     - Install Flask and SQLAlchemy.
     - Create a basic Flask application structure.
     - Set up a virtual environment using `virtualenv` or `pipenv`.
   - **Rationale**: By setting up the backend environment first, you establish a working environment for the Flask application, which will serve as the backbone of your project.

2. **Define Database Models**:
   - **Purpose**: Define the data structure for storing artwork information and form submissions.
   - **Steps**:
     - Create SQLAlchemy models for `Artwork` and `FormData`.
     - Define relationships between models if needed (e.g., one-to-many).
   - **Rationale**: Defining database models early allows you to plan and design the data schema, ensuring that your application can store and retrieve data effectively.

3. **Implement Backend Routes**:
   - **Purpose**: Set up the endpoints for handling HTTP requests and responses.
   - **Steps**:
     - Create routes for listing artwork, submitting forms, and sending emails.
     - Implement request handlers for each route.
   - **Rationale**: Implementing backend routes early enables basic functionality for interacting with the application, allowing you to test and iterate on features incrementally.

4. **Create Frontend Components**:
   - **Purpose**: Develop the user interface components for displaying artwork and submitting forms.
   - **Steps**:
     - Set up React with Formik for form handling.
     - Design and implement components for viewing artwork listings and submitting forms.
   - **Rationale**: Building frontend components early provides a visual representation of the application's interface, facilitating user interaction and feedback.

5. **Integrate Backend with Frontend**:
   - **Purpose**: Connect the backend API endpoints with the frontend components.
   - **Steps**:
     - Make API requests from the frontend to fetch artwork data and submit form data.
     - Handle responses from the backend and update the UI accordingly.
   - **Rationale**: Integrating backend functionality with the frontend allows for end-to-end communication and interaction, enabling a seamless user experience.

6. **Implement Email Notification System**:
   - **Purpose**: Set up automated email notifications for form submissions.
   - **Steps**:
     - Add functionality to send emails using Python's `smtplib` library.
     - Trigger email notifications upon form submission.
   - **Rationale**: Implementing email notifications ensures that the business receives timely notifications of new form submissions, facilitating prompt follow-up actions.

7. **Refine and Test Features**:
   - **Purpose**: Fine-tune existing features and conduct thorough testing.
   - **Steps**:
     - Conduct user testing to identify and address any usability issues.
     - Refactor code for better organization and efficiency.
     - Perform comprehensive testing to ensure functionality and reliability.
   - **Rationale**: Refining and testing features at this stage helps ensure that the application meets quality standards and user expectations before deployment.

8. **Deploy Application**:
   - **Purpose**: Make the application accessible to users on the web.
   - **Steps**:
     - Choose a hosting provider (e.g., Heroku, AWS) and deploy the backend and frontend.
     - Configure domain settings and SSL certificates if necessary.
   - **Rationale**: Deploying the application allows users to access and use it in a production environment, fulfilling the project's objectives and goals.