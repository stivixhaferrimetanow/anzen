import React , {useState , useEffect} from 'react'
import { StyleSheet, Button , ScrollView, View, Text, SafeAreaView , Image , Dimensions , InputAccessoryView ,  TextInput , TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';
import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Link } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';
import { useLocalSearchParams } from 'expo-router';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';






export default function feed(){


  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const [sheetLeft , setSheetLeft] = useState('-70%');


  const { id } = useLocalSearchParams();




  const handleSheet = () => {
    if(sheetLeft == '-70%'){
      setSheetLeft('0%')
    }else{
      setSheetLeft('-70%')
    }
  }

  return(
  
    <SafeAreaView style={styles.container}>
      <ScrollView >
      <View style={styles.nav}>
        <View style={styles.emptyView}></View>
        <View style={styles.nonemptyView}><Text style={styles.nonemptyText}>ANZEN</Text></View>
        <View style={styles.emptyView}>
          <Link href={'/'} style={{paddingRight: 14}}>
          <Entypo name="log-out"  style={styles.menuIcon}  size={24} color="white" fontWeight="500" />
          </Link>
          
       
          </View>
          
      </View>

      {/* <View style={{ flex: 1 }}>
        <View style={{height : windowHeight, position: 'absolute', backgroundColor: '#3E424B' , padding: '5%', zIndex: 1000 , right: 0 ,top:0, width: '70%' , marginRight: sheetLeft, transition: 'all 0.2s ease-in-out' }}>
          <Text>Here</Text>
        </View>
      </View> */}


      <View style={{width: '90%', alignSelf: 'center', marginTop: 12, padding: 10, borderRadius: 5 , backgroundColor: '#00001E'}}>
            <Text style={{color: 'white', fontSize: 20}}>{id && id}</Text>
        <Text style={{color: 'white'}}>
        Dieser Abschnitt ist darauf ausgerichtet, Ihnen dabei zu helfen, das spezifische Gebiet oder Thema zu finden, das Sie interessiert. Egal, ob Sie nach Informationen, Dienstleistungen oder Ressourcen suchen, hier sind Sie an der richtigen Stelle.

        </Text>
      </View>


      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', gap: 4 , width: '90%', alignSelf: 'center', marginTop: 15}}>
        <View style={{width: '33%' , borderRadius: 5, height: 85 , display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#00001E' }}>
          <EvilIcons name="user" size={24} color="#01A6FF" />
          <Text style={{color: 'white', paddingTop: 12 , textAlign: 'center'}}>Benutzerfreundliche {"\and"}</Text>
        </View>
        <View style={{width: '33%' , borderRadius: 5, height: 85 , display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#00001E' }}>
          <FontAwesome5 name="shield-alt" size={24} color="#01A6FF" />
          <Text style={{color: 'white' , paddingTop: 12 , textAlign: 'center'}}>Sichere {"\n"} Software</Text>
        </View>
        <View style={{width: '33%' , borderRadius: 5, height: 85 , display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#00001E' }}>
          <MaterialIcons name="security-update" size={24} color="#01A6FF" />
          <Text style={{color: 'white' , paddingTop: 12}}>Regelmäßige {"\n"} Updates</Text>
        </View>
      </View>



      <View style={{width: '90%', alignSelf: 'center', padding: 10 , borderRadius: 5, backgroundColor: '#00001E' , marginVertical: 14}}>
        <Text style={{color: 'white'}}>
        {id} ist Ihre Anlaufstelle zur Lokalisierung verschiedener Abschnitte innerhalb unserer Plattform. Wir möchten Ihren Suchprozess optimieren und Ihnen die benötigten Informationen schnell und effizient bereitstellen.
        </Text>
      </View>


      <View style={styles.list}>
        
          <View style={styles.listHeader}>
            <Text style={styles.headerText}>Funktionen</Text>
          </View>
         

          
          <Link href={'../Bereich suchen'} style={styles.listItem} >
            <View style={styles.listItemIcon}>
            <Ionicons name="globe-outline" size={24} color="white" />
            </View>
            <View style={styles.listItemText}>
              <Text style={styles.itemText}>Bereich suchen</Text>
            </View>
          </Link>
         


          
          <Link href={'../Arbeitszeiterfassung'} style={styles.listItem} >
            <View style={styles.listItemIcon}>
            <FontAwesome6 name="clock" size={24} color="white" />
            </View>
            <View style={styles.listItemText}>
              <Text style={styles.itemText}>Arbeitszeiterfassung</Text>
            </View>
          </Link>
       

          

         
          <Link href={'../Terminubersicht'} style={styles.listItem} >
            <View style={styles.listItemIcon}>
            <Feather name="book-open" size={24} color="white" />
            </View>
            <View style={styles.listItemText}>
              <Text style={styles.itemText}>Terminubersicht</Text>
            </View>
          </Link>
       

        
          <Link href={'../Dateien'} style={styles.listItem} >
            <View style={styles.listItemIcon}>
            <Feather name="folder" size={24} color="white" />
            </View>
            <View style={styles.listItemText}>
              <Text style={styles.itemText}>Dateien</Text>
            </View>
          </Link>
         

          

        
          <Link href={'../Schlusselverwaltung'} style={styles.listItem} >
            <View style={styles.listItemIcon}>
            <Ionicons name="key" size={24} color="white" />
            </View>
            <View style={styles.listItemText}>
              <Text style={styles.itemText}>Schlusselverwaltung</Text>
            </View>
          </Link>
          
        
          <Link href={'../Administration'} style={styles.listItem} >
            <View style={styles.listItemIcon}>
            <AntDesign name="setting" size={24} color="white" />
            </View>
            <View style={styles.listItemText}>
              <Text style={styles.itemText}>Administration</Text>
            </View>
          </Link>
        
          
          <Link href={'../asdasas'} style={styles.listItem} >
            <View style={styles.listItemIcon}>
            <Ionicons name="arrow-undo-outline" size={24} color="white" />
            </View>
            <View style={styles.listItemText}>
              <Text style={styles.itemText}>Abmelden</Text>
            </View>
          </Link>
      </View>
      


     




      
     

      

     
      </ScrollView>
    </SafeAreaView>
    
      
   
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010137',
    paddingTop: 40
  
  },
  feedBody:{
    backgroundColor: '#282C37',
    flex: 1,

  },
  nav:{
    backgroundColor: '#00001E',
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 20,
    
  },
  emptyView:{
    width: "20%",
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  nonemptyView:{
    width: '60%',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'row'
  },
  nonemptyText:{
    width: '100%',
    textAlign: 'center',
    color: '#01A6FF',
    fontSize: 24,
    fontWeight: '500'
  },
  profileView:{
    width: '90%',
    marginHorizontal: '5%',
    marginTop: 40,
    backgroundColor: '#00001E',
    padding: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  prifleImgView:{
    width: "20%",
    padding: 10
  },
  prifleImgText:{
    width: "80%",
    padding: 4
  },
  round:{
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    height: 50,
    width: 50
  },
  text1:{
    paddingHorizontal: 11,
    color:'white',
    fontSize: 18,
    fontWeight: '500'
  },
  text2:{
    paddingHorizontal: 11,
    color: 'white'
  },
  profileImgText:{
    paddingVertical: 10
  },
  list:{
    width: '90%',
    marginHorizontal: '5%',
    flexDirection: 'column',
    marginTop: 30,
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 30
  },
  listHeader: {
    padding: 16,
    backgroundColor: '#00001E',
    
  },
  headerText:{
    color:"white"
  },
  listItem:{
    padding: 16,
    flexDirection: 'row',
    backgroundColor: '#00001E',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#282C37'
  },
  listItemIcon:{
    width: '10%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemText:{
    color:'white',
    paddingHorizontal: 6,
    fontSize: 18,
    fontWeight: '500',
  },
  menuIcon:{
    paddingRight: 14
  },
  sheet:{
    width: '50%',
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute', 
    backgroundColor: '#00001E', 

  },
  
})