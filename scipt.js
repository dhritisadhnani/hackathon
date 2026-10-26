const button = document.getElementById("generateBtn");

button.addEventListener("click", function () {
    const goal = document.getElementById("goal").value.trim();
    const skills = document.getElementById("skills").value.trim();
    const result = document.getElementById("result");

    if (!goal || !skills) {
        alert("Please enter your career goal and current skills!");
        return;
    }

    const career = goal.toLowerCase();

    const roadmaps = [
        {
            keywords: ["ai engineer", "artificial intelligence", "machine learning", "ml engineer"],
            title: "AI / Machine Learning Engineer",
            steps: [
                "Learn Python programming and OOP",
                "Practice NumPy and Pandas",
                "Study mathematics, probability and statistics",
                "Learn machine learning with Scikit-learn",
                "Study neural networks and deep learning",
                "Build prediction and classification projects",
                "Learn model deployment and APIs"
            ]
        },
        {
            keywords: ["web developer", "frontend developer", "front end"],
            title: "Web Developer",
            steps: [
                "Learn HTML page structure",
                "Master CSS, Flexbox and responsive design",
                "Learn JavaScript and DOM manipulation",
                "Practice events, arrays and objects",
                "Learn Git and GitHub",
                "Connect your website to APIs",
                "Build and deploy a complete website"
            ]
        },
        {
            keywords: ["backend developer", "back end"],
            title: "Backend Developer",
            steps: [
                "Learn one backend language such as Python or JavaScript",
                "Understand HTTP requests and responses",
                "Learn a backend framework such as Flask or Express",
                "Practice databases and SQL",
                "Build REST APIs",
                "Learn authentication and basic security",
                "Deploy a backend project"
            ]
        },
        {
            keywords: ["full stack", "fullstack"],
            title: "Full-Stack Developer",
            steps: [
                "Learn HTML and CSS",
                "Master JavaScript",
                "Build responsive frontend interfaces",
                "Learn a backend framework",
                "Practice databases and SQL",
                "Connect frontend, backend and APIs",
                "Deploy a complete full-stack application"
            ]
        },
        {
            keywords: ["data analyst", "data analysis"],
            title: "Data Analyst",
            steps: [
                "Learn Excel and spreadsheet formulas",
                "Practice Python fundamentals",
                "Learn NumPy and Pandas",
                "Learn SQL queries",
                "Practice charts and data visualization",
                "Build dashboards using a visualization tool",
                "Create a data analysis portfolio"
            ]
        },
        {
            keywords: ["data scientist", "data science"],
            title: "Data Scientist",
            steps: [
                "Learn Python programming",
                "Study statistics and probability",
                "Practice NumPy and Pandas",
                "Learn data cleaning and visualization",
                "Study machine learning algorithms",
                "Practice experiments and model evaluation",
                "Build end-to-end data science projects"
            ]
        },
        {
            keywords: ["android developer", "app developer", "mobile developer"],
            title: "App Developer",
            steps: [
                "Learn programming fundamentals",
                "Choose Android development with Kotlin or cross-platform development with Flutter",
                "Learn UI layouts and navigation",
                "Practice APIs and JSON data",
                "Learn local storage and databases",
                "Build a functional mobile app",
                "Test and prepare the app for release"
            ]
        },
        {
            keywords: ["cybersecurity", "cyber security", "security analyst"],
            title: "Cybersecurity Analyst",
            steps: [
                "Understand computer networks",
                "Learn operating systems, especially Linux",
                "Study security fundamentals",
                "Practice Python scripting",
                "Learn defensive monitoring and log analysis",
                "Practice in legal cybersecurity labs",
                "Build a defensive security portfolio"
            ]
        },
        {
            keywords: ["game developer", "game development"],
            title: "Game Developer",
            steps: [
                "Learn programming fundamentals",
                "Choose a game engine such as Unity or Godot",
                "Learn game objects, scenes and physics",
                "Practice controls and collision detection",
                "Create simple game levels",
                "Learn debugging and performance basics",
                "Build and publish a small game"
            ]
        },
        {
            keywords: ["software engineer", "software developer"],
            title: "Software Engineer",
            steps: [
                "Strengthen programming fundamentals",
                "Learn data structures and algorithms",
                "Practice object-oriented programming",
                "Learn Git and GitHub",
                "Study testing and debugging",
                "Learn databases and APIs",
                "Build a complete software project"
            ]
        },
        {
            keywords: ["cloud engineer", "cloud computing"],
            title: "Cloud Engineer",
            steps: [
                "Learn networking fundamentals",
                "Understand Linux and command-line tools",
                "Study cloud computing concepts",
                "Explore one cloud platform",
                "Learn identity, access and security basics",
                "Practice deployment and monitoring",
                "Build and deploy a cloud project"
            ]
        },
        {
            keywords: ["devops", "devops engineer"],
            title: "DevOps Engineer",
            steps: [
                "Learn Linux and command-line basics",
                "Understand Git and GitHub",
                "Learn scripting with Python or Bash",
                "Study CI/CD pipelines",
                "Practice Docker containers",
                "Explore cloud and deployment tools",
                "Build an automated deployment project"
            ]
        },
        {
            keywords: ["ui ux", "ui designer", "ux designer", "product designer"],
            title: "UI/UX Designer",
            steps: [
                "Learn UI and UX fundamentals",
                "Study user research and user journeys",
                "Practice wireframing",
                "Learn Figma",
                "Create interactive prototypes",
                "Conduct usability testing",
                "Build a design portfolio"
            ]
        },
        {
            keywords: ["graphic designer", "graphic design"],
            title: "Graphic Designer",
            steps: [
                "Learn color theory and typography",
                "Study composition and visual hierarchy",
                "Practice a design tool",
                "Create posters and social media designs",
                "Learn basic branding principles",
                "Build a consistent visual identity",
                "Create a design portfolio"
            ]
        },
        {
            keywords: ["blockchain", "blockchain developer"],
            title: "Blockchain Developer",
            steps: [
                "Learn programming fundamentals",
                "Understand blockchain and distributed ledgers",
                "Study cryptography basics",
                "Learn smart contract concepts",
                "Practice in a test environment",
                "Learn smart contract testing and security",
                "Build a small educational blockchain project"
            ]
        },
        {
            keywords: ["robotics", "robotics engineer"],
            title: "Robotics Engineer",
            steps: [
                "Learn Python and C/C++ fundamentals",
                "Study algebra, vectors and basic physics",
                "Understand sensors and actuators",
                "Learn electronics and microcontrollers",
                "Explore robotics simulation tools",
                "Study control systems and robot movement",
                "Build a small robotics project"
            ]
        },
        {
            keywords: ["business analyst", "business analysis"],
            title: "Business Analyst",
            steps: [
                "Learn business and problem-solving fundamentals",
                "Practice Excel and data interpretation",
                "Learn basic SQL",
                "Study requirements gathering",
                "Practice process mapping and documentation",
                "Learn dashboard and reporting tools",
                "Build a sample business case study"
            ]
        },
        {
            keywords: ["digital marketer", "digital marketing"],
            title: "Digital Marketer",
            steps: [
                "Learn digital marketing fundamentals",
                "Understand SEO and keyword research",
                "Practice content marketing",
                "Learn social media strategy",
                "Study web analytics",
                "Understand advertising campaign metrics",
                "Create a sample marketing campaign"
            ]
        },
        {
            keywords: ["java developer", "java programmer"],
            title: "Java Developer",
            steps: [
                "Learn Java syntax and data types",
                "Practice conditions, loops and methods",
                "Understand OOP concepts",
                "Learn collections and exception handling",
                "Practice data structures and algorithms",
                "Learn databases and Java connectivity",
                "Build a Java application"
            ]
        },
        {
            keywords: ["python developer", "python programmer"],
            title: "Python Developer",
            steps: [
                "Strengthen Python fundamentals",
                "Practice functions, modules and OOP",
                "Learn files, exceptions and testing",
                "Practice Git and GitHub",
                "Learn SQL and database connections",
                "Explore Flask or Django",
                "Build and deploy a Python application"
            ]
        }
    ];

    const matchedCareer = roadmaps.find(function (item) {
        return item.keywords.some(function (keyword) {
            return career.includes(keyword);
        });
    });

    let title;
    let steps;

    if (matchedCareer) {
        title = matchedCareer.title;
        steps = matchedCareer.steps;
    } else {
        title = goal + " Career Roadmap";
        steps = [
            "Research the career and its required skills",
            "Learn the essential beginner concepts",
            "Practice with guided exercises",
            "Build a small beginner project",
            "Learn tools used in this field",
            "Create a portfolio project",
            "Review your progress and plan the next step"
        ];
    }

    result.innerHTML = `
        <h2>🚀 ${title}</h2>
        <p><strong>Your current skills:</strong> ${skills}</p>
        <h3>📚 Your Learning Roadmap</h3>
        <ol>
            ${steps.map(function (step) {
                return `<li>${step}</li>`;
            }).join("")}
        </ol>
        <p>💡 Tip: Practice each step by building small projects.</p>
    `;
});
