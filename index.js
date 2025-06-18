import express from "express";

const app = express();
const port = 3000;
app.set('view engine', 'ejs');


const content = [
      {
        id: 1,
        name: "Sanjay Patel",
        batch: "2010",
        occupation: "Software Engineer at Google",
        email: "sanjay.patel@gmail.com",
        location: "San Francisco, USA",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        details: "Google developer ",
        socialLinks: {
          LinkedIn: "https://linkedin.com/in/sanjaypatel",
          Twitter: "https://twitter.com/sanjaypatel",
          Portfolio: "https://sanjaypatel.dev"
        },
        achievements: [
          "Speaker at Global Pride Tech Summit 2022",
          "Featured in Forbes India 30 Under 30",
          "Mentored over 100 LGBTQ+ youth in tech"
        ]
      },
      {
        id: 2,
        name: "Anita Sharma",
        batch: "2012",
        occupation: "Founder, EduNation",
        email: "anita.edu@gmail.com",
        location: "Delhi, India",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        details: "Founder of EduNation, working towards rural education reform. Supports student scholarships and mentoring.",
        socialLinks: {
          LinkedIn: "https://linkedin.com/in/anitasharma",
          Twitter: "https://twitter.com/anitasharma",
          Portfolio: "https://anitasharma.org"
        },
        achievements: [
          "Awarded Women Leader in Education 2020",
          "Built 50+ digital classrooms across rural India",
          "Launched free online learning platform for underprivileged students"
        ]
      },
      {
        id: 3,
        name: "Rahul Mehta",
        batch: "2015",
        occupation: "Data Scientist at Microsoft",
        email: "rahul.ai@outlook.com",
        location: "Bangalore, India",
        image: "https://randomuser.me/api/portraits/men/54.jpg",
        details: "Expert in AI and ML applications for social good. Donor and technical advisor for alumni data analytics projects.",
        socialLinks: {
          LinkedIn: "https://linkedin.com/in/rahulmehta",
          Twitter: "https://twitter.com/rahulml",
          Portfolio: "https://rahulmehta.ai"
        },
        achievements: [
          "Led AI4SocialGood campaign",
          "Contributed to Microsoft’s AI for Earth project",
          "Funded alumni analytics dashboard initiative"
        ]
      },
      {
        id: 4,
        name: "Divya Narayan",
        batch: "2011",
        occupation: "Entrepreneur - EcoVerse",
        email: "divya.eco@gmail.com",
        location: "Chennai, India",
        image: "https://randomuser.me/api/portraits/women/60.jpg",
        details: "Runs a green startup focused on sustainable urban living. Frequently contributes to alumni-driven eco-events.",
        socialLinks: {
          LinkedIn: "https://linkedin.com/in/divyanarayan",
          Twitter: "https://twitter.com/divyaeco",
          Portfolio: "https://ecodivya.in"
        },
        achievements: [
          "Created India's first zero-waste urban housing project",
          "Speaker at TEDx Eco Talks",
          "Founded SJCE Green Alumni Fund"
        ]
      }
    ];

    
app.get("/",(req,res)=>{
    res.render("main.ejs",{content:content});
})

app.get("/details",(req,res,)=>{
    res.render("details.ejs");
})

app.listen(port,()=>{
    console.log("port is running on local host 3000");
})