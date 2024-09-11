    User --> SPAFrontend: Interacts with
    SPAFrontend --> BackendServer: AJAX requests
    BackendServer --> Database: Queries
    Database --> BackendServer: Responds
    BackendServer --> SPAFrontend: Sends data
    SPAFrontend --> User: Updates UI dynamically