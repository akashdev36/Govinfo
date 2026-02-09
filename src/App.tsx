import { getCmsData, type CmsData } from './cms-utils'
import { CmsElement } from './components/CmsElement'
import initialCmsData from '../public/ezui.json'
import { useLanguage } from './contexts/LanguageContext'

function App() {
  const cmsData = initialCmsData as CmsData;
  const { language, setLanguage } = useLanguage();

  const e = (id: string) => getCmsData(cmsData, id);

  return (
    <CmsElement data={e('Main-Container')} tag="main">
      <CmsElement data={e('Global-Styles')} tag="div" />
      
      {/* Top Accessibility Bar */}
      <CmsElement data={e('Top-Accessibility-Bar')} tag="div">
        <CmsElement data={e('Accessibility-Left')} tag="span" />
        <CmsElement data={e('Accessibility-Right')} tag="div">
          <CmsElement data={e('Lang-Label')} tag="span" />
          <CmsElement 
            data={e('Lang-Select')} 
            tag="select"
            value={language}
            onChange={(evt) => setLanguage(evt.target.value as 'en' | 'hi' | 'ta')}
          >
            <option value="en">English</option>
            <option value="hi">हिंदी</option>
            <option value="ta">தமிழ்</option>
          </CmsElement>
        </CmsElement>
      </CmsElement>

      {/* Main Branding Header */}
      <CmsElement data={e('Main-Header')} tag="header">
        <CmsElement data={e('Logo-Container')} tag="div">
          <CmsElement data={e('Emblem')} tag="div" />
          <CmsElement data={e('Title-Group')} tag="div">
            <CmsElement data={e('Site-Title')} tag="h1" />
            <CmsElement data={e('Site-Tagline')} tag="p" />
          </CmsElement>
        </CmsElement>
        <CmsElement data={e('Header-Right')} tag="div">
           <CmsElement data={e('Digital-India-Logo')} tag="div" />
        </CmsElement>
      </CmsElement>

      {/* Institutional Navigation */}
      <CmsElement data={e('Main-Navigation')} tag="nav">
        <CmsElement data={e('Nav-Container')} tag="div">
          <CmsElement data={e('Nav-Item-1')} tag="a" />
          <CmsElement data={e('Nav-Item-2')} tag="a" />
          <CmsElement data={e('Nav-Item-3')} tag="a" />
          <CmsElement data={e('Nav-Item-4')} tag="a" />
        </CmsElement>
      </CmsElement>

      {/* Hero Section */}
      <CmsElement data={e('Hero-Section')} tag="section">
        <CmsElement data={e('Featured-Banner')} tag="div">
          <CmsElement data={e('Banner-Tag')} tag="span" />
          <CmsElement data={e('Banner-Title')} tag="h2" />
          <CmsElement data={e('Banner-Desc')} tag="p" />
          <CmsElement data={e('Banner-Button')} tag="button" />
        </CmsElement>
        
        <CmsElement data={e('Search-Service-Panel')} tag="div">
           <CmsElement data={e('Panel-Header')} tag="div" />
           <CmsElement data={e('Panel-Body')} tag="div">
              <CmsElement data={e('Search-Label')} tag="label" />
              <CmsElement data={e('Search-Input')} tag="input" />
              <CmsElement data={e('Search-Button')} tag="button" />
           </CmsElement>
        </CmsElement>
      </CmsElement>

      {/* Animated Stats Bar */}
      <CmsElement data={e('Stats-Bar')} tag="div">
        {[1, 2, 3].map((num) => (
          <CmsElement key={num} data={e('Stat-Item')} tag="div">
            <CmsElement data={e(`Stat-Number-${num}`)} tag="span" />
            <CmsElement data={e(`Stat-Label-${num}`)} tag="span" />
          </CmsElement>
        ))}
      </CmsElement>

      {/* Online Citizen Services Grid */}
      <CmsElement data={e('Service-Categories')} tag="section">
         <CmsElement data={e('Section-Header-Bar')} tag="div">
            <CmsElement data={e('Section-Title')} tag="h2" />
            <CmsElement data={e('Section-Header-Accent')} tag="div" />
            <CmsElement data={e('View-All-Link')} tag="a" />
         </CmsElement>
         
         <CmsElement data={e('Service-Grid')} tag="div">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <CmsElement key={num} data={e(`Service-Card-${num}`)} tag="div">
                <CmsElement data={e(`Service-Icon-${num}`)} tag="div" />
                <CmsElement data={e(`Service-Name-${num}`)} tag="h3" />
                <CmsElement data={e(`Service-Desc-${num}`)} tag="p" />
              </CmsElement>
            ))}
         </CmsElement>
      </CmsElement>

      {/* News & Media Section */}
      <CmsElement data={e('News-Section')} tag="section">
         <CmsElement data={e('News-Title')} tag="h2" />
         <CmsElement data={e('News-Grid')} tag="div">
            {[1, 2, 3].map((i) => (
              <CmsElement key={i} data={e(`News-Card-${i}`)} tag="div">
                 <CmsElement data={e(`News-Image-${i}`)} tag="div" />
                 <CmsElement data={e(`News-Content-${i}`)} tag="div">
                    <CmsElement data={e(`News-Date-${i}`)} tag="span" />
                    <CmsElement data={e(`News-Headline-${i}`)} tag="h3" />
                 </CmsElement>
              </CmsElement>
            ))}
         </CmsElement>
      </CmsElement>

      {/* National Progress Gallery Section */}
      <CmsElement data={e('Media-Gallery-Section')} tag="section">
         <CmsElement data={e('Gallery-Header-Bar')} tag="div">
            <CmsElement data={e('Gallery-Section-Header')} tag="h2" />
            <CmsElement data={e('Gallery-Section-Desc')} tag="p" />
            <CmsElement data={e('Section-Header-Accent')} tag="div" />
         </CmsElement>
         
         <CmsElement data={e('Gallery-Grid')} tag="div">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
              const galleryItemData = e(`Gallery-Image-${i}`);
              const captionBase = e('Gallery-Caption-Base');
              
              return (
                <CmsElement key={i} data={e('Gallery-Item-Wrapper')} tag="div">
                  <CmsElement 
                    data={{
                      ...galleryItemData,
                      content: {} 
                    }} 
                    tag="div" 
                  />
                  <CmsElement 
                    data={{
                      ...captionBase,
                      content: galleryItemData.content
                    }} 
                    tag="span" 
                  />
                </CmsElement>
              );
            })}
         </CmsElement>
      </CmsElement>

      {/* Final Official Footer */}
      <CmsElement data={e('Main-Footer')} tag="footer">
        <CmsElement data={e('Footer-Grid')} tag="div">
           <CmsElement data={e('Footer-Brand')} tag="div">
              <CmsElement data={e('Footer-Logo-Text')} tag="h3" />
              <CmsElement data={e('Footer-Bottom-Brand')} tag="p" />
           </CmsElement>
           
           {[1, 2, 3].map(col => (
             <CmsElement key={col} data={e('Footer-Column')} tag="div">
                <CmsElement data={e(`Footer-Col-Title-${col}`)} tag="h4" />
                <CmsElement data={e(`Footer-Link-${col}-1`)} tag="a" />
                <CmsElement data={e(`Footer-Link-${col}-2`)} tag="a" />
                <CmsElement data={e(`Footer-Link-${col}-3`)} tag="a" />
                <CmsElement data={e(`Footer-Link-${col}-4`)} tag="a" />
             </CmsElement>
           ))}
        </CmsElement>
        <CmsElement data={e('Footer-Bottom')} tag="div" />
      </CmsElement>

    </CmsElement>
  )
}

export default App
