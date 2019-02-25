import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const initializeTabs = () => {
  Promise.all([
    Icon.getImageSource('md-map', 30, 'green'),
    Icon.getImageSource('ios-share-alt', 30, 'blue'),
    Icon.getImageSource('ios-menu', 30, 'blue')
  ]).then((icons) => {
    Navigation.setRoot({
      root: {
        sideMenu: {
          left: {
            component: {
              name: 'gT.SideDrawer',
              id: 'sideLeftMenu'
            }
          },
          center: {
            bottomTabs: {
              children: [
                {
                  stack: {
                    id: 'mainStack',
                    children: [{
                      component: {
                        id: 'HomeScreen',
                        name: 'gT.HomeScreen',
                        options: {
                          bottomTabs: {
                            visible: true
                          }
                        }
                      },
                    }],
                    options: {
                      bottomTab: {
                        text: 'Home',
                        icon: icons[0],
                      },
                      topBar: {
                        title: {
                          text: 'Home'
                        },
                        leftButtons: [
                          {
                            id: 'sideDrawerToggle',
                            text: 'Menu',
                            icon: icons[2],
                          }
                        ],
                      }
                    }
                  },
                },
                {
                  stack: {
                    children: [{
                      component: {
                        id: 'MovieScreen',
                        name: 'gT.MovieScreen',
                        options: {
                          bottomTabs: {
                            visible: true
                          }
                        }
                      },
                    }],
                    options: {
                      bottomTab: {
                        text: 'Movies',
                        icon: icons[0],
                      },
                      topBar: {
                        title: {
                          text: 'Movies'
                        },
                        leftButtons: [
                          {
                            id: 'sideDrawerToggle',
                            text: 'Menu',
                            icon: icons[2],
                          }
                        ],
                      }
                    }
                  },
                }
              ]
            },
          }
        }
      }
    });   
  }).then(() => {
    Navigation.events().registerNavigationButtonPressedListener((name, params)  => {
      if(name.buttonId === "sideDrawerToggle") {
        Navigation.mergeOptions('sideLeftMenu', {
          sideMenu: {
            left: {
              visible: true
            }
          }
        });
      }  
    })
  })
}

export default initializeTabs;