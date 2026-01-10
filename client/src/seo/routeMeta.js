const SITE = 'https://finalgradecalculation.com';

export const routeMeta = {
  '/': {
    title: 'Final Grade Calculator & Class Planner (Free) | FinalGradeCalculation.com',
    description:
      'Free final grade calculator and class planner. Instantly see what score you need on your final exam and plan weighted categories like homework, quizzes, midterms, and finals.',
    canonical: `${SITE}/`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Final Grade Calculator & Class Planner',
      url: `${SITE}/`,
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
    }
  },

  '/tools': {
    title: 'Grade Tools Hub — Final, Pass, Drop Lowest, Weighted (Free)',
    description:
      'All free grade tools in one place: final grade calculator, what score you need, drop-lowest optimizer, weighted grades, and class planner.',
    canonical: `${SITE}/tools`
  },

  '/final-grade-calculator': {
    title: 'Final Grade Calculator — What Score Do I Need on My Final? (Free)',
    description:
      'Use this free final grade calculator to instantly compute what score you need on your final exam to reach your target course grade. Works with weighted finals.',
    canonical: `${SITE}/final-grade-calculator`,
    schema: webAppSchema('Final Grade Calculator', `${SITE}/final-grade-calculator`)
  },

  '/what-do-i-need-on-my-final': {
    title: 'What Do I Need on My Final? Calculator (Free)',
    description:
      'Calculate exactly what you need on your final exam to hit an A, B, C, or passing grade based on your current score and final exam weight.',
    canonical: `${SITE}/what-do-i-need-on-my-final`,
    schema: webAppSchema('What Do I Need on My Final?', `${SITE}/what-do-i-need-on-my-final`)
  },

  '/weighted-grade-calculator': {
    title: 'Weighted Grade Calculator — Categories & Syllabus Weights (Free)',
    description:
      'Use a weighted grade calculator to match your syllabus categories (homework, quizzes, labs, midterms, final). See your current grade and what you need next.',
    canonical: `${SITE}/weighted-grade-calculator`,
    schema: webAppSchema('Weighted Grade Calculator', `${SITE}/weighted-grade-calculator`)
  },

  '/grade-planner': {
    title: 'Class Grade Planner — Track Assignments & Categories (Free)',
    description:
      'Plan your class like a syllabus: add weighted categories, enter assignment scores, optionally drop the lowest score, and keep a real-time grade all semester.',
    canonical: `${SITE}/grade-planner`,
    schema: webAppSchema('Class Grade Planner', `${SITE}/grade-planner`)
  },

  '/what-score-do-i-need-on-my-final-exam': {
    title: 'What Score Do I Need on My Final Exam? (Free Calculator)',
    description:
      'Enter your current grade, your final’s weight, and your target grade to calculate the exact final exam score you need. Includes edge cases and “impossible” detection.',
    canonical: `${SITE}/what-score-do-i-need-on-my-final-exam`,
    schema: webAppSchema('Final Exam Score Needed Calculator', `${SITE}/what-score-do-i-need-on-my-final-exam`)
  },

  '/can-i-still-pass-this-class': {
    title: 'Can I Still Pass This Class? (Free Pass Calculator)',
    description:
      'Find out if it’s still mathematically possible to pass based on your current grade, passing threshold, and remaining weight. Get a clear yes/no with required score.',
    canonical: `${SITE}/can-i-still-pass-this-class`,
    schema: webAppSchema('Can I Still Pass? Calculator', `${SITE}/can-i-still-pass-this-class`)
  },

  '/drop-lowest-grade-calculator': {
    title: 'Drop Lowest Grade Calculator (Free Optimizer)',
    description:
      'If your class drops the lowest quiz/homework score, this tool finds the best score to drop and shows the grade impact automatically.',
    canonical: `${SITE}/drop-lowest-grade-calculator`,
    schema: webAppSchema('Drop Lowest Grade Optimizer', `${SITE}/drop-lowest-grade-calculator`)
  },

  '/final-exam-worth-40-percent': {
    title: 'Final Exam Worth 40%? What Do I Need on the Final (Calculator)',
    description:
      'If your final exam is worth 40% of your grade, calculate exactly what score you need to hit your target. Works for other weights too.',
    canonical: `${SITE}/final-exam-worth-40-percent`,
    schema: webAppSchema('Final Worth 40% Calculator', `${SITE}/final-exam-worth-40-percent`)
  },

  '/faq': {
    title: 'Final Grade Calculator FAQ — Weighted Finals, Targets, Drop Lowest',
    description:
      'Answers to common questions about calculating final exam scores, weighted grading, dropping the lowest score, and planning your grade throughout the term.',
    canonical: `${SITE}/faq`,
    schema: faqSchema(`${SITE}/faq`)
  },

  '/privacy-policy': {
    title: 'Privacy Policy | FinalGradeCalculation.com',
    description: 'Privacy policy for FinalGradeCalculation.com — what we collect, what we don’t, and how we protect users.',
    canonical: `${SITE}/privacy-policy`
  },

  '/terms': {
    title: 'Terms of Use | FinalGradeCalculation.com',
    description: 'Terms of use for FinalGradeCalculation.com — educational use, accuracy notes, and limitations.',
    canonical: `${SITE}/terms`
  },

  '/contact': {
    title: 'Contact | FinalGradeCalculation.com',
    description: 'Contact FinalGradeCalculation.com for feedback, bug reports, and feature requests.',
    canonical: `${SITE}/contact`
  }
};

export function getMeta(pathname) {
  const cleaned = pathname.replace(/\/+$/, '') || '/';
  return (
    routeMeta[cleaned] || {
      title: 'FinalGradeCalculation.com',
      description: 'Free grade calculators and tools.',
      canonical: `${SITE}${cleaned === '/' ? '' : cleaned}`
    }
  );
}

function webAppSchema(name, url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    url,
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
  };
}

function faqSchema(url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      q('Is this final grade calculator free?', 'Yes — the calculator and planner are free to use.'),
      q('Does it work with weighted finals and categories?', 'Yes. Use the quick calculator for final weight, or the class planner for full syllabus category weights.'),
      q('Can I drop the lowest quiz or homework score?', 'Yes. Use the “drop lowest” tool or enable “drop lowest” in the category settings inside the planner.'),
      q('Why does my teacher’s grade differ slightly?', 'Teachers may round differently, drop certain scores, or weight categories slightly differently. Match your syllabus and rounding rules for best accuracy.')
    ],
    url
  };
}

function q(name, acceptedAnswerText) {
  return {
    '@type': 'Question',
    name,
    acceptedAnswer: { '@type': 'Answer', text: acceptedAnswerText }
  };
}
