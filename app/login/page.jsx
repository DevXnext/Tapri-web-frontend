"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Heading from "../components/Heading"; import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import CountrySelect from "../components/inputs/CountrySelect";
import { makeStyles } from "@material-ui/core";

import { initializeApp } from "firebase/app";
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import CircularProgress from '@material-ui/core/CircularProgress';
import VerifyOTP from "./components/VerifyOTP";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNa6g4vGbPuStWN91cM0mFsBjLcglKjYg",
    authDomain: "canmart-3b042.firebaseapp.com",
    projectId: "canmart-3b042",
    storageBucket: "canmart-3b042.appspot.com",
    messagingSenderId: "648451992770",
    appId: "1:648451992770:web:f2ac6a0f4faeaba0529f5b",
    measurementId: "G-ZQ9W4J16J4"
};


export default function LoginPage() {
    const router = useRouter();
    const [phone, setPhone] = React.useState("");
    const [location, setLocation] = useState();
    const [loading, setLoading] = React.useState(false);
    const [useEmail, setUseEmail] = useState(false);
    const [error, setError] = useState(false);
    const app = initializeApp(firebaseConfig);
    const [codeResult, setCodeResult] = useState({});
    const [showOtpForm, setShowOtpForm] = useState(false);

    function onCaptchVerify() {
        const app = initializeApp(firebaseConfig);
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(
                getAuth(),
                "recaptcha-container",
                {
                    size: "invisible",
                    callback: (response) => {
                        getOTPService();
                    },
                    "expired-callback": () => { },
                    'appVerificationDisabledForTesting': false // Remove or set to false for production
                },

            );
        }
    }

    const getOTPService = (event) => {
        if (!phone) {
            setError(true);
            return;
        }
        setLoading(true);
        onCaptchVerify();

        const appVerifier = window.recaptchaVerifier;

        const formatPh = "+" + location?.dial_code?.toString() + phone;

        signInWithPhoneNumber(getAuth(), formatPh, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                setShowOtpForm(true);
                // setLoading(false);
                setCodeResult(confirmationResult)
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
            });
    }

    const styles = useStyles();

    return (
        <>
            <script src="https://www.google.com/recaptcha/api.js" async defer></script>

            {!showOtpForm ? <div className="row mx-auto">
                <div className="col-lg-3 col-md-3 col-sm-0 col-0 mx-auto p-0">
                    <div style={{
                        backgroundImage: "url('/svg/authbg.svg')",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }} className={styles.authBgImage} />
                </div>
                <div className={`col-lg-9 col-md-9 col-sm-12 col-12 mx-auto ${styles.paddingAtForm}`}>
                    <div id='recaptcha-container'></div>
                    <div style={{ position: "absolute", top: "28px", marginLeft: "-48px" }}>
                        <Image
                            src="/svg/auth-logo.svg"
                            alt="auth-logo"
                            width={120} height={50}
                        />
                    </div>
                    <form className="mt-24 col-lg-6 col-md-10 col-sm-10 col-12 mx-auto shadow-sm p-5 rounded-2xl">
                        <Heading
                            title="Sign In"
                            subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        />

                        {!useEmail && <div>
                            <label style={error ? errorlabelStyles : labelStyles}>Mobile Number</label>
                            <div className="d-flex mt-1">
                                <CountrySelect
                                    value={location}
                                    onChange={(value) => {
                                        setLocation(value)
                                    }}
                                />
                                <input
                                    type="text"
                                    value={phone}
                                    placeholder="+91"
                                    onChange={(e) => { setPhone(e.target.value); setError(false) }}
                                    style={error ? inputErrorStyle : inputStyle}
                                    className={error ? "form-control ml-2 inputError" : "form-control ml-2"}
                                />
                            </div>
                        </div>}

                        {useEmail && <div>
                            <label style={error ? errorlabelStyles : labelStyles}>Email</label>
                            <input
                                type="text"
                                value={phone}
                                placeholder="Enter your email address here"
                                onChange={(e) => { setPhone(e.target.value); setError(false) }}
                                style={error ? inputErrorStyle : inputStyle}
                                className={error ? "form-control inputError" : "form-control"}
                            />
                        </div>}

                        <div className="d-flex my-2">
                            <input
                                type="checkbox"
                                value=""
                                onChange={(e) => { }}
                                style={checkStyle}
                            />
                            <label style={remembermeText}>
                                Remember me?
                            </label>
                        </div>

                        <a
                            className="btn col-md-12 col-sm-12 col-12 mt-3 py-2"
                            style={sendQueryBtn}
                            onClick={getOTPService}
                            id="sign-in-button"
                        >
                            {!loading
                                ? "Sign In"
                                : <CircularProgress
                                    size={18}
                                    thickness={5}
                                    color="#fff"
                                    className="mt-1"
                                />}
                        </a>

                        <button onClick={(e) => { e.preventDefault(); setUseEmail(!useEmail) }}
                            className="btn btn-link mt-2"
                            style={loginWithEmail}
                        >
                            Login with {useEmail ? "phone" : "email"}
                        </button>

                        <div style={DontHaveAccount} className="text-center">Don’t have account?
                            <a onClick={() => { router.push("/signup"); }}
                                className="btn"
                                style={registerWithUs}
                            >
                                Register with us
                            </a>
                        </div>
                    </form>
                </div>
            </div> : <VerifyOTP codeResult={codeResult} phone={phone} setShowOtpForm={setShowOtpForm} />}
            <div style={{ marginBottom: "-30px" }} />
        </>
    );
}

