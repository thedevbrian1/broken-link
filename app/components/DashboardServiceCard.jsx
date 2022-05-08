import { Link } from "@remix-run/react";

export default function DashboardServiceCard({ title, logo, destination }) {
    return (
        <div className="w-80 min-h-80 bg-white p-4 rounded-lg">
            <h3 className="font-bold text-3xl mb-5">{title}</h3>
            <div className="w-32  mb-5">
                <img src={logo} alt="Safaricom logo" width="100%" height="100%" />
            </div>
            {
                title === "Buy airtime" ?
                    <>
                        <p className="text-lg font-bold">Available networks:</p>
                        <ul className="text-gray-800 mb-5 list-disc pl-6">
                            <li>Safaricom</li>
                            <li>Airtel</li>
                            <li>Telkom</li>
                        </ul>
                    </>
                    : title === "Pay electricity" ?
                        <>
                            <p className="text-lg font-bold">Available for:</p>
                            <ul className="text-gray-800 mb-5 list-disc pl-6">
                                <li>Prepaid</li>
                                <li>Postpaid</li>

                            </ul>
                        </>
                        : title === "Pay water bills" ?
                            ""
                            : title === "Pay television" ?
                                <>
                                    <p className="text-lg font-bold">Available services:</p>
                                    <ul className="text-gray-800 mb-5 list-disc pl-6">
                                        <li>DSTV</li>
                                        <li>GoTv</li>
                                        <li>Startimes</li>
                                        <li>Zuku</li>
                                    </ul>
                                </>
                                : ""

            }
            {/* <>
            <p className="text-lg font-bold">Available networks:</p>
            <ul className="text-gray-800 mb-5">
                <li>Safaricom</li>
                <li>Airtel</li>
                <li>Telkom</li>
            </ul>
            </> */}
            <div className="w-full flex justify-center">
                <Link to={destination}>
                    <div className="w-72 h-8 bg-brand-blue hover:bg-blue-600 flex justify-center items-center text-white uppercase rounded">Get started</div>
                </Link>

            </div>
        </div>
    )
}