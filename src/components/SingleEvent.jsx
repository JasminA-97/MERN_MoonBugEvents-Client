import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getEventByIdAPI } from '../Services/allAPI';
import SERVERURL from '../Services/serverurl';
import NavHeader from './NavHeader';

const SingleEvent = () => {
    const { eid } = useParams();
    const [singleEvent, setSingleEvent] = useState(null); // Initialize as null

    useEffect(() => {
        if (eid) {
            getSingleEvent();
        } else {
            console.error("Event ID is undefined");
        }
    }, [eid]);

    const getSingleEvent = async () => {
        try {
            const result = await getEventByIdAPI(eid);
            if (result.status === 200) {
                setSingleEvent(result.data);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <NavHeader/>
            {singleEvent ? (
                <section className="py-5">
                    <div className="container px-4 px-lg-5 my-5">
                        <div className="row gx-4 gx-lg-5 align-items-center">
                            <div className="col-md-6 mt-5">
                                <img style={{height:'36rem',width:'30rem'}}
                                    className="card-img-top mb-5 mb-md-0"
                                    src={`${SERVERURL}/uploads/${singleEvent?.eventImg || 'placeholder.jpg'}`}
                                    alt={singleEvent?.eventName || 'Event Image'}
                                />
                            </div>
                            <div className="col-md-6 mt-5 pt-5">
                                <h2 className=" fw-bolder">
                                    {singleEvent?.eventName || 'Event Name'}
                                </h2>
                                <div className="fs-5 mb-5">
                                    <span>Min Cost : &#x20b9; {singleEvent?.eventCost || 'N/A'}</span>
                                </div>
                                <p style={{ fontSize: '17px' }} className="lead">
                                    {singleEvent?.eventDescription
                                        ? singleEvent.eventDescription.split('\n').map((item, index) => (
                                            <React.Fragment key={index}>
                                                {item.trim()}
                                                <br />
                                            </React.Fragment>
                                        ))
                                        : 'Event description is not available.'}
                                </p>
                                <button className="btn btn-info rounded-5">
                                    <Link style={{ textDecoration: 'none', color: 'white' }} to={'/login'}>
                                        Book Now
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};
export default SingleEvent;
