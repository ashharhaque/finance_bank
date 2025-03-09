import Image from 'next/image';

const ChooseUs = () => {
    const features = [
        {
            icon: "https://www.svgrepo.com/show/503163/api-settings.svg",
            title: "Powerful API",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
        },
        {
            icon: "https://www.svgrepo.com/show/503138/webpack.svg",
            title: "Easy to integrate SDK",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
        },
        {
            icon: "https://www.svgrepo.com/show/511771/dashboard-671.svg",
            title: "Low Transaction Cost",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
        },
        {
            icon: "https://www.svgrepo.com/show/76267/free-commercial-label.svg",
            title: "Powerful Dashboard",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
        }
    ];

    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
                        Why choose us?
                    </h2>
                    <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                        We know tech, we know finance. We are fintech experts.
                    </p>
                    <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                        We know how to handle taxation for all the countries we operate in. We care for our customers and help them manage cashflows.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {features.map((feature, index) => (
                            <div key={index} className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                        <Image src={feature.icon} alt={feature.title} width={48} height={48} />
                                    </div>
                                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">{feature.title}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    {feature.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;