const labelStyles = {
    fontSize: "16px",
    color: "#000",
    fontWeight: "600",
    marginTop: "12px"
}

const errorlabelStyles = {
    fontSize: "16px",
    color: "#F43F5E",
    fontWeight: "600",
    marginTop: "12px"
}

const inputStyle = {
    border: "1px solid #E4E7E9",
    fontSize: "16px",
    color: "#000",
    fontWeight: "600",
    borderRadius: "4px",
}

const inputErrorStyle = {
    border: "1px solid #F43F5E",
    fontSize: "16px",
    color: "#000",
    fontWeight: "600",
    borderRadius: "4px",
}

const sendQueryBtn = {
    padding: "9px",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: "700",
    color: "#FFF",
    paddingTop: "12px",
    backgroundColor: "#000",
}

const checkStyle = {
    backgroundColor: "#E5E5E5",
    width: "14px",
    height: "14px",
    marginTop: "12px",
    marginRight: "8px",
    outline: "none"
}

const remembermeText = {
    fontSize: "14px",
    color: "#8E8E8E",
    fontWeight: "500",
    marginTop: "8px",
}

const loginWithEmail = {
    fontSize: "16px",
    color: "#8E8E8E",
    fontWeight: "500",
    marginTop: "4px",
    marginLeft: "-12px",
    textDecoration: "none"
}

const DontHaveAccount = {
    fontSize: "16px",
    color: "#000",
    fontWeight: "700",
    marginTop: "4px",
}

const registerWithUs = {
    fontSize: "16px",
    color: "#000",
    fontWeight: "700",
    marginLeft: "-8px"
}

const useStyles = makeStyles((theme) => ({
    paddingAtForm: {
        [theme.breakpoints.down("xs")]: {
            padding: "0 40px"
        },
        [theme.breakpoints.between("sm", "md")]: {
            padding: "0 40px"
        },
        "@media (min-width: 1280px)": {
            padding: "40px 100px",
            borderRadius: "40px",
            backgroundColor: "#FFF",
        }
    },
    authBgImage: {
        [theme.breakpoints.down("xs")]: {
            width: 0,
            height: 0
        },
        [theme.breakpoints.between("sm", "md")]: {
            width: 0,
            height: 0
        },
        "@media (min-width: 1280px)": {
            width: "110%",
            height: "707px",
        }
    }
}));
