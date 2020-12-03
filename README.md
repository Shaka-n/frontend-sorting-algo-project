This is a sorting algorithm visualizer that demonstrates what is happening as an algorithm steps through an unsorted array of integers. The core mechanic that enables the "animation" exploits the render cycle of React class components and JavaScript async functionality. It works by updating state on each discrete step of the chosen algorithm, and then suspending the function with a sleep timer. When the sleep timer expires, React notes that state has changed and triggers a re-render. Since the DOM elements representing the items in the array are arranged based on their position in an array in state, the DOM is rearranged on each re-render according to the result of the given step of the algorithm. This method of animation is limited by the refresh rate of the browser, which is around 20 hertz  or 16 frames per second. However, since we are concerned with slowing things down to see how they work, we don't have to worry about this. I would describe this as more of an exploit than a intended feature, but it is fun to watch. More advanced algorithms would be difficult to demonstrate with this specific implementation, but the core idea of sleeping on each loop would likely translate to most sorting algorithms.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
