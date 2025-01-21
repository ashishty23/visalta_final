// import React, { useState, useEffect } from 'react';
// import { Star } from 'lucide-react';

// const FeedbackSlider = () => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);
  
//   const feedbackData = {
//     "feedbacks": [
//       {
//         "id": 1,
//         "username": "Sarah Johnson",
//         "rating": 5,
//         "comment": "Absolutely love this product! The quality exceeded my expectations. The customer service team went above and beyond to ensure my satisfaction.",
//         "date": "2024-01-10"
//       },
//       {
//         "id": 2,
//         "username": "Mike Chen",
//         "rating": 4,
//         "comment": "Great experience overall. The product works exactly as advertised. Would definitely recommend to anyone looking for a reliable solution.",
//         "date": "2024-01-11"
//       },
//       {
//         "id": 3,
//         "username": "Emma Davis",
//         "rating": 5,
//         "comment": "Incredible value for money. Made such a difference in my daily routine! The attention to detail is remarkable.",
//         "date": "2024-01-12"
//       },
//       {
//         "id": 4,
//         "username": "John Smith",
//         "rating": 5,
//         "comment": "Best purchase I've made this year. Highly recommended! The quality and functionality exceeded all my expectations.",
//         "date": "2024-01-13"
//       },
//       {
//         "id": 5,
//         "username": "Lisa Wong",
//         "rating": 4,
//         "comment": "Very satisfied with the quality and service provided. The team's responsiveness and professionalism are outstanding.",
//         "date": "2024-01-14"
//       },
//       {
//         "id": 6,
//         "username": "David Brown",
//         "rating": 5,
//         "comment": "Exceptional product that delivers on all promises. The innovative features and design make it stand out from competitors.",
//         "date": "2024-01-15"
//       },
//       {
//         "id": 7,
//         "username": "Sarah Johnson",
//         "rating": 5,
//         "comment": "Absolutely love this product! The quality exceeded my expectations. The customer service team went above and beyond to ensure my satisfaction.",
//         "date": "2024-01-10"
//       },
//       {
//         "id": 8,
//         "username": "Mike Chen",
//         "rating": 4,
//         "comment": "Great experience overall. The product works exactly as advertised. Would definitely recommend to anyone looking for a reliable solution.",
//         "date": "2024-01-11"
//       },
//       {
//         "id": 9,
//         "username": "Emma Davis",
//         "rating": 5,
//         "comment": "Incredible value for money. Made such a difference in my daily routine! The attention to detail is remarkable.",
//         "date": "2024-01-12"
//       },
//       {
//         "id": 10,
//         "username": "John Smith",
//         "rating": 5,
//         "comment": "Best purchase I've made this year. Highly recommended! The quality and functionality exceeded all my expectations.",
//         "date": "2024-01-13"
//       },
//       {
//         "id": 11,
//         "username": "Lisa Wong",
//         "rating": 4,
//         "comment": "Very satisfied with the quality and service provided. The team's responsiveness and professionalism are outstanding.",
//         "date": "2024-01-14"
//       },
//       {
//         "id": 12,
//         "username": "David Brown",
//         "rating": 1,
//         "comment": "Exceptional product that delivers on all promises. The innovative features and design make it stand out from competitors.",
//         "date": "2024-01-15"
//       }

//     ]
//   };

//   const feedbacks = feedbackData.feedbacks;
//   const itemsPerPage = 3;
//   const totalPages = Math.ceil(feedbacks.length / itemsPerPage);

//   useEffect(() => {
//     if (isPaused) return;

//     const timer = setInterval(() => {
//       setIsVisible(false);
//       setTimeout(() => {
//         setCurrentPage((prev) => (prev + 1) % totalPages);
//         setIsVisible(true);
//       }, 300);
//     }, 3000);

//     return () => clearInterval(timer);
//   }, [isPaused, totalPages]);

//   const getCurrentPageItems = () => {
//     const startIndex = currentPage * itemsPerPage;
//     return feedbacks.slice(startIndex, startIndex + itemsPerPage);
//   };

//   const ReviewCard = ({ review }) => (
//     <div className="bg-zinc-800 rounded-xl shadow-2xl p-8 flex flex-col h-full border border-zinc-700 
//                     hover:border-zinc-500 transition-all duration-300 ease-in-out transform 
//                     hover:-translate-y-2 hover:shadow-xl
//                     group relative overflow-hidden">
//       {/* Animated gradient background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-zinc-700/30 to-zinc-900/30 
//                       opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
//       <div className="flex justify-center mb-4">
//         {[...Array(5)].map((_, index) => (
//           <Star
//             key={index}
//             className={`w-6 h-6 transform transition-transform duration-300 group-hover:scale-110 ${
//               index < review.rating
//                 ? 'text-yellow-400 fill-yellow-400'
//                 : 'text-zinc-600'
//             }`}
//           />
//         ))}
//       </div>
      
