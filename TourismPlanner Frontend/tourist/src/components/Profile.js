import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';
import Navigation from './Navigation';
import FooterBar from './Footer';
import { useParams,useNavigate } from 'react-router-dom';

const Profile = () => {
    const { email } = useParams();
      
    const navigate = useNavigate();


    const [user, setUser] = useState({
        username: '',
        email: '',
        mobilenumber: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (email) {
                    const response = await axios.get(`http://localhost:8000/api/v1/user/getuser/${email}`);
                    setUser(response.data);
                    // navigate(`user`);
                    
                }
               
                
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        fetchData();
    }, [email]);

    return (
        <div>
            <Navigation />
            <h4 style={{ textAlign: 'center' }}><i className="fa-solid fa-user-large"></i>User Profile</h4>
            <form className='container ProfileForm'>
                <h5>Hello {user.username}!</h5>
                <div>
                    <label>User id: </label>
                    <span> {user.id}</span>
                </div>
                <div>
                    <label>First Name: </label>
                    <span> {user.username}</span>
                </div>
                <div>
                    <label>Email: </label>
                    <span>{user.email}</span>
                </div>
                <div>
                    <label>Mobile Number: </label>
                    <span>{user.mobilenumber}</span>
                </div>
                <button
                    className="btn btn-primary m-2"
                    onClick={() => {
                      navigate("/user");
                    }}>Go to Home</button>
            </form>
            <FooterBar />
        </div>
    );
};

export default Profile;
