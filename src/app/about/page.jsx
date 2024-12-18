
import ProfileDetails from "@/components/ProfileDetails";
import Timeline from "@/components/Timeline";

export default function About() {

    const experienceItems = [
        {
            experience: true,
            title: "Software Developer",
            society: "Industry X.0",
            date: "06/2024 - 07/2024",
            description: "•	Integrated a report customization and generation module into the CIPA application using <b>Angular</b> and <b>Spring Boot</b>. Improved user experience through dynamic template customization and efficient backend processing for streamlined report generation. <br>• Integrated a report customization and generation module into the CIPA application using Angular and Spring Boot. Improved user experience through dynamic template customization and efficient backend processing for streamlined report generation."
        },
        {
            experience: true,
            title: "Software Developer",
            society: "Tunisie Telecom",
            date: "07/2024 - 09/2024",
            description: "•	Developed an internal operations management web application with <b>React</b>, <b>Node</b>, <b>Express</b>, and <b>MongoDB</b>.<br>• Enabled streamlined product request submission, stock management, product tracking, and inventory management."
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
