# oauth2.0-practice
## Description
This is a project to practice oauth2.0 without the use of passport and other additional libraries to understand the internal workings of oauth2.0. 
## Other skills I learned
- How to use client side routing with react-router-dom
- React conditional rendering and animations
- Became more familiar with front end/back end communication
- How to structure a monorepo project
- How to deploy a website with AWS
## To dos 
- [x] finish the nav bar and the animations with css
- [x] implement oauth functionality 
- [x] create user session and store data in the database 
- [ ] learn useContext hooks and useRef hooks
- [ ] implment protected routes in react
- [ ] Research on how to deploy the website with aws  

## Notes
### OAuth2.0 work flow
- **Authorization Request**: The user (resource owner) opens the client (such as a web app) which wants access to the user's data stored on the server (resource server). The client redirects the user to the authorization server (typically a web login page) to authenticate and authorize the client app to access their data.
- **Authorization Grant**: If the user accepts, the authorization server sends the user back to the client with an authorization code. This redirection is usually done via a redirect URI that points back to the client app.
- **Access Token Request**: The client then sends this authorization code to the authorization server, along with its own client ID and client secret.
- **Access Token Response**: If the authorization code, client ID, and client secret are all valid, the authorization server sends back an access token (and often a refresh token) to the client.
- **Protected Resource Access**: The client can now use the access token to make requests for the user's data on the resource server. The resource server will validate the access token and, if it's valid, send back the requested data.
- **Refresh the Access Token (if necessary)**: Access tokens are often short-lived. When they expire, if the client still needs to access the user's data, it can use a refresh token (if one was issued) to get a new access token from the authorization server.
### OAuth2.0 roles
- **Resource Owner**: An entity capable of granting access to a protected resource. When the resource owner is a person, it is referred to as an end-user.
- **Resource Server**: The server hosting the protected resources, capable of accepting and responding to protected resource requests using access tokens.
- **Client**: An application making requests for access to resources on behalf of the resource owner and with its authorization. The term "client" does not imply any particular implementation characteristics (e.g., whether the application executes on a server, a desktop, or other devices).
- **Authorization Server**: The server issuing access tokens to the client after successfully authenticating the resource owner and obtaining authorization.