//       <p className="text-zinc-300 text-base mb-6 flex-grow italic leading-relaxed">
//         "{review.comment}"
//       </p>
      
//       <div className="mt-auto border-t border-zinc-700 pt-4">
//         <h3 className="font-semibold text-base text-zinc-200 mb-1">
//           {review.username}
//         </h3>
//         <p className="text-zinc-400 text-sm">
//           {new Date(review.date).toLocaleDateString()}
//         </p>
//       </div>
//     </div>
//   );

//   return (
//     <div className="w-full  p-8 bg-zinc-900  min-h-[400px] 
//                     shadow-2xl border border-zinc-800">
//       <div 
//         className="relative"
//         onMouseEnter={() => setIsPaused(true)}
//         onMouseLeave={() => setIsPaused(false)}
//       >
//         <div className={`grid gap-6 transition-all duration-300 ease-in-out
//                         lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1
//                         ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
//           {getCurrentPageItems().map((feedback) => (
//             <ReviewCard key={feedback.id} review={feedback} />
//           ))}
//         </div>

//         <div className="flex justify-center mt-10 gap-4">
//           {[...Array(totalPages)].map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentPage(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125
//                          ${currentPage === index 
//                            ? 'bg-blue-500 hover:bg-blue-400' 
//                            : 'bg-zinc-600 hover:bg-zinc-500'}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeedbackSlider;


// import React, { useState, useEffect } from 'react';
// import { Star } from 'lucide-react';
// import moment from 'moment';

// const FeedbackSlider = () => {
//   const [feedbacks, setFeedbacks] = useState([]);
//   const [currentPage, setCurrentPage] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);

//   const itemsPerPage = 3;

//   // Fetch reviews from backend
//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/v1/review");
//         const data = await response.json();
//         if (data.success) {
//           setFeedbacks(data.data); // Assuming reviews are in `data` field
//           console.log(data.data)
//         } else {
//           console.error("Failed to fetch reviews:", data.message);
//         }
//       } catch (error) {
//         console.error("Error fetching reviews:", error);
//       }
//     };

//     fetchReviews();
//   }, []);

//   const totalPages = Math.ceil(feedbacks.length / itemsPerPage);

//   useEffect(() => {
//     if (isPaused) return;

//     const timer = setInterval(() => {
//       setIsVisible(false);
//       setTimeout(() => {
//         setCurrentPage((prev) => (prev + 1) % totalPages);
//         setIsVisible(true);
//       }, 300);
//     }, 3000);

//     return () => clearInterval(timer);
//   }, [isPaused, totalPages]);

//   const getCurrentPageItems = () => {
//     const startIndex = currentPage * itemsPerPage;
//     return feedbacks.slice(startIndex, startIndex + itemsPerPage);
//   };

//   const ReviewCard = ({ review }) => {
//     const daysAgo = moment().diff(moment(review?.createdAt), 'days');
//     return (
//       <div className="bg-zinc-800 rounded-xl shadow-2xl p-8 flex flex-col h-full border border-zinc-700 
//                       hover:border-zinc-500 transition-all duration-300 ease-in-out transform 
//                       hover:-translate-y-2 hover:shadow-xl
//                       group relative overflow-hidden">
//         {/* Animated gradient background */}
//         <div className="absolute inset-0 bg-gradient-to-br from-zinc-700/30 to-zinc-900/30 
//                         opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
//         <div className="flex justify-center mb-4">
//           {[...Array(5)].map((_, index) => (
//             <Star
//               key={index}
//               className={`w-6 h-6 transform transition-transform duration-300 group-hover:scale-110 ${
//                 index < review.rating
//                   ? 'text-yellow-400 fill-yellow-400'
//                   : 'text-zinc-600'
//               }`}
//             />
//           ))}
//         </div>
        
//         <p className="text-zinc-300 text-base mb-6 flex-grow italic leading-relaxed">
//           "{review?.review}"
//         </p>
        
