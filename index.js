const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());


const students = [
  {
    id: 1,
    name: "Aarav Sharma",
    branch: "CSE",
    semester: 8,
    cgpa: 9.3
  },
  {
    id: 2,
    name: "Ishita Verma",
    branch: "IT",
    semester: 7,
    cgpa: 8.9
  },
  {
    id: 3,
    name: "Rohan Kulkarni",
    branch: "ECE",
    semester: 6,
    cgpa: 8.4
  },
  {
    id: 4,
    name: "Meera Iyer",
    branch: "CSE",
    semester: 8,
    cgpa: 9.1
  },
  {
    id: 5,
    name: "Kunal Deshmukh",
    branch: "IT",
    semester: 5,
    cgpa: 7.8
  },
  {
    id: 6,
    name: "Ananya Reddy",
    branch: "CSE",
    semester: 6,
    cgpa: 8.7
  },
  {
    id: 7,
    name: "Vikram Patil",
    branch: "ECE",
    semester: 7,
    cgpa: 8.2
  },
  {
    id: 8,
    name: "Priyanka Nair",
    branch: "AI",
    semester: 4,
    cgpa: 8.8
  },
  {
    id: 9,
    name: "Harsh Mehta",
    branch: "Data Science",
    semester: 5,
    cgpa: 8.0
  },
  {
    id: 10,
    name: "Neha Gupta",
    branch: "CSE",
    semester: 6,
    cgpa: 7.9
  }
];

app.get("/students",(req,res)=>{
    res.status(200).json(students);
});


app.get("/students/topper",(req,res)=>{
    let high = students[0];
    for(let i = 1; i < students.length; i++){
        if(students[i].cgpa > high.cgpa){
            high = students[i];
        }
    }
    res.status(200).json(high);
});

app.get("/students/average",(req,res)=>{

    let sum=0;
    let avg=0;

    for(let i=0; i<students.length; i++){
        sum += students[i].cgpa;
    }

    avg = sum/students.length;

    res.status(200).json({
        averageCGPA: Number(avg.toFixed(2))
    });
});

app.get("/students/count",(req,res)=>{

    let total = students.length;

    res.status(200).json({totalStudent:total});
})

app.get("/students/:id",(req,res)=>{
    const userId = Number(req.params.id);
    const user = students.find(u => u.id === userId);
    res.status(200).json(user);
})


app.get("/students/branch/:branchName",(req,res)=>{
    const userBranch = req.params.branchName.toLowerCase();
    const user = students.filter(u => u.branch.toLowerCase() === userBranch);

    res.status(200).json(user);
})



app.listen(3000,()=>{
    console.log("Server started on port 3000")
})