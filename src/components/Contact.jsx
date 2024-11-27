import ContactForm from "./ContactForm";
import SocialLinks from "./SocialLinks";

export default function Contact() {
    return (
        <div className="w-full h-fit flex flex-col items-center justify-center relative mt-16">

            <div className="w-full h-full flex flex-col items-center justify-center gap-1 relative mb-0 sm:mb-8">
                <div className="absolute inset-0 -z-10 h-40 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,blue,transparent_60%)] before:opacity-20 ">
                </div>
                <h2 className="font-semibold text-base sm:text-2xl">We&apos;d Love to Hear From You!</h2>
                <p className="w-[80%] text-foreground/70 text-center text-sm sm:text-base">Have a questions or a job opportunity? Reach me out via my social links below, and we&apos;ll get back to you soon.</p>

                <SocialLinks />
            </div>

            <ContactForm />

        </div>
    )
}