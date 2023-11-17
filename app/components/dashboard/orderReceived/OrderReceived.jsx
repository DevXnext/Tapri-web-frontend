"use client"

import Image from 'next/image';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { makeStyles } from "@material-ui/core";
import './OrderReceived.scss';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

const OrderItems = [
    {
        name: "Cheeze Burger",
        image: "/images/b1.png",
    },
    {
        name: "Cheeze Sandwitch",
        image: "/images/b2.png",
    },
    {
        name: "Naking Chinese Rest",
        image: "/images/b3.png",
    },
]

export default function OrderReceived({ title, data }) {
    return (
        <div className='orderReceived shadow-sm'>
            <div className="title shadow-sm p-3 ml-2 rounded">{title}</div>
            <div className="mx-auto row">
                {/* <Carousel swipe height={240} animation="slide" indicators> */}
                {OrderItems.map((item, i) => {
                    return (
                        <Item key={i} item={item} />
                    );
                })}
                {/* </Carousel> */}
            </div>
        </div>
    )
}

function Item({ item }) {
    return (
        <div className='col-lg-4 col-md-4 col-sm-6 col-12 mt-4'>
            <div className='shadow-sm p-3 rounded'>
                <Image
                    src={item?.image}
                    alt="product"
                    width={80} height={80}
                    style={{ width: "80px", height: "80px" }}
                    className='mx-auto'
                />
                <div className='productTitle mt-3'>{item?.name}</div>

                <div className='d-flex justify-between items-center mt-3'>
                    <div className='d-flex items-center'>
                        <Image
                            src="/svg/orderAdded.svg"
                            alt="product"
                            width={28} height={28}
                            style={{ width: "28px", height: "28px" }}
                            className='mx-auto'
                        />
                        <div className='productAdded ml-3'>Added</div>
                    </div>
                    <div className='productAdded'>12 Dec 2023, 11:23AM</div>
                </div>

                <div className='d-flex justify-between items-center'>
                    <div className='d-flex items-center'>
                        <Image
                            src="/svg/orderAdded.svg"
                            alt="product"
                            width={28} height={28}
                            style={{ width: "28px", height: "28px" }}
                            className='mx-auto'
                        />
                        <div className='productAdded ml-3'>Payment Method</div>
                    </div>
                    <div className='productAdded'>Visa</div>
                </div>

                <div className='d-flex justify-between items-center'>
                    <div className='d-flex items-center'>
                        <Image
                            src="/svg/orderAdded.svg"
                            alt="product"
                            width={28} height={28}
                            style={{ width: "28px", height: "28px" }}
                            className='mx-auto'
                        />
                        <div className='productAdded ml-3'>Delivery method</div>
                    </div>
                    <div className='productAdded'>Walk in</div>
                </div>

                <div className='row mx-auto pl-1 mt-3'>
                    <div className='col-md-6 p-0 pr-2'>
                        <button className='btn btn-outline-dark col-md-11'>
                            Reject
                        </button>
                    </div>

                    <div className='col-md-6 p-0 pl-2'>
                        <button className='btn btn-dark col-md-12'>
                            Accept
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
