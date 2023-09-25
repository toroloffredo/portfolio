import Navbar from "../component/navbar"

/*
Things to add. Try to have at least 3 examples/sections:
- Add the magazine style big letter at the start of the paragraph.
- Add some sections were you explain what techniques are being used.
- Each section should be in a different background color, like the React website.

*/

function TypographyPage() {
  return ( 
  <>
    <Navbar />
    <h1 className="typography-page-font">Typography Page</h1>
    <p className="typography-page-font ">This page is a continuous exploration of typography applied to the web. </p>

    <div className="typography-label">

        <header>
            <h1 className="typography-bold">Nutrition Facts</h1>
            <div className="typography-divider"></div>
            <p className="typography-p-default">8 servings per container</p>
            <p className="typography-bold">Serving size <span>2/3 cup (55g)</span></p>
        </header>

        <div className="typography-divider typography-large"></div>
        
        <div className="typography-calories-info">
            <div className="typography-left-container">
                <h2 className="typography-bold typography-small-text">Amount per serving</h2>
                <p className="typography-p-default">Calories</p>
            </div>
            <span>230</span>
        </div>

        <div className="typography-divider typography-medium"></div>

        <div className="typography-daily-value typography-small-text">
            <p className="typography-bold right typography-no-divider typography-p-default">% Daily Value *</p>
            
            <div className="typography-divider"></div>
            <p className="typography-p-default"><span><span className="typography-bold">Total Fat</span> 8g</span> <span className="bold">10%</span></p>
            <p className="typography-indent typography-no-divider typography-p-default">Saturated Fat 1g <span className="bold">5%</span></p>
            <div className="typography-divider"></div>
            <p className="typography-indent typography-no-divider typography-p-default"><span><i>Trans</i> Fat 0g</span></p>
           
           <div className="typography-divider"></div>
            <p className="typography-p-default"><span><span className="typography-bold">Cholesterol</span> 0mg</span> <span className="Typography-bold">0%</span></p>
            <p className="typography-p-default"><span><span className="typography-bold">Sodium</span> 160mg</span> <span className="Typography-bold">7%</span></p>
            <p className="typography-p-default"><span><span className="typography-bold">Total Carbohydrate</span> 37g</span> <span className="Typography-bold">13%</span></p>
            <p className="typography-indent typography-no-divider typography-p-default">Dietary Fiber 4g</p>
            
            <div className="typography-divider"></div>
            <p className="typography-indent typography-no-divider typography-p-default">Total Sugars 12g</p>
            
            <div className="typography-divider typography-double-indent"></div>
            <p className="typography-double-indent typography-no-divider typography-p-default">Includes 10g Added Sugars <span className="Typography-bold">20%</span></p>
            
            <div className="typography-divider"></div>
            <p className="typography-no-divider typography-p-default"><span className="typography-bold">Protein</span> 3g</p>
            
            <div className="typography-divider typography-large"></div>
            <p className="typography-p-default">Vitamin D 2mcg <span>10%</span></p>
            <p className="typography-p-default">Calcium 260mg <span>20%</span></p>
            <p className="typography-p-default">Iron 8mg <span>45%</span></p>
            <p className="typography-no-divider">Potassium 235mg <span>6%</span></p>
        </div>
        
        <div className="typography-divider medium"></div>
        <p className="typography-note">* The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a
            daily
            diet. 2,000 calories a day is used for general nutrition advice.</p>
    </div>
  </>
  )
}

export default TypographyPage