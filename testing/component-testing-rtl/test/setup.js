// Making these no-ops so that the codesandbox browser window doesn't error
window.test = () => {};
window.expect = () => {};

import '@testing-library/jest-dom/extend-expect';
