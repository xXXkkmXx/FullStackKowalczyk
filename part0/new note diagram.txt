    User --> Frontend: Interacts with
    Frontend --> BackendServer: Sends requests
    BackendServer --> Database: Queries
    Database --> BackendServer: Responds
    BackendServer --> Frontend: Sends data
    Frontend --> User: Displays data