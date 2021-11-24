// If you need to add more setup options before each test, it's common to add them to the jest.setup.js file

import "@testing-library/jest-dom/extend-expect";

//// advice from: https://github.com/vercel/next.js/issues/26749
// jest.mock('next/image', () => ({
//     __esModule: true,
//     default: () => {
//       return 'Next image stub'; // whatever
//     },
//   }));
