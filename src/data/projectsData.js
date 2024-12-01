
import projet_tt from "@/../public/projects_images/projet_tt.png";
import projet_tt2 from "@/../public/projects_images/projet_tt2.png";
import projet_tt3 from "@/../public/projects_images/projet_tt3.png";
import react from "@/../public/react.svg";
import node from "@/../public/node.svg";
import express from "@/../public/express.svg";
import mongo from "@/../public/mongo.svg";

import projetML from "@/../public/projects_images/projetML.png";
import python from "@/../public/python.svg";
import scikit_learn from "@/../public/scikit-learn.svg";
import matplotlib from "@/../public/matplotlib.svg";



const projects = [
    {
        ProjectImage: projet_tt,
        slug: "intern-operations-manager",
        ProjectName: "TT Intern Operations Manager",
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
        ProjectType: "Machine Learning App",
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
        ProjectImage: projetML,
        slug: "heart-disease-detection-7algo",
        ProjectName: "Heart Disease Anomaly Detection Python Model",
        ProjectType: "Machine Learning Model",
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
];

export default projects;
