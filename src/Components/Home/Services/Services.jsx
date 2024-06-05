import Service from "./Service";

const Services = () => {
    return (
        <div id="services" className="text-center w-5/6 mx-auto mt-5 mb-20">
            <h1 className="text-2xl font-bold ">Services of FurEver Home</h1>
            <h2 className="font-mono text-sm italic">Because We Really Care About Your Pets</h2>
            <div className="flex flex-wrap justify-evenly gap-10 mt-8">
                <Service></Service>
                <Service></Service>
                <Service></Service>
                <Service></Service>
            </div>
        </div>
    );
};

export default Services;