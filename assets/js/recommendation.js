AOS.init();

// Recommendations Data
const recommendations = [
  {
    name: "Jingyu Ma",
    title: "Principal Software Engineer at Microsoft",
    linkedin: "https://www.linkedin.com/in/jingyu-ma-87253324/",
    avatar: "assets/images/jingyu.jpg",
    content: "Dave interned with our team to enhance the foundational testing for Azure infrastructure services. Not only did Dave complete this task ahead of schedule, but Dave also completed the stretch goal that has greatly benefited the entire Azure infrastructure team. Beyond the technical skills, Dave demonstrated exceptional cross-team communication and collaboration, effectively coordinating with various teams to achieve the objectives. Thank you Dave for your outstanding contributions!"
  },
  {
    name: "Bryan Du",
    title: "CDO & Division Director at SotaTek - Global Blockchain and Software Development Corporation",
    linkedin: "https://www.linkedin.com/in/bryan-du-6aab2715a/",
    avatar: "assets/images/bryan.jpg",
    content: "I just got news from Duy that Duy will intern at Amazon during the summer and also have many offers from other companies. Though I’m quite sad that Duy will not come back to work with me in the near future, but very happy for him because he found a good company that suits his passion and ability. I still remembered that I personally interviewed Duy and was amazed at his deep and strong knowledge of low-level Programming and Data Structures. That’s why I immediately hired him to work on the core development for our blockchain projects, although he applied for the back-end position. Duy is a quick learner and didn’t hesitate to learn new things. Duy was able to grasp the knowledge quickly and was able to deliver results to the team. Although the task is quite hard for who hasn’t had experience in blockchain before, I believe his experience with C++ helps him a lot in his first project. On his second project, I assigned him to make a decentralized exchange (DEX) trading platform project. In this project, he showed his ability to acquire knowledge quickly by understanding the flow of the whole project and his networking skills to connect with other colleagues. He outperformed other interns in this project by showing an enthusiastic attitude toward the project and trading knowledge. I believed Duy has great potential to succeed because of his goal and determination."
  }
];

// Display Recommendations
const showRecommendations = () => {
  const container = document.querySelector(".recommendation-cards");
  if (!container) return;
  
  let output = "";
  recommendations.forEach((rec, index) => {
    output += `
      <div class="recommendation-card" data-aos="fade-up" data-aos-delay="${index * 200}">
        <div class="recommender-profile">
          <img src="${rec.avatar}" alt="${rec.name}" class="recommender-avatar" onerror="this.src='assets/images/ava.jpg'">
          <div class="recommender-info">
            <div class="recommender-name">${rec.name}</div>
            <div class="recommender-title">${rec.title}</div>
            <a href="${rec.linkedin}" target="_blank" rel="noopener noreferrer" class="linkedin-link">
              <i class="fab fa-linkedin"></i> LinkedIn Profile
            </a>
          </div>
        </div>
        <div class="recommendation-content">
          ${rec.content}
        </div>
      </div>
    `;
  });
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showRecommendations);

