# API
This document describe the API design.

Features:
* Auth
  * Login
  * Logout
  * Register
  * Check token
* Message (Require auth)
  * Send a Message
  * Edit a Message
* Thread (Require auth)
  * Create thread
  * Add someone to a thread
  * Remove someone from thread
  * Retrieve threads (pagination ?)
  * Retrieve messages from a thread (pagination ?)
  * Retrieve users from a thread

## Auth
### Login
Login to the application.
#### Request
```
POST /auth/login/

{
  username: string,
  password: string,
}
```
#### Response
```
{
  status: "OK",
  token: string,
}
```
### Logout
Logout from the application.
**Require Login**
#### Request
```
POST /auth/logout/
Authorization: <token>
```
#### Response
```
{
  status: "OK",
}
```
### Register
Register a new user.
#### Request
```
POST /auth/register/

{
  username: string,
  password: string,
}
```
#### Response
```
{
  status: "OK",
}
```

## Message
### Send a message
Send a message to a specific thread.
**Require Login**
#### Request
```
POST /message/send/
Authorization: <token>

{
  content: string,
  thread: string,
}
```
#### Response
```
{
  id: string,
  content: string,
  thread: string,
  sender: string,
}
```
