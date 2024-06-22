import React from 'react';
import CourseCards from './CourseCards';

const cardsData = [
  {
    image: 'https://tse2.mm.bing.net/th?id=OIP.mVMrfBfidLjbqSzy2P4q8gHaDt&pid=Api&P=0&h=180',
    title: 'The Complete 2024 Web Development Bootcamp',
    instructor: 'Dr. Angela Yu, Developer and Lead...',
    rating: '4.7',
    reviews: '384,739',
    price: '₹3,099',
    label: 'Bestseller'
  },
  {
    image: 'https://tse2.mm.bing.net/th?id=OIP.mVMrfBfidLjbqSzy2P4q8gHaDt&pid=Api&P=0&h=180',
    title: 'The Web Developer Bootcamp 2024',
    instructor: 'Colt Steele',
    rating: '4.6',
    reviews: '273,321',
    price: '₹3,499'
  },
  {
    image: 'https://tse2.mm.bing.net/th?id=OIP.mVMrfBfidLjbqSzy2P4q8gHaDt&pid=Api&P=0&h=180',
    title: 'Web Development Masterclass - Online Certification Course',
    instructor: 'YouAccel Training',
    rating: '4.6',
    reviews: '9,823',
    price: '₹3,099'
  },
  {
    image: 'https://tse2.mm.bing.net/th?id=OIP.mVMrfBfidLjbqSzy2P4q8gHaDt&pid=Api&P=0&h=180',
    title: 'Practical Web Development: 22 Courses in 1',
    instructor: 'Creative Online School',
    rating: '4.4',
    reviews: '4,316',
    price: '₹3,699'
  },
  {
    image: 'https://tse2.mm.bing.net/th?id=OIP.mVMrfBfidLjbqSzy2P4q8gHaDt&pid=Api&P=0&h=180',
    title: 'Advanced CSS and Sass: Flexbox, Grid, Animations and More!',
    instructor: 'Jonas Schmedtmann',
    rating: '4.8',
    reviews: '158,739',
    price: '₹2,499',
    label: 'Top Rated'
  },
  {
    image: 'https://tse2.mm.bing.net/th?id=OIP.mVMrfBfidLjbqSzy2P4q8gHaDt&pid=Api&P=0&h=180',
    title: 'JavaScript: Understanding the Weird Parts',
    instructor: 'Anthony Alicea',
    rating: '4.7',
    reviews: '134,822',
    price: '₹2,799'
  },
  {
    image: 'https://tse2.mm.bing.net/th?id=OIP.mVMrfBfidLjbqSzy2P4q8gHaDt&pid=Api&P=0&h=180',
    title: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
    instructor: 'Maximilian Schwarzmüller',
    rating: '4.8',
    reviews: '213,729',
    price: '₹3,199',
    label: 'Bestseller'
  },
  {
    image: 'https://tse2.mm.bing.net/th?id=OIP.mVMrfBfidLjbqSzy2P4q8gHaDt&pid=Api&P=0&h=180',
    title: 'NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)',
    instructor: 'Maximilian Schwarzmüller',
    rating: '4.7',
    reviews: '112,476',
    price: '₹3,099'
  },
  {
    image: 'https://tse2.mm.bing.net/th?id=OIP.mVMrfBfidLjbqSzy2P4q8gHaDt&pid=Api&P=0&h=180',
    title: 'The Complete Guide to Django Development',
    instructor: 'Jose Salvatierra',
    rating: '4.6',
    reviews: '84,539',
    price: '₹3,399'
  },
  {
    image: 'https://tse2.mm.bing.net/th?id=OIP.mVMrfBfidLjbqSzy2P4q8gHaDt&pid=Api&P=0&h=180',
    title: 'Python and Django Full Stack Web Developer Bootcamp',
    instructor: 'Jose Portilla',
    rating: '4.6',
    reviews: '99,182',
    price: '₹3,299'
  }
];


