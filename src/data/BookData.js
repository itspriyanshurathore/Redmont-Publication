const booksData = [
  {
    id: 1,
    title: "Machine Learning and Data Analytics: Concepts and Applications",
    author: "Dr. Alok Verma",
    year: 2025,
    month: "January",
    price: 899,
    rating: 4.9,
    isbn: "978-93-00000-001",
    image: "/images/Book-1.png",
    backImage: "/images/Book-1.png",
    pdf: "/pdf/book-1.pdf",
    about:
      "This book explores the foundations of machine learning, data analytics techniques, predictive modeling, artificial intelligence applications, and data-driven decision-making in modern industries.",
    authorImage: "/images/authors/alok-verma.jpg",
    authorAbout:
      "Dr. Alok Verma is a researcher and academic specializing in artificial intelligence, machine learning, and data science applications.",
  },

  {
    id: 2,
    title: "Environmental Management for Sustainable Development",
    author: "Er. Swati Mishra",
    year: 2025,
    month: "February",
    price: 799,
    rating: 4.8,
    isbn: "978-93-00000-002",
    image: "/images/Book-2.png",
    backImage: "/images/Book-2.png",
    pdf: "/pdf/book-2.pdf",
    about:
      "A comprehensive guide to environmental management practices, sustainability principles, climate change mitigation strategies, and responsible resource utilization.",
    authorImage: "/images/authors/swati-mishra.jpg",
    authorAbout:
      "Er. Swati Mishra is an environmental engineer with expertise in sustainability, environmental planning, and green development initiatives.",
  },

  {
    id: 3,
    title: "Advances in Civil Engineering and Infrastructure Development",
    author: "Anjali Srivastava",
    year: 2025,
    month: "March",
    price: 849,
    rating: 4.7,
    isbn: "978-93-00000-003",
    image: "/images/Book-3.png",
    backImage: "/images/Book-3.png",
    pdf: "/pdf/book-3.pdf",
    about:
      "This book discusses innovative technologies, sustainable construction practices, transportation systems, and infrastructure development for modern societies.",
    authorImage: "/images/authors/anjali-srivastava.jpg",
    authorAbout:
      "Anjali Srivastava is a civil engineering professional focusing on smart infrastructure, urban planning, and sustainable construction practices.",
  },

  {
    id: 4,
    title: "Contemporary Legal Issues in the Digital Age",
    author: "Dr. Deepak Pandey",
    year: 2025,
    month: "April",
    price: 749,
    rating: 4.8,
    isbn: "978-93-00000-004",
    image: "/images/Book-4.png",
    backImage: "/images/Book-4.png",
    pdf: "/pdf/book-4.pdf",
    about:
      "An analysis of emerging legal challenges related to technology, cyber law, data privacy, digital governance, and artificial intelligence.",
    authorImage: "/images/authors/deepak-pandey.jpg",
    authorAbout:
      "Dr. Deepak Pandey is a legal scholar specializing in cyber law, digital rights, technology governance, and contemporary legal frameworks.",
  },

  {
    id: 5,
    title: "Interdisciplinary Research for Sustainable Development",
    author: "Dr. Rishabh Bansal",
    year: 2025,
    month: "May",
    price: 699,
    rating: 4.6,
    isbn: "978-93-00000-005",
    image: "/images/Book-5.png",
    backImage: "/images/Book-5.png",
    pdf: "/pdf/book-5.pdf",
    about:
      "This volume highlights multidisciplinary approaches to sustainable development, integrating environmental, social, economic, and technological perspectives.",
    authorImage: "/images/authors/rishabh-bansal.jpg",
    authorAbout:
      "Dr. Rishabh Bansal is a multidisciplinary researcher working on sustainability, policy development, and collaborative research initiatives.",
  },

  {
    id: 6,
    title: "Advances in Clinical Medicine and Patient Care",
    author: "Dr. Shweta Pannuji",
    year: 2025,
    month: "June",
    price: 999,
    rating: 4.9,
    isbn: "978-93-00000-006",
    image: "/images/Book-6.png",
    backImage: "/images/Book-6.png",
    pdf: "/pdf/book-6.pdf",
    about:
      "A detailed exploration of clinical medicine, healthcare innovation, patient-centered care, diagnostic advancements, and medical research.",
    authorImage: "/images/authors/shweta-pannuji.jpg",
    authorAbout:
      "Dr. Shweta Pannuji is a healthcare researcher and clinician specializing in evidence-based medicine and patient care improvement.",
  },

  {
    id: 7,
    title: "Telemedicine and Digital Health Innovations",
    author: "Arvind Shisodiya",
    year: 2025,
    month: "July",
    price: 899,
    rating: 4.8,
    isbn: "978-93-00000-007",
    image: "/images/Book-7.png",
    backImage: "/images/Book-7.png",
    pdf: "/pdf/book-7.pdf",
    about:
      "This book examines digital healthcare systems, telemedicine platforms, AI-powered healthcare solutions, and future healthcare technologies.",
    authorImage: "/images/authors/arvind-shisodiya.jpg",
    authorAbout:
      "Arvind Shisodiya is a digital health specialist focusing on healthcare technology, telemedicine systems, and healthcare innovation.",
  },

  {
    id: 8,
    title: "Ancient Civilizations: Society, Culture and Governance",
    author: "Dr. Anjana Pandey",
    year: 2025,
    month: "August",
    price: 799,
    rating: 4.7,
    isbn: "978-93-00000-008",
    image: "/images/Book-8.png",
    backImage: "/images/Book-8.png",
    pdf: "/pdf/book-8.pdf",
    about:
      "An exploration of ancient civilizations, governance systems, cultural evolution, social institutions, and historical development across societies.",
    authorImage: "/images/authors/anjana-pandey.jpg",
    authorAbout:
      "Dr. Anjana Pandey is a historian and researcher specializing in ancient societies, governance systems, and cultural heritage studies.",
  },

  {
    id: 9,
    title: "Historical Research Methods and Historiography",
    author: "Shubham Kumar Patel",
    year: 2025,
    month: "September",
    price: 749,
    rating: 4.6,
    isbn: "978-93-00000-009",
    image: "/images/Book-9.png",
    backImage: "/images/Book-9.png",
    pdf: "/pdf/book-9.pdf",
    about:
      "A scholarly work covering historical research methodologies, source analysis, historiography, interpretation of evidence, and academic writing.",
    authorImage: "/images/authors/shubham-patel.jpg",
    authorAbout:
      "Shubham Kumar Patel is a researcher in historical studies with interests in historiography, archival research, and historical methodology.",
  },

  {
    id: 10,
    title: "Psychological Well-Being in Contemporary Society",
    author: "Abhishek Raj",
    year: 2025,
    month: "October",
    price: 699,
    rating: 4.7,
    isbn: "978-93-00000-010",
    image: "/images/Book-10.png",
    backImage: "/images/Book-10.png",
    pdf: "/pdf/book-10.pdf",
    about:
      "This book examines mental health, emotional well-being, psychological resilience, social influences, and modern approaches to mental wellness.",
    authorImage: "/images/authors/abhishek-raj.jpg",
    authorAbout:
      "Abhishek Raj is a psychology researcher focusing on mental health awareness, behavioral sciences, and psychological well-being.",
  },
];

export default booksData;