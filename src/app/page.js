import Banner from '@/components/banner';
import Img1 from '../assets/imgs/Img1.png';

export default function Home() {
    return (
        <main>
            <Banner />
            <div className="flex flex-col content-center items-center mx-72">
                <div className="flex flex-row content-center p-32">
                    <div className="flex pl-6">
                        <img src={Img1} alt="foto1" />
                    </div>
                    <div className="flex ">
                        <div className="flex-col content-center items-center ps-8">
                            <h1
                                className="font-raleway text-2xl font-bold items-center"
                                style={{ color: '#FF8000' }}
                            >
                                Discover awesome prompts
                            </h1>
                            <p className="font-lato text-lg">
                                Explore and use 500+ inspiring and useful
                                prompts
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row pb-32">
                    <div className="flex flex-col">
                        <h1 className="font-raleway text-2xl font-bold items-center text-[#FF8000]">
                            Create and share
                        </h1>
                        <p className="font-lato text-lg ">
                            <p className="whitespace-pre-line">
                                Be the inspiration that helps others by creating
                                and sharing your own prompts
                            </p>
                        </p>
                    </div>
                    <div className="flex">
                        <img src="/src/assets/imgs/img2.png" alt="foto2" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col content-center items-center mx-72">
                <div className="flex flex-row">
                    <div className="flex pb-16">
                        <h2 className="font-raleway text-3xl font-bold leading-normal text-[#1E4B8C]">
                            How does Promchatter work?
                        </h2>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <div className="flex flex-row pb-20 items-center">
                            <div className="flex">
                                <p className="font-raleway text-5xl font-bold leading-normal text-[#00A67C] pr-8">
                                    1
                                </p>
                            </div>
                            <div className="flex whitespace-pre-line">
                                <p className="whitespace-pre-line text-2xl">
                                    Choose a prompt that you find useful for
                                    wthat you want to do. Trying to study for an
                                    exam? Looking for a diet Plan?
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row pb-20 items-center">
                            <div className="flex">
                                <p className="font-raleway text-5xl font-bold leading-normal text-[#00A67C] pr-8">
                                    2
                                </p>
                            </div>
                            <div className="flex whitespace-pre-line">
                                <p className="whitespace-pre-line text-2xl">
                                    Just copy the prompt and paste it on your
                                    favorite AI-driven chat like chatGPT.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row pb-32 items-center">
                            <div className="flex">
                                <p className="font-raleway text-5xl font-bold leading-normal text-[#00A67C] pr-8">
                                    3
                                </p>
                            </div>
                            <div className="flex whitespace-pre-line">
                                <p className="whitespace-pre-line text-2xl">
                                    Celebrate that you just saved yourself
                                    plenty of time!.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col content-center items-center mx-72">
                <div className="flex flex-row">
                    <div className="flex pb-16">
                        <h2 className="font-raleway text-3xl font-bold leading-normal text-[#1E4B8C]">
                            Would you like to help with our goal?
                        </h2>
                    </div>
                </div>
                <div className="flex flex-row text-2xl">
                    <div className="flex flex-col">
                        <div className="flex flex-row pb-6 items-center">
                            <div className="flex">
                                <p
                                    className=" font-inter"
                                    style={{ whiteSpace: 'pre-line' }}
                                >
                                    Our goal is to provide useful prompts that
                                    help many people take advantage of AI-chats.
                                    You can be part of us in many ways:
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row pb-4 items-center">
                            <div className="flex">
                                <p
                                    className="whitespace-pre-line "
                                    style={{ whiteSpace: 'pre-line' }}
                                >
                                    1. Translting our website or creating new
                                    prompts. 2. Improve or create new features.
                                    3. Helps us improve our UI/UX design. 4.
                                    Write some documentation for our project.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row pb-32 items-center">
                            <div className="flex">
                                <p
                                    className="whitespace-pre-line "
                                    style={{ whiteSpace: 'pre-line' }}
                                >
                                    Even the smallest change can be part of a
                                    huge step.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <Banner isFooter={true} />
            </footer>
        </main>
    );
}
