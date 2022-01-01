import {ColorPicker, Heading, Page, Card, Layout, Button, ButtonGroup, Tabs, ChoiceList, TextField, Select} from '@shopify/polaris';
import React, {useCallback, useState} from 'react';
import { ChromePicker } from 'react-color';
import CreateCountdownLO1 from './CreateCountdownLO1';
import CreateCountdownLO2 from './CreateCountdownLO2';
import CreateCountdownLO3 from './CreateCountdownLO3';
import CreateCountdownLO4 from './CreateCountdownLO4';

function CreateCountdownTimer () {
  // Executing The Tabs
  const [selected, setSelected] = useState(0);
  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    [],
  );
  const tabs = [
    {
      id: 'all-customers-fitted-2',
      content: 'Settings',
      accessibilityLabel: 'Settings',
      panelID: 'timer-settings',
    },
    {
      id: 'accepts-marketing-fitted-2',
      content: 'Designs',
      panelID: 'design-the-app-look',
    },
  ];

  // Executing The Choicelist 
  const [choiceSelected, setChoiceSelected] = useState(['hidden']);
  const handleSettingsRadio = useCallback((value) => setChoiceSelected(value), []);

  // Executing The Textfield
  const [textValue, textSetValue] = useState('timer-name');
  const handleSettingsName = useCallback((value) => textSetValue(value), []);

  /* Design Tab Codes */
  // Design Tab Message 
  const [designMsg, setdesignMsg] = useState(['Sale Ends Soon! 50% Off Everything!']);
  const handleDesignMsg = useCallback((value) => setdesignMsg(value), []);
  // Design Tab Btn Label 
  const [designBtnLabel, setdesignBtnLabel] = useState(['Shop Now!']);
  const handleDesignBtnLabel = useCallback((value) => setdesignBtnLabel(value), []);
  // Design Tab Btn Link
  const [designBtnLink, setdesignBtnLink] = useState(['https://www.we-nexus.com']);
  const handleDesignBtnLink = useCallback((value) => setdesignBtnLink(value), []);
  // Design Tab Day/Hrs/Min/Sec
  const [designDay, setdesignDay] = useState(['Day']);
  const handleDesignDay = useCallback((value) => setdesignDay(value), []);
  const [designHrs, setdesignHrs] = useState(['Hrs']);
  const handleDesignHrs = useCallback((value) => setdesignHrs(value), []);
  const [designMin, setdesignMin] = useState(['Min']);
  const handleDesignMin = useCallback((value) => setdesignMin(value), []);
  const [designSec, setdesignSec] = useState(['Sec']);
  const handleDesignSec = useCallback((value) => setdesignSec(value), []);  
  // Design Tab Filter
  const [designSelect, setDesignSelect] = useState('layout1');
  const handleDesignSelect = useCallback((value) => setDesignSelect(value), []);
  const designSelectOptions = [
    {label: 'Layout One', value: 'layout1'},
    {label: 'Layout Two', value: 'layout2'},
    {label: 'Layout Three', value: 'layout3'},
    {label: 'Layout Four', value: 'layout4'},
  ];
  // Design Tab Display Position
  const [designDisplayPosition, setDesignDisplay] = useState('top');
  const handleDesignDisplay = useCallback((value) => setDesignDisplay(value), []);
  const designDisplayOptions = [
    {label: 'Top of the page', value: 'top'},
    {label: 'Bottom of the page', value: 'bottom'},
    {label: 'Below "Add to cart" button on product page', value: 'prod-atc'},
    {label: 'Custom Positioning', value: 'custom'},
  ];

