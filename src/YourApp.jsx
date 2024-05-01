import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './YourApp.css';
import PreventInspect from './PreventInspect';

const YourApp = () => {
    const navigate = useNavigate();
    const [username] = useState(localStorage.getItem('username'));
    const [appurl, setAppurl] = useState('');
    const [appname, setAppname] = useState('');
    const [appicon, setAppicon] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [usernameExists, setUsernameExists] = useState(false);
    const [appUrlExists, setAppUrlExists] = useState(false);
    const [checkBoxChecked, setCheckBoxChecked] = useState(false);

    // Check if appurl already exists
    useEffect(() => {
        const checkAppUrlExists = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/checkappurl/${appurl}`);
                setAppUrlExists(res.data);
            } catch (error) {
                console.error('Error checking appurl:', error);
            }
        };

        if (appurl) {
            checkAppUrlExists();
        }
    }, [appurl]);

    const saveYourApp = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        try {
            const res = await axios.post('http://localhost:8080/yourapp', { username, appurl, appname, appicon });
            console.log(res);
            setRegistrationSuccess(true);
    
            // After 3 seconds, navigate to the home page
            setTimeout(() => {
                navigate('/home');
            }, 3000);
        } catch (error) {
            if (error.response && error.response.status === 409) {
                console.log('User already exists. Please choose a different username.');
                setUsernameExists(true);
            } else {
                console.error('Error saving current user:', error);
            }
        }
    };
    

    const handleChangeAppUrl = (e) => {
        setAppurl(e.target.value);
    };

    const handleChangeAppName = (e) => {
        setAppname(e.target.value);
    };

    const handleChangeAppIcon = (e) => {
        setAppicon(e.target.value);
    };

    // Function to check if any field is empty
    const isAnyFieldEmpty = () => {
        return !appurl || !appname || !appicon || !checkBoxChecked;
    };

    // Function to handle checkbox change
    const handleCheckBoxChange = (e) => {
        setCheckBoxChecked(e.target.checked);
    };

    return (
        <div className="ypcontainer">
            <h2>Launch your app in Poly Games</h2>
            <form className='ypform' onSubmit={saveYourApp}>
                <input type="text" name="app url" value={appurl} onChange={handleChangeAppUrl} placeholder="App Url" required />
                {appUrlExists && <div className="error-message">App URL already exists</div>}
                <input type="text" name="app name" value={appname} onChange={handleChangeAppName} placeholder="App Name" required />
                <input type="text" name="app icon" value={appicon} onChange={handleChangeAppIcon} placeholder="App Icon (Image URL)" required />
                <label>
                    <input type="checkbox" checked={checkBoxChecked} onChange={handleCheckBoxChange} />
                    I agree this terms and conditions
                </label>
                <input type="submit" value="Launch" disabled={isAnyFieldEmpty()} />
            </form>
            {!checkBoxChecked && <div className="error-message">Please agree to launch the app</div>}
            {registrationSuccess && <div className="success-message">Launched Successfully! ✓</div>}
            <PreventInspect />
        </div>
    );
};

export default YourApp;
