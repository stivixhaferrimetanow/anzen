import React , {useEffect, useState} from 'react';
import { StyleSheet, Button , ScrollView, View, Text, SafeAreaView , Image , InputAccessoryView ,  TextInput , TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';
import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Link } from 'expo-router';
import { router } from 'expo-router'




export default function HomeScreen() {


  
  const [text, setText] = useState('');
  const [password , setPassword] = useState('');


  const [available , setAvailable] = useState(false)


  useEffect(() => {
  
    const usernameRegex = /^[a-zA-Z0-9._]{4,}$/; 
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; 

    const isUsernameValid = usernameRegex.test(text);
    const isPasswordValid = passwordRegex.test(password);
    setAvailable( isPasswordValid);
  }, [text, password]);

  const emojisWithIcons = [
    {title: 'Deutsch'},
    {title: 'English'},
   
   
  ];



  const [current_lang , setCurrentLang ] = useState('de')

  const en = {
    "username":"Username",
    "password":"Password",
    "log_in": 'Log In',
    "problem":"Problem?",
    "scan":"Scan your service ID card"
  }


  const de = {
    "username":"Benutzername",
    "password":"Passwort",
    "log_in": 'ANMELDEN',
    "problem":"Probleme?",
    "scan":"Scannen Sie Ihren Dienstausweis"
  }

  const handleClick = () => {
    router.push({ pathname: `../profile/${text}`})
  }




  return (
    
 <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
            <Image   source={require('../../assets/images/anzen_logo.png')} style={styles.logo}/>
           
        </View>
    <View style={styles.form}>
    <View style={styles.contentForm}>
        <FontAwesome name="user" size={24} color="white" />
          <TextInput
            style={styles.inputForm}
           
            onChangeText={setText}
            value={text}
            placeholder={current_lang == 'en' ? en.username : de.username}
            placeholderTextColor="#838383"
          />
        </View>
        <View style={styles.contentForm}>
        <Fontisto name="unlocked" size={24} color="white" />
          <TextInput
            style={styles.inputForm}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            placeholder={current_lang == 'en' ? en.password : de.password}
            placeholderTextColor="#838383"
          />
        </View>
        <View style={styles.buttonDiv}>
          <Button color="#01A6FF"  onPress={handleClick} style={styles.button} disabled={!available} title={  current_lang == 'en' ? en.log_in : de.log_in}  />
        </View>
    </View>
    <View style={styles.menuDiv}>
      <View style={styles.langDiv} >

    <Text></Text>


      </View>
      <View style={styles.supportDiv}>
        <TouchableOpacity>
          <Link href={'../probleme'} style={styles.linkText}>Probleme?</Link>
        </TouchableOpacity>
       
  
      </View>
    </View>


    <View style={styles.oderDiv}>
      <View style={styles.line}>
        <View style={styles.hr}></View>
      </View>
      <View style={styles.noline}>
        <Text style={styles.oderText}>ODER</Text>
      </View>
      <View style={styles.line}>
        <View style={styles.hr}></View>
      </View>
    </View>
    


    <View style={styles.waveDiv}>
     
      <Image  style={styles.waveImg}  source={require('../../assets/images/wave.png')} />
      <View style={styles.waveTextDiv}>
        <Text style={styles.waveText}>Scannen Sie Ihren Dienstausweis</Text>
      </View>
        
    </View>
        
      </ScrollView>
    </SafeAreaView>
    
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010137'
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    padding: 20,
    paddingTop: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  contentForm:{
    flexDirection: 'row',
    padding: 5,
    paddingTop: 10,
    alignItems: 'start',
    justifyContent: 'start',
    gap: 10,
    borderBottomColor: '#838383',
    borderBottomWidth: 1.4,
    width: '80%',
    marginHorizontal: '10%',
    marginBottom: 20,

  },
  text: {
    color: 'white',
    marginTop: '5%'
  },
  logo:{
    width: 100,
    height: 140
  },
  logoText:{
    color: 'white',
    paddingLeft: 8,
    fontSize: 36
  },
  inputForm:{
    color: 'white',
    flex: 1
  },
  form:{
    paddingTop: 30,
  },
  buttonDiv:{
    width: '80%',
    marginHorizontal: '10%'
  },
  button:{
    paddingVertical: 10, 
    paddingHorizontal: 20,
    textTransform: 'none', 
  },
  menuDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginHorizontal: 'auto',
    marginTop: 10,
  },
  langDiv: {
    width: '50%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1,
    color: 'white',
  },
  supportDiv: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flex: 1,
    color: 'white',
  },
  linkText:{
    color:"white",
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  dropdownButtonStyle: {
    color:'white',
    width: '45%',
    justifyContent: 'flex-start',
    borderRadius: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 2,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    flex:1
  },
  dropdownButtonTxtStyle: {
  color:'white',
    
  
  },
  dropdownButtonArrowStyle: {
    color:'white',
  },
  dropdownButtonIconStyle: {
    marginRight: 1,
  },
  dropdownMenuStyle: {
    backgroundColor: 'none',
    borderRadius: 8,
    flex: 1,
    backfaceVisibility: 'hidden'
  },
  dropdownItemStyle: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 2,
    backfaceVisibility: 'hidden'
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 16,
    color: 'white',
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  oderDiv:{
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginHorizontal: '10%',
    paddingTop: 25,
  },
  line:{
    width: '35%'
  },
  noline:{
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  hr:{
    backgroundColor: 'white',
    width: '100%',
    height: 1
  },
  oderText:{
    color:'white',
    fontSize: 25
  },
  waveDiv:{
    paddingTop: 10,
    flex: 1,
    width: '80%',
    marginHorizontal: '10%'
  },
  waveImg:{
    width: '20%',
    height: 100,
    marginHorizontal: '40%',
    objectFit: 'contain'
  },
  waveTextDiv:{
    flex: 1,
    width: '80%',
    marginHorizontal: '10%',
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  waveText:{
    color: 'white'
  }
});
