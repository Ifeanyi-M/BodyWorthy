import {SiOpenaigym} from 'react-icons/si'



export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Plans",
        path: '/plans'
    },
    {
        name: "Trainers",
        path: '/trainers'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]







export const programs = [
    { 
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Strength Training",
        info: "A program designed to build muscle, increase strength and improve overall physical fitness through weightlifting and resistance training.",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Cardio Conditioning",
        info: "A program focused on improving cardiovascular health and endurance through running, cycling, or other high-intensity cardio exercises.",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Yoga & Pilates",
        info: "A program offering a combination of low-impact exercises aimed at improving flexibility, balance, and core strength.",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "HIIT(High Intensity Interval Training)",
        info: " A program that alternates between high-intensity exercises and periods of rest to boost metabolism and improve cardiovascular fitness.",
        path: "/programs/444"
    }
]








export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Value One",
        desc: "Empowerment: We strive to empower individuals to take control of their health and wellness through exercise and nutrition."
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Value Two",
        desc: "Inclusivity: We believe in creating a welcoming and supportive community for all fitness levels and abilities."
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Value Three",
        desc: "Education: Our mission is to educate and inform our clients on the latest fitness trends and best practices for reaching their goals."
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Value Four",
        desc: "Results: Our focus is to deliver real results to our clients by providing personalized training programs and nutrition plans."
    }
]









export const faqs = [
    {
        id: 1,
        question: "How often should I exercise?",
        answer: "It's recommended to get at least 150 minutes of moderate-intensity exercise or 75 minutes of vigorous-intensity exercise per week, spread over at least 3 days per week. Additionally, it's also recommended to incorporate strength training exercises for all major muscle groups into your routine, at least two days per week."
    },
    {
        id: 2,
        question: "What time of day is best to work out?",
        answer: "The best time of day to work out is subjective and depends on your personal schedule and preferences. Some people prefer to exercise in the morning, as it can help to boost energy levels and set a positive tone for the day. Others prefer to exercise in the evening as a way to unwind and relieve stress after a long day.The most important factor is finding a time that works best for you and sticking to a consistent routine. Consistency is key for seeing results and maintaining a regular exercise habit."
    },
    {
        id: 3,
        question: "How long should my workouts be?",
        answer: "A typical workout session can range from 30 minutes to an hour. The recommended minimum amount of moderate-intensity aerobic exercise is 150 minutes per week, which breaks down to about 22 minutes a day, 5 days a week. However, the exact duration of your workout can depend on your fitness level, goals, and available time. It's important to listen to your body and not push yourself too hard."
    },
    {
        id: 4,
        question: "Do I need to warm up before my workouts?",
        answer: "Yes, it's recommended to warm up before exercising to help prepare your body for physical activity and reduce the risk of injury. A warm-up can consist of 5-10 minutes of light aerobic activity such as jogging or jumping jacks, dynamic stretching, or a combination of both. The warm-up should increase your heart rate, loosen your muscles, and improve your range of motion. This preparation helps to make your workout more effective and reduce the risk of injury."
    },
    {
        id: 5,
        question: "Should I do strength training, cardio or both?",
        answer: "Both strength training and cardio are important for overall physical fitness. Strength training helps to build and maintain muscle mass, increase bone density, and improve physical function. Cardiovascular exercise helps to improve cardiovascular health, increase endurance, and burn calories. It's recommended to include both types of exercise in your routine for the best results. "
    },
    {
        id: 6,
        question: "Should I lift weights for strength training?",
        answer: "Yes, lifting weights is an effective way to strengthen your muscles and improve overall physical fitness. Strength training can include using weight machines, free weights, resistance bands, or bodyweight exercises. The amount of weight you use and the number of repetitions you perform will depend on your goals and current fitness level.It's important to use proper form and start with lighter weights, gradually increasing the weight as your muscles become stronger. Strength training should be performed at least two days per week, with one day of rest between sessions to allow your muscles time to recover. A certified personal trainer or physical therapist can help you create a safe and effective strength training program."
    }
]








export const testimonials = [
    {
        id: 1,
        name: "Callon Farrington",
        quote: "I've been using BodyWorthy for a few months now and I'm blown away by the results I've seen. The trainers are knowledgeable and supportive, and the workout plans are challenging but achievable.",
        job: "Product Manager",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Perry Potter",
        quote: "I've never been much of a fitness person, but BodyWorthy has changed all that. The trainers are so inspiring and the community is so supportive. I feel like I'm part of something bigger.",
        job: "Software Engineer",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Hakeem St.Patrick",
        quote: "I've been using BodyWorthy for a few months now and I'm really impressed. The workout plans are well-designed and the exercises are explained in great detail. I've seen significant progress in my fitness. Highly recommend!",
        job: "University Lecturer",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Parvati Singh",
        quote: "I've been using this fitness website for about a year now and I'm still impressed with how comprehensive it is. The workout plans are tailored to my fitness level and goals, and the app is easy to use",
        job: "Lawyer",
        avatar: require("./images/avatar4.jpg")
    },
    {
        id: 5,
        name: "Mary Von Clarence",
        quote: "I've tried several fitness websites in the past, but this one stands out.It is a game-changer for me. I love how personalized the workout plans are and the variety of exercises available.",
        job: "Pharmacist",
        avatar: require("./images/avatar5.jpg")
    }
]







export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: false},
            {feature: 'Sixth Feature', available: false},
            {feature: 'Seventh Feature', available: false},
            {feature: 'Seventh Feature Plus', available: false},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what they are doing',
        price: 49.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 89.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: true},
            {feature: 'Ninth Feature', available: true},
            {feature: 'Tenth Feature', available: true},
            {feature: 'Eleventh Feature', available: true}
        ]
    }
]









const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpg')
const Trainer5 = require('./images/trainer5.jpg')
const Trainer6 = require('./images/trainer6.jpg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'Clark Tenk',
        job: 'Aerobic Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Pietro Maximoff',
        job: 'Speed Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Reed Richards',
        job: 'Flexibility Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Corlys Velaryon',
        job: 'Body Composition Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Lagertha Lodbrok',
        job: 'Circuit Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Viktor Krum',
        job: 'Physical Intelligence Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    }
]