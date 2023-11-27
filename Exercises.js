import React, { useState } from 'react';
import AppContext from './AppContext';

import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, Modal } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Exercises = ({ route, navigation }) => {
    const context = React.useContext(AppContext);

    const [activeCategory, setActiveCategory] = useState(null);
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);

    const buttons = [
      { title: 'Strength', icon: 'weight-lifter', color: '#00539C', onPress: () => handlePress('Strength') },
      { title: 'Core', icon: 'human-female-dance', color: 'green', onPress: () => handlePress('Core') },
      { title: 'Cardio', icon: 'cards-heart', color: 'red', onPress: () => handlePress('Cardio') },
      { title: 'Other', icon: 'information', color: '#808080', onPress: () => handlePress('Other') },
    ];

    const handlePress = (category, exercise) => {
      console.log(`category clicked: ${category}, exercise clicked: ${exercise}`);
      setSelectedExercise(exercise);
      //setModalVisible(true);
      setActiveCategory((prevCategory) => (prevCategory === category ? null : category));
    };
  
    const hideModal = () => {
      setModalVisible(false);
    };

    const renderCategoryContent = () => {
      switch (activeCategory) {
        case 'Strength':
          return (
            <>
              <Text style={styles.header}>Strength</Text>
              <Text style={styles.subHeader}>Building muscle!</Text>
              <Text style={styles.infoText}>1) Upper Body Push</Text>
              <Text style={styles.bulletText}>
                <TouchableOpacity onPress={() => handlePress('Strength', 'Bench Press')}>
                  <Text style={styles.bulletText}>  - Bench Press</Text>
                  <Image
                    source={{ uri: 'https://www.crossfit.com/wp-content/uploads/2019/05/01151551/Bench-Press-Collage.png' }}
                    style={styles.image}
                  />
                </TouchableOpacity>
              </Text>
              <Text style={styles.bulletText}>
                <TouchableOpacity onPress={() => handlePress('Strength', 'Push Up')}>
                  <Text style={styles.bulletText}>  - Push-Up</Text>
                  <Image
                    source={{ uri: 'https://media.istockphoto.com/id/1407656524/vector/man-doing-push-up-flat-vector-illustration-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=On5A0WoSDYrvhyyaM7g7IU2u4V746KChM7xsrw3_R5o=' }}
                    style={styles.image}
                  />
                </TouchableOpacity>
              </Text>
              <Text style={styles.bulletText}>
                <TouchableOpacity onPress={() => handlePress('Strength', 'Overhead Press')}>
                  <Text style={styles.bulletText}>  - Overhead Press</Text>
                  <Image
                    source={{ uri: 'https://experiencelife.lifetime.life/wp-content/uploads/2021/08/f2-overhead-press.jpg' }}
                    style={styles.image}
                  />
                </TouchableOpacity>
              </Text>
              <Text style={styles.bulletText}>
                <TouchableOpacity onPress={() => handlePress('Strength', 'Chest Fly')}>
                  <Text style={styles.bulletText}>  - Chest Fly</Text>
                  <Image
                    source={{ uri: 'https://coachedwell.com/blog/wp-content/uploads/2022/12/cable-chest-fly-2-770x515.png' }}
                    style={styles.image}
                  />
                </TouchableOpacity>
              </Text>
              <Text style={styles.bulletText}>
                <TouchableOpacity onPress={() => handlePress('Strength', 'Incline Bench Press')}>
                  <Text style={styles.bulletText}>  - Incline Bench Press</Text>
                  <Image
                    source={{ uri: 'https://static.strengthlevel.com/images/illustrations/incline-bench-press-1000x1000.jpg' }}
                    style={styles.image}
                  />
                </TouchableOpacity>
              </Text>
              <Text style={styles.bulletText}>
                <TouchableOpacity onPress={() => handlePress('Strength', 'Decline Bench Press')}>
                  <Text style={styles.bulletText}>  - Decline Bench Press</Text>
                  <Image
                    source={{ uri: 'https://static.strengthlevel.com/images/illustrations/decline-bench-press-1000x1000.jpg' }}
                    style={styles.image}
                  />
                </TouchableOpacity>
              </Text>
              <Text style={styles.infoText}>2) Upper Body Pull</Text>
              <Text style={styles.bulletText}>  - Seated Row</Text>
              <Image
                source={{ uri: 'https://s3assets.skimble.com/assets/1816213/image_iphone.jpg' }}
                style={styles.image}
              />
              <Text style={styles.bulletText}>  - Lateral Pulldown</Text>
              <Image
                source={{ uri: 'https://anabolicaliens.com/cdn/shop/articles/5f19b4eff633a10684ef6193_wide-grip-lat-pulldown-anabolic-aliens.png?v=1644918521' }}
                style={styles.image}
              />
              <Text style={styles.bulletText}>  - Chin-Up</Text>
              <Image
                source={{ uri: 'https://www.shutterstock.com/image-vector/man-doing-chin-exercise-flat-600nw-2074774666.jpg' }}
                style={styles.image}
              />
              <Text style={styles.bulletText}>  - Dumbbell Bent Over Row</Text>
              <Image
                source={{ uri: 'https://cdn-cccio.nitrocdn.com/sQAAylIpwgMYZgBLSXcMgCkUIbfIzHvb/assets/images/optimized/rev-b05b9eb/www.aleanlife.com/wp-content/uploads/2023/02/bent-over-dumbbell-row.jpg' }}
                style={styles.image}
              />
              <Text style={styles.infoText}>3) Lower Body Pull</Text>
              <Text style={styles.bulletText}>  - Deadlift</Text>
              <Image
                source={{ uri: 'https://www.inspireusafoundation.org/wp-content/uploads/2021/05/barbell-deadlift-1024x738.png' }}
                style={styles.image}
              />
              <Text style={styles.bulletText}>  - Romanian Deadlift</Text>
              <Image
                source={{ uri: 'https://i0.wp.com/physicalculturestudy.com/wp-content/uploads/2016/01/romaniandeadlift1.jpg?resize=563%2C331&ssl=1' }}
                style={styles.image}
              />
              <Text style={styles.bulletText}>  - Hip-Thrust</Text>
              <Image
                source={{ uri: 'https://static.strengthlevel.com/images/illustrations/hip-thrust-1000x1000.jpg' }}
                style={styles.image}
              />
              <Text style={styles.infoText}>4) Lower Body Push</Text>
              <Text style={styles.bulletText}>  - Squat/Split Squat</Text>
              <Image
                source={{ uri: 'https://enarahealth.com/wp-content/uploads/2022/03/PngItem_2810409-e1647565708516.png' }}
                style={styles.image}
              />
              <Text style={styles.bulletText}>  - Lunge</Text>
              <Image
                source={{ uri: 'https://www.spotebi.com/wp-content/uploads/2014/10/lunges-exercise-illustration.jpg' }}
                style={styles.image}
              />
              <Text style={styles.infoText}>5) Glute Bridge</Text>
              <Image
                source={{ uri: 'https://www.spotebi.com/wp-content/uploads/2015/01/glute-bridge-exercise-illustration.jpg' }}
                style={styles.image}
              />
              <Text style={styles.infoText}>6) Bent-Over Row</Text>
              <Image
                source={{ uri: 'https://kinxlearning.com/cdn/shop/articles/bent_over_db_row.png?v=1662329166' }}
                style={styles.image}
              />
              <Text style={styles.infoText}>7) Dumbbell Chopper</Text>
              <Image
                source={{ uri: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/07/wood-chop-1024x833.png' }}
                style={styles.image}
              />
              <Text style={styles.infoText}>8) Reverse Lunge</Text>
              <Image
                source={{ uri: 'https://www.spotebi.com/wp-content/uploads/2017/10/shoulder-squeeze-reverse-lunge-exercise-illustration-spotebi.jpg' }}
                style={styles.image}
              />
              <Text style={styles.infoText}>9) Hammer Curls</Text>
              <Image
                source={{ uri: 'https://static.strengthlevel.com/images/illustrations/hammer-curl-1000x1000.jpg' }}
                style={styles.image}
              />
              <Text style={styles.infoText}>10) T-Bar</Text>
              <Image
                source={{ uri: 'https://static.strengthlevel.com/images/illustrations/t-bar-row-1000x1000.jpg' }}
                style={styles.image}
              />
              <Text style={styles.infoText}>11) Bicep Curls</Text>
              <Image
                source={{ uri: 'https://s3assets.skimble.com/assets/2287282/image_iphone.jpg' }}
                style={styles.image}
              />
              <Text style={styles.infoText}>12) Tricep Extension</Text>
              <Text style={styles.bulletText}>  - Cable Rope</Text>
              <Image
                source={{ uri: 'https://fitnessvolt.com/wp-content/uploads/2023/09/Cable-Rope-Tricep-Extension.gif' }}
                style={styles.image}
              />
              <Text style={styles.bulletText}>  - Dumbbell</Text>
              <Image
                source={{ uri: 'https://static.strengthlevel.com/images/illustrations/seated-dumbbell-tricep-extension-1000x1000.jpg' }}
                style={styles.image}
              />
              <Text style={styles.infoText}>13) Wrist Curls</Text>
              <Image
                source={{ uri: 'https://cdn.shopify.com/s/files/1/0449/8453/3153/files/dumbbell_wrist_curls_muscles_worked_600x600.jpg?v=1693536778' }}
                style={styles.image}
              />
              <Text style={styles.infoText}>14) Barbell Bicep Curl</Text>
              <Image
                source={{ uri: 'https://static.strengthlevel.com/images/illustrations/barbell-curl-1000x1000.jpg' }}
                style={styles.image}
              />
              <Text style={styles.infoText}>15) Barbell Wrist Curl</Text>
              <Image
                source={{ uri: 'https://newlife.com.cy/wp-content/uploads/2019/11/01251301-Barbell-Wrist-Curl-II_Forearms_360.gif' }}
                style={styles.image}
              />
              <Text style={styles.infoText}>16) Dumbbell Lateral Raise</Text>
              <Image
                source={{ uri: 'https://static.strengthlevel.com/images/illustrations/dumbbell-lateral-raise-1000x1000.jpg' }}
                style={styles.image}
              />
            </>
          );
        case 'Core':
          return (
            <>
              <Text style={styles.header}>Core</Text>
              <Text style={styles.subHeader}>Hitting abdominals and lower back!</Text>
              <Text style={styles.infoText}>1) Russian Twists</Text>
              <Image
                source={{ uri: 'https://www.lyfta.app/thumbnails/43931201.jpg' }}
                style={styles.image}
              />
              <Text style={styles.infoText}>2) Plank</Text>
              <Image
                source={{ uri: 'https://www.spotebi.com/wp-content/uploads/2014/10/plank-exercise-illustration.jpg' }}
                style={styles.image}
              />
              <Text style={styles.infoText}>3) Ab Crunch</Text>
              <Image
                source={{ uri: 'https://static.strengthlevel.com/images/illustrations/machine-seated-crunch-1000x1000.jpg' }}
                style={styles.image}
              />
              <Text style={styles.infoText}>4) Bird Dog Exercise</Text>
              <Image
                source={{ uri: 'https://learntomovedotorg.files.wordpress.com/2014/12/exercise-back-birddog.jpg' }}
                style={styles.image}
              />
              <Text style={styles.infoText}>5) Leg Raises/Hanging Leg Raises</Text>
              <Image
                source={{ uri: 'https://static.strengthlevel.com/images/illustrations/lying-leg-raise-1000x1000.jpg' }}
                style={styles.image}
              />
              <Text style={styles.infoText}>6) Pull-Up</Text>
              <Image
                source={{ uri: 'https://static.strengthlevel.com/images/illustrations/pull-ups-1000x1000.jpg' }}
                style={styles.image}
              />
              <Text style={styles.infoText}>7) Push-Up</Text>
              <Image
                source={{ uri: 'https://media.istockphoto.com/id/1407656524/vector/man-doing-push-up-flat-vector-illustration-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=On5A0WoSDYrvhyyaM7g7IU2u4V746KChM7xsrw3_R5o=' }}
                style={styles.image}
              />
              <Text style={styles.infoText}>8) Renegade Row</Text>
              <Image
                source={{ uri: 'https://static.strengthlevel.com/images/illustrations/renegade-row-1000x1000.jpg' }}
                style={styles.image}
              />
            </>
          );
        case 'Cardio':
          return (
            <>
              <Text style={styles.header}>Cardio</Text>
              <Text style={styles.subHeader}>Improving cardiovascular health and endurance!</Text>
              <Text style={styles.infoText}>1) Walking/Running</Text>
              <Text style={styles.bulletText}>  - Regular Walking/Running</Text>
              <Image
                source={{ uri: 'https://t3.ftcdn.net/jpg/02/55/60/40/360_F_255604050_JDtO0cm34RxKvrnXb8zS0rnZgZWpCg2M.jpg' }}
                style={styles.image}
              />
              <Text style={styles.bulletText}>  - Treadmill</Text>
              <Image
                source={{ uri: 'https://m.media-amazon.com/images/I/71Oy-vLGCoL._AC_UF1000,1000_QL80_.jpg' }}
                style={styles.image}
              />
              <Text style={styles.bulletText}>  - Elliptical</Text>
              <Image
                source={{ uri: 'https://ak1.ostkcdn.com/images/products/is/images/direct/24ec318feb18ff8e4f6e507ca2f4e950fc0e0a70/Elliptical-Machine-2-in-1-Exercise-Bike-Fitness-Home-Gym--Plasma-Fit.jpg' }}
                style={styles.image}
              />
              <Text style={styles.bulletText}>  - Stairmaster</Text>
              <Image
                source={{ uri: 'https://cdn11.bigcommerce.com/s-qtce6r5p/images/stencil/1280x1280/products/5454/25940/8GX-LCD__04861.1671051860.png?c=3' }}
                style={styles.image}
              />
              <Text style={styles.infoText}>2) Cycling</Text>
              <Image
                source={{ uri: 'https://i5.walmartimages.com/seo/Costway-Exercise-Bicycle-Indoor-Bike-Cycling-Cardio-Adjustable-Gym-Workout-Fitness-Home_8695f16b-9668-4249-8c5c-6e47d3cdff2a_1.12570da470aa89bf25e877bbf936a791.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF' }}
                style={styles.image}
              />
              <Text style={styles.infoText}>3) Swimming</Text>
              <Image
                source={{ uri: 'https://www.cdc.gov/healthywater/swimming/images/GettyImages-1315223556-500px.jpg?_=47053' }}
                style={styles.image}
              />
              <Text style={styles.infoText}>4) Jumping Jacks</Text>
              <Image
                source={{ uri: 'https://www.spotebi.com/wp-content/uploads/2014/10/jumping-jacks-exercise-illustration.jpg' }}
                style={styles.image}
              />
              <Text style={styles.infoText}>5) Jump Rope</Text>
              <Image
                source={{ uri: 'https://www.realsimple.com/thmb/LqkRwhYXpPBcmq5rnYIYJrX5SeI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/basic-jump-illo2-1-d4bcbd6792b3491f8f90fe26cb0a956c.jpg' }}
                style={styles.image}
              />
              <Text style={styles.infoText}>6) Circuit Training</Text>
              <Image
                source={{ uri: 'https://mammothmemory.net/images/user/base/Sports%20Science/remember-circuit-training-02-in-sports-science.d1cd0b9.jpg' }}
                style={styles.image}
              />
              <Text style={styles.infoText}>7) Rowing Machine</Text>
              <Image
                source={{ uri: 'https://shop.concept2.com/1623-thickbox_default/model-d-with-pm5.jpg' }}
                style={styles.image}
              />
              <Text style={styles.infoText}>8) Lunges</Text>
              <Image
                source={{ uri: 'https://www.spotebi.com/wp-content/uploads/2014/10/lunges-exercise-illustration.jpg' }}
                style={styles.image}
              />
            </>
          );
        case 'Other':
          return (
            <>
              <Text style={styles.header}>Other</Text>
              <Text style={styles.subHeader}>If strength, core, and cardio ain't your cup of tea, try these bruhaps?</Text>
              <Text style={styles.infoText}>1) Yoga</Text>
              <Image
                source={{ uri: 'https://static.vecteezy.com/system/resources/previews/008/251/852/original/woman-in-yoga-poses-illustration-in-cartoon-style-vector.jpg' }}
                style={styles.image}
              />
              <Text style={styles.infoText}>2) Pilates</Text>
              <Image
                source={{ uri: 'https://static.vecteezy.com/system/resources/previews/014/351/859/original/pilates-flexible-icon-cartoon-style-vector.jpg' }}
                style={styles.image}
              />
            </>
          );
        default:
          return null;
      }
    };

    const getImageForExercise = (exercise) => {
      const exerciseImages = {
        'Bench Press': 'https://static.strengthlevel.com/images/illustrations/bench-press-1000x1000.jpg',
      };
      return exerciseImages[exercise];
    };


    return (
      <PaperProvider>
            <SafeAreaProvider>
              <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Exercises</Text>
                    <View style={styles.inputContainer}>
                        <View style={styles.buttonWrapper}>
                            {buttons.map((button, index) => (
                              <MCIcons.Button
                                key={index}
                                name={button.icon}
                                size={55}
                                color={button.color}
                                backgroundColor={activeCategory === button.title ? '#A9A9A9' : 'transparent'}
                                onPress={button.onPress}
                                style={styles.buttonContainer}
                              >
                                {button.title}
                              </MCIcons.Button>
                            ))}
                        </View>
                        {renderCategoryContent()}
                    </View>
                </View>
              </ScrollView>
            </SafeAreaProvider>
        </PaperProvider>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'normal',
    alignItems: 'center',
    backgroundColor: '#ACB6E5',
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 7,
    color: '#3344FF',
  },
  header: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  buttonContainer: {
    width: '50%',
    aspectRatio: 1,
  },
  buttonWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  buttonContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonIcon: {
    width: '70%',
    height: '70%',
  },
  image: {
    width: 130,
    height: 90,
    resizeMode: 'cover',
  },
  subHeader: {
    fontSize: 18,
    color: '#333333',
    marginBottom: 11,
  },
  infoText: {
    fontSize: 16,
    color: '#333333',
  },
  bulletText: {
    fontSize: 14,
    color: '#333333',
    marginLeft: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Exercises;