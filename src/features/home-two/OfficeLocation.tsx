import OfficeLocationMap from '@/assets/images/shapes/office-location-map.png';
import OfficeLocation11 from '@/assets/images/resources/office-location-1-1.png';
import Image from 'next/image';

export default function OfficeLocation() {
    return (
        <section className="office-location">
            <div className="container">
                <div className="office-location__inner">
                    <div className="office-location__location clearfix">
                        <div className="office-location__map">
                            <Image src={OfficeLocationMap} width={1020} height={400} alt='map' />
                        </div>

                        {/* Start Banner One Location single */}
                        <div className="office-location__location-single style1">
                            <div className="round-box">
                                <div className="bdr"></div>
                            </div>
                            <div className="content-box">
                                <div className="img-box">
                                    <Image src={OfficeLocation11} width={30} height={30} alt='map' />
                                </div>
                                <div className="text-box">
                                    <h4>London</h4>
                                    <p>Logistic service <br /> provider </p>
                                </div>
                            </div>
                        </div>
                        {/* Start Banner One Location single */}

                        {/* Start Banner One Location single */}
                        <div className="office-location__location-single style2">
                            <div className="round-box">
                                <div className="bdr"></div>
                            </div>
                            <div className="content-box">
                                <div className="img-box">
                                    <Image src={OfficeLocation11} width={30} height={30} alt='map' />
                                </div>
                                <div className="text-box">
                                    <h4>Alexander City</h4>
                                    <p>Logistic service <br /> provider </p>
                                </div>
                            </div>
                        </div>
                        {/*End Banner One Location single */}

                        {/* Start Banner One Location single */}
                        <div className="office-location__location-single style3">
                            <div className="round-box">
                                <div className="bdr"></div>
                            </div>
                            <div className="content-box">
                                <div className="img-box">
                                    <Image src={OfficeLocation11} width={30} height={30} alt='map' />
                                </div>
                                <div className="text-box">
                                    <h4>Birmingham</h4>
                                    <p>Logistic service <br /> provider </p>
                                </div>
                            </div>
                        </div>
                        {/* End Banner One Location single */}

                        {/* Start Banner One Location single */}
                        <div className="office-location__location-single style4">
                            <div className="round-box">
                                <div className="bdr"></div>
                            </div>
                            <div className="content-box">
                                <div className="img-box">
                                    <Image src={OfficeLocation11} width={30} height={30} alt='map' />
                                </div>
                                <div className="text-box">
                                    <h4>Guntersville</h4>
                                    <p>Logistic service <br /> provider </p>
                                </div>
                            </div>
                        </div>
                        {/* End Banner One Location single */}

                        {/* Start Banner One Location single */}
                        <div className="office-location__location-single style5">
                            <div className="round-box">
                                <div className="bdr"></div>
                            </div>
                            <div className="content-box">
                                <div className="img-box">
                                    <Image src={OfficeLocation11} width={30} height={30} alt='map' />
                                </div>
                                <div className="text-box">
                                    <h4>Montgomery</h4>
                                    <p>Logistic service <br /> provider </p>
                                </div>
                            </div>
                        </div>
                        {/* End Banner One Location single */}

                        {/* Start Banner One Location single */}
                        <div className="office-location__location-single style6">
                            <div className="round-box">
                                <div className="bdr"></div>
                            </div>

                            <div className="content-box">
                                <div className="img-box">
                                    <Image src={OfficeLocation11} width={30} height={30} alt='map' />
                                </div>
                                <div className="text-box">
                                    <h4>California</h4>
                                    <p>Logistic service <br /> provider </p>
                                </div>
                            </div>
                        </div>
                        {/* End Banner One Location single */}

                        {/* Start Banner One Location single */}
                        <div className="office-location__location-single style7">
                            <div className="round-box">
                                <div className="bdr"></div>
                            </div>
                            <div className="content-box">
                                <div className="img-box">
                                    <Image src={OfficeLocation11} width={30} height={30} alt='map' />
                                </div>
                                <div className="text-box">
                                    <h4>Colorado</h4>
                                    <p>Logistic service <br /> provider </p>
                                </div>
                            </div>
                        </div>
                        {/* End Banner One Location single */}

                        {/* Start Banner One Location single */}
                        <div className="office-location__location-single style8">
                            <div className="round-box">
                                <div className="bdr"></div>
                            </div>
                            <div className="content-box">
                                <div className="img-box">
                                    <Image src={OfficeLocation11} width={30} height={30} alt='map' />
                                </div>
                                <div className="text-box">
                                    <h4>Berlin</h4>
                                    <p>Logistic service <br /> provider </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Banner One Location single */}
                </div>
            </div>
        </section>

    );
}
