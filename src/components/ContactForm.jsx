
export default function ContactForm() {
    return (
        <div >
            <form action="" method="POST" className="border flex flex-col p-2">

                <label htmlFor="email"> Email: </label>
                <input type="email" id="email" name="email" />

                <label htmlFor="email"> Your message: </label>
                <input type="text" id="message" name="message" className="text-black" />

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
} 