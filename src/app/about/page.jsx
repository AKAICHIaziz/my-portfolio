
import ProfileDetails from "@/components/ProfileDetails";
import Timeline from "@/components/Timeline";

export default function About() {

    const experienceItems = [
        {
            experience: true,
            title: "Software Developer",
            society: "Industry X.0",
            date: "02/2025 - Present",
            description: "<b>Development of an Audit Trail and Data-Driven Methodology Enhancement Solution</b> <br>• Integrated an account recovery system to enhance user experience.<br>• Implemented a comprehensive error tracking module enabling proactive identification of anomalies and prevention of system outages.<br>• Implemented a robust audit trail mechanism to ensure detailed logging and traceability of user modifications.<br>•  Integrated generative AI to assist in root cause analysis and corrective decision-making.<br>• Work performed using the Scrum methodology, with planning and monitoring via Jira."
        },
        {
            experience: true,
            title: "Software Developer",
            society: "Tunisie Telecom",
            date: "07/2024 - 09/2024",
            description: "•	Developed an internal operations management web application with <b>React</b>, <b>Node</b>, <b>Express</b>, and <b>MongoDB</b>.<br>• Implemented a streamlined workflow for product request submission, stock and inventory management, and product tracking.<br>• Implemeted admin dashboard for monitoring and managing product requests.<br>• Developed a user-friendly interface for employees to submit product requests and track their status.<br>• Integrated a real-time messaging system using WebSocket to enable seamless communication."
        }
    ];

    const educationItems = [
        {
            education: true,
            title: "Bachelor s degree in Computer Science (Information Systems and Software Engineering)",
            society: "ISLAIB",
            date: "Graduating in June 2025",
            description: "Currently in the final year of bachelor, with coursework in algorithms and data structures, information systems design, software testing (ISTQB), database administration, and programming in C, Python, Java, and PHP also machine learning, virtualization and cloud, big data, cybersecurity, and mobile development.",
        },
    ];

    return (
        <div className="w-full h-full flex flex-col items-center pt-0 bg-background gap-1 sm:gap-4">

            <div className="w-full sm:w-9/12 h-fit -top-10 relative">
                <ProfileDetails />
            </div>

            <div className="w-full sm:w-9/12 h-fit p-2 sm:p-1">
                <h1 className="font-semibold text-sm sm:text-lg text-foreground">Experience</h1>
                <div className="p-4 pl-4 sm:pl-20">
                    <Timeline items={experienceItems} />
                </div>
            </div>

            <div className="w-full sm:w-9/12 h-fit p-2 sm:p-1">
                <h1 className="font-semibold text-sm sm:text-lg text-foreground">Education</h1>
                <div className="p-4 pl-4 sm:pl-20">
                    <Timeline items={educationItems} />
                </div>
            </div>

        </div>
    )
}
