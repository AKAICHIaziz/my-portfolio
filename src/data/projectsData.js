
import projet_tt from "@/../public/projects_images/projet_tt.png";
import projet_tt2 from "@/../public/projects_images/projet_tt2.png";
import projet_tt3 from "@/../public/projects_images/projet_tt3.png";
import react from "@/../public/react.svg";
import node from "@/../public/node.svg";
import express from "@/../public/express.svg";
import mongo from "@/../public/mongo.svg";
import angular from "@/../public/angular.svg";

import projetML from "@/../public/projects_images/projetML.png";
import python from "@/../public/python.svg";
import scikit_learn from "@/../public/scikit-learn.svg";
import matplotlib from "@/../public/matplotlib.svg";
import springboot from "@/../public/spring-boot.png";
import springboot2 from "@/../public/springboot.svg";
import springauth from "@/../public/spring-auth.png";

import colab from "@/../../public/projects_images/colab.png"

import blog216 from "@/../../public/projects_images/blog216.png"
import next from "@/../public/next.svg";
import nextAuth from "@/../public/nextAuth.png";
import mysql from "@/../public/mysql.png";

import anime216 from "@/../../public/projects_images/anime216.png"


const projects = [
    {
        ProjectImage: projet_tt,
        slug: "intern-operations-manager",
        ProjectName: "TT Intern Operations Manager",
        BackendLink: "https://github.com/AKAICHIaziz/MagasinTT-Backend",
        FrontLink: "https://github.com/AKAICHIaziz/MagasinTT-Fronend",
        ProjectType: "Web App",
        ProjectDescription:
            `In response to the inefficiencies in material request management at Tunisie Telecom, we developed a custom application designed to optimize the internal processes. The existing system was manual, disorganized, and led to delays, which impacted the flow of work and employee productivity. This project aimed to create a more structured and automated solution that would streamline the process and ensure better tracking and management of materials.
            The application enables employees to easily submit material requests through a user-friendly interface. The system automatically processes these requests, providing administrators with a centralized dashboard where they can manage and monitor the status of requests and the available stock.<br><br>
            The key features of the application include:<br>
            <b style="color: white;">Simplified Request Process:</b> <br>Employees can quickly submit material requests, reducing processing time and eliminating errors.<br>
            <b style="color: white;">Stock Tracking:</b> Employees can view the availability of materials, which helps in better planning and reduces delays.<br>
            <b style="color: white;">Real-time Communication:</b> A chat system allows instant communication between employees and administrators for quick resolution of issues.<br>
            <b style="color: white;">Transparent and Traceable:</b> Each request is traceable, reducing the risk of favoritism or errors, and ensuring transparency in the material distribution process.<br>
            <b style="color: white;">Centralized Administration:</b> Administrators have full control over the system, including user management, approval of requests, and inventory tracking<br><br>
            The application was built using a combination of powerful technologies that streamline both the frontend and backend processes. On the frontend, <b style="color: skyblue;">React.js</b> was used to create a dynamic, responsive user interface, allowing users to interact seamlessly with the system. For the backend, <b style="color: green;">Node.js</b> with <b style="color: gold;">Express.js</b> was chosen to build a fast and scalable server that handles HTTP requests and manages application logic efficiently. The database is powered by <b style="color: chartreuse;">MongoDB</b>, which offers a flexible and scalable NoSQL database for storing and managing data. Authentication was handled securely using <b style="color: crimson;">JWT</b> (JSON Web Tokens) and <b style="color: darkorange;">bcrypt</b>, ensuring that user credentials and sessions are protected. To support real-time communication, <b style="color: darkviolet;">WebSockets</b> were integrated, allowing instant updates and interactions between users and administrators.
            `,

        ProjectTechs: [
            { techName: "React JS", techImg: react },
            { techName: "Node JS", techImg: node },
            { techName: "Express JS", techImg: express },
            { techName: "MongoDB", techImg: mongo },
        ],
        images: [
            projet_tt,
            projet_tt2,
            projet_tt3
        ],
    },
    {
        ProjectImage: projetML,
        slug: "heart-disease-detection",
        ProjectName: "Heart Disease Anomaly Detection",
        ProjectLink: "https://github.com/AKAICHIaziz/Anomaly-Detection",
        ProjectType: "Machine Learning",
        ProjectDescription:
            `Developed a machine learning model to predict heart disease risk using key medical parameters. The model leverages advanced algorithms to analyze patient data and identify potential cardiac issues. Using Python libraries such as <b style="color: skyblue;">Pandas</b> for data preprocessing, <b style="color: green;">Scikit-learn</b> for model training, and <b style="color: gold;">Matplotlib</b> and <b style="color: chartreuse;">Seaborn</b> for data visualization, the model was built to provide accurate predictions.<br><br>
            The key features of the project include:<br>
            <b style="color: white;">Data Preprocessing:</b> Cleaned and prepared data to ensure the model is trained on high-quality, relevant information.<br>
            <b style="color: white;">Model Training:</b> Utilized Scikit-learn to train multiple models, with a focus on achieving high prediction accuracy.<br>
            <b style="color: white;">Visualization:</b> Visualized data distributions and model results to better understand the relationships between variables.<br>
            <b style="color: white;">Prediction:</b> The model can predict heart disease risk based on patient input, providing useful insights for healthcare providers.<br><br>
            The model was integrated into a web application using <b style="color: chartreuse;">Node.js</b> for serving predictions through an API. The frontend, built with <b style="color: skyblue;">React.js</b>, allows users to input data and view real-time predictions.<br><br>`,
        ProjectTechs: [
            { techName: "Python", techImg: python },
            { techName: "Scikit-learn", techImg: scikit_learn },
            { techName: "Matplotlib", techImg: matplotlib },
            { techName: "Node JS", techImg: node },
        ],
        images: [
            projetML,
            projetML,
        ],
    },
    {
        ProjectImage: colab,
        slug: "heart-disease-detection-7algo",
        ProjectName: "Heart Disease Anomaly Detection Python ML Model",
        ProjectType: "Machine Learning",
        ProjectLink: "https://colab.research.google.com/drive/1fNcAz-Ys2tshZJ2sPALpnpvCZIzyBDEx",
        ProjectDescription:
            `Developed a machine learning model to predict heart disease risk using key medical parameters. The model leverages advanced algorithms to analyze patient data and identify potential cardiac issues. Using Python libraries such as <b style="color: skyblue;">Pandas</b> for data preprocessing, <b style="color: green;">Scikit-learn</b> for model training, and <b style="color: gold;">Matplotlib</b> and <b style="color: chartreuse;">Seaborn</b> for data visualization, the model was built to provide accurate predictions.<br><br>
            The key features of the project include:<br>
            <b style="color: white;">Data Preprocessing:</b> Cleaned and prepared data to ensure the model is trained on high-quality, relevant information.<br>
            <b style="color: white;">Model Training:</b> Utilized Scikit-learn to train multiple models, with a focus on achieving high prediction accuracy.<br>
            <b style="color: white;">Visualization:</b> Visualized data distributions and model results to better understand the relationships between variables.<br>
            <b style="color: white;">Prediction:</b> The model can predict heart disease risk based on patient input, providing useful insights for healthcare providers.<br><br>
            The model was integrated into a web application using <b style="color: chartreuse;">Node.js</b> for serving predictions through an API. The frontend, built with <b style="color: skyblue;">React.js</b>, allows users to input data and view real-time predictions.<br><br>`,
        ProjectTechs: [
            { techName: "Python", techImg: python },
            { techName: "Scikit-learn", techImg: scikit_learn },
            { techName: "Matplotlib", techImg: matplotlib },
            { techName: "Node JS", techImg: node },
        ],
        pdfFile: "/ml_project.pdf",
    },
    {
        ProjectImage: blog216,
        slug: "Blog216",
        ProjectName: "Blog216",
        ProjectLink: "https://github.com/AKAICHIaziz/blogo",
        LivePreview: "blog216.vercel.app",
        ProjectType: "Web App",
        ProjectDescription: ` <p>
    <b style="color: deepskyblue;">Blog Web Application</b><br><br>
    This is a blog web application built with <b style="color: skyblue;">Next.js 14</b> and 
    <b style="color: chartreuse;">MongoDB</b>. It includes an admin panel for managing blog posts, 
    categories, and user access. The frontend is optimized for users, offering a clean interface 
    and a fully responsive design that works smoothly on both mobile and desktop devices.
  </p>

  <br>

  <p><b style="color: white;">🔍 User Features:</b></p>
  <ul style="line-height: 1.8;">
    <li>Browse and read blog posts with ease.</li>
    <li>Search and filter posts by <b>category</b> or <b>keyword</b>.</li>
    <li>Enjoy a seamless experience on any device with a fully responsive layout.</li>
  </ul>

  <br>

  <p><b style="color: white;">🛠️ Admin Features:</b></p>
  <ul style="line-height: 1.8;">
    <li>Create, edit, and delete blog posts from a centralized admin panel.</li>
    <li>Manage blog categories dynamically.</li>
    <li>View and manage users and roles <i>(if applicable)</i>.</li>
  </ul>

  <br>

  <p><b style="color: white;">🧩 Technologies Used:</b></p>
  <ul style="line-height: 1.8;">
    <li><b style="color: skyblue;">Next.js 14</b> – React framework for building fast and scalable web apps.</li>
    <li><b style="color: lightsteelblue;">TypeScript</b> – Ensures strong typing and developer efficiency.</li>
    <li><b style="color: turquoise;">Tailwind CSS</b> – For utility-first, modern styling.</li>
    <li><b style="color: chartreuse;">MongoDB</b> – NoSQL database for flexible data modeling.</li>
    <li><b style="color: gold;">Mongoose</b> – ORM for MongoDB to simplify interactions with the database.</li>
    <li><b style="color: coral;">NextAuth.js</b> – Secure authentication and authorization solution.</li>
  </ul>`,
        ProjectTechs: [
            { techName: "Next JS", techImg: next },
            { techName: "Next Auth", techImg: nextAuth },
            { techName: "MongoDB", techImg: mongo },
        ],
        images: [
            blog216
        ],
    },
    {
        ProjectImage: springauth,
        slug: "auth",
        ProjectName: "Secure Auth System",
        ProjectLink: "https://github.com/AKAICHIaziz/auth-system-email-verification",
        ProjectType: "Backend API",
        ProjectDescription: `🚀 Authentication System with Spring Security, JWT, and Email Verification
                            <p>This project is a comprehensive implementation of <strong>Spring Security</strong> and <strong>JSON Web Tokens (JWT)</strong> to provide robust and secure authentication. It includes features like user registration, account verification via email, and stateless API authentication with JWT.</p>
                            <br>
                            <h2>📋 Overview</h2>
                            <p>This application showcases best practices for securing web applications using <strong>Spring Security</strong> and <strong>JWT</strong>. It provides users with seamless registration and login functionalities, secure endpoints, and email-based account verification.</p>
<br>
                            <h3>Key Functionalities:</h3>
                            <ul>
                                <li>📝 <strong>User Registration</strong>: Register new users and store them securely in the database.</li>
                                <li>📧 <strong>Account Verification</strong>: Send verification codes via email for user validation.</li>
                                <li>🔑 <strong>JWT Authentication</strong>: Generate and validate JWT tokens for stateless session management.</li>
                                <li>🔒 <strong>Secure Endpoints</strong>: Protect API endpoints to ensure only authorized access.</li>
                            </ul>
<br>
                            <h2>💡 Features</h2>
                            <ul>
                                <li><strong>User Authentication</strong>: Register and authenticate users with encrypted credentials.</li>
                                <li><strong>Account Verification</strong>: Validate user accounts with verification codes sent via email.</li>
                                <li><strong>JWT Integration</strong>: Securely generate, issue, and validate JSON Web Tokens.</li>
                                <li><strong>Spring Security</strong>: Handle authentication and authorization with Spring's security framework.</li>
                                <li><strong>Stateless API</strong>: Maintain a stateless backend using token-based authentication.</li>
                            </ul>
<br>
                            <h2>⚙️ Technologies Used</h2>
                            <ul>
                                <li>🌐 <strong>Spring Boot</strong>: Framework for building Java-based applications.</li>
                                <li>🔐 <strong>Spring Security</strong>: For authentication and authorization.</li>
                                <li>🔑 <strong>JWT</strong> (JSON Web Tokens): Stateless authentication mechanism.</li>
                                <li>💌 <strong>JavaMail</strong>: For sending email verification codes.</li>
                                <li>💾 <strong>Spring Data JPA</strong>: Simplified database operations.</li>
                                <li>🐘 <strong>PostgreSQL</strong>: Relational database management system.</li>
                            </ul>
<br>
                            <h2>🛠️ How It Works</h2>
                            <ol>
                                <li><strong>User Registration</strong>:<br>
                                Users provide their details (e.g., email, password) via the <code>/auth/signup</code> endpoint.<br>
                                The system sends a verification code to the user's email.</li>
                                <li><strong>Account Verification</strong>:<br>
                                Users submit the verification code via the <code>/auth/verify</code> endpoint.<br>
                                If valid, the account is marked as verified, enabling login.</li>
                                <li><strong>User Login</strong>:<br>
                                Users authenticate with their email and password at the <code>/auth/login</code> endpoint.<br>
                                On successful login, a JWT token is generated and returned to the user.</li>
                                <li><strong>Protected Endpoints</strong>:<br>
                                API endpoints are secured, accessible only with a valid JWT token.</li>
                            </ol>
<br>
                            <h2>🚀 Endpoints</h2>
                            <table border="1" cellpadding="5" cellspacing="0">
                                <thead>
                                <tr>
                                    <th>HTTP Method</th>
                                    <th>Endpoint</th>
                                    <th>Description</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr><td>POST</td><td><code>/auth/signup</code></td><td>Register a new user</td></tr>
                                <tr><td>POST</td><td><code>/auth/verify</code></td><td>Verify user account with a code</td></tr>
                                <tr><td>POST</td><td><code>/auth/login</code></td><td>Authenticate user and generate JWT</td></tr>
                                <tr><td>POST</td><td><code>/auth/resend</code></td><td>Resend verification code to email</td></tr>
                                <tr><td>GET</td><td><code>/users/me</code></td><td>A test for allowed route after login</td></tr>
                                </tbody>
                            </table>
<br>
                            <h2>🛡️ Security Highlights</h2>
                            <ul>
                                <li><strong>Password Encryption</strong>: User passwords are securely hashed and stored.</li>
                                <li><strong>JWT Token</strong>: Ensures stateless authentication and user session integrity.</li>
                                <li><strong>Spring Security</strong>: Protects against unauthorized access.</li>
                            </ul>
<br>
                            <h2>🧩 Tech Stack</h2>
                            <ul>
                                <li><strong>Java 22</strong>: Compatible JDK for building and running the application.</li>
                                <li><strong>Spring Boot 3.3.1</strong>: Framework for building Java-based applications.</li>
                                <li><strong>Spring Security</strong>: For authentication and authorization.</li>
                                <li><strong>JWT</strong>: Stateless authentication mechanism.</li>
                                <li><strong>PostgreSQL</strong>: Relational database for storing user data.</li>
                                <li><strong>JavaMail</strong>: Configured for sending email verification codes.</li>
                                <li><strong>Gradle</strong>: Build automation tool used for project management.</li>
                            </ul>`,
        ProjectTechs: [
            { techName: "Spring Boot", techImg: springboot2 },
        ],
    },
    // {
    //     ProjectImage: anime216,
    //     slug: "anime216",
    //     ProjectName: "Anime216",
    //     ProjectLink: "https://github.com/AKAICHIaziz/Anime216",
    //     LivePreview: "anime216.vercel.app",
    //     ProjectType: "Web App",
    //     ProjectDescription: `Lorem ipsum<br>Lorem ipsum`,
    //     ProjectTechs: [
    //         { techName: "Next JS", techImg: next },
    //         { techName: "Next Auth", techImg: nextAuth },
    //         { techName: "MongoDB", techImg: mongo },
    //     ],
    //     images: [
    //         anime216,
    //     ],
    // },
];

export default projects;