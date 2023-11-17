"use client"

import React, { useState } from 'react'
import Image from 'next/image';
import { addProductAPI } from '../../apis/API';
import { getCookie } from 'cookies-next';
import DashboardDropdown from '../components/DashboardDropdown';
import Sidebar from '../components/dashboard/sidebar/Sidebar';
import Navbar from '../components/dashboard/navbar/Navbar';
import './createNewCoupon.scss'

const options = [
    { value: 'manager', label: 'Manager' },
    { value: 'user', label: 'User' },
]

export default function CreateNewCoupon() {
    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState([]);
    const [otherImage, setOtherImage] = useState([]);

    const [basePrice, setBasePrice] = useState("");
    const [supplyAbility, setSupplyAbility] = useState("");
    const [deliveryTime, setDeliveryTime] = useState("");
    const [parentCategory, setParentCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const [productCode, setProductCode] = useState("");
    const [paymentOptions, setPaymentOptions] = useState("");
    const currentUserData = getCookie("userData");

    const handleSubmit = () => {
        if (!productName && !description && !basePrice && !supplyAbility && !deliveryTime && !parentCategory && !subCategory) {
            return alert("Please select all fields");
        }
        const data = {
            productName: productName,
            description: description,
            basePrice: basePrice,
            supplyAbility: supplyAbility,
            deliveryTime: deliveryTime,
            parentCategory: parentCategory,
            photo: photo,
            otherImage: otherImage,
            subCategory: subCategory,
            productCode: productCode,
            paymentOptions: paymentOptions,
            quantity: "1",
            userId: JSON.parse(currentUserData)?.id,
        }
        addProductAPI(data, (res) => {
            if (res !== null) {
                if (res?.success?.toString() === "true") {
                    alert("Data submitted successfully");
                } else {
                    alert(res?.message);
                }
            }
        });
    }

    return (
        <div className='home'>
            <Sidebar />
            <div className='homeContainer'>
                <Navbar />
                <div className='px-4'>
                    <div className="welcomeText">Welcome</div>
                    <div className="subWelcomeText">Here is the information about all your orders</div>
                </div>
                <div className='row mx-auto px-4'>
                    <div className='shadow-sm p-3 mt-4'>
                        <div style={title}>Create New Code</div>
                    </div>
                    <div className='shadow-sm rounded-xl px-4 py-3 mt-2'>
                        <form>
                            <div className='row'>
                                <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                                    <DashboardDropdown
                                        label="Date"
                                        placeholder="Start date"
                                        value={parentCategory}
                                        setValue={setParentCategory}
                                        data={options}
                                    />
                                </div>

                                <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                                    <DashboardDropdown
                                        label=""
                                        placeholder="End date"
                                        value={parentCategory}
                                        setValue={setParentCategory}
                                        data={options}
                                    />
                                </div>
                            </div>

                            <DashboardDropdown
                                label="Promo code Quntity"
                                placeholder="50"
                                value={parentCategory}
                                setValue={setParentCategory}
                                data={options}
                            />

                            <DashboardDropdown
                                label="Discount"
                                placeholder="15%"
                                value={parentCategory}
                                setValue={setParentCategory}
                                data={options}
                            />
                        </form>
                    </div>
                    <button className='btn btn-dark col-lg-12 col-md-12 col-sm-12 col-12 mx-auto py-2 my-4' onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}


function RenderPickerBox({ title, buttonText, files, setFiles }) {
    return (
        <div className='col-12 col-md-12 mt-4'>
            <label style={labelStyles}>{title}</label>
            <div className="file-upload-dropzone" style={dropZoneStyles}>
                <Image
                    src="/svg/SquareBadge.svg"
                    alt='SquareBadge'
                    width={40} height={40}
                    className="mx-auto mb-3"
                />
                <p style={labelStyles}>Drag and drop image here, or click add image</p>
                <label className="custom-file-upload">
                    <input
                        type="file"
                        onChange={(e) => {
                            const newFiles = [...files];
                            for (let i = 0; i < e.target.files.length; i++) {
                                newFiles.push(e.target.files[i]);
                            }
                            setFiles(newFiles);
                        }}
                    />
                    {buttonText}
                </label>
            </div>
        </div>
    );
}

const title = {
    fontSize: "16px",
    color: "#000",
    fontWeight: "700",
}

const inputStyle = {
    border: "1px solid #E4E7E9",
    fontSize: "13px",
    color: "#000",
    fontWeight: "600",
    borderRadius: "4px",
    backgroundColor: "#F9F9FC",
    height: "38px"
}

const labelStyles = {
    fontSize: "13px",
    color: "#777980",
    fontWeight: "600",
}

const textAreaInputStyle = {
    border: "1px solid #E4E7E9",
    fontSize: "13px",
    color: "#000",
    fontWeight: "600",
    borderRadius: "4px",
    height: "180px",
    backgroundColor: "#F9F9FC",
}

const dropZoneStyles = {
    backgroundColor: "#F9F9FC",
    fontSize: "14px",
    fontWeight: "700",
    color: "#000"
}
