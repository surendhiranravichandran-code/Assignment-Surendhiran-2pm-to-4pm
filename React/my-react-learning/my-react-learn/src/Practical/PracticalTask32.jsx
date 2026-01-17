import React from 'react'
import Card from './Day32/CardComponent/Card.jsx';
import Product from './Day32/ProductComponent/Product.jsx';
import ProfileCard from './Day32/ProfileCardComponent/Profilecard.jsx';

function PracticalTask32() {

   const users = [
      {name: "Surendhiran", role: "Frontend Dev",image: "/Images/image1.jpeg"},
      {name: "Rajesh", role: "UI Designer", image: "/Images/image2.jpeg"},
      {name: "Suresh", role: "React Dev", image:  "/Images/image3.jpeg"},
      ];
  return (
    <>
      <Card>
        <h2>Practical Task 32</h2>
        <p>Some content here</p>
      </Card>
      <h1>Products</h1>
      <Product name="Laptop" price={1200} />
      <Product name="Headphones" price={150} />
      <Product name="Smartphone" price={800} />
      <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
        <ProfileCard
          name="Alice Johnson"
          role="Frontend Developer"
          image="https://randomuser.me/api/portraits/women/44.jpg"
          description="Passionate about creating beautiful and functional web apps."
        />
        <ProfileCard
          name="Bob Smith"
          role="UI/UX Designer"
          image="https://randomuser.me/api/portraits/men/32.jpg"
          description="Designing intuitive and delightful user experiences."
        />
        {users.map((user, index) => (
        <ProfileCard key={index} {...user} />
      ))}

      </div>
     

      

    </>
  );
}

export default PracticalTask32;