//         <div className="mt-auto border-t border-zinc-700 pt-4">
//           <h3 className="font-semibold text-base text-zinc-200 mb-1">
//             {review?.user} {/* Replace with actual username if available */}
//           </h3>
//           <p className="text-zinc-400 text-sm">
//             {daysAgo} {daysAgo === 1 ? 'day' : 'days'} ago
//           </p>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="w-full p-8 bg-zinc-900 min-h-[400px] 
//                     shadow-2xl border border-zinc-800">
//       <div 
//         className="relative"
//         onMouseEnter={() => setIsPaused(true)}
//         onMouseLeave={() => setIsPaused(false)}
//       >
//         <div className={`grid gap-6 transition-all duration-300 ease-in-out
//                         lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1
//                         ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
//           {getCurrentPageItems().map((feedback) => (
//             <ReviewCard key={feedback._id} review={feedback} />
//           ))}
//         </div>

//         <div className="flex justify-center mt-10 gap-4">
//           {[...Array(totalPages)].map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentPage(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125
//                            ${currentPage === index 
//                              ? 'bg-blue-500 hover:bg-blue-400' 
//                              : 'bg-zinc-600 hover:bg-zinc-500'}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeedbackSlider;






// import React, { useState, useEffect } from 'react';
// import { Star } from 'lucide-react';
// import moment from 'moment';

// const FeedbackSlider = () => {
//   const [feedbacks, setFeedbacks] = useState([]);
//   const [userNames, setUserNames] = useState({}); // Cache for user names
//   const [currentPage, setCurrentPage] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);

//   const itemsPerPage = 3;

//   // Fetch reviews from backend
//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/v1/review/");
//         const data = await response.json();
//         if (data.success) {
//           setFeedbacks(data.data); // Assuming reviews are in `data` field
//         } else {
//           console.error("Failed to fetch reviews:", data.message);
//         }
//       } catch (error) {
//         console.error("Error fetching reviews:", error);
//       }
//     };

//     fetchReviews();
//   }, []);

//   // Fetch user name by ID
//   const fetchUserName = async (userId) => {
//     if (userNames[userId]) return userNames[userId]; // Use cached name if available

//     try {
//       const response = await fetch(`http://localhost:5000/api/v1/user/${userId}`);
//       const data = await response.json();
//       if (data.success) {
//         setUserNames((prev) => ({ ...prev, [userId]: data.user.name }));
//         return data.user.name;
//       } else {
//         console.error("Failed to fetch user name:", data.message);
//       }
//     } catch (error) {
//       console.error("Error fetching user name:", error);
//     }

//     return "Unknown User"; // Fallback
//   };

//   const totalPages = Math.ceil(feedbacks.length / itemsPerPage);

//   useEffect(() => {
//     if (isPaused) return;

//     const timer = setInterval(() => {
//       setIsVisible(false);
//       setTimeout(() => {
//         setCurrentPage((prev) => (prev + 1) % totalPages);
//         setIsVisible(true);
//       }, 300);
//     }, 3000);

//     return () => clearInterval(timer);
//   }, [isPaused, totalPages]);

//   const getCurrentPageItems = () => {
//     const startIndex = currentPage * itemsPerPage;
//     return feedbacks.slice(startIndex, startIndex + itemsPerPage);
//   };

//   const ReviewCard = ({ review }) => {
//     const daysAgo = moment().diff(moment(review.createdAt), 'days');
//     const [userName, setUserName] = useState("Loading...");

//     useEffect(() => {
//       if (typeof review.user === "object" && review.user.id) {
//         fetchUserName(review.user.id).then((name) => setUserName(name));
//       } else {
//         setUserName("Unknown User");
//       }
//     }, [review.user]);

//     return (
//       <div className="bg-zinc-800 rounded-xl shadow-2xl p-8 flex flex-col h-full border border-zinc-700 
//                       hover:border-zinc-500 transition-all duration-300 ease-in-out transform 
//                       hover:-translate-y-2 hover:shadow-xl
//                       group relative overflow-hidden">
//         {/* Animated gradient background */}
//         <div className="absolute inset-0 bg-gradient-to-br from-zinc-700/30 to-zinc-900/30 
//                         opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
//         <div className="flex justify-center mb-4">
//           {[...Array(5)].map((_, index) => (
//             <Star
//               key={index}
//               className={`w-6 h-6 transform transition-transform duration-300 group-hover:scale-110 ${
//                 index < review.rating
//                   ? 'text-yellow-400 fill-yellow-400'
//                   : 'text-zinc-600'
//               }`}
//             />
//           ))}
//         </div>
        
//         <p className="text-zinc-300 text-base mb-6 flex-grow italic leading-relaxed">
//           "{review.review}"
//         </p>
        
