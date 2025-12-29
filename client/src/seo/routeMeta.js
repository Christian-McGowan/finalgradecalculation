const SITE = 'https://finalgradecalculation.com';

export const routeMeta = {
  '/': {
    title: 'Final Grade Calculator & Class Planner (Free) | FinalGradeCalculation.com',
    description:
      'Free final grade calculator and class planner. Instantly see what score you need on your final exam and track quizzes, homework, midterms, and weighted categories.',
    canonical: `${SITE}/`
  },
  '/final-grade-calculator': {
    title: 'Final Grade Calculator — What Score Do I Need on My Final? (Free)',
    description:
      'Use this free final grade calculator to see what you need on your final exam to hit your target course grade. Works with weighted finals.',
    canonical: `${SITE}/final-grade-calculator`
  },
  '/what-do-i-need-on-my-final': {
    title: 'What Do I Need on My Final? Calculator + Examples (Free)',
    description:
      'Enter your current grade, final exam weight, and target grade to instantly see the score you need on your final. Includes examples and tips.',
    canonical: `${SITE}/what-do-i-need-on-my-final`
  },
  '/weighted-grade-calculator': {
    title: 'Weighted Grade Calculator — Understand Categories & Weights (Free)',
    description:
      'Learn how weighted grades work and calculate your course grade with categories like homework, quizzes, midterms, and finals.',
    canonical: `${SITE}/weighted-grade-calculator`
  },
  '/grade-planner': {
    title: 'Class Grade Planner — Track Assignments & Categories (Free)',
    description:
      'Plan your class grade like a syllabus: add categories, weights, and assignment scores to keep a real-time grade throughout the term.',
    canonical: `${SITE}/grade-planner`
  },
  '/faq': {
    title: 'Final Grade Calculator FAQ — Weighted Finals, Targets, and More',
    description:
      'Answers to common questions about calculating final exam scores, weighted grading, grade planning, and accuracy.',
    canonical: `${SITE}/faq`
  },
  '/privacy-policy': {
    title: 'Privacy Policy | FinalGradeCalculation.com',
    description:
      'Privacy policy describing what data we collect, cookies, analytics, and advertising practices.',
    canonical: `${SITE}/privacy-policy`
  },
  '/terms': {
    title: 'Terms of Service | FinalGradeCalculation.com',
    description:
      'Terms of service and acceptable use for FinalGradeCalculation.com.',
    canonical: `${SITE}/terms`
  },
  '/contact': {
    title: 'Contact | FinalGradeCalculation.com',
    description:
      'How to contact FinalGradeCalculation.com for feedback, bug reports, or questions.',
    canonical: `${SITE}/contact`
  }
};

export function getMeta(pathname) {
  return routeMeta[pathname] || routeMeta['/'];
}
