import React, { createContext, useState, useContext } from 'react';

const ProfileContext = createContext();

export const useProfiles = () => {
    return useContext(ProfileContext);
};

export const ProfileProvider = ({ children }) => {
    const [profiles, setProfiles] = useState([{
        id: Date.now() + 1,  
        img: "Images/americanf.jpg",
        name: "Samantha",
        address: "The Grand Canyon",
        summary: "Samantha is a 32-year-old software engineer passionate about AI and machine learning. He’s a problem solver at heart and enjoys working on challenging algorithms. Outside of work, Samantha loves hiking and photography, often capturing breathtaking landscapes during his weekend adventures.",
    },
    {
        id: Date.now() + 2,  
        img: "Images/americam.avif",
        name: "John",
        address: "The Grand Canyon",
        summary: "Jhon is a 23-year-old recent collegee graduate with a degree in media studies. He’s a budding filmmaker who creates short documentaries highlighting social issues. He’s an excellent storyteller and spends his weekends working on scripts or exploring new genres of cinema.",
    },
    {
        id: Date.now() + 3,  
        img: "Images/chinaman.jpg",
        name: "Ching Chong",
        address: "Hong Kong, China",
        summary: "Ching Chong is a 27-year-old graphic designer with a knack for minimalist art. She thrives in fast-paced environments and has a portfolio brimming with unique logos and branding projects. In her downtime, she enjoys experimenting with watercolor painting and listening to jazz.",
    },
    {
        id: Date.now() + 4,  
        img: "Images/indianman.jpg",
        name: "Raj",
        address: "Delhi, India",
        summary: "Raj is a 45-year-old teacher who specializes in physics. Known for his innovative teaching methods, he turns complex theories into engaging experiments. A father of two, Ravi spends his free time mentoring local students and playing chess with his kids.",
    },
    {
        id: Date.now() + 5,  
        img: "Images/chinaman.jpg",
        name: "Ching Chong",
        address: "Hong Kong, China",
        summary: "Ching Chong is a 27-year-old graphic designer with a knack for minimalist art. She thrives in fast-paced environments and has a portfolio brimming with unique logos and branding projects. In her downtime, she enjoys experimenting with watercolor painting and listening to jazz.",
    },
 
    {
        id: Date.now() + 6,  
        img: "Images/indianman.jpg",
        name: "Raj",
        address: "Delhi, India",
        summary: "Raj is a 45-year-old teacher who specializes in physics. Known for his innovative teaching methods, he turns complex theories into engaging experiments. A father of two, Ravi spends his free time mentoring local students and playing chess with his kids.",
    },
    {
        id: Date.now() + 7,  
        img: "Images/chinaman.jpg",
        name: "Ching Chong",
        address: "Hong Kong, China",
        summary: "Ching Chong is a 27-year-old graphic designer with a knack for minimalist art. She thrives in fast-paced environments and has a portfolio brimming with unique logos and branding projects. In her downtime, she enjoys experimenting with watercolor painting and listening to jazz.",
    },
    {
        id: Date.now() + 8,  
        img: "Images/indianman.jpg",
        name: "Raj",
        address: "Delhi, India",
        summary: "Raj is a 45-year-old teacher who specializes in physics. Known for his innovative teaching methods, he turns complex theories into engaging experiments. A father of two, Ravi spends his free time mentoring local students and playing chess with his kids.",
    },
    {
        id: Date.now() + 1,  
        img: "Images/americanf.jpg",
        name: "Samantha",
        address: "The Grand Canyon",
        summary: "Samantha is a 32-year-old software engineer passionate about AI and machine learning. He’s a problem solver at heart and enjoys working on challenging algorithms. Outside of work, Samantha loves hiking and photography, often capturing breathtaking landscapes during his weekend adventures.",
    },
    {
        id: Date.now() + 2,  
        img: "Images/americam.avif",
        name: "John",
        address: "The Grand Canyon",
        summary: "Jhon is a 23-year-old recent collegee graduate with a degree in media studies. He’s a budding filmmaker who creates short documentaries highlighting social issues. He’s an excellent storyteller and spends his weekends working on scripts or exploring new genres of cinema.",
    },
    {
        id: Date.now() + 3,  
        img: "Images/chinaman.jpg",
        name: "Ching Chong",
        address: "Hong Kong, China",
        summary: "Ching Chong is a 27-year-old graphic designer with a knack for minimalist art. She thrives in fast-paced environments and has a portfolio brimming with unique logos and branding projects. In her downtime, she enjoys experimenting with watercolor painting and listening to jazz.",
    },
    {
        id: Date.now() + 4,  
        img: "Images/indianman.jpg",
        name: "Raj",
        address: "Delhi, India",
        summary: "Raj is a 45-year-old teacher who specializes in physics. Known for his innovative teaching methods, he turns complex theories into engaging experiments. A father of two, Ravi spends his free time mentoring local students and playing chess with his kids.",
    },
    {
        id: Date.now() + 5,  
        img: "Images/chinaman.jpg",
        name: "Ching Chong",
        address: "Hong Kong, China",
        summary: "Ching Chong is a 27-year-old graphic designer with a knack for minimalist art. She thrives in fast-paced environments and has a portfolio brimming with unique logos and branding projects. In her downtime, she enjoys experimenting with watercolor painting and listening to jazz.",
    },
 
    {
        id: Date.now() + 6,  
        img: "Images/indianman.jpg",
        name: "Raj",
        address: "Delhi, India",
        summary: "Raj is a 45-year-old teacher who specializes in physics. Known for his innovative teaching methods, he turns complex theories into engaging experiments. A father of two, Ravi spends his free time mentoring local students and playing chess with his kids.",
    },
    {
        id: Date.now() + 7,  
        img: "Images/chinaman.jpg",
        name: "Ching Chong",
        address: "Hong Kong, China",
        summary: "Ching Chong is a 27-year-old graphic designer with a knack for minimalist art. She thrives in fast-paced environments and has a portfolio brimming with unique logos and branding projects. In her downtime, she enjoys experimenting with watercolor painting and listening to jazz.",
    },
    {
        id: Date.now() + 8,  
        img: "Images/indianman.jpg",
        name: "Raj",
        address: "Delhi, India",
        summary: "Raj is a 45-year-old teacher who specializes in physics. Known for his innovative teaching methods, he turns complex theories into engaging experiments. A father of two, Ravi spends his free time mentoring local students and playing chess with his kids.",
    },]);

    const addProfile = (newProfile) => {
        setProfiles((prevProfiles) => [...prevProfiles, { ...newProfile, id: Date.now() }]);
    };

    const deleteProfile = (profileId) => {
        setProfiles((prevProfiles) => prevProfiles.filter(profile => profile.id !== profileId));
        alert("deletion successfull")
    };

    return (
        <ProfileContext.Provider value={{ profiles, addProfile, deleteProfile }}>
            {children} 
        </ProfileContext.Provider>
    );
};
