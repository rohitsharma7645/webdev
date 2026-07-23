

const Home = () => {
    const  DUMMY_COURSES = [
  {
    id: 1,
    title: "React for Beginners",
    level: "Beginner",
    duration: "4 weeks",
    price: 2999,
    description: "Learn the fundamentals of React, including components, state, props, hooks, and basic routing. Perfect for developers starting their front-end journey."
  },
  {
    id: 2,
    title: "Advanced JavaScript & ES6+",
    level: "Advanced",
    duration: "6 weeks",
    price: 4999,
    description: "Deep dive into closures, prototypes, asynchronous programming, promises, async/await, and modern ES6+ features to write high-performance JS."
  },
  {
    id: 3,
    title: "Node.js & Express Backend",
    level: "Intermediate",
    duration: "8 weeks",
    price: 5999,
    description: "Build robust REST APIs, handle authentication, work with databases, and structure backend servers using Express.js and Node.js."
  },
  {
    id: 4,
    title: "Full Stack Web BootCamp",
    level: "Advanced",
    duration: "12 weeks",
    price: 12999,
    description: "The ultimate program covering React, Node.js, Express, databases, deployment, and best practices to build production-grade web applications."
  },
  {
    id: 5,
    title: "Tailwind CSS Masterclass",
    level: "Beginner",
    duration: "3 weeks",
    price: 1999,
    description: "Master modern utility-first CSS styling. Learn responsive design, flexbox, grid, and custom configurations to build beautiful interfaces quickly."
  },
  {
    id: 6,
    title: "Python for Data Science",
    level: "Intermediate",
    duration: "10 weeks",
    price: 8999,
    description: "An introduction to Python programming with a focus on data analysis, including NumPy, Pandas, Matplotlib, and data manipulation techniques."
  }
];
  return (
    <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{
            DUMMY_COURSES.map((courses)=>{
                <div className="border rounded-1g p-4">
                    <h3 className="font-bold text-1g ">{courses.title}</h3>
                    <p >{courses.duration}</p>
                    <p className="font-semibol mt-2">Rs. {courses.price}</p>
                </div>
            })
        }
            
        </div>
    </div>
  )
}

export default Home