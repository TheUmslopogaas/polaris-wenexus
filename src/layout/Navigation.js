import {Navigation} from '@shopify/polaris';
import {ArrowLeftMinor, ConversationMinor, HomeMajor, CashDollarMajor, HintMajor, CircleAlertMajor} from '@shopify/polaris-icons';

function CustomNavigation (props) {
  let navSelected =  true;
  return (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            label: 'Back to Shopify',
            icon: ArrowLeftMinor,
          },
        ]}
      />
      <Navigation.Section
        separator
        title="WeNexus App"
        items={[
          {
            label: 'Home',
            icon: HomeMajor,
            url: '/',
            selected: {navSelected},
          },
          {
            label: 'Pricing',
            icon: CashDollarMajor,
            url: '/',
            selected: false
          },
          {
            label: 'FAQ',
            icon: HintMajor,
            url: '/',
            selected: false
          },
          {
            label: 'Suggest Improvement',
            icon: CircleAlertMajor,
            url: '/',
            selected: false
          },
        ]}
        action={{
          icon: ConversationMinor,
          accessibilityLabel: 'Contact support'
        }}
      />
    </Navigation>    
  )
}

export default CustomNavigation;