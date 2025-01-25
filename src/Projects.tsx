import { Col, Divider, Row } from "antd";
import { projects } from "./constants";

export default () => (
    <div className="projects-wrappper">
        <div id="projects-content">
            <div className="heading">
                <h1 className="text-[1.8rem] font-bold">Projects.</h1>
                <p className="text-[1.25rem] font-medium text-gray-500">Some of the projects that I have worked on.</p>
            </div>
            <Divider className="bg-gray-700" />
            <div className="projects">
                <Row className="" justify={"space-between"} gutter={[0, 20]}>
                    {projects?.map((item, idx) => (
                        <Col
                            key={idx}
                            xs={{ span: 24 }}
                            sm={{ span: 11 }}
                            className={`max-h-[32rem] min-h-[450px] cursor-pointer overflow-hidden`}
                            onClick={() => window.open(item.link, "_blank")} // Opens the URL in a new tab
                            style={{ pointerEvents: "auto" }}
                        >
                            <div className="card-item rounded-xl border border-gray-800">
                                <div className="max-h-[18rem] overflow-hidden rounded-t-xl">
                                    <img src={item.image} alt="img" className="h-full w-full object-fill" />
                                </div>
                                <div className="flex flex-col px-4 py-2">
                                    <p className="text-xl font-bold">{item.title}</p>
                                    <p className="text-md mt-2">{item.stacks}</p>
                                    <Divider className="my-2 bg-gray-800" />
                                    <p className="text-md text-gray-400">{item.description}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
        <Divider className="my-1 bg-gray-800" />
    </div>
);
