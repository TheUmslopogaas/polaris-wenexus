import React, {useCallback, useRef, useState} from 'react';
import {AppProvider, ActionList, Card, Stack, Banner, Frame, Page, TopBar, Button, Icon, EmptyState} from '@shopify/polaris';
import {ProductsMajor} from '@shopify/polaris-icons';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

// Custom Imports
import CustomNavigation from '../layout/Navigation'
import CreateCountdownTimer from '../create/countdownapp/CreateCountdownTimer'

function Initial() {
  const defaultState = useRef({
    nameFieldValue: 'WeNexus',
  });
  const skipToContentRef = useRef(null);

  const [searchActive, setSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [userMenuActive, setUserMenuActive] = useState(false);
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);
  
  const [storeName, setStoreName] = useState(
    defaultState.current.nameFieldValue,
  );
  const handleSearchResultsDismiss = useCallback(() => {
    setSearchActive(false);
    setSearchValue('');
  }, []);
  const handleSearchFieldChange = useCallback((value) => {
    setSearchValue(value);
    setSearchActive(value.length > 0);
  }, []);

  const toggleUserMenuActive = useCallback(
    () => setUserMenuActive((userMenuActive) => !userMenuActive),
    [],
  );
  const toggleMobileNavigationActive = useCallback(
    () =>
      setMobileNavigationActive(
        (mobileNavigationActive) => !mobileNavigationActive,
      ),
    [],
  );
  const userMenuActions = [
    {
      items: [{content: 'Community forums'}],
    },
  ];
  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={userMenuActions}
      name="Nazmul"
      detail={storeName}
      initials="N"
      open={userMenuActive}
      onToggle={toggleUserMenuActive}
    />
  );
  const searchResultsMarkup = (
    <ActionList
      items={[{content: 'Shopify help center'}, {content: 'Community forums'}]}
    />
  );
  const searchFieldMarkup = (
    <TopBar.SearchField
      onChange={handleSearchFieldChange}
      value={searchValue}
      placeholder="Our Apps.."
    />
  );
  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      searchResultsVisible={searchActive}
      searchField={searchFieldMarkup}
      searchResults={searchResultsMarkup}
      onSearchResultsDismiss={handleSearchResultsDismiss}
      onNavigationToggle={toggleMobileNavigationActive}
    />
  );

  const theme = {
    logo: {
      width: 124,
      topBarSource:
        'https://cdn.shopify.com/s/files/1/0346/5065/2810/files/email_logo_url_500x.png?v=1586326664',
      contextualSaveBarSource:
        'https://cdn.shopify.com/s/files/1/0346/5065/2810/files/email_logo_url_500x.png?v=1586326664',
      url: '/',
      accessibilityLabel: 'Wenexus',
    },
  };

  return (
    <div style={{height: '500px'}}>
      <Switch>
        <Route path='/' exact>
          <AppProvider
            theme={theme}
            i18n={{
              Polaris: {
                Avatar: {
                  label: 'Avatar',
                  labelWithInitials: 'Avatar with initials {initials}',
                },
                ContextualSaveBar: {
                  save: 'Save',
                  discard: 'Discard',
                },
                TextField: {
                  characterCount: '{count} characters',
                },
                TopBar: {
                  toggleMenuLabel: 'Toggle menu',

                  SearchField: {
                    clearButtonLabel: 'Clear',
                    search: 'Search',
                  },
                },
                Modal: {
                  iFrameTitle: 'body markup',
                },
                Frame: {
                  skipToContent: 'Skip to content',
                  navigationLabel: 'Navigation',
                  Navigation: {
                    closeMobileNavigationLabel: 'Close navigation',
                  },
                },
                ResourceList: {
                  sortingLabel: 'Sort by',
                  defaultItemSingular: 'item',
                  defaultItemPlural: 'items',
                  showing: 'Showing {itemsCount} {resource}',
                  Item: {
                    viewItem: 'View details for {itemName}',
                  },
                },
                Common: {
                  checkbox: 'checkbox',
                },            
              },
            }}
          >
            <Frame
              topBar={topBarMarkup}
              navigation={<CustomNavigation/>}
              showMobileNavigation={mobileNavigationActive}
              onNavigationDismiss={toggleMobileNavigationActive}
              skipToContentTarget={skipToContentRef.current}
            >
              <div className="wenexus-parent-wrapper">
                <div className="wenexus-wrapper">
                  <Page
                    title="Countdown Timer Bar"
                    primaryAction={
                      <Button primary url="/countdown-timer/create">Create Timer</Button>
                    }
                  >
                    <div className="wenexus-wrapper" style={{marginTop: 20}}>
                      <Banner title="Create 1 Countdown Timer For Free" onDismiss={() => {}} status="info">
                        <span className="Polaris-TextStyle--variationSubdued">
                        With the second page or timer/bar <a href="#" target="_self" data-polaris-unstyled="true" className="Polaris-Link Polaris-Link--monochrome">the Unlimited plan</a> will be applied automatically.</span>
                        <div style={{marginTop: 20}}>
                          <Stack>
                            <Icon source={ProductsMajor} color="base" />
                            <span className="Polaris-TextStyle--variationStrong">You used 0 of 1 free page</span>
                          </Stack>
                        </div>
                      </Banner>
                    </div>          
                    <div className="wenexus-wrapper" style={{marginTop: 20}}>
                    <Card sectioned>
                      <EmptyState
                        heading="Upload a file to get started"
                        action={{url: '/countdown-timer/create', content: 'Create Timer'}}
                        image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
                        fullWidth>
                        <p>You can use the Files section to upload images, videos, and other
                          documents. This example shows the content with a centered layout and full width.</p>
                      </EmptyState>
                    </Card>
                    </div>          
                  </Page>
                </div>
              </div>
            </Frame>
          </AppProvider>
        </Route>
        <Route path='/countdown-timer/create' exact>
          <AppProvider
            theme={theme}
            i18n={{
              Polaris: {
                Avatar: {
                  label: 'Avatar',
                  labelWithInitials: 'Avatar with initials {initials}',
                },
                ContextualSaveBar: {
                  save: 'Save',
                  discard: 'Discard',
                },
                TextField: {
                  characterCount: '{count} characters',
                },
                TopBar: {
                  toggleMenuLabel: 'Toggle menu',

                  SearchField: {
                    clearButtonLabel: 'Clear',
                    search: 'Search',
                  },
                },
                Modal: {
                  iFrameTitle: 'body markup',
                },
                Frame: {
                  skipToContent: 'Skip to content',
                  navigationLabel: 'Navigation',
                  Navigation: {
                    closeMobileNavigationLabel: 'Close navigation',
                  },
                },
                ResourceList: {
                  sortingLabel: 'Sort by',
                  defaultItemSingular: 'item',
                  defaultItemPlural: 'items',
                  showing: 'Showing {itemsCount} {resource}',
                  Item: {
                    viewItem: 'View details for {itemName}',
                  },
                },
                Common: {
                  checkbox: 'checkbox',
                },            
              },
            }}
          >
            <Frame
              topBar={topBarMarkup}
              navigation={<CustomNavigation/>}
              showMobileNavigation={mobileNavigationActive}
              onNavigationDismiss={toggleMobileNavigationActive}
              skipToContentTarget={skipToContentRef.current}
            >
              <CreateCountdownTimer/>
            </Frame>
          </AppProvider>
        </Route>
      </Switch>
    </div>
  );
}

export default Initial;