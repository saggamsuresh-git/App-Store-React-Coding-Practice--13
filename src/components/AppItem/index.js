// Write your code here
// const tabsList = [
//   {tabId: 'SOCIAL', displayText: 'Social'},
//   {tabId: 'GAMES', displayText: 'Games'},
//   {tabId: 'NEWS', displayText: 'News'},
//   {tabId: 'FOOD', displayText: 'Food'},
// ]

// const appsList = [
//   {
//     appId: 0,
//     appName: 'Facebook',
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/app-store/social-facebook.png',
//     category: 'SOCIAL',
//   },
// ]
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails
  return (
    <li className="app-image-name-container">
      <img alt={appName} src={imageUrl} className="app-image" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
