```mermaid
classDiagram
    User --> Frontend : Interacts
    Frontend --> BackendServer : Sends HTTP request
    BackendServer --> Database : Queries data
    Database --> BackendServer : Returns data
    BackendServer --> Frontend : Sends response
    Frontend --> User : Updates UI

    class User {
        +View notes()
        +Add new note()
        +Delete note()
    }

    class Frontend {
        +Render notes page()
        +Submit new note via form()
        +Send delete request()
    }

    class BackendServer {
        +Fetch notes from DB()
        +Save note to DB()
        +Delete note from DB()
    }

    class Database {
        +Store notes()
        +Retrieve notes()
    }
```
