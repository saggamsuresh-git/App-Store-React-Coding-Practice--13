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

const TabItem = props => {
  const {details, changeCategory, isSelect} = props
  const {tabId, displayText} = details
  const selectClassName = isSelect ? 'selectedTabButton' : ''
  const onChangeCategory = () => {
    changeCategory(tabId)
  }
  return (
    <li>
      <button
        className={`button ${selectClassName}`}
        type="button"
        onClick={onChangeCategory}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
