
import ProfileDetails from "@/components/ProfileDetails";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function About() {
    return (
        <div>

            <div className="absolute z-10">
                <BackgroundBeams />
            </div>

            <div className="w-full h-screen flex flex-col items-center pt-14 sm:pt-24 bg-background gap-1 sm:gap-7">

                <div className="w-full sm:w-9/12 h-fit">
                    <ProfileDetails />
                </div>

                <div className="w-full sm:w-9/12 h-fit p-4 sm:p-2">
                    <h1 className="font-semibold text-sm sm:text-lg text-foreground">Experience</h1>
                </div>

                <div className="w-full sm:w-9/12 h-fit p-4 sm:p-2">
                    <h1 className="font-semibold text-sm sm:text-lg text-foreground">Education</h1>
                </div>

            </div>

        </div>
    )
}
