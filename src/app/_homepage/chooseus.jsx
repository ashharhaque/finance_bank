import Image from 'next/image';

const ChooseUs = () => {
    const features = [
        {
            icon: "/icons/expertIcon.svg",
            title: "Expert Guidance",
            description: `We are a one-stop solution for all loan requirements. With
            extensive expertise in this field, we know what exactly fulfils your requirements.
            Save your time and efforts with us by exploring various loan options of different
            banks and lending institutions without going one after another.`
        },
        {
            icon: "/icons/BankIcon.svg",
            title: "Access to an extensive network of Banks and NBFCS",
            description: `We have an
            extensive network of reputed banks and NBFCS’ which gives you a spectrum of
            choices and at competitive rates that fit your business demands.`
        },
        {
            icon: "/icons/SolutionsIcon.svg",
            title: "Crafted solutions for your needs",
            description: `Here at Teamwork Inc. with a team of
            experts and seasoned advisors, we take time to understand your business and
            your requirements. After deliberately looking into your query, requirements and
            needs that serve your purpose, we customise loan options that align with your
            requirements.`
        },
        {
            icon: "/icons/hassleFreeProcess.svg",
            title: "Hasslefree process",
            description: `We at Team Works make your lending experience a
            seamless, hassle-free process. We take on full responsibility of arranging your
            papers and streamlining the application process to your lender.`
        },
        {
            icon: "/icons/trustIcon.svg",
            title: "Transparency and trustworthiness",
            description: `our working culture is as transparent as
            water is. We ensure that our clients must be aware of all terms and conditions of
            the loan. We keep you updated at every stage of your loan processing and
            maintain an honest conversation throughout the process.`
        },
        {
            icon: "/icons/supportIcon.svg",
            title: "Comprehensive Support System",
            description: `We have created a comprehensive support
            system, from the early stage of loan discussion to moving your file and finallydisbursement of loans, we are at constant support and guidance every step of
            the way.`
        },
        {
            icon: "/icons/accomplishmentIcon.svg",
            title: "The accomplishment that speaks",
            description: `Our actions speak more than words. We
            have numerous success stories of businesses, where we have helped grow and
            thrive. Our happy client's success stories, positive feedback and considering us
            as the first choice for their financial needs are a testament to our success and
            dedication.`
        },
        {
            icon: "/icons/easyAccessibility.svg",
            title: "Easy Accessibility",
            description: `connecting to us is as simple as saying hi to your friend.
            Our user-friendly digital platforms are designed to make us accessible to you at
            your fingertips.`
        }
    ];

    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                <h2 className="font-heading  mb-6 bg-orange-100 text-orange-800 px-6 py-3 rounded-xl md:w-96 md:mx-auto text-lg md:text-2xl font-bold tracking-widest uppercase title-font">
    Why choose us?
</h2>

                    {/* <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                        We know tech, we know finance. We are fintech experts.
                    </p>
                    <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                        We know how to handle taxation for all the countries we operate in. We care for our customers and help them manage cashflows.
                    </p> */}
                </div>

                <div className="mt-20">
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
