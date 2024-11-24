
export default function ContactForm() {
    return (
        <div className="w-[90%] sm:w-[40%] h-fit rounded-lg bg-card/10 mb-6 sm:mb-28 ">
            <form action="" method="POST" className="flex flex-col items-end gap-2 p-2">

                <input type="text" id="username" name="username" placeholder="Full name" className="w-full p-2 pl-5 border rounded-md bg-transparent focus:outline-none" />

                <input type="email" id="email" name="email" placeholder="Email" className="w-full p-2 pl-5 border rounded-md bg-transparent focus:outline-none" />

                <input type="text" id="organization" name="organization" placeholder="Organization" className="w-full p-2 pl-5 border rounded-md bg-transparent focus:outline-none" />

                <textarea
                    id="message"
                    name="message"
                    className="w-full p-2 pl-5 border rounded-md bg-transparent focus:outline-none"
                    placeholder="Type your message here"
                    rows="4"
                />

                <input type="submit" value="Submit" className="bg-primary/10 text-primary text-sm font-medium w-full mt-1 rounded-md h-9 flex items-center justify-center sm:w-32 cursor-pointer" />

            </form>
        </div>
    )
} 