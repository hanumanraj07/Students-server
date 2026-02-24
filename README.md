# Student Management API

A simple Express-based REST API for managing and querying student information.

## Features

- Retrieve all student records.
- Find the topper (highest CGPA).
- Calculate the average CGPA of all students.
- Get the total count of students.
- Search for a specific student by ID.
- Filter students by branch.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [npm](https://www.npmjs.com/) (usually comes with Node.js).

## Getting Started

1.  **Clone the repository** (if applicable) or navigate to the project directory:
    ```bash
    cd students/Students-server
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the server**:
    ```bash
    node index.js
    ```
    The server will start on `http://localhost:3000`.

## API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/students` | Returns a list of all students. |
| `GET` | `/students/topper` | Returns the student with the highest CGPA. |
| `GET` | `/students/average` | Returns the average CGPA of all students. |
| `GET` | `/students/count` | Returns the total count of students. |
| `GET` | `/students/:id` | Returns details of a student by their ID. |
| `GET` | `/students/branch/:branchName` | Returns a list of students in a specific branch. |

## Sample Data Structure

Each student object contains:
- `id`: Unique identifier
- `name`: Full name of the student
- `branch`: Academic branch (e.g., CSE, IT, ECE)
- `semester`: Current semester
- `cgpa`: Cumulative Grade Point Average

## License

This project is for educational purposes.
