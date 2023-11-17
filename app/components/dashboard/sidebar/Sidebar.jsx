import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WidgetsIcon from '@mui/icons-material/Widgets';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Sidebar = () => {
    const [dashboardWidth, setDashboardWidth] = useState(false)

    function handleClick() {
        setDashboardWidth(!dashboardWidth)
    }

    return (
        <div className="sidebar pr-5" style={{ backgroundColor: "#fff", width: "260px" }}>
            <div className="top mt-3">
                <Link href="/" className="pl-2">
                    <Image
                        src="/svg/logo.svg"
                        className="h-full mr-3"
                        width={80}
                        height={34}
                        alt="Flowbite Logo"
                    />
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <Link href="/" style={{ textDecoration: "none" }}>
                        <li className='mb-2 dashboard-item'>
                            <span className="text-black dashboard-text my-1" style={{ fontSize: 15, fontWeight: "400" }}>
                                Dashboard
                            </span>
                        </li>
                    </Link>
                    <Link href="/orders" style={{ textDecoration: "none" }}>
                        <li className='mb-2 dashboard-item'>
                            <span className="text-black dashboard-text my-1" style={{ fontSize: 15, fontWeight: "400" }}>
                                Orders
                            </span>
                        </li>
                    </Link>
                    <Link href="/addFoodItem" style={{ textDecoration: "none" }}>
                        <li className='mb-2 dashboard-item'>
                            <span className="text-black dashboard-text my-1" style={{ fontSize: 15, fontWeight: "400" }}>
                                Menu
                            </span>
                        </li>
                    </Link>
                    <Link href="/customerListing" style={{ textDecoration: "none" }}>
                        <li className='mb-2 dashboard-item'>
                            <span className="text-black dashboard-text my-1" style={{ fontSize: 15, fontWeight: "400" }}>
                                Customer Listing
                            </span>
                        </li>
                    </Link>
                    <Link href="/coupon" style={{ textDecoration: "none" }}>
                        <li className='mb-2 dashboard-item'>
                            <span className="text-black dashboard-text my-1" style={{ fontSize: 15, fontWeight: "400" }}>
                                Coupon
                            </span>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;