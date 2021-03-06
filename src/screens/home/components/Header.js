import React, {useState} from 'react';
import {StyleSheet, Text, View, Switch, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Logo from '../../../assets/image/logo.png';

const Header = () => {
  const navigation = useNavigation();

  const handleMoveSetting = () => {
    navigation.navigate('Setting');
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.imageStyle} />
      <Pressable
        style={{width: 60, flex: 1, alignItems: 'flex-end'}}
        onPress={handleMoveSetting}>
        <Image source={require('../../../assets/icons/options.png')} />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#56B1D3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  imageStyle: {
    height: 20,
    width: 150,
  },
});