const carddata = [
    {
      image: 'https://tse2.mm.bing.net/th?id=OIP.mVMrfBfidLjbqSzy2P4q8gHaDt&pid=Api&P=0&h=180', // Replace with actual image paths
      title: 'Learn Python Programming Masterclass',
      instructor: 'Tim Buchalka, Jean-Paul Roberts',
      rating: '4.7',
      reviews: '245,839',
      price: '₹2,999',
      label: 'Bestseller'
    },
    {
      image: 'https://tse2.mm.bing.net/th?id=OIP.mVMrfBfidLjbqSzy2P4q8gHaDt&pid=Api&P=0&h=180',
      title: 'Java Programming and Software Engineering Fundamentals',
      instructor: 'Duke University',
      rating: '4.6',
      reviews: '175,321',
      price: '₹3,199'
    },
    {
      image: 'https://tse2.mm.bing.net/th?id=OIP.mVMrfBfidLjbqSzy2P4q8gHaDt&pid=Api&P=0&h=180',
      title: 'Complete C# Masterclass',
      instructor: 'Denis Panjuta',
      rating: '4.5',
      reviews: '89,823',
      price: '₹2,599'
    },
    {
      image: 'https://tse2.mm.bing.net/th?id=OIP.mVMrfBfidLjbqSzy2P4q8gHaDt&pid=Api&P=0&h=180',
      title: 'The Complete JavaScript Course 2024: From Zero to Expert!',
      instructor: 'Jonas Schmedtmann',
      rating: '4.8',
      reviews: '314,316',
      price: '₹3,099',
      label: 'Top Rated'
    },
    {
      image: 'https://tse2.mm.bing.net/th?id=OIP.mVMrfBfidLjbqSzy2P4q8gHaDt&pid=Api&P=0&h=180',
      title: 'The Complete Ruby on Rails Developer Course',
      instructor: 'Mashrur Hossain, Rob Percival',
      rating: '4.7',
      reviews: '158,739',
      price: '₹2,799'
    },
    {
      image: 'https://tse2.mm.bing.net/th?id=OIP.mVMrfBfidLjbqSzy2P4q8gHaDt&pid=Api&P=0&h=180',
      title: 'Go: The Complete Developer\'s Guide (Golang)',
      instructor: 'Stephen Grider',
      rating: '4.7',
      reviews: '134,822',
      price: '₹3,499'
    },
    {
      image: 'https://tse2.mm.bing.net/th?id=OIP.mVMrfBfidLjbqSzy2P4q8gHaDt&pid=Api&P=0&h=180',
      title: 'Kotlin for Beginners: Learn Programming With Kotlin',
      instructor: 'Paulo Dichone',
      rating: '4.6',
      reviews: '68,729',
      price: '₹2,499',
      label: 'Bestseller'
    },
    {
      image: 'https://tse2.mm.bing.net/th?id=OIP.mVMrfBfidLjbqSzy2P4q8gHaDt&pid=Api&P=0&h=180',
      title: 'Mastering Swift 5: From Beginner to Pro',
      instructor: 'Devslopes by Mark Wahlbeck',
      rating: '4.7',
      reviews: '112,476',
      price: '₹3,199'
    },
    {
      image: 'https://tse2.mm.bing.net/th?id=OIP.mVMrfBfidLjbqSzy2P4q8gHaDt&pid=Api&P=0&h=180',
      title: 'Complete Rust Programming Course',
      instructor: 'Nathan Stocks',
      rating: '4.5',
      reviews: '34,539',
      price: '₹3,399'
    },
    {
      image: 'https://tse2.mm.bing.net/th?id=OIP.mVMrfBfidLjbqSzy2P4q8gHaDt&pid=Api&P=0&h=180',
      title: 'The Complete Guide to C++ Programming',
      instructor: 'John Purcell',
      rating: '4.6',
      reviews: '55,182',
      price: '₹3,299'
    }
  ];
  
  const freeCourses = [
    {
      image: 'https://www.youtube.com/embed/XrnBtQq6OxM?si=LaFWBzLo0kiAylNR',
      title: 'Go: The Complete Developer\'s Guide (Golang)',
      instructor: 'Stephen Grider',
      rating: '4.7',
      reviews: '134,822',
    
    },
    {
      image: 'https://www.youtube.com/embed/kJOqIaGwQ7Y?si=d4zNn0K1JgUpjApc',
      title: 'Kotlin for Beginners: Learn Programming With Kotlin',
      instructor: 'Paulo Dichone',
      rating: '4.6',
      reviews: '68,729',
      price: '₹2,499',
 
    },
    {
      image: 'https://www.youtube.com/embed/YhaPN9_lHPw?si=41Mx8IcUzD2XrA-l',
      title: 'Mastering Swift 5: From Beginner to Pro',
      instructor: 'Devslopes by Mark Wahlbeck',
      rating: '4.7',
      reviews: '112,476',
    
    },
    {
      image: 'https://www.youtube.com/embed/deztUdPApiM?si=ANsbWfiTPLAwRTzU',
      title: 'Complete Rust Programming Course',
      instructor: 'Nathan Stocks',
      rating: '4.5',
      reviews: '34,539',
 
    },
    {
      image: "https://www.youtube.com/embed/6mbwJ2xhgzM?si=x2o3Opfd6TuGMN0d",
      title: 'The Complete Guide to C++ Programming',
      instructor: 'John Purcell',
      rating: '4.6',
      reviews: '55,182',
    },
    {
        image: "https://www.youtube.com/embed/14BL_FwQCpM?si=jX1GD2npFjKZHJID",
        title: 'The Complete Guide to C++ Programming',
        instructor: 'John Purcell',
        rating: '4.6',
        reviews: '55,182',
      }
  ];
  


const Courses = () => {
  return (
    <div><h1 className='font-bold text-xl mb-4 ml-2'>Web Development Courses</h1>
    <div className="flex space-x-4 overflow-x-auto mx-4">
      {cardsData.map((card, index) => (
        <CourseCards
          key={index}
          image={card.image}
          title={card.title}
          instructor={card.instructor}
          rating={card.rating}
          reviews={card.reviews}
          price={card.price}
          label={card.label}
        />
      ))}
    </div>
    <h1 className='font-bold text-xl mb-4 ml-2 mt-5'>Programming Languages</h1>
    <div className="flex space-x-4 overflow-x-auto mx-4">
      {carddata.map((card, index) => (
        <CourseCards
          key={index}
          image={card.image}
          title={card.title}
          instructor={card.instructor}
          rating={card.rating}
          reviews={card.reviews}
          price={card.price}
          label={card.label}
        />
      ))}
    </div>
    <h1 className='font-bold text-xl mb-4 ml-2 mt-5'>Free Courses</h1>
    <div className="flex space-x-4 overflow-x-auto mx-4">
      {freeCourses.map((card, index) => (
        <CourseCards
          key={index}
          image={card.image}
          title={card.title}
          instructor={card.instructor}
          rating={card.rating}
          reviews={card.reviews}
        />
      ))}
    </div>
    </div>
  );
};

export default Courses;