// Design Tab BG Color
const [designBgColor, setDesignBgColor] = useState('#fff');
const [designBtnBgColor, setDesignBtnBgColor] = useState('#fff');
const [designTimerBgColor, setDesignTimerBgColor] = useState('#fff');
const [designTxtColor, setDesignTxtColor] = useState('#fff');
const [designBtnTxtColor, setDesignBtnTxtColor] = useState('#fff');
const [designTimerDigitColor, setDesignTimerDigitColor] = useState('#fff');

    /* Polaris Color Picker Importing
  **************************************************************
  // Design Tab BG Color
  const [designBgColor, setDesignBgColor] = useState({
    hue: 50,
    brightness: 1,
    saturation: 0.7,
    alpha: 1,
  });
  // Design Tab Btn BG Color
  const [designBtnBgColor, setDesignBtnBgColor] = useState({
    hue: 300,
    brightness: 1,
    saturation: 0.7,
    alpha: 0.7,
  });
  // Design Tab Timer BG Color
  const [designTimerBgColor, setDesignTimerBgColor] = useState({
    hue: 100,
    brightness: 1,
    saturation: 1,
    alpha: 0.7,
  });
  // Design Tab Btn BG Color
  const [designTxtColor, setDesignTxtColor] = useState({
    hue: 250,
    brightness: 0.7,
    saturation: 1,
    alpha: 1,
  });
  // Design Tab Btn Txt Color
  const [designBtnTxtColor, setDesignBtnTxtColor] = useState({
    hue: 150,
    brightness: 1,
    saturation: 0.7,
    alpha: 1,
  });
  // Design Tab Timer Digit Color
  const [designTimerDigitColor, setDesignTimerDigitColor] = useState({
    red: 200,
    green: 200,
    blue: 200,
    alpha: 1,
  });  */


  const countdownPreviewLayout = 
  (designSelect == 'layout1') ? <CreateCountdownLO1 msg={designMsg} btnLabel={designBtnLabel} btnUrl={designBtnLink} day={designDay} hrs={designHrs} min={designMin} sec={designSec} /> : (designSelect == 'layout2') ? <CreateCountdownLO2 msg={designMsg} btnLabel={designBtnLabel} btnUrl={designBtnLink} day={designDay} hrs={designHrs} min={designMin} sec={designSec} /> : (designSelect == 'layout3') ? <CreateCountdownLO3 msg={designMsg} btnLabel={designBtnLabel} btnUrl={designBtnLink} day={designDay} hrs={designHrs} min={designMin} sec={designSec} /> : <CreateCountdownLO4 msg={designMsg} btnLabel={designBtnLabel} btnUrl={designBtnLink} day={designDay} hrs={designHrs} min={designMin} sec={designSec} />


  /* Polaris Color Picker HSL -> RGB coversion useless algorithm
  **************************************************************
  let thebg = document.querySelector('#heheboi');
  // console.log(designBgColor.hue);
  if (thebg) {
    // console.log(thebg);
    // console.log("hue - " + designBgColor.hue);
    // console.log("saturation - " + designBgColor.saturation);
    // console.log("brightness - " + designBgColor.brightness);
    // console.log("---------------");
    // console.log("---------------");
    // thebg.style.backgroundColor = "rgb(" + hsl2rgb(Math.round(designBgColor.hue), Math.round(designBgColor.saturation), Math.round(designBgColor.brightness)) + ")";
  }

  function hsl2rgb(h,s,l) {
    let a=s*Math.min(l,1-l);
    let f= (n,k=(n+h/30)%12) => l - a*Math.max(Math.min(k-3,9-k,1),-1);
    return [f(0),f(8),f(4)];
  }
  let rgb = hsl2rgb(designBgColor.hue, designBgColor.saturation, designBgColor.brightness / 2);
  console.log("This is RGB -- " + rgb);
  console.log("hsl(" + designBgColor.hue + ", " + designBgColor.saturation.toFixed(2) + " -- " + designBgColor.brightness.toFixed(2) + ")");
  console.log("-=-=-=-")

  function refresh() {
    let rr = rgb.map(x=>x*255|0).join(', ');
    // let hh = rgb2hex(...rgb);

    console.log("From Inside of refresh: " + rgb[0]*255 + " " + rgb[1]*255 + " " + rgb[2]*255);
    if (thebg) {
      thebg.style.backgroundColor = `rgb(${Math.round(rgb[0]*255)}, ${Math.round(rgb[1]*255)}, ${Math.round(rgb[2]*255)})`;
    }
  }
  refresh();
*/

  const countdownSettings = (
    <div className='countdown-settingsTab'>
      <Layout.Section>
        <Card title="Type" sectioned>
          <ChoiceList
            choices={[
              {label: 'Countdown Timer', value: 'countdown-timer'},
              {label: 'Announcement Bar', value: 'announcement-bar'},
            ]}
            selected={choiceSelected}
            onChange={handleSettingsRadio}
          />
        </Card>
      </Layout.Section>
      <Layout.Section>
        <Card title="Timer internal name" sectioned>
          <TextField
            value={textValue}
            onChange={handleSettingsName}
            autoComplete="off"
          />
        </Card>
      </Layout.Section>
      <Layout.Section>
        <Card sectioned>
          <div className="wenexus-margin-bottom"><Heading>Countdown type</Heading></div>
          <ButtonGroup segmented>
            <Button>The Same For All Visitors</Button>
            <Button>Independent For Each Visitor</Button>
          </ButtonGroup>
          <div className="wenexus-margin-top">
            <ChoiceList
              choices={[
                {label: 'Non Repeating Timer', value: 'non-repeating-timer'},
                {label: 'Repeating Timer', value: 'repeating-bar'},
              ]}
              selected={choiceSelected}
              onChange={handleSettingsRadio}
            />                
          </div>
        </Card>
      </Layout.Section>            
      <Layout.Section>
        <Card sectioned>
          <div className="wenexus-margin-bottom"><Heading>Timer display</Heading></div>
          <ButtonGroup segmented>
            <Button>Bar</Button>
            <Button>Widget</Button>
          </ButtonGroup>
          <div className="wenexus-margin-top"><Heading>Pages where timer is shown</Heading></div>
            <ChoiceList
              choices={[
                {label: 'All pages in the store', value: 'all-pages-in-the-store'},
                {label: 'Product Pages', value: 'product-pages'},
                {label: 'Collection Pages', value: 'collection-pages'},
                {label: 'Specific Pages', value: 'specific-pages'},
              ]}
              selected={choiceSelected}
              onChange={handleSettingsRadio}
            />
        </Card>
      </Layout.Section>      
    </div>
  )
  const countdownDesign = (
    <div className="countdown-designTab">
      <Layout.Section>
        <Card sectioned>
          {countdownPreviewLayout}
        </Card>
      </Layout.Section> 
      <Layout.Section>
        <Card sectioned>
          <div className="countdown-designForm">
            <Layout>
              <Layout.Section>
                <Heading>Timer Elements</Heading>
              </Layout.Section>
              <Layout.Section>
                <div className="wnxs-designMsg-textfield">
                  <TextField
                    label="Countdown Message"
                    onChange={handleDesignMsg}
                    value={designMsg}
                    autoComplete="off"
                    placeholder={designMsg}
                    />
                </div>
              </Layout.Section>
              <Layout.Section>
                <div className="wnxs-designMsg-textfield">
                  <TextField
                    label="Button Label"
                    value={designBtnLabel}
                    onChange={handleDesignBtnLabel}
                    autoComplete="off"
                    placeholder={designBtnLabel}
                    />
                </div>
                <div className="wnxs-designMsg-textfield">
                  <TextField
                    label="Button Link"
                    value={designBtnLink}
                    onChange={handleDesignBtnLink}
                    autoComplete="off"
                    placeholder={designBtnLink}
                    />
                </div>
              </Layout.Section>
              <Layout.Section>
                <div className="wnxs-designMsg-dropdown">
                  <Select
                    label="Countdown Layout"
                    options={designSelectOptions}
                    onChange={handleDesignSelect}
                    value={designSelect}
                  />
                </div>
              </Layout.Section>
              <Layout.Section>
                <div className="wnxs-designMsg-timetext">
                  <TextField
                    label="Days"
                    value={designDay}
                    onChange={handleDesignDay}
                    placeholder={designDay}
                    autoComplete="off"
                    />
                </div>
                <div className="wnxs-designMsg-timetext">
                  <TextField
                    label="Hours"
                    value={designHrs}
                    onChange={handleDesignHrs}
                    placeholder={designHrs}
                    autoComplete="off"
                    />
                </div>
                <div className="wnxs-designMsg-timetext">
                  <TextField
                    label="Minutes"
                    value={designMin}
                    onChange={handleDesignMin}
                    placeholder={designMin}
                    autoComplete="off"
                    />
                </div>
                <div className="wnxs-designMsg-timetext">
                  <TextField
                    label="Seconds"
                    value={designSec}
                    onChange={handleDesignSec}
                    placeholder={designSec}
                    autoComplete="off"
                  />
                </div>
              </Layout.Section>
              <Layout.Section>
                <div className="wnxs-designMsg-dropdown">
                  <Select
                    label="Display Position"
                    options={designDisplayOptions}
                    onChange={handleDesignDisplay}
                    value={designDisplayPosition}
                  />
                </div>
              </Layout.Section>            
            </Layout>
            <br /><br />
            <Layout>
              <Layout.Section>
                <Heading>Pick Time</Heading>
              </Layout.Section>
              <Layout.Section>
                <div className="wnxs-designMsg-textfield">
                  <div className="wenexus-margin-bottom">Start Time</div>
                  <div className="wnxs-custom-date-field"> <input type="datetime-local" /></div>
                </div>
                <div className="wnxs-designMsg-textfield">
                  <div className="wenexus-margin-bottom">End Time</div>
                  <div className="wnxs-custom-date-field"> <input type="datetime-local" /></div>
                </div>
              </Layout.Section>
            </Layout>
            <br /><br />
            <Layout>
              <Layout.Section>
                <Heading><span id="heheboi">Choose Color & Sizes</span></Heading>
              </Layout.Section>
              <Layout.Section style="flexWrap: wrap;">
                <div className="wnxs-designTab-colorFields">
                  <div className="wnxs-designMsg-colorField">
                    <div className="wenexus-margin-bottom">Background Color</div>
                    <ChromePicker color={designBgColor} onChange={updatedColor => setDesignBgColor(updatedColor)}/>
                  </div>
                  <div className="wnxs-designMsg-colorField">
                    <div className="wenexus-margin-bottom">Button Background Color</div>
                    <ChromePicker color={designBtnBgColor} onChange={updatedColor => setDesignBtnBgColor(updatedColor)}/>
                  </div>
                  <div className="wnxs-designMsg-colorField">
                    <div className="wenexus-margin-bottom">Timer Background Color</div>
                    <ChromePicker color={designTimerBgColor} onChange={updatedColor => setDesignTimerBgColor(updatedColor)}/>
                  </div>
                  <div className="wnxs-designMsg-colorField">
                    <div className="wenexus-margin-bottom">Button Background Color</div>
                    <ChromePicker color={designTxtColor} onChange={updatedColor => setDesignTxtColor(updatedColor)}/>
                  </div>
                  <div className="wnxs-designMsg-colorField">
                    <div className="wenexus-margin-bottom">Button Text Color</div>
                    <ChromePicker color={designBtnTxtColor} onChange={updatedColor => setDesignBtnTxtColor(updatedColor)}/>
                  </div>
                  <div className="wnxs-designMsg-colorField">
                    <div className="wenexus-margin-bottom">Timer Digit Color</div>
                    <ChromePicker color={designTimerDigitColor} onChange={updatedColor => setDesignTimerDigitColor(updatedColor)}/>
                  </div>
                  {/* <div className="wnxs-designMsg-colorField">
                    <div className="wenexus-margin-bottom">Button Background Color</div>
                    <ColorPicker onChange={setDesignBtnBgColor} color={designBtnBgColor} allowAlpha />
                  </div>
                  <div className="wnxs-designMsg-colorField">
                    <div className="wenexus-margin-bottom">Timer Background Color</div>
                    <ColorPicker onChange={setDesignTimerBgColor} color={designTimerBgColor} allowAlpha />
                  </div>
                  <div className="wnxs-designMsg-colorField">
                    <div className="wenexus-margin-bottom">Button Background Color</div>
                    <ColorPicker onChange={setDesignTxtColor} color={designTxtColor} allowAlpha />
                  </div>
                  <div className="wnxs-designMsg-colorField">
                    <div className="wenexus-margin-bottom">Button Text Color</div>
                    <ColorPicker onChange={setDesignBtnTxtColor} color={designBtnTxtColor} allowAlpha />
                  </div>
                  <div className="wnxs-designMsg-colorField">
                    <div className="wenexus-margin-bottom">Timer Digit Color</div>
                    <ColorPicker onChange={setDesignTimerDigitColor} color={designTimerDigitColor} allowAlpha />
                  </div> */}
                </div>
              </Layout.Section>
            </Layout>

          </div>
        </Card>
      </Layout.Section> 
    </div>
  )
  
  const countdownLayout = (selected == 0) ? countdownSettings : countdownDesign;

  return (
    <div className="wenexus-parent-wrapper">
      <div className="wenexus-wrapper">
        <Page
          title="New Timer/Bar"
          primaryAction={ <Button primary>Save</Button>}>
          <Layout>
            <Layout.Section>
              <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} fitted></Tabs>
            </Layout.Section>
            {countdownLayout}
          </Layout>
        </Page>
      </div>
    </div>
  );
}

export default CreateCountdownTimer;