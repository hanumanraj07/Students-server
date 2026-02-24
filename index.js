const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());


const students = [
  {
    id: 1,
    name: "Abhishek Malhar",
    branch: "CSE",
    semester: 8,
    cgpa: 9.3
  },
  {
    id: 2,
    name: "Elvish Yadav",
    branch: "IT",
    semester: 7,
    cgpa: 8.9
  },
  {
    id: 3,
    name: "MC Stan",
    branch: "ECE",
    semester: 6,
    cgpa: 8.4
  },
  {
    id: 4,
    name: "Purav Jha",
    branch: "CSE",
    semester: 8,
    cgpa: 9.1
  },
  {
    id: 5,
    name: "Urfi Javade",
    branch: "IT",
    semester: 5,
    cgpa: 7.8
  },
  {
    id: 6,
    name: "Ananya Pandey",
    branch: "CSE",
    semester: 6,
    cgpa: 8.7
  },
  {
    id: 7,
    name: "Dhruv Rathi",
    branch: "ECE",
    semester: 7,
    cgpa: 8.2
  },
  {
    id: 8,
    name: "Deepak Kalal",
    branch: "AI",
    semester: 4,
    cgpa: 8.8
  },
  {
    id: 9,
    name: "Samay Raina",
    branch: "Data Science",
    semester: 5,
    cgpa: 8.0
  },
  {
    id: 10,
    name: "Payal Gaming",
    branch: "CSE",
    semester: 6,
    cgpa: 7.9
  },
  {
    id: 11,
    name: "Bhuvan Bam",
    branch: "CSE",
    semester: 6,
    cgpa: 8.2
  },
  {
    id: 12,
    name: "Prajakta Koli",
    branch: "IT",
    semester: 5,
    cgpa: 7.8
  },
  {
    id: 13,
    name: "CarryMinati",
    branch: "ECE",
    semester: 7,
    cgpa: 8.5
  },
  {
    id: 14,
    name: "Komal Pandey",
    branch: "Fashion Tech",
    semester: 4,
    cgpa: 8.0
  },
  {
    id: 15,
    name: "Ashish Chanchlani",
    branch: "ME",
    semester: 8,
    cgpa: 7.5
  },
  {
    id: 16,
    name: "Technical Guruji",
    branch: "CSE",
    semester: 6,
    cgpa: 8.7
  },
  {
    id: 17,
    name: "BeerBiceps",
    branch: "MBA",
    semester: 3,
    cgpa: 8.3
  },
  {
    id: 18,
    name: "Nisha Madhulika",
    branch: "Food Tech",
    semester: 2,
    cgpa: 7.9
  },
  {
    id: 19,
    name: "Ankur Warikoo",
    branch: "BBA",
    semester: 5,
    cgpa: 8.1
  },
  {
    id: 20,
    name: "Kusha Kapila",
    branch: "Mass Comm",
    semester: 6,
    cgpa: 7.7
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
    let user = null;

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === userId) {
            user = students[i];
            break;
        }
    }
    res.status(200).json(user);
})


app.get("/students/branch/:branchName", (req, res) => {
    const userBranch = req.params.branchName.toLowerCase();
    let matchedStudents = [];

    for (let i = 0; i < students.length; i++) {
        if (students[i].branch.toLowerCase() === userBranch) {
            matchedStudents.push(students[i]);
        }
    }

    res.status(200).json(matchedStudents);
});



app.listen(3000,()=>{
    console.log("Server started on port 3000")
})