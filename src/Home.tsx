import { Button, Row, Col, Divider } from "antd";
import { Link } from "react-router-dom";
import {
    salutation,
    name,
    designation,
    selfDescription,
    currentJobDesc,
    currentCompany,
    currentCompanyLink,
    currentStack,
    contacts,
    projects,
} from "./constants";

export default () => {
    return (
        <div className="main">
            {/* Name */}
            <div id="intro salutation-name">
                <div id="salutation">
                    <p className="text-4xl text-blue-500">{salutation}</p>
                </div>
                <h2 className="name text-8xl font-[900]">{name}</h2>
            </div>
            {/* Self Description */}
            <div id="designation self-description" className="mt-6 w-9/12">
                <h1 className="designation text-wrap text-[1.8rem] font-bold">
                    {designation} <span className="self-description font-normal text-gray-500">{selfDescription}</span>
                </h1>
            </div>
            {/* Current Job */}
            <div id="current-job" className="mt-6 w-7/12">
                <p className="text-wrap text-2xl">
                    {currentJobDesc}{" "}
                    <a href={currentCompanyLink} target="_blank" className="text-blue-500">
                        {currentCompany}
                    </a>
                </p>
            </div>
            {/* Contacts */}
            <div id="contacts" className="mt-8 w-[30%]">
                <div className="contact-items flex justify-between">
                    {contacts?.map((row, index) => (
                        <a href={row.link} key={index}>
                            <Button className="bg-black text-[1rem] font-medium text-white">
                                <span>{row.element}</span>
                                {row.name}
                            </Button>
                        </a>
                    ))}
                </div>
            </div>
            <Divider className="mt-32 bg-white" />

            {/* Language Stacks */}
            <div id="language-stacks" className="w-[100%]">
                <div id="stack-heading" className="">
                    <h1 className="text-2xl font-bold">Expertise</h1>
                </div>

                <Row className="mt-6" justify={"space-between"} gutter={[0, 50]}>
                    {currentStack?.map((item, idx) => (
                        <Col
                            xs={{ span: 24 }}
                            sm={{ span: 7 }}
                            key={idx}
                            className="flex h-auto flex-col items-start rounded-xl border border-gray-600 p-2"
                        >
                            {/* language name and picture*/}
                            <div className="mb-4 flex items-start justify-start">
                                <div className="image mr-4 h-[60px] w-[60px] overflow-hidden rounded-[50%] object-contain hover:border hover:border-white">
                                    {item?.image}
                                </div>
                                <div className="flex flex-col justify-start">
                                    <p className="stack-title mb-1 text-[1.15rem] font-bold">{item?.language}</p>
                                    <p className="text-blue-300">{item?.scope}</p>
                                </div>
                            </div>
                            {/* language base */}
                            <div className="stack-desc flex flex-wrap justify-start gap-2">
                                {item?.base &&
                                    item?.base?.length &&
                                    item.base?.map((misc, idx) => (
                                        <span key={idx} className="rounded-lg border border-gray-600 px-2 py-1 text-sm">
                                            {misc}
                                        </span>
                                    ))}
                            </div>
                        </Col>
                        // </div>
                    ))}
                </Row>
                {/* </div> */}
            </div>
            <Divider className="mt-32 bg-white" />

            {/* Projects Completed */}
            <div className="projects">
                <Row className="relative" justify="space-between" gutter={[0, 50]}>
                    <Col xs={{ span: 24 }} sm={{ span: 11 }} className="relative z-[1] flex h-auto items-start">
                        <div id="projects intro" className="p-0">
                            <p className="m-0 text-[1.8rem] font-bold">Projects.</p>
                            <p className="text-[1.25rem] font-medium text-gray-500">
                                Here's some of the projects that I have worked on.
                            </p>
                            <Link to="/projects">
                                <p className="text-xl font-normal text-blue-500">Explore projects.</p>
                            </Link>
                        </div>
                    </Col>
                    {projects?.map((item, idx) => (
                        <Col
                            xs={{ span: 24 }}
                            sm={{ span: 11 }}
                            className={`relative ${idx % 2 != 0 ? "z-[2] lg:mt-[-15rem]" : null} max-h-[26rem] min-h-80 cursor-pointer overflow-hidden`}
                            // onClick={() => (window.location.href = `${item.link}`)}
                            onClick={() => window.open(item.link, "_blank")} // Opens the URL in a new tab
                            style={{ pointerEvents: "auto" }}
                        >
                            <div className="card-item overflow-hidden rounded-xl border border-gray-800">
                                <div className="max-h-[13rem] overflow-hidden rounded-t-xl">
                                    <img src={item.image} alt="img" className="h-full w-full object-cover" />
                                </div>
                                <div className="flex flex-col overflow-hidden px-4 py-2">
                                    <p className="text-xl font-bold">{item.title}</p>
                                    <p className="text-md mt-4">{item?.stacks}</p>
                                    <Divider className="my-2 bg-gray-800" />
                                    <p className="text-md overflow-hidden text-gray-400">{item.description}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
            <Divider className="mt-32 bg-white" />
        </div>
    );
};
