import React, { useState } from 'react';
import AppContext from './AppContext';

import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, FlatList, Image, Linking } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const ExpandableListItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={toggleExpand}
        style={styles.itemTouchable}
      >
        <View style={styles.itemContentContainer}>
          <Text style={styles.itemTitle}>{item.title} </Text>
          {item.icon && <MaterialIcons name={item.icon} size={30} color={item.color} />}
        </View>
      </TouchableOpacity>
      {expanded && (
        <Text style={styles.itemContent}>{item.content}</Text>
      )}
      {expanded && item.url && (
        <TouchableOpacity onPress={() => handleLinkPress(item.url)}>
          <Text style={styles.itemContent}>1) Healthy Dinners</Text>
        </TouchableOpacity>
      )}
      {expanded && item.url2 && (
        <TouchableOpacity onPress={() => handleLinkPress(item.url2)}>
          <Text style={styles.itemContent}>2) Healthy Recipes</Text>
        </TouchableOpacity>
      )}
      {expanded && item.url3 && (
        <TouchableOpacity onPress={() => handleLinkPress(item.url3)}>
          <Text style={styles.itemContent}>3) Meal Prep for Muscle Building</Text>
        </TouchableOpacity>
      )}
      {expanded && item.content2 && (
        <Text style={styles.itemContent}>{item.content2}</Text>
      )}
      <View style={styles.itemContentContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {expanded && item.image && <Image source={item.image} style={styles.itemImage} />}
          {expanded && item.image2 && <Image source={item.image2} style={styles.itemImage} />}
        </View>
      </View>
    </View>
  );
};

const ExpandableList = ({ data }) => {
  const renderItem = ({ item }) => (
    <ExpandableListItem item={item} />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const handleLinkPress = (url) => {
  Linking.openURL(url);
};


const Nutrition = ({ route, navigation }) => {
    const context = React.useContext(AppContext);

    const data = [
      {
        id: 1,
        title: 'Best Foods',
        content:
        '- Chicken satay salad\n- Broccoli pesto & pancetta pasta\n- Chipotle\n- Greek Yogurt\n- Bananas\n- Salmon\n- Grilled Chicken\n- Vegetables\n- Water (duh)\n- Buffalo Chicken Pasta Salad',
        image: require('./assets/image/bestfood.jpg'),
        image2: require('./assets/image/buffalo-pasta.jpg'),
        icon: 'restaurant-menu',
        color: '#090',
      },
      {
        id: 2,
        title: 'No-Go Foods',
        content:
          '- High Sugar Foods\n- Red meat and processed meats\n- Any Fast Food Chain',
        image: require('./assets/image/junkfood.jpg'),
        image2: require('./assets/image/processedmeats.jpg'),
        icon: 'report',
        color: '#900',
      },
      {
        id: 3,
        title: 'Recipes',
        content:
          '- Tuna Burgers with Smashed Avocado and Tomato\n\t\t- 4 (5-1/2) oz cans of tuna\n\t\t- 1/2 cup seasoned bread crumbs\n\t\t- 2 large eggs\n\t\t- 2 Tbsp finely chopped shallots or red onion\n\t\t- 2 tsp dried dill\n\t\t- 1 Tbsp canola oil\n\t\t- 1 pitted avocado, chopped\n\t\t- 2 small tomatos, chopped\n\t\t- 4 (2-oz) whole-grain sandwich buns',
        content2:
          '- Buffalo Chicken Pasta Salad\n\t\t- 8 ounces rotini pasta\n\t\t- 1.5 cups chicken shredded\n\t\t- 1/3 cup red pepper\n\t\t- 1/3 cup celery chopped\n\t\t- 1/2 cup buffalo sauce\n\t\t- 1/2 cup ranch dressing\n\t\t- 2 Tbsp mayonnaise\n\t\t- 1/4 teaspon garlic powder\n\t\t- 1/8 teaspoon ground black pepper\n\t\t- 1 cup mozzarella cheese\n\t\t- 2 Tbsp scallions',
        image: require('./assets/image/tunasmash.jpg'),
        image2: require('./assets/image/buffalo-pasta.jpg'),
        icon: 'set-meal',
        color: '#FA0',
      },
      {
        id: 4,
        title: 'Cheat Day',
        content:
        '- Pancakes\n- Ice Cream and Milkshakes\n- Chicken Wings or Fried Chicken\n- Junk Food\n- Any Fast Food Chain',
        content2:
          'anything you crave or desire.........',
        image: require('./assets/image/cheatday.jpg'),
        image2: require('./assets/image/icecream.jpg'),
        icon: 'restaurant',
        color: '#802',
      },
      {
        id: 5,
        title: 'Help?',
        content:
          'Visit these websites for more information!',
        content2:
          'More will be added in the future!',
        url: 'https://www.delicious.com.au/recipes/collections/gallery/60-healthy-dinners-you-can-cook-in-30-minutes/1vo4q819',
        url2: 'https://www.bbcgoodfood.com/recipes/collection/healthy-recipes-for-weight-loss',
        url3: 'https://www.myprotein.com/thezone/recipe/meal-prep-recipes-muscle-building-fat-loss/',
        icon: 'search',
        color: '#0F0',
      },
    ];


    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Nutrition</Text>
        <ExpandableList data={data}/>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'normal',
      backgroundColor: '#ACB6E5',
      paddingHorizontal: 8,
      paddingVertical: 25,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 10,
      color: '#3344FF',
    },
    itemContainer: { 
      marginBottom: 15, 
      padding: 10, 
      backgroundColor: 'white', 
      borderRadius: 10, 
      elevation: 3, 
    }, 
    itemTouchable: { 
      borderRadius: 10, 
      justifyContent: 'center',
      alignItems: 'center',
    }, 
    itemTitle: { 
      fontSize: 18, 
      fontWeight: 'bold', 
      color: '#333',
    }, 
    itemContent: { 
      marginTop: 10,
      fontSize: 16,
      color: "#000000",
      marginBottom: 10,
    },
    itemContentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    itemImage: {
      width: 150,
      height: 100,
      justifyContent: 'space-between',
      marginTop: 3,
      borderRadius: 5,
    },
  });

export default Nutrition;