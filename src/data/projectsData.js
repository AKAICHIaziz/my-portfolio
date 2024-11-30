
import projet_tt from "@/../public/projet_tt.png";
import react from "@/../public/react.svg";
import node from "@/../public/node.svg";
import express from "@/../public/express.svg";
import mongo from "@/../public/mongo.svg";

import projetML from "@/../public/projetML.png";
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
            "A management platform to streamline intern operations efficiently for optimizing intern operations inside companies.",
        ProjectTechs: [
            { techName: "React JS", techImg: react },
            { techName: "Node JS", techImg: node },
            { techName: "Express JS", techImg: express },
            { techName: "MongoDB", techImg: mongo },
        ],
        images: [
            projet_tt,
            projet_tt,
            projet_tt
        ],
    },
    {
        ProjectImage: projetML,
        slug: "heart-disease-anomaly-detetion",
        ProjectName: "ML Prediction Dashboard",
        ProjectType: "Data App",
        ProjectDescription:
            "A machine learning dashboard for heart disease prediction to detect cardiac peoples using advanced ML algorithms.",
        ProjectTechs: [
            { techName: "Python", techImg: python },
            { techName: "Scikit Learn", techImg: scikit_learn },
            { techName: "Matplotlib", techImg: matplotlib },
            { techName: "Node JS", techImg: node },
        ],
        images: [
            projetML,
            projetML,
            projetML
        ],
    },
    {
        ProjectImage: projetML,
        slug: "test",
        ProjectName: "Project Test 2",
        ProjectType: "Data App",
        ProjectDescription:
            "A machine learning dashboard for heart disease prediction to detect cardiac peoples using advanced ML algorithms.",
        ProjectTechs: [
            { techName: "Python", techImg: python },
            { techName: "Scikit Learn", techImg: scikit_learn },
            { techName: "Matplotlib", techImg: matplotlib },
            { techName: "Node JS", techImg: node },
        ],
        images: [
            projetML,
            projetML,
            projetML
        ],
    },
    {
        ProjectImage: projetML,
        slug: "test 3",
        ProjectName: "Project Test 3",
        ProjectType: "Data App",
        ProjectDescription:
            "A machine learning dashboard for heart disease prediction to detect cardiac peoples using advanced ML algorithms.",
        ProjectTechs: [
            { techName: "Python", techImg: python },
            { techName: "Scikit Learn", techImg: scikit_learn },
            { techName: "Matplotlib", techImg: matplotlib },
            { techName: "Node JS", techImg: node },
        ],
        images: [
            projetML,
            projetML,
            projetML
        ],
    },
];

export default projects;
