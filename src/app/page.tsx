import Image from "next/image";
import Container from "@/components/containers/container";
import CreateShortLinkForm from "@/components/forms/createShortLinkForm";

export default function Home() {
    return (
        <div className="flex  flex-col items-center justify-between p-6 sm:p-24">
            <div>
                <div className={"mb-20"}>
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className=" font-bold leading-7 text-red-500 text-md text-pretty sm:text-2xl uppercase ">Great Tweets
                            Start with a Shawty Link</h2>
                        <p className="mt-2 text text-3xl sm:text-6xl font-bold tracking-tight text-gray-900 ">
                            Welcome to Shawty!  <br/>
                            The URL shortener that is easy to use and free!
                        </p>

                    </div>

                </div>


                <Container>
                    Shorten your link!
                    <br/>
                    <CreateShortLinkForm/>
                </Container>
            </div>


        </div>
    );
}
