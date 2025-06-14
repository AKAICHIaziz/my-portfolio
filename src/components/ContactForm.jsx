
export default function ContactForm() {
    return (
        <div className="w-[90%] sm:w-[60%] h-fit rounded-lg  mb-1 sm:mb-20 ">
            <form action="https://usebasin.com/f/b753623399d2" method="POST" className="flex flex-col items-end gap-2 p-2">

                <input type="text" id="name" name="name" placeholder="Full name" className="w-full p-2 pl-5 border rounded-md bg-transparent text-sm focus:outline-none" />

                <input type="email" id="email" name="email" placeholder="Email" className="w-full p-2 pl-5 border rounded-md bg-transparent focus:outline-none text-sm" />

                <input type="text" id="organization" name="organization" placeholder="Organization" className="w-full p-2 pl-5 border rounded-md bg-transparent focus:outline-none text-sm" />

                <textarea
                    id="message"
                    name="message"
                    className="w-full p-2 pl-5 border rounded-md bg-transparent focus:outline-none text-sm"
                    placeholder="Type your message here"
                    rows="4"
                />

                <input type="submit" value="Submit" className="bg-primary/10 text-primary text-sm font-medium w-full mt-1 rounded-md h-7 sm:h-9 flex items-center justify-center sm:w-32 cursor-pointer hover:bg-black hover:text-white transition-colors duration-50" />

            </form>
        </div>
    )
} 