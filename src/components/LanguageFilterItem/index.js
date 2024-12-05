import './index.css'

const LanguageFilterItem = props => {
  const {languageDetails, updateActiveLanguageId, isActive} = props
  const {id, language} = languageDetails
  const btnClassName = isActive
    ? 'language-btn active-language-btn'
    : 'language-btn'

  const onClickLanguage = () => {
    updateActiveLanguageId(id)
  }

  return (
    <li>
      <button type="button" onClick={onClickLanguage} className={btnClassName}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
