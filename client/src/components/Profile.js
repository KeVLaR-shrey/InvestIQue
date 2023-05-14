import React from 'react';
import Navbar from './Navbar'; // Make sure the path is correct
import styles from './Profile.module.scss';

const Profile = () => {
    const userData = {
        name: "John Doe",
        email: "johndoe@gmail.com",
        age: 25
    }

    const recommendedStocks = [
        { name: "Stock A", price: "100" },
        { name: "Stock B", price: "200" },
        { name: "Stock C", price: "150" },
    ]

    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.userInfo}>
                    <h2>User Info</h2>
                    <p>Name: {userData.name}</p>
                    <p>Email: {userData.email}</p>
                    <p>Age: {userData.age}</p>
                </div>

                <div className={styles.recommendedStocks}>
                    <h2>Recommended Stocks</h2>
                    {recommendedStocks.map((stock, index) => (
                        <p key={index}>{stock.name} - {stock.price}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Profile;