//         <div className="mt-auto border-t border-zinc-700 pt-4">
//           <h3 className="font-semibold text-base text-zinc-200 mb-1">
//             {userName}
//           </h3>
//           <p className="text-zinc-400 text-sm">
//             {daysAgo} {daysAgo === 1 ? 'day' : 'days'} ago
//           </p>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="w-full p-8 bg-zinc-900 min-h-[400px] 
//                     shadow-2xl border border-zinc-800">
//       <div 
//         className="relative"
//         onMouseEnter={() => setIsPaused(true)}
//         onMouseLeave={() => setIsPaused(false)}
//       >
//         <div className={`grid gap-6 transition-all duration-300 ease-in-out
//                         lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1
//                         ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
//           {getCurrentPageItems().map((feedback) => (
//             <ReviewCard key={feedback._id} review={feedback} />
//           ))}
//         </div>

//         <div className="flex justify-center mt-10 gap-4">
//           {[...Array(totalPages)].map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentPage(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125
//                            ${currentPage === index 
//                              ? 'bg-blue-500 hover:bg-blue-400' 
//                              : 'bg-zinc-600 hover:bg-zinc-500'}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeedbackSlider;




import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import moment from 'moment';
//DOT K LIYE JUGAAAD KR
const FeedbackSlider = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [userNames, setUserNames] = useState({}); // Cache for user names
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const itemsPerPage = 3;

  // Fetch reviews from backend
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/v1/review/");
        const data = await response.json();
        if (data.success) {
          setFeedbacks(data.data); // Assuming reviews are in `data` field
        } else {
          console.error("Failed to fetch reviews:", data.message);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  // Fetch user name by sending userId in the body
  const fetchUserName = async (userId) => {
    console.log("----->",userId)
    if (userNames[userId]) return userNames[userId]; // Use cached name if available

    try {
      const response = await fetch("http://localhost:4000/api/v1/review/getUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });
      console.log("-->")
      const data = await response.json();
      console.log("-->",data)
      if (data.success) {
        setUserNames((prev) => ({ ...prev, [userId]: data.user.name }));
        return data.user.name;
      } else {
        console.error("Failed to fetch user name:", data.message);
      }
    } 
    catch (error) {
      console.error("Error fetching user name:", error);
    }

    return "Unknnnown User"; // Fallback
  };

  const totalPages = Math.ceil(feedbacks.length / itemsPerPage);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused, totalPages]);

  const getCurrentPageItems = () => {
    const startIndex = currentPage * itemsPerPage;
    return feedbacks.slice(startIndex, startIndex + itemsPerPage);
  };

  const ReviewCard = ({ review }) => {
    const daysAgo = moment().diff(moment(review.createdAt), 'days');
    const [userName, setUserName] = useState("Loading...");

    useEffect(() => {
      if (typeof review.user === "object" && review.user._id) {
        fetchUserName(review.user._id).then((name) => setUserName(name));
      } else {
        setUserName("Unknown User");
      }
    }, [review.user]);

    return (
      <div className="bg-zinc-800 rounded-xl shadow-2xl p-8 flex flex-col h-full border border-zinc-700 
                      hover:border-zinc-500 transition-all duration-300 ease-in-out transform 
                      hover:-translate-y-2 hover:shadow-xl
                      group relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-700/30 to-zinc-900/30 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`w-6 h-6 transform transition-transform duration-300 group-hover:scale-110 ${
                index < review.rating
                  ? 'text-yellow-400 fill-yellow-400'
                  : 'text-zinc-600'
              }`}
            />
          ))}
        </div>
        
        <p className="text-zinc-300 text-base mb-6 flex-grow italic leading-relaxed">
          "{review.review}"
        </p>
        
        <div className="mt-auto border-t border-zinc-700 pt-4">
          <h3 className="font-semibold text-base text-zinc-200 mb-1">
            {userName}
          </h3>
          <p className="text-zinc-400 text-sm">
            {daysAgo} {daysAgo === 1 ? 'day' : 'days'} ago
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full p-8 bg-zinc-900 min-h-[400px] 
                    shadow-2xl border border-zinc-800">
      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={`grid gap-6 transition-all duration-300 ease-in-out
                        lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1
                        ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
          {getCurrentPageItems().map((feedback) => (
            <ReviewCard key={feedback._id} review={feedback} />
          ))}
        </div>

        <div className="flex justify-center mt-10 gap-4">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125
                           ${currentPage === index 
                             ? 'bg-blue-500 hover:bg-blue-400' 
                             : 'bg-zinc-600 hover:bg-zinc-500'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackSlider;

