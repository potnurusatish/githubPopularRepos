import './index.css'

const LanguageFilterItem = props => {
  const {languageDetails, updateActiveLanguageId} = props
  const {id, language} = languageDetails

  const onClickLanguage = () => {
    updateActiveLanguageId(id)
  }

  return (
    <li>
      <button type="button" onClick={onClickLanguage}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
