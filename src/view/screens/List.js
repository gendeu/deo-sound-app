import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  LogBox,
  Alert
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import CardFlip from 'react-native-card-flip';
import { Video } from 'expo-av';

import Color from '../../consts/colors';
import { C1, C2, C3, C4, C5, C6, C7 }  from '../../consts/data';

const width = Dimensions.get('window').width / 2 - 20;
const height = Dimensions.get('window').height;

export default class List extends React.Component {

  componentDidMount() {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }

  render() {
  
    const { cag } = this.props.route.params;

    return (
      <View style={stylesList.container}>
        <ScrollView>
        <View style={stylesList.fullWidth}>
        
        {
          // Category 1
          cag == 'C1' ?
            C1.map((C1, index) => 
            <View style={stylesList.item}  key={ index }>
            <CardFlip style={stylesList.card}  ref={ (card) => this['card' + index] = card }>
            <View style={[stylesList.card]}>
                
              <View
                style={{
                  height: 100,
                  alignItems: 'center',
                }}>
                <Image
                  source={C1.img}
                  style={stylesList.image}
                />
                <View style={stylesList.bottomView}></View>

                <View style={stylesList.contentView}>
                  <Text style={stylesList.textStyle}>{C1.name}</Text> 
                  <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start'}}>
                    <TouchableOpacity style={stylesList.appButtonContainer} 
                      onPress={() => {
                        this['video' + index].playAsync();
                        this['card' + index].flip();
                      }}>
                      <Text style={stylesList.appButtonText}>Play Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[stylesList.appButtonContainer2, C1.like ? stylesList.marked : stylesList.unmarked]} 
                    onPress={() => {
                      showAlert(C1.name, C1.id, C1.like, cag);
                    }}>
                      <Text style={stylesList.appButtonText2}>
                      <Icon
                      name="bookmark"
                      >
                      </Icon>
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                
                <Text
                    style={{fontSize: 22, color: "white", fontWeight: 'bold'}}>
                </Text>
                
              </View>
            </View>
            <TouchableOpacity style={[stylesList.card]}
              onPress={() => {
                this['video' + index].pauseAsync();
                this['card' + index].flip();
              }}
            >
                
              <View
                style={{
                  height: 100,
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../assets/main.jpg')}
                  style={stylesList.image}
                />
                <View style={stylesList.bottomView}></View>

                <View style={stylesList.contentView}>
                  <Text style={stylesList.textStyle}>
                    {C1.name}
                  </Text>
                  <Text style={{fontSize: 13, color: "white", textAlign: 'center'}}>
                    {C1.status}
                  </Text>
                  <Text style={{fontSize: 10, color: "yellow", textAlign: 'center'}}>
                    (Tap here to STOP)
                  </Text>
                  <Video
                    ref={ (video) => this['video' + index] = video }
                    source={C1.url}
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                    ignoreSilentSwitch={"obey"}
                  />

                </View>

              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                
                <Text
                    style={{fontSize: 22, color: "white", fontWeight: 'bold'}}>
                </Text>
                
              </View>
            </TouchableOpacity>
            </CardFlip>
          </View>
          ):
          cag == 'C2' ?
            C2.map((C2, index) => 
            <View style={stylesList.item}  key={ index }>
            <CardFlip style={stylesList.card}  ref={ (card) => this['card' + index] = card }>
            <View style={[stylesList.card]}>
                
              <View
                style={{
                  height: 100,
                  alignItems: 'center',
                }}>
                <Image
                  source={C2.img}
                  style={stylesList.image}
                />
                <View style={stylesList.bottomView}></View>

                <View style={stylesList.contentView}>
                  <Text style={stylesList.textStyle}>{C2.name}</Text> 
                  <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start'}}>
                    <TouchableOpacity style={stylesList.appButtonContainer} 
                      onPress={() => {
                        this['video' + index].playAsync();
                        this['card' + index].flip();
                      }}>
                      <Text style={stylesList.appButtonText}>Play Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[stylesList.appButtonContainer2, C2.like ? stylesList.marked : stylesList.unmarked]} 
                    onPress={() => {
                      showAlert(C2.name, C2.id, C2.like, cag);
                    }}>
                      <Text style={stylesList.appButtonText2}>
                      <Icon
                      name="bookmark"
                      >
                      </Icon>
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                
                <Text
                    style={{fontSize: 22, color: "white", fontWeight: 'bold'}}>
                </Text>
                
              </View>
            </View>
            <TouchableOpacity style={[stylesList.card]}
              onPress={() => {
                this['video' + index].pauseAsync();
                this['card' + index].flip();
              }}
            >
                
              <View
                style={{
                  height: 100,
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../assets/main.jpg')}
                  style={stylesList.image}
                />
                <View style={stylesList.bottomView}></View>

                <View style={stylesList.contentView}>
                  <Text style={stylesList.textStyle}>
                    {C2.name}
                  </Text>
                  <Text style={{fontSize: 13, color: "white", textAlign: 'center'}}>
                    {C2.status}
                  </Text>
                  <Text style={{fontSize: 10, color: "yellow", textAlign: 'center'}}>
                    (Tap here to STOP)
                  </Text>
                  <Video
                    ref={ (video) => this['video' + index] = video }
                    source={C2.url}
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                    ignoreSilentSwitch={"obey"}
                  />

                </View>

              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                
                <Text
                    style={{fontSize: 22, color: "white", fontWeight: 'bold'}}>
                </Text>
                
              </View>
            </TouchableOpacity>
            </CardFlip>
          </View>
          ):
          cag == 'C3' ?
            C3.map((C3, index) => 
            <View style={stylesList.item}  key={ index }>
            <CardFlip style={stylesList.card}  ref={ (card) => this['card' + index] = card }>
            <View style={[stylesList.card]}>
                
              <View
                style={{
                  height: 100,
                  alignItems: 'center',
                }}>
                <Image
                  source={C3.img}
                  style={stylesList.image}
                />
                <View style={stylesList.bottomView}></View>

                <View style={stylesList.contentView}>
                  <Text style={stylesList.textStyle}>{C3.name}</Text> 
                  <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start'}}>
                    <TouchableOpacity style={stylesList.appButtonContainer} 
                      onPress={() => {
                        this['video' + index].playAsync();
                        this['card' + index].flip();
                      }}>
                      <Text style={stylesList.appButtonText}>Play Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[stylesList.appButtonContainer2, C3.like ? stylesList.marked : stylesList.unmarked]} 
                    onPress={() => {
                      showAlert(C3.name, C3.id, C3.like, cag);
                    }}>
                      <Text style={stylesList.appButtonText2}>
                      <Icon
                      name="bookmark"
                      >
                      </Icon>
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                
                <Text
                    style={{fontSize: 22, color: "white", fontWeight: 'bold'}}>
                </Text>
                
              </View>
            </View>
            <TouchableOpacity style={[stylesList.card]}
              onPress={() => {
                this['video' + index].pauseAsync();
                this['card' + index].flip();
              }}
            >
                
              <View
                style={{
                  height: 100,
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../assets/main.jpg')}
                  style={stylesList.image}
                />
                <View style={stylesList.bottomView}></View>

                <View style={stylesList.contentView}>
                  <Text style={stylesList.textStyle}>
                    {C3.name}
                  </Text>
                  <Text style={{fontSize: 13, color: "white", textAlign: 'center'}}>
                    {C3.status}
                  </Text>
                  <Text style={{fontSize: 10, color: "yellow", textAlign: 'center'}}>
                    (Tap here to STOP)
                  </Text>
                  <Video
                    ref={ (video) => this['video' + index] = video }
                    source={C3.url}
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                    ignoreSilentSwitch={"obey"}
                  />

                </View>

              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                
                <Text
                    style={{fontSize: 22, color: "white", fontWeight: 'bold'}}>
                </Text>
                
              </View>
            </TouchableOpacity>
            </CardFlip>
          </View>
          ):
          cag == 'C4' ?
            C4.map((C4, index) => 
            <View style={stylesList.item}  key={ index }>
            <CardFlip style={stylesList.card}  ref={ (card) => this['card' + index] = card }>
            <View style={[stylesList.card]}>
                
              <View
                style={{
                  height: 100,
                  alignItems: 'center',
                }}>
                <Image
                  source={C4.img}
                  style={stylesList.image}
                />
                <View style={stylesList.bottomView}></View>

                <View style={stylesList.contentView}>
                  <Text style={stylesList.textStyle}>{C4.name}</Text> 
                  <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start'}}>
                    <TouchableOpacity style={stylesList.appButtonContainer} 
                      onPress={() => {
                        this['video' + index].playAsync();
                        this['card' + index].flip();
                      }}>
                      <Text style={stylesList.appButtonText}>Play Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[stylesList.appButtonContainer2, C4.like ? stylesList.marked : stylesList.unmarked]} 
                    onPress={() => {
                      showAlert(C4.name, C4.id, C4.like, cag);
                    }}>
                      <Text style={stylesList.appButtonText2}>
                      <Icon
                      name="bookmark"
                      >
                      </Icon>
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                
                <Text
                    style={{fontSize: 22, color: "white", fontWeight: 'bold'}}>
                </Text>
                
              </View>
            </View>
            <TouchableOpacity style={[stylesList.card]}
              onPress={() => {
                this['video' + index].pauseAsync();
                this['card' + index].flip();
              }}
            >
                
              <View
                style={{
                  height: 100,
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../assets/main.jpg')}
                  style={stylesList.image}
                />
                <View style={stylesList.bottomView}></View>

                <View style={stylesList.contentView}>
                  <Text style={stylesList.textStyle}>
                    {C4.name}
                  </Text>
                  <Text style={{fontSize: 13, color: "white", textAlign: 'center'}}>
                    {C4.status}
                  </Text>
                  <Text style={{fontSize: 10, color: "yellow", textAlign: 'center'}}>
                    (Tap here to STOP)
                  </Text>
                  <Video
                    ref={ (video) => this['video' + index] = video }
                    source={C4.url}
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                    ignoreSilentSwitch={"obey"}
                  />

                </View>

              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                
                <Text
                    style={{fontSize: 22, color: "white", fontWeight: 'bold'}}>
                </Text>
                
              </View>
            </TouchableOpacity>
            </CardFlip>
          </View>
          ):
          cag == 'C5' ?
            C5.map((C5, index) => 
            <View style={stylesList.item}  key={ index }>
            <CardFlip style={stylesList.card}  ref={ (card) => this['card' + index] = card }>
            <View style={[stylesList.card]}>
                
              <View
                style={{
                  height: 100,
                  alignItems: 'center',
                }}>
                <Image
                  source={C5.img}
                  style={stylesList.image}
                />
                <View style={stylesList.bottomView}></View>

                <View style={stylesList.contentView}>
                  <Text style={stylesList.textStyle}>{C5.name}</Text> 
                  <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start'}}>
                    <TouchableOpacity style={stylesList.appButtonContainer} 
                      onPress={() => {
                        this['video' + index].playAsync();
                        this['card' + index].flip();
                      }}>
                      <Text style={stylesList.appButtonText}>Play Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[stylesList.appButtonContainer2, C5.like ? stylesList.marked : stylesList.unmarked]} 
                    onPress={() => {
                      showAlert(C5.name, C5.id, C5.like, cag);
                    }}>
                      <Text style={stylesList.appButtonText2}>
                      <Icon
                      name="bookmark"
                      >
                      </Icon>
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                
                <Text
                    style={{fontSize: 22, color: "white", fontWeight: 'bold'}}>
                </Text>
                
              </View>
            </View>
            <TouchableOpacity style={[stylesList.card]}
              onPress={() => {
                this['video' + index].pauseAsync();
                this['card' + index].flip();
              }}
            >
                
              <View
                style={{
                  height: 100,
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../assets/main.jpg')}
                  style={stylesList.image}
                />
                <View style={stylesList.bottomView}></View>

                <View style={stylesList.contentView}>
                  <Text style={stylesList.textStyle}>
                    {C5.name}
                  </Text>
                  <Text style={{fontSize: 13, color: "white", textAlign: 'center'}}>
                    {C5.status}
                  </Text>
                  <Text style={{fontSize: 10, color: "yellow", textAlign: 'center'}}>
                    (Tap here to STOP)
                  </Text>
                  <Video
                    ref={ (video) => this['video' + index] = video }
                    source={C5.url}
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                    ignoreSilentSwitch={"obey"}
                  />

                </View>

              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                
                <Text
                    style={{fontSize: 22, color: "white", fontWeight: 'bold'}}>
                </Text>
                
              </View>
            </TouchableOpacity>
            </CardFlip>
          </View>
          ):
          cag == 'C6' ?
            C6.map((C6, index) => 
            <View style={stylesList.item}  key={ index }>
            <CardFlip style={stylesList.card}  ref={ (card) => this['card' + index] = card }>
            <View style={[stylesList.card]}>
                
              <View
                style={{
                  height: 100,
                  alignItems: 'center',
                }}>
                <Image
                  source={C6.img}
                  style={stylesList.image}
                />
                <View style={stylesList.bottomView}></View>

                <View style={stylesList.contentView}>
                  <Text style={stylesList.textStyle}>{C6.name}</Text> 
                  <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start'}}>
                    <TouchableOpacity style={stylesList.appButtonContainer} 
                      onPress={() => {
                        this['video' + index].playAsync();
                        this['card' + index].flip();
                      }}>
                      <Text style={stylesList.appButtonText}>Play Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[stylesList.appButtonContainer2, C6.like ? stylesList.marked : stylesList.unmarked]} 
                    onPress={() => {
                      showAlert(C6.name, C6.id, C6.like, cag);
                    }}>
                      <Text style={stylesList.appButtonText2}>
                      <Icon
                      name="bookmark"
                      >
                      </Icon>
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                
                <Text
                    style={{fontSize: 22, color: "white", fontWeight: 'bold'}}>
                </Text>
                
              </View>
            </View>
            <TouchableOpacity style={[stylesList.card]}
              onPress={() => {
                this['video' + index].pauseAsync();
                this['card' + index].flip();
              }}
            >
                
              <View
                style={{
                  height: 100,
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../assets/main.jpg')}
                  style={stylesList.image}
                />
                <View style={stylesList.bottomView}></View>

                <View style={stylesList.contentView}>
                  <Text style={stylesList.textStyle}>
                    {C6.name}
                  </Text>
                  <Text style={{fontSize: 13, color: "white", textAlign: 'center'}}>
                    {C6.status}
                  </Text>
                  <Text style={{fontSize: 10, color: "yellow", textAlign: 'center'}}>
                    (Tap here to STOP)
                  </Text>
                  <Video
                    ref={ (video) => this['video' + index] = video }
                    source={C6.url}
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                    ignoreSilentSwitch={"obey"}
                  />

                </View>

              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                
                <Text
                    style={{fontSize: 22, color: "white", fontWeight: 'bold'}}>
                </Text>
                
              </View>
            </TouchableOpacity>
            </CardFlip>
          </View>
          ):
          cag == 'C7' ?
            C7.map((C7, index) => 
            <View style={stylesList.item}  key={ index }>
            <CardFlip style={stylesList.card}  ref={ (card) => this['card' + index] = card }>
            <View style={[stylesList.card]}>
                
              <View
                style={{
                  height: 100,
                  alignItems: 'center',
                }}>
                <Image
                  source={C7.img}
                  style={stylesList.image}
                />
                <View style={stylesList.bottomView}></View>

                <View style={stylesList.contentView}>
                  <Text style={stylesList.textStyle}>{C7.name}</Text> 
                  <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start'}}>
                    <TouchableOpacity style={stylesList.appButtonContainer} 
                      onPress={() => {
                        this['video' + index].playAsync();
                        this['card' + index].flip();
                      }}>
                      <Text style={stylesList.appButtonText}>Play Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[stylesList.appButtonContainer2, C7.like ? stylesList.marked : stylesList.unmarked]} 
                    onPress={() => {
                      showAlert(C7.name, C7.id, C7.like, cag);
                    }}>
                      <Text style={stylesList.appButtonText2}>
                      <Icon
                      name="bookmark"
                      >
                      </Icon>
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                
                <Text
                    style={{fontSize: 22, color: "white", fontWeight: 'bold'}}>
                </Text>
                
              </View>
            </View>
            <TouchableOpacity style={[stylesList.card]}
              onPress={() => {
                this['video' + index].pauseAsync();
                this['card' + index].flip();
              }}
            >
                
              <View
                style={{
                  height: 100,
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../assets/main.jpg')}
                  style={stylesList.image}
                />
                <View style={stylesList.bottomView}></View>

                <View style={stylesList.contentView}>
                  <Text style={stylesList.textStyle}>
                    {C7.name}
                  </Text>
                  <Text style={{fontSize: 13, color: "white", textAlign: 'center'}}>
                    {C7.status}
                  </Text>
                  <Text style={{fontSize: 10, color: "yellow", textAlign: 'center'}}>
                    (Tap here to STOP)
                  </Text>
                  <Video
                    ref={ (video) => this['video' + index] = video }
                    source={C7.url}
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                    ignoreSilentSwitch={"obey"}
                  />

                </View>

              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                
                <Text
                    style={{fontSize: 22, color: "white", fontWeight: 'bold'}}>
                </Text>
                
              </View>
            </TouchableOpacity>
            </CardFlip>
          </View>
          ):
            
          console.log('else')

        }
        </View>
        </ScrollView>
      </View>
      
      );
  }
}

const showAlert = (name, id, like, cag) =>
  Alert.alert(
    name,
    like ? "Has Been Unmarked" : "Has Been Bookmarked" ,
    [
      {
        text: "Bookmarked List",
        onPress: () => handleCreate(id, cag)
      },
      {
        text: "Choose another",
        // onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      // { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );

const handleCreate = async (id, cag) => {
  
  if(cag == 'C1'){
    const C = C1.find((C1) => C1.id === id);
    like = !C.like;
   
      try {
        console.log(id);
        console.log(cag);
        console.log(like);
        C1.like = !like;
      } catch (error) {
        console.log(error);
      }
  }else if(cag == 'C2'){
    const C = C2.find((C2) => C2.id === id);
    like = !C.like;
   
      try {
        console.log(id);
        console.log(cag);
        console.log(like);
        C2.like = !like;
      } catch (error) {
        console.log(error);
      }
  }else if(cag == 'C3'){
    const C = C3.find((C3) => C3.id === id);
    like = !C.like;
  
      try {
        console.log(id);
        console.log(cag);
        console.log(like);
        C3.like = !like;
      } catch (error) {
        console.log(error);
      } 
  }else if(cag == 'C4'){
    const C = C4.find((C4) => C4.id === id);
    like = !C.like;
  
      try {
        console.log(id);
        console.log(cag);
        console.log(like);
        C4.like = !like;
      } catch (error) {
        console.log(error);
      } 
  }else if(cag == 'C5'){
    const C = C5.find((C5) => C5.id === id);
    like = !C.like;
  
      try {
        console.log(id);
        console.log(cag);
        console.log(like);
        C5.like = !like;
      } catch (error) {
        console.log(error);
      } 
  }else if(cag == 'C6'){
    const C = C6.find((C6) => C6.id === id);
    like = !C.like;
  
      try {
        console.log(id);
        console.log(cag);
        console.log(like);
        C6.like = !like;
      } catch (error) {
        console.log(error);
      } 
  }else if(cag == 'C7'){
    const C = C7.find((C7) => C7.id === id);
    like = !C.like;
  
      try {
        console.log(id);
        console.log(cag);
        console.log(like);
        C7.like = !like;
      } catch (error) {
        console.log(error);
      }    
  }else{
    console.log('ERROR!!!');
  }
  
  // try {
  //   await C1({ like: false });
  // } catch (error) {
  //   console.log(error);
  // }
};
  

const stylesList = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' 
  },
  item: {
    alignItems: 'center',
    width: '50%',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryText: {
    fontSize: 16, 
    color: 'grey', 
    fontWeight: 'bold'
  },
  categoryTextSelected: {
    color: Color.dark,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: Color.dark,
  },
  card: {
    height: height / 3 - 40, 
    width: width, 
    // backgroundColor: 'gray',
    marginHorizontal: 2,
    borderRadius: 10,
    // padding: 15,
    margin: 8,

  },
  header: {
    backgroundColor: "white",
    height: 100,
    marginTop: 30,
  },
  searchContainer: {
    height: 50,
    backgroundColor: "lightgray",
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: "brown",
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: Color.dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullWidth: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  bottomView: {
    width: '100%', 
    height: height / 3 - 20,
    // height: 120, 
    backgroundColor: 'black', 
    opacity: 0.5,
    bottom: 0,
  },
  contentView: {
    width: '100%', 
    height: height / 3 - 20,
    top: 0,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    // fontWeight: 'bold', 
    color: 'white',
    fontSize: 20,
    padding: 10,
    textAlign: 'center'
  },
  image: {
    height: height / 3 - 50, 
    width: width - 10, 
    position: 'absolute', 
    zIndex: 0
  },
  appButtonContainer: {
    zIndex: 2,
    elevation: 8,
    backgroundColor: "#667e99",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonContainer2: {
    zIndex: 2,
    elevation: 8,
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginLeft: 5,
  },
  appButtonText: {
    fontSize: 12,
    color: "#ffc800",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  appButtonText2: {
    fontSize: 12,
    color: "black",
    padding: 1.7,
    alignSelf: "center",
    textTransform: "uppercase"
  },
  marked: {
    backgroundColor: "orange",
  },
  unmarked: {
    backgroundColor: "white"
  },
});
